import { useState } from 'react';

export default function PracticeQuiz({ questions = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All Modules (ទាំងអស់)' },
    { id: 'Present', label: 'Present Tenses' },
    { id: 'Past', label: 'Past Tenses' },
    { id: 'Future', label: 'Future Tenses' },
    { id: 'Grammar', label: 'Grammar Essentials' },
    { id: 'Writing', label: 'Writing Skills' }
  ];

  const filteredQuestions = selectedCategory === 'all'
    ? questions
    : questions.filter((q) => q.lessonTag === selectedCategory);

  const getQuestionId = (q, index) => (q.id !== undefined ? q.id : `q-${index}`);

  const handleSelect = (qId, optionIndex) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach((q, index) => {
      const qId = getQuestionId(q, index);
      if (selectedAnswers[qId] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">✏️ Grammar Practice Quiz</h2>
          <p className="text-xs text-slate-500 font-khmer">លំហាត់អនុវត្តកាលភាសាអង់គ្លេស និងវេយ្យាករណ៍សម្រាប់សិស្ស</p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full w-fit">
          {filteredQuestions.length} Questions
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setSubmitted(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredQuestions.map((q, qIndex) => {
          const qId = getQuestionId(q, qIndex);
          const isCorrect = selectedAnswers[qId] === q.correct;

          return (
            <div key={qId} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-slate-800 text-sm">
                  {qIndex + 1}. {q.question}
                </p>
                {q.lessonTitle && (
                  <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {q.lessonTitle}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIndex) => {
                  const isSelected = selectedAnswers[qId] === optIndex;
                  let btnClass = "border-slate-200 bg-white hover:bg-slate-100 text-slate-700";

                  if (isSelected) {
                    btnClass = "bg-indigo-600 text-white border-indigo-600";
                  }

                  if (submitted) {
                    if (optIndex === q.correct) {
                      btnClass = "bg-emerald-600 text-white border-emerald-600 font-bold";
                    } else if (isSelected && !isCorrect) {
                      btnClass = "bg-rose-600 text-white border-rose-600";
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleSelect(qId, optIndex)}
                      className={`p-2.5 text-left rounded-lg border text-sm transition cursor-pointer ${btnClass}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <p className="text-xs text-slate-600 bg-white p-2.5 rounded border border-slate-200 font-khmer">
                  💡 <strong>ពន្យល់ (Explanation):</strong> {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-sm transition text-sm cursor-pointer"
          >
            Submit Answers (បញ្ជូនចម្លើយ)
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-indigo-700">
              Score: {calculateScore()} / {filteredQuestions.length}
            </span>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedAnswers({});
              }}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-sm font-semibold transition cursor-pointer"
            >
              Retry Quiz (ធ្វើម្តងទៀត)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}