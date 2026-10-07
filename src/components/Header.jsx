
export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white text-indigo-700 p-2 rounded-lg font-black text-xl shadow">
            EN
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">English Tenses || PREPARE BY:YING RAYUTH</h1>
            <p className="text-xs text-indigo-200">រៀនកាលភាសាអង់គ្លេសងាយៗជាមួយរចនាសម្ព័ន្ធ និងឧទាហរណ៍</p>
          </div>
        </div>

        <nav className="flex gap-2">
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
              activeTab === 'learn' ? 'bg-white text-indigo-700 shadow' : 'hover:bg-indigo-600 text-indigo-100'
            }`}
          >
            📚 Learn Tenses (រៀនមេរៀន)
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
              activeTab === 'quiz' ? 'bg-white text-indigo-700 shadow' : 'hover:bg-indigo-600 text-indigo-100'
            }`}
          >
            ✏️ Practice Quiz (ធ្វើលំហាត់)
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
              activeTab === 'resources' ? 'bg-white text-indigo-700 shadow' : 'hover:bg-indigo-600 text-indigo-100'
            }`}
          >
            🖼️ Classroom & Docs (ឯកសារ)
          </button>
        </nav>
      </div>
    </header>
  );
}