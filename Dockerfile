FROM hub.docker.target.com/node:18-alpine as builder
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare
RUN pnpm install
RUN pnpm build

FROM hub.docker.target.com/node:18-alpine as runner 
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENTRYPOINT ["node", "server.js"]