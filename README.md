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