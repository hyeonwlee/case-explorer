### 261104
- **실행 명령어**
    - 백엔드  
        서버 주소: http://127.0.0.1:8000
        ```
        cd backend
        uv run fastapi dev main.py
        ```
    - 프론트엔드  
        기본 접속 주소: http://localhost:5173
        ```
        cd frontend
        npm run dev
        ```

- **테스트**
    - 백엔드 테스트는 pytest와 FastAPI Client를 사용한다.
        ```
        cd backend
        uv run pytest
        ```
    - 판례 목록 API 응답 상태 코드, 반환 데이터의 자료형, 판례 데이터의 정확성에 대한 테스트 세 가지를 모두 성공했다.

- **수행 내역**
    - uv로 백엔드 프로젝트 초기화
    - FastAPI 설치 및 Hello World 구현
    - 판례 목록 반환 API 구현
    - pytest 및 TestClient를 이용한 테스트 작성
    - Vite + React 프로젝트 초기화
    - 프론트엔드와 백엔드 연결 및 CORS 설정
    - React에서 판례 데이터 호출
    - 판례 목록 화면 및 CSS 구현
    - 서버 실행 명령과 테스트 명령 기록

---

### 261111
- **실행 명령어**
    - 전체 애플리케이션 실행 (접속 주소: http://localhost:8080): 
        `docker compose up --build -d`
    - 컨테이너 상태 확인: 
        `docker compose ps`
    - 컨테이너 로그 확인: 
        `docker compose logs -f`
    - 컨테이너 종료: 
        `docker compose down`

- **테스트**
    - Backend 및 Frontend Docker 이미지 빌드 성공
    - Backend 컨테이너 단독 실행 및 API 응답 확인
    - Docker Compose를 이용한 Frontend와 Backend 통합 실행 확인
    - Nginx를 통한 API 요청 전달 및 판례 목록 조회 확인

- **수행 내역**
    - Backend CLI 실행 명령어 등록 및 패키징 설정
    - Backend 멀티 스테이지 Dockerfile 작성
    - Frontend 멀티 스테이지 Dockerfile 작성
    - 각 애플리케이션의 .dockerignore 작성
    - Nginx를 이용한 정적 파일 제공 및 API 프록시 설정
    - Docker Compose를 이용한 Frontend와 Backend 컨테이너 통합
    - 프론트엔드 API 요청 경로 수정 및 Docker 환경에서 통합 테스트