// LessonDetail.jsx
// Tailwind-based lesson detail view — replaces the old Bootstrap version.

export default function LessonDetail({ lesson }) {
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <span className="text-5xl mb-4">📖</span>
        <p className="font-khmer text-sm">
          សូមជ្រើសរើសមេរៀនណាមួយពីបញ្ជីខាងឆ្វេង ដើម្បីចាប់ផ្តើមសិក្សា
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6 flex-1 max-w-3xl">

      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-2">
          {lesson.tag || 'Grammar Module'}
        </span>
        <h1 className="text-2xl font-black text-slate-800">{lesson.title}</h1>
        <h3 className="text-lg font-bold text-indigo-600 font-khmer">{lesson.khmerTitle}</h3>
      </div>

      {/* Formula */}
      {lesson.formula && (
        <div className="bg-slate-900 text-amber-300 p-4 rounded-xl">
          <span className="text-xs uppercase text-slate-400 block font-semibold mb-1">
            ⚙️ Formula / Structure (រូបមន្ត)
          </span>
          <code className="text-lg font-mono font-bold">{lesson.formula}</code>
        </div>
      )}

      {/* Usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
          <h4 className="font-bold text-blue-900 text-sm mb-1">🇬🇧 English Explanation</h4>
          <p className="text-slate-700 text-sm leading-relaxed">{lesson.usageEn}</p>
        </div>
        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
          <h4 className="font-bold text-emerald-900 text-sm mb-1 font-khmer">🇰🇭 ពន្យល់ជាភាសាខ្មែរ</h4>
          <p className="text-slate-700 text-sm leading-relaxed font-khmer">{lesson.usageKm}</p>
        </div>
      </div>

      {/* Use Cases */}
      {lesson.useCases && lesson.useCases.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-3">📌 Detailed Use Cases (ការប្រើប្រាស់លម្អិត)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lesson.useCases.map((uc, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 border-t-4 border-t-sky-400">
                <h6 className="font-bold text-indigo-700 text-xs mb-1">{uc.title}</h6>
                <p className="text-slate-500 text-xs mb-2">{uc.desc}</p>
                <div className="bg-indigo-50 p-2 rounded text-xs text-slate-800 italic">
                  &ldquo;{uc.example}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Examples */}
      {lesson.examples && lesson.examples.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-slate-800 mb-3">💬 Examples (ឧទាហរណ៍)</h4>
          <ul className="space-y-3">
            {lesson.examples.map((ex, idx) => (
              <li key={idx} className="p-3 bg-indigo-50/30 rounded-lg border border-indigo-100">
                <p className="font-semibold text-slate-800 text-sm">• {ex.en}</p>
                <p className="text-xs text-slate-600 font-khmer mt-1 pl-3">{ex.km}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
