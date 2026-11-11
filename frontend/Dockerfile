# Build stage
FROM node:24-bookworm-slim AS build

WORKDIR /app

# 의존성 설정 파일 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm ci

# 프론트엔드 소스 복사
COPY . .

# React 빌드
RUN npm run build


# Runtime stage
FROM nginx:1.28-alpine AS runtime

# 빌드 결과물 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
