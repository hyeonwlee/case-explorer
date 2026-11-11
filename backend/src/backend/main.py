from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# 프론트엔드 서버의 주소
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 임시 판례 데이터
cases = [
    {
        "id": 1,
        "case_number": "2017다242409",
        "title": "과세처분의 당연무효 여부",
        "court": "대법원 전원합의체",
        "date": "2018-07-19",
        "category": "행정법",
        "summary": "과세처분의 하자가 당연무효 사유에 해당하는지가 문제 된 판결",
        "keywords": ["과세처분", "당연무효", "중대·명백"]
    }
]


@app.get("/")
def read_root():
    return {"message": "Hello, Case Explorer!"}

# 판례 목록 조회 API
@app.get("/api/cases")
def get_cases():
    return cases
