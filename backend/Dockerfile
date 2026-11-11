# 의존성과 애플리케이션 설치
FROM python:3.13-slim-bookworm AS build

# uv 실행 파일 복사
COPY --from=ghcr.io/astral-sh/uv:0.13.4 /uv /bin/uv

WORKDIR /app

# Python 자동 다운로드 방지
ENV UV_PYTHON_DOWNLOADS=0

# 의존성 설정 파일 먼저 복사
COPY pyproject.toml uv.lock ./

# 외부 의존성 설치
RUN uv sync --locked --no-dev --no-install-project

# 애플리케이션 소스 복사
COPY src/ src/

# 프로젝트 자체 설치
RUN uv sync --locked --no-dev --no-editable


# 실제 서버 실행 환경
FROM python:3.13-slim-bookworm AS runtime

WORKDIR /app

# 실행 환경 설정
ENV PATH="/app/.venv/bin:$PATH" \
    PYTHONUNBUFFERED=1

# Build stage에서 만들어진 가상 환경만 복사
COPY --from=build /app/.venv /app/.venv

# 관리자 권한 없이 실행할 사용자 생성
RUN useradd --create-home app

USER app

# 서버 포트
EXPOSE 8000

# 컨테이너 시작 명령
CMD ["backend", "--host", "0.0.0.0", "--port", "8000"]
