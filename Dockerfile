# 1. Node.js 환경 설정
FROM node:20 AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. corepack 및 pnpm 설치
RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

# 4. 환경변수 주입
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# 5. 필수 파일 복사
COPY package.json pnpm-lock.yaml ./

# 6. 의존성 설치 (pnpm 사용)
RUN pnpm install --frozen-lockfile

# 7. 소스 코드 복사 및 빌드
COPY . .
RUN pnpm build

# 8. PM2 설치 및 상태 확인
RUN npm install pm2 -g && pm2 --version

# 9. PM2 프로세스 시작
RUN pm2 start npm --name "techBlogHub-main-frontend" -- run start

# 10. 4000 포트 열기
EXPOSE 4000

# 11. PM2 실행
CMD ["pm2-runtime", "start", "npm", "--name", "techBlogHub-main-frontend", "--", "start", "--", "--port", "4000"]
