FROM hub.docker.target.com/node:20.11.1-alpine as builder

ENV NEXT_TELEMETRY_DISABLED=1 RUNTIME_VERSION=v2.4.3

WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare
RUN CI=true pnpm install

RUN NODE_ENV=production pnpm build

FROM hub.docker.target.com/node:20.11.1-alpine as runner 

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 RUNTIME_VERSION=v2.4.3

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ADD "https://binrepo.target.com/artifactory/platform/runtime-connector/${RUNTIME_VERSION}/runtime-connector-linux-amd64-${RUNTIME_VERSION}.tgz" /
RUN tar xvzf /runtime-connector-linux-amd64-${RUNTIME_VERSION}.tgz -C /

EXPOSE 3000

ENTRYPOINT ["/runtime-connector", "--", "node", "server.js"]
