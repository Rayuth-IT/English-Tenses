import { useState } from 'react';
import { KEYWORD_DETAILS } from '../data/tensesData';

export default function TenseDetail({ tense }) {
  const [activeKeywordModal, setActiveKeywordModal] = useState(null);
  const [localQuizAnswers, setLocalQuizAnswers] = useState({});

  if (!tense) return null;

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const findKeywordDetail = (marker) => {
    if (!marker) return null;
    const cleanKey = marker.toLowerCase().trim().replace(/\s+/g, '-');
    const exactKey = marker.toLowerCase().trim();
    return KEYWORD_DETAILS[cleanKey] || KEYWORD_DETAILS[exactKey] || null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-6 flex-1">
      {/* Title Header */}
      <div className="border-b border-slate-100 pb-4">
        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-2">
          {tense.tag} Module
        </span>
        <h2 className="text-2xl font-black text-slate-800">{tense.title}</h2>
        <h3 className="text-lg font-bold text-indigo-600 font-khmer">{tense.khmerTitle}</h3>
      </div>

      {/* Formula Box */}
      <div className="bg-slate-900 text-amber-300 p-4 rounded-xl shadow-inner flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span className="text-xs uppercase text-slate-400 block font-semibold">Key Formula / Structure (រូបមន្ត ឬទម្រង់)</span>
          <span className="text-lg font-mono font-bold whitespace-pre-line">{tense.formula}</span>
        </div>
        <button
          onClick={() => speak(tense.title)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded-md transition cursor-pointer"
        >
          🔊 Pronunciation
        </button>
      </div>

      {/* Usage Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
          <h4 className="font-bold text-blue-900 text-sm mb-1">🇬🇧 English Explanation</h4>
          <p className="text-slate-700 text-sm leading-relaxed">{tense.usageEn}</p>
        </div>
        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
          <h4 className="font-bold text-emerald-900 text-sm mb-1 font-khmer">🇰🇭 ពន្យល់ជាភាសាខ្មែរ (Khmer Explanation)</h4>
          <p className="text-slate-700 text-sm leading-relaxed font-khmer">{tense.usageKm}</p>
        </div>
      </div>

      {/* Breakdown / Forms */}
      <div>
        <h4 className="text-md font-bold text-slate-800 mb-3">📐 Structure Breakdown (ទម្រង់លម្អិត)</h4>
        <div className="space-y-2">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-emerald-600 text-xs uppercase block">Form / Section 1</span>
            <span className="font-mono text-sm text-slate-800 whitespace-pre-line">{tense.structures.affirmative}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-rose-600 text-xs uppercase block">Form / Section 2</span>
            <span className="font-mono text-sm text-slate-800 whitespace-pre-line">{tense.structures.negative}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <span className="font-bold text-indigo-600 text-xs uppercase block">Form / Section 3</span>
            <span className="font-mono text-sm text-slate-800 whitespace-pre-line">{tense.structures.interrogative}</span>
          </div>
        </div>
      </div>

      {/* Adverbs of Frequency Reference Scale & Chart */}
      {tense.frequencyChart && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 pb-3">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                📊 Adverbs of Frequency Scale (តារាងកម្រិតប្រេកង់ 0% - 100%)
              </h4>
              <p className="text-xs text-slate-500 font-khmer">
                កម្រិតនៃការកើតឡើងនៃសកម្មភាពក្នុងបច្ចុប្បន្នកាលធម្មតា
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full w-fit">
              Frequency Guide
            </span>
          </div>

          <div className="space-y-2.5">
            {tense.frequencyChart.map((item, idx) => {
              const pctNumber = parseInt(item.percentage, 10) || 0;
              let badgeColor = "bg-rose-100 text-rose-800";
              let barColor = "bg-rose-500";
              if (pctNumber >= 90) {
                badgeColor = "bg-emerald-100 text-emerald-800";
                barColor = "bg-emerald-500";
              } else if (pctNumber >= 70) {
                badgeColor = "bg-blue-100 text-blue-800";
                barColor = "bg-blue-500";
              } else if (pctNumber >= 40) {
                badgeColor = "bg-amber-100 text-amber-800";
                barColor = "bg-amber-500";
              } else if (pctNumber > 0) {
                badgeColor = "bg-orange-100 text-orange-800";
                barColor = "bg-orange-500";
              }

              return (
                <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md min-w[50px] text-center ${badgeColor}`}>
                        {item.percentage}
                      </span>
                      <span className="font-bold text-slate-800 text-sm">{item.adverb}</span>
                    </div>
                    <button
                      onClick={() => speak(item.example)}
                      className="text-slate-400 hover:text-indigo-600 text-xs p-1 cursor-pointer"
                      title="Listen example"
                    >
                      🔊
                    </button>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className={`h-1.5 rounded-full ${barColor}`} style={{ width: `${pctNumber}%` }} />
                  </div>

                  <div className="text-xs space-y-0.5 pt-0.5">
                    <p className="font-medium text-slate-700">{item.example}</p>
                    <p className="text-slate-500 font-khmer">{item.km}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Adverbs Position Rules */}
      {tense.adverbRules && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
          <h4 className="font-bold text-slate-800 text-sm">
            📍 Rules for Adverb Placement (ទីតាំងរបស់ Adverbs of Frequency ក្នុងល្បះ)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {tense.adverbRules.map((r, rIdx) => (
              <div key={rIdx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2 text-xs flex flex-col justify-between">
                <div>
                  <span className="font-bold text-indigo-700 block mb-1">
                    Rule {rIdx + 1}: {r.rule}
                  </span>
                  <div className="p-2 bg-slate-900 text-amber-300 rounded font-mono text-[11px] mb-2">
                    {r.formula}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">{r.exampleEn}</p>
                    <button
                      onClick={() => speak(r.exampleEn)}
                      className="text-slate-400 hover:text-indigo-600 text-xs cursor-pointer p-0.5"
                      title="Listen"
                    >
                      🔊
                    </button>
                  </div>
                  <p className="text-slate-500 font-khmer text-[11px]">{r.exampleKm}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conjunction Sections Breakdown */}
      {tense.sections && (
        <div className="space-y-4">
          <h4 className="text-md font-bold text-slate-800">
            📚 Conjunction Categories Breakdown (ប្រភេទនៃឈ្នាប់ទាំង ៤)
          </h4>
          <div className="space-y-4">
            {tense.sections.map((sec, secIdx) => (
              <div key={secIdx} className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
                <div className="border-b border-slate-200 pb-2">
                  <h5 className="font-bold text-indigo-900 text-sm">{sec.title}</h5>
                  <p className="text-xs font-mono text-slate-600">{sec.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sec.items.map((it, itIdx) => (
                    <div key={itIdx} className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-indigo-700">{it.keyword}</span>
                        {it.note && (
                          <span className="text-[11px] text-emerald-700 font-khmer bg-emerald-50 px-2 py-0.5 rounded">
                            {it.note}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-700">{it.usage}</p>
                    </div>
                  ))}
                </div>

                {sec.extraExamples && (
                  <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-slate-800 block">Extra Examples:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {sec.extraExamples.map((ex, exIdx) => (
                        <li key={exIdx}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional: Sample Essay Architecture Breakdown */}
      {tense.sampleEssayBreakdown && (
        <div className="p-5 bg-indigo-50/40 rounded-xl border border-indigo-100 space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-2">
            <h4 className="font-bold text-indigo-950 text-sm">
              🏗️ Essay Architecture Breakdown (រចនាសម្ព័ន្ធវិភាគតែងសេចក្តី)
            </h4>
            <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded font-medium">
              Sample Model
            </span>
          </div>

          <div className="space-y-3">
            {/* Introduction */}
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2 text-xs">
              <span className="font-bold text-indigo-700 uppercase block">1. Introduction (អារម្ភកថា)</span>
              <p><strong className="text-slate-800">Hook:</strong> {tense.sampleEssayBreakdown.introduction.hook}</p>
              <p><strong className="text-slate-800">Background:</strong> {tense.sampleEssayBreakdown.introduction.background}</p>
              <div className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 font-medium">
                <strong>Thesis Statement:</strong> {tense.sampleEssayBreakdown.introduction.thesis}
              </div>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-2">
              <span className="font-bold text-xs text-slate-700 uppercase block">2. Body Paragraphs (តួសេចក្តី)</span>
              {tense.sampleEssayBreakdown.bodyParagraphs.map((body, bIdx) => (
                <div key={bIdx} className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1 text-xs">
                  <p className="font-bold text-indigo-800">Body Paragraph {bIdx + 1}:</p>
                  <p><strong className="text-slate-800">Topic Sentence:</strong> {body.topic}</p>
                  <p><strong className="text-slate-800">Evidence:</strong> {body.evidence}</p>
                  <p><strong className="text-slate-800">Explanation:</strong> {body.explanation}</p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1 text-xs">
              <span className="font-bold text-emerald-700 uppercase block">3. Conclusion (និគមនកថា)</span>
              <p><strong className="text-slate-800">Restated Thesis:</strong> {tense.sampleEssayBreakdown.conclusion.restatedThesis}</p>
              <p><strong className="text-slate-800">Final Thought:</strong> {tense.sampleEssayBreakdown.conclusion.finalThought}</p>
            </div>
          </div>
        </div>
      )}

      {/* Examples List */}
      <div>
        <h4 className="text-md font-bold text-slate-800 mb-3">💬 Practical Examples (ឧទាហរណ៍)</h4>
        <div className="space-y-3">
          {tense.examples.map((ex, index) => (
            <div key={index} className="p-4 bg-indigo-50/30 rounded-lg border border-indigo-100 flex justify-between items-start gap-3">
              <div className="space-y-1 flex-1">
                <p className="text-sm font-semibold text-slate-800 whitespace-pre-line leading-relaxed">{ex.en}</p>
                <p className="text-xs text-slate-600 font-khmer whitespace-pre-line leading-relaxed">{ex.km}</p>
              </div>
              <button
                onClick={() => speak(ex.en)}
                className="text-slate-400 hover:text-indigo-600 p-1 text-sm cursor-pointer shrink-0"
                title="Listen example"
              >
                🔊
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Key Keywords / Markers */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-md font-bold text-slate-800">🔑 Essential Keywords & Markers (ពាក្យគន្លឹះ)</h4>
          <span className="text-[11px] text-indigo-600">ចុចលើពាក្យដែលមាន 💡 ដើម្បីមើលការពន្យល់លម្អិត</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tense.timeMarkers.map((marker, i) => {
            const detail = findKeywordDetail(marker);
            if (detail) {
              return (
                <button
                  key={i}
                  onClick={() => setActiveKeywordModal(detail)}
                  className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold border border-indigo-200 transition cursor-pointer flex items-center gap-1 shadow-xs"
                  title="Click to view definition & grammar rules"
                >
                  <span>💡 {marker}</span>
                </button>
              );
            }
            return (
              <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200">
                {marker}
              </span>
            );
          })}
        </div>
      </div>

      {/* Module Specific Quick Quiz */}
      {tense.quiz && tense.quiz.length > 0 && (
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm">
              🎯 Module Quick Check ({tense.quiz.length} Question{tense.quiz.length > 1 ? 's' : ''})
            </h4>
            <span className="text-xs text-slate-500 font-khmer">អនុវត្តភ្លាមៗដើម្បីពង្រឹងការយល់ដឹង</span>
          </div>

          <div className="space-y-4">
            {tense.quiz.map((q, qIdx) => {
              const selected = localQuizAnswers[qIdx];
              const isAnswered = selected !== undefined;
              return (
                <div key={qIdx} className="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
                  <p className="text-xs font-semibold text-slate-800">
                    {qIdx + 1}. {q.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700";
                      if (isAnswered) {
                        if (optIdx === q.correct) {
                          btnStyle = "bg-emerald-600 text-white border-emerald-600 font-bold";
                        } else if (selected === optIdx && optIdx !== q.correct) {
                          btnStyle = "bg-rose-600 text-white border-rose-600";
                        }
                      }
                      return (
                        <button
                          key={optIdx}
                          onClick={() => setLocalQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))}
                          className={`p-2 text-left rounded-md border text-xs transition cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {isAnswered && (
                    <p className="text-xs text-slate-600 bg-indigo-50/50 p-2.5 rounded border border-indigo-100 font-khmer">
                      💡 <strong>ពន្យល់:</strong> {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Interactive Keyword Details Modal */}
      {activeKeywordModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs"
          onClick={() => setActiveKeywordModal(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                  {activeKeywordModal.category}
                </span>
                <h3 className="text-2xl font-black text-slate-800 mt-1">
                  {activeKeywordModal.word}
                </h3>
                <p className="text-sm font-semibold text-emerald-600 font-khmer">
                  {activeKeywordModal.translation}
                </p>
              </div>
              <button
                onClick={() => setActiveKeywordModal(null)}
                className="text-slate-400 hover:text-slate-700 text-2xl font-bold cursor-pointer p-1 leading-none"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div>
                <span className="font-bold text-slate-900 block">Definition (និយមន័យ):</span>
                <p className="mt-0.5 leading-relaxed">{activeKeywordModal.definition}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block">Usage Rule (របៀបប្រើ):</span>
                <p className="mt-0.5 leading-relaxed">{activeKeywordModal.usage}</p>
              </div>

              {activeKeywordModal.structure && (
                <div className="p-3 bg-slate-900 text-amber-300 rounded-lg font-mono">
                  <span className="text-[10px] uppercase text-slate-400 block font-sans font-semibold">Sentence Structure:</span>
                  <span className="text-xs font-semibold">{activeKeywordModal.structure}</span>
                </div>
              )}

              {activeKeywordModal.examples && activeKeywordModal.examples.length > 0 && (
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Examples (ឧទាហរណ៍):</span>
                  <div className="space-y-2">
                    {activeKeywordModal.examples.map((ex, i) => (
                      <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center gap-2">
                        <div>
                          <p className="font-semibold text-slate-800">{ex.en}</p>
                          <p className="text-[11px] text-slate-600 font-khmer">{ex.km}</p>
                        </div>
                        <button
                          onClick={() => speak(ex.en)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm p-1 cursor-pointer shrink-0"
                          title="Pronounce"
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 text-right border-t border-slate-100">
              <button
                onClick={() => setActiveKeywordModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg cursor-pointer transition"
              >
                Close (បិទ)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}