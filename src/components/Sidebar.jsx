
export default function Sidebar({ tenses, selectedId, onSelectTense }) {
  const groups = [
    { name: "Present Tenses (បច្ចុប្បន្នកាល)", tag: "Present" },
    { name: "Past Tenses (អតីតកាល)", tag: "Past" },
    { name: "Future Tenses (អនាគតកាល)", tag: "Future" },
    { name: "Grammar Essentials (មូលដ្ឋានគ្រឹះវ៉ាកយសព្ទ)", tag: "Grammar" },
    { name: "Writing Skills (ជំនាញតែងសេចក្តី)", tag: "Writing" }
  ];

  return (
    <aside className="w-full md:w-80 bg-white rounded-xl shadow-sm border border-slate-200 p-4 h-fit">
      <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
        📌 Course Modules (ជ្រើសរើសមេរៀន)
      </h2>

      <div className="space-y-6">
        {groups.map((group) => {
          const items = tenses.filter((t) => t.tag === group.tag);
          if (items.length === 0) return null;

          return (
            <div key={group.tag}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {group.name}
              </h3>
              <div className="space-y-1">
                {items.map((tense) => {
                  const isSelected = tense.id === selectedId;
                  return (
                    <button
                      key={tense.id}
                      onClick={() => onSelectTense(tense.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition text-sm font-medium flex items-center justify-between ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span>{tense.title}</span>
                      {isSelected && <span className="text-xs">➔</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}