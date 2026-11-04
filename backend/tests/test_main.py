from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def test_get_cases_status_code():
    """판례 목록 API가 정상적으로 응답하는지 테스트"""
    response = client.get("/api/cases")

    assert response.status_code == 200

def test_get_cases_returns_list():
    """판례 목록 API가 리스트 형태의 데이터를 반환하는지 테스트"""
    response = client.get("/api/cases")

    data = response.json()

    assert isinstance(data, list)
    assert len(data) > 0

def test_get_cases_returns_correct_case():
    """특정 판례의 데이터가 올바르게 반환되는지 테스트"""
    response = client.get("/api/cases")

    data = response.json()

    assert data[0]["id"] == 1
    assert data[0]["case_number"] == "2017다242409"
    assert data[0]["title"] == "과세처분의 당연무효 여부"
