FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN next build

# 빌드용과 실행용 분리
FROM node:20-alpine AS runner

WORKDIR /app

# 프로덕션용 패키지만 복사
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./next
COPY package.json ./

RUN npm install pm2 -g

EXPOSE 4000

CMD ["pm2-runtime", "start", "npm", "--name", "techBlogHub-main-frontend", "--", "start", "--", "--port", "4000"]
