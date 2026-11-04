import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCases() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/cases"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        setCases(data);

      } catch (error) {
        console.error("판례 조회 실패:", error);
        setError("판례 목록을 불러오지 못했습니다.");

      } finally {
        setIsLoading(false);
      }
    }

    fetchCases();
  }, []);

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">CASE EXPLORER</p>
        <h1>판례 탐색</h1>
        <p className="description">
          법원의 판단을 판례를 통해 살펴보세요.
        </p>
      </header>

      <section className="case-section">
        <div className="section-header">
          <h2>판례 목록</h2>
          <span>{cases.length}건</span>
        </div>

        {isLoading && (
          <p className="status-message">
            판례를 불러오는 중입니다...
          </p>
        )}

        {error && (
          <p className="error-message">{error}</p>
        )}

        {!isLoading && !error && cases.length === 0 && (
          <p className="status-message">
            등록된 판례가 없습니다.
          </p>
        )}

        {!isLoading && !error && cases.length > 0 && (
          <div className="case-list">
            {cases.map((caseItem) => (
              <article
                className="case-card"
                key={caseItem.id}
              >
                <div className="case-meta">
                  <span>{caseItem.category}</span>
                  <span>{caseItem.date}</span>
                </div>

                <h3>{caseItem.title}</h3>

                <p className="case-summary">
                  {caseItem.summary}
                </p>

                <div className="case-info">
                  <span>사건번호</span>
                  <strong>{caseItem.case_number}</strong>
                </div>

                <div className="case-info">
                  <span>법원</span>
                  <strong>{caseItem.court}</strong>
                </div>

                <div className="keywords">
                  {caseItem.keywords?.map((keyword) => (
                    <span key={`${caseItem.id}-${keyword}`}>
                      #{keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
