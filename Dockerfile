# 1. Node.js 환경 설정
FROM node:20 AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. corepack 및 pnpm 설치
RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

# 4. 필수 파일 복사
COPY package.json pnpm-lock.yaml ./

# 5. 의존성 설치 (pnpm 사용)
RUN pnpm install --frozen-lockfile

# 6. 소스 코드 복사 및 빌드
COPY . .
RUN pnpm build

# 7. PM2 설치 및 상태 확인
RUN npm install pm2 -g && pm2 --version

# 8. PM2 프로세스 시작
RUN pm2 start npm --name "techBlogHub-main-frontend" -- run start

# 9. 4000 포트 열기
EXPOSE 4000

# 10. PM2 실행
CMD ["pm2-runtime", "start", "npm", "--name", "techBlogHub-main-frontend", "--", "start", "--", "--port", "4000"]
