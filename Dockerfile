FROM hub.docker.target.com/node:18-alpine as builder
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare
RUN pnpm install

RUN NEXT_TELEMETRY_DISABLED=1 pnpm build

FROM hub.docker.target.com/node:18-alpine as runner 
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ADD "https://binrepo.target.com/artifactory/platform/runtime-connector/${RUNTIME_VERSION}/runtime-connector-linux-amd64-${RUNTIME_VERSION}.tgz" /
RUN tar xvzf /runtime-connector-linux-amd64-${RUNTIME_VERSION}.tgz -C /

EXPOSE 3000

ENTRYPOINT ["/runtime-connector", "--", "node", "server.js"]
