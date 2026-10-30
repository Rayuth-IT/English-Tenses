import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TenseDetail from './components/TenseDetail';
import PracticeQuiz from './components/PracticeQuiz';
import ResourcesView from './components/ResourceView';
import { TENSES_DATA, getQuizByLessonId } from './data/tensesData';
import LessonDetail from './components/LessonDetail';

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');
  const [selectedTenseId, setSelectedTenseId] = useState('present-simple');

  const selectedTense = TENSES_DATA.find((t) => t.id === selectedTenseId) || TENSES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
        {activeTab === 'learn' && (
          <div className="flex flex-col md:flex-row gap-6">
            <Sidebar
              tenses={TENSES_DATA}
              selectedId={selectedTenseId}
              onSelectTense={setSelectedTenseId}
            />
            <TenseDetail tense={selectedTense} />
          </div>
        )}

        {activeTab === 'quiz' && <PracticeQuiz questions={QUIZ_QUESTIONS} />}

        {activeTab === 'resources' && <ResourcesView />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500 font-khmer">
        © 2026 English Tenses Educational Platform — បង្កើតឡើងសម្រាប់សម្រួលដល់ការសិក្សារបស់សិស្ស
      </footer>

      <LessonDetail/>
    </div>
  );
}