FROM node:19-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/local/portal-gcti

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install

FROM node:19-alpine AS builder
WORKDIR /usr/local/portal-gcti
COPY --from=deps /usr/local/portal-gcti/node_modules ./node_modules
COPY . .

# Caso seja o ambiente de homo, basta mudar para build:homo
RUN npm run build

FROM node:19-alpine AS runner
WORKDIR /usr/local/portal-gcti

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/local/portal-gcti/public ./public
COPY --from=builder /usr/local/portal-gcti/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /usr/local/portal-gcti/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/local/portal-gcti/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]