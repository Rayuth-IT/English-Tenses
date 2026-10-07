
export default function ResourcesView() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">🖼️ Teaching Resources & Document Reference</h2>
        <p className="text-xs text-slate-500 font-khmer">រូបភាពថ្នាក់រៀន និងតារាងសង្ខេបមេរៀនដើម្បីទាក់ទាញសិស្សឱ្យរៀនកាន់តែងាយស្រួល</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Classroom Image Card */}
        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
            alt="Interactive Classroom Teaching"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-slate-800">Interactive Classroom Learning</h3>
            <p className="text-xs text-slate-600 mt-1 font-khmer">
              ការរៀនតាមបែបអន្តរកម្មជាមួយគ្រូបង្រៀន ជួយឱ្យសិស្សងាយយល់ពីរចនាសម្ព័ន្ធកាលទាំង ១២។
            </p>
          </div>
        </div>

        {/* Grammar Document Cheat Sheet */}
        <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
            alt="English Grammar Document Sheet"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-slate-800">Grammar Chart Document</h3>
            <p className="text-xs text-slate-600 mt-1 font-khmer">
              សន្លឹកកិច្ចការ និងតារាងរូបមន្តសង្ខេបសម្រាប់សិស្សទាញយកទៅទន្ទេញ និងអនុវត្តបន្ថែម។
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}