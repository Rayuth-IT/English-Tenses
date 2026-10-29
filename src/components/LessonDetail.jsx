import React from 'react';

const LessonDetail = ({ lesson }) => {
  if (!lesson) {
    return (
      <div className="container py-5 text-center text-muted">
        <h4>សូមជ្រើសរើសមេរៀនណាមួយពីបញ្ជីខាងឆ្វេង ដើម្បីចាប់ផ្តើមសិក្សា</h4>
      </div>
    );
  }

  return (
    <div className="container py-4 px-3 px-md-5" style={{ maxWidth: '900px' }}>
      
      {/* 🏷️ Header Section with Badge & Titles */}
      <div className="mb-4 pb-3 border-bottom border-2 border-primary">
        <span className="badge bg-primary fs-6 px-3 py-2 mb-2 shadow-sm">
          {lesson.tag || "Grammar Module"}
        </span>
        <h1 className="fw-bold text-dark display-6 mb-1">{lesson.title}</h1>
        <h4 className="text-secondary fw-normal">{lesson.khmerTitle}</h4>
      </div>

      {/* 💡 Usage & Explanation Box */}
      <div className="card shadow-sm border-0 mb-4 bg-light rounded-4">
        <div className="card-body p-4">
          <h5 className="text-primary fw-bold mb-3">📖 គោលបំណង និងការប្រើប្រាស់ (Usage)</h5>
          <p className="lead fs-6 text-dark mb-2">{lesson.usageEn}</p>
          <p className="text-muted fs-6 mb-0">{lesson.usageKm}</p>
        </div>
      </div>

      {/* ⚡ Formula & Structure Box (Highlighted Important Words) */}
      {lesson.formula && (
        <div className="card border-start border-4 border-success shadow-sm mb-4 rounded-3 bg-white">
          <div className="card-body p-3">
            <span className="text-uppercase text-success fw-bold fs-7 d-block mb-1">
              ⚙️ សន្និដ្ឋានទម្រង់វ៉ាកយសព្ទ (Formula Structure)
            </span>
            <code className="fs-5 text-dark fw-bold bg-light px-3 py-2 rounded d-block">
              {lesson.formula}
            </code>
          </div>
        </div>
      )}

      {/* 📊 Adverbs of Frequency Chart (If Available) */}
      {lesson.frequencyChart && (
        <div className="card shadow-sm my-4 border-0 rounded-4 overflow-hidden">
          <div className="card-header bg-dark text-white fw-bold py-3">
            📊 តារាងកម្រិតញឹកញាប់ (Adverbs of Frequency Chart)
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" style={{ width: '15%' }}>Frequency</th>
                  <th scope="col" style={{ width: '30%' }}>Adverb</th>
                  <th scope="col">Example Sentence</th>
                </tr>
              </thead>
              <tbody>
                {lesson.frequencyChart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span className={`badge ${
                        item.percentage === '100%' ? 'bg-success' :
                        item.percentage === '0%' ? 'bg-danger' : 'bg-info text-dark'
                      } fs-6 px-2 py-1`}>
                        {item.percentage}
                      </span>
                    </td>
                    <td className="fw-bold text-primary text-decoration-underline">{item.adverb}</td>
                    <td>
                      <div className="fw-medium text-dark">{item.example}</div>
                      <small className="text-muted">{item.km}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 📝 Detailed Use Cases (At least 3-4 usages if available) */}
      {lesson.useCases && lesson.useCases.length > 0 && (
        <div className="mb-4">
          <h4 className="fw-bold text-dark mb-3">📌 ការប្រើប្រាស់លម្អិត (Detailed Use Cases)</h4>
          <div className="row g-3">
            {lesson.useCases.map((uc, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="card h-100  shadow-sm p-3 bg-white rounded-3 border-top border-3 border-info">
                  <h6 className="fw-bold text-primary">{uc.title}</h6>
                  <p className="text-muted small mb-2">{uc.desc}</p>
                  <div className="bg-light p-2 rounded text-dark small fst-italic">
                    "{uc.example}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✨ Examples Section with Underlined Keywords */}
      {lesson.examples && lesson.examples.length > 0 && (
        <div className="card border-0 shadow-sm rounded-4 mb-4 bg-white">
          <div className="card-body p-4">
            <h4 className="fw-bold text-dark mb-3">💬 ឧទាហរណ៍ជាក់ស្តែង (Examples)</h4>
            <ul className="list-group list-group-flush">
              {lesson.examples.map((ex, idx) => (
                <li key={idx} className="list-group-item py-3 border-light">
                  <div className="fw-bold text-dark fs-6">
                    • <span className="text-decoration-underline text-primary">{ex.en}</span>
                  </div>
                  <div className="text-secondary ps-3 mt-1">{ex.km}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default LessonDetail;