import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calcTotalScore, calcDimensions, getScoreLevel, DIMENSIONS } from '../../data/questions.en';
import { LEVEL_INTERPRETATIONS, DIMENSION_REPORTS, getPatternAnalysis, BOOK_RECOMMENDATIONS, get30DayPlan, LIFESTYLE_ADVICE } from '../../data/reportContent.en';
import RadarChart from '../../components/RadarChart';
import SeoHead from '../../components/SeoHead';
import AdBanner from '../../components/AdBanner';

function getLevelKey(totalScore) { if (totalScore >= 80) return 'high'; if (totalScore >= 60) return 'midHigh'; if (totalScore >= 40) return 'mid'; return 'low'; }
function getDimLevel(score) { if (score >= 65) return 'high'; if (score >= 40) return 'mid'; return 'low'; }

function SectionTitle({ icon, children }) { return (<h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4"><span className="text-xl">{icon}</span>{children}</h2>); }
function BookList({ title, books }) { return (<div className="mb-3 last:mb-0"><h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{title}</h5><div className="space-y-2">{books.map((b, i) => (<div key={i} className="bg-gray-50 rounded-lg p-3"><div className="text-xs font-semibold text-gray-800">{b.title}</div><div className="text-[10px] text-gray-400 mb-1">{b.author}</div><div className="text-[10px] text-gray-500 leading-relaxed">{b.reason}</div></div>))}</div></div>); }

export default function ReportPage() {
  const location = useLocation(); const navigate = useNavigate();
  const answers = location.state?.answers || {};
  if (Object.keys(answers).length === 0) { navigate('/en/test', { replace: true }); return null; }

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const totalScore = calcTotalScore(answers); const maxScore = 23 * 5; const dimScores = calcDimensions(answers);
  const { level, emoji } = getScoreLevel(totalScore); const levelKey = getLevelKey(totalScore);
  const levelData = LEVEL_INTERPRETATIONS[levelKey]; const patterns = getPatternAnalysis(dimScores); const plan30 = get30DayPlan(totalScore);
  const tier = levelKey === 'high' ? 'high' : levelKey === 'midHigh' ? 'midHigh' : 'mid';
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title="HSP Deep Personal Report | Highly Sensitive Person Test"
        description={`Score: ${totalScore}/${maxScore}, Level: ${level}. Deep dive report with 4-dimension analysis, sensitivity patterns, career advice, and 30-day growth plan.`}
        canonical="https://haltsp.com/en/report"
      />
      <div className="max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>Back</button>
            <span className="text-sm font-semibold text-gray-700">Personal Report</span>
            <button onClick={() => window.print()} className="text-gray-400 hover:text-gray-600 text-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg></button>
          </div>
        </div>

        {/* Cover */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark px-5 pt-10 pb-10 text-white text-center">
          <div className="text-5xl mb-3">{emoji}</div><div className="text-xs text-white/60 mb-2">{today} · Generated</div>
          <h1 className="text-2xl font-bold mb-2">HSP Deep Personal Report</h1>
          <div className="text-5xl font-extrabold my-4">{totalScore}<span className="text-xl font-normal text-white/60">/{maxScore}</span></div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-2">{level}</div>
          <p className="text-sm text-white/70 mt-3 max-w-xs mx-auto">{levelData.title}</p>
        </div>

        {/* Section 1: Overview */}
        <div className="px-5 -mt-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <SectionTitle icon="📋">Your Sensitivity Overview</SectionTitle>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{levelData.summary}</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-green-50 rounded-xl p-3"><h4 className="text-xs font-semibold text-green-700 mb-2">💪 Strengths</h4><ul className="text-xs text-green-800 space-y-1">{levelData.strengths.map((s, i) => <li key={i} className="leading-relaxed">• {s}</li>)}</ul></div>
            <div className="bg-amber-50 rounded-xl p-3"><h4 className="text-xs font-semibold text-amber-700 mb-2">⚠️ Challenges</h4><ul className="text-xs text-amber-800 space-y-1">{levelData.challenges.map((c, i) => <li key={i} className="leading-relaxed">• {c}</li>)}</ul></div>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10"><p className="text-sm text-primary-dark leading-relaxed font-medium">💡 {levelData.keyMessage}</p></div>
        </div></div>

        {/* Section 2: Radar */}
        <div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="🎯">4-Dimension Radar</SectionTitle><RadarChart scores={dimScores} dimensions={DIMENSIONS} /><p className="text-xs text-gray-400 text-center mt-2">Higher = more sensitive (percentile)</p></div></div>

        {/* Section 3: Dimension Deep Dives */}
        <div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="🔬">Dimension Deep Dives</SectionTitle><p className="text-xs text-gray-400 mb-5 leading-relaxed">Personalized interpretations based on your scores in each dimension.</p>
          <div className="space-y-6">
            {Object.entries(DIMENSION_REPORTS).map(([key, dimReport]) => {
              const score = dimScores[key]; const lvl = getDimLevel(score); const data = dimReport.levels[lvl]; const dimMeta = DIMENSIONS[key];
              return (<div key={key} className="border border-gray-100 rounded-xl overflow-hidden">
                <div className="p-4 flex items-center justify-between" style={{ backgroundColor: dimMeta.color + '08' }}>
                  <div className="flex items-center gap-2"><span className="text-lg">{dimReport.icon}</span><div><h4 className="text-sm font-bold text-gray-800">{dimReport.name}</h4><p className="text-[10px] text-gray-500">{dimReport.whatItMeasures}</p></div></div>
                  <div className="text-right"><div className="text-lg font-extrabold" style={{ color: dimMeta.color }}>{score}%</div><div className="text-[10px] text-gray-500">{data.label}</div></div>
                </div>
                <div className="p-4"><p className="text-sm text-gray-600 leading-relaxed mb-3">{data.description}</p>
                  <div className="mb-3"><h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Real-Life Scenarios</h5><ul className="space-y-1.5">{data.scenarios.map((s, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed"><span className="text-gray-300 mt-0.5">▸</span>{s}</li>)}</ul></div>
                  <div className="bg-gray-50 rounded-lg p-3"><h5 className="text-xs font-semibold text-gray-600 mb-2">💡 Tips for You</h5><ul className="space-y-1.5">{data.tips.map((t, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed"><span className="font-bold text-primary">{i + 1}.</span>{t}</li>)}</ul></div>
                </div>
              </div>);
            })}
          </div>
        </div></div>

        {/* Section 4: Patterns */}
        {patterns.length > 0 && (<div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="🧩">Your Sensitivity Patterns</SectionTitle><p className="text-xs text-gray-400 mb-4 leading-relaxed">How your dimensions interact to form your unique sensitivity profile.</p><div className="space-y-3">{patterns.map((p, i) => (<div key={i} className="bg-primary/5 rounded-xl p-4 border border-primary/10"><h4 className="text-sm font-bold text-primary-dark mb-1.5">{p.title}</h4><p className="text-xs text-gray-600 leading-relaxed">{p.body}</p></div>))}</div></div></div>)}

        {/* Ad Banner */}
        <div className="px-5 mb-4">
          <AdBanner slot="4455002909" style={{ minHeight: '60px' }} />
        </div>

        {/* Section 5: Lifestyle */}
        <div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="🧭">Personalized Action Guides</SectionTitle>
          <div className="mb-5"><h4 className="text-sm font-bold text-gray-800 mb-2">💼 Career</h4>
            {LIFESTYLE_ADVICE.career[tier].suitable.length > 0 && (<div className="mb-2"><span className="text-xs font-semibold text-green-600">✅ Well-Suited Careers</span><ul className="mt-1 space-y-0.5">{LIFESTYLE_ADVICE.career[tier].suitable.map((s, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-green-400">✓</span> {s}</li>)}</ul></div>)}
            {LIFESTYLE_ADVICE.career[tier].avoid.length > 0 && (<div><span className="text-xs font-semibold text-red-500">⚠️ May Be Challenging</span><ul className="mt-1 space-y-0.5">{LIFESTYLE_ADVICE.career[tier].avoid.map((s, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-red-300">✗</span> {s}</li>)}</ul></div>)}
          </div>
          <div className="mb-5"><h4 className="text-sm font-bold text-gray-800 mb-2">💑 Relationships</h4><ul className="space-y-1.5">{LIFESTYLE_ADVICE.relationships[tier].map((r, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed"><span className="text-primary font-bold">{i + 1}.</span> {r}</li>)}</ul></div>
          <div><h4 className="text-sm font-bold text-gray-800 mb-2">🧘 Self-Care</h4><ul className="space-y-1.5">{LIFESTYLE_ADVICE.selfCare[tier].map((s, i) => <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed"><span className="text-primary font-bold">{i + 1}.</span> {s}</li>)}</ul></div>
        </div></div>

        {/* Section 6: Books */}
        <div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="📚">Book Recommendations</SectionTitle><BookList title="Essential Reads" books={BOOK_RECOMMENDATIONS.beginner} /><BookList title="Going Deeper" books={BOOK_RECOMMENDATIONS.intermediate} /><BookList title="Advanced" books={BOOK_RECOMMENDATIONS.advanced} /></div></div>

        {/* Section 7: 30-Day Plan */}
        <div className="px-5 mb-4"><div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"><SectionTitle icon="📅">30-Day Sensitivity Plan</SectionTitle><p className="text-xs text-gray-400 mb-4 leading-relaxed">A progressive 4-week plan. Each day takes 10-30 minutes. Consistency over perfection.</p>
          <div className="space-y-4">{plan30.themes.map((week, wi) => (<div key={wi} className="border border-gray-100 rounded-xl overflow-hidden"><div className="bg-primary/5 px-4 py-2.5"><h4 className="text-sm font-bold text-primary-dark">Week {week.week}: {week.theme}</h4><p className="text-[10px] text-gray-500">{week.focus}</p></div><div className="p-3"><div className="space-y-1.5">{plan30.tasks[wi].map((task, ti) => (<div key={ti} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"><span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{ti + 1}</span><span>Day {ti + 1}: {task}</span></div>))}</div></div></div>))}</div>
        </div></div>

        {/* Footer */}
        <div className="px-5 pb-8 text-center">
          <div className="flex gap-3 mb-4">
            <button onClick={() => navigate('/en/result')} className="flex-1 py-3 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25">Back to Results</button>
            <button onClick={() => window.print()} className="flex-1 py-3 rounded-xl bg-white border border-gray-200 text-gray-600 font-semibold active:scale-[0.98] transition-transform">Save / Print</button>
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'HSP Deep Personal Report', text: 'I just completed the HSP self-test and got my deep personal report. Discover your sensitivity score too!', url: 'https://haltsp.com/en' }).catch(() => {});
              } else {
                navigator.clipboard.writeText('I just completed the HSP self-test — discover your sensitivity score: https://haltsp.com/en').then(() => alert('Link copied! Share it with a friend.'));
              }
            }}
            className="w-full py-3 mb-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 text-primary font-semibold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            📤 Share with a Friend
          </button>
          <button
            onClick={() => navigate('/en')}
            className="w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-500 font-medium text-sm active:scale-[0.98] transition-transform mt-3"
          >
            Back to Home
          </button>
          <p className="text-xs text-gray-300 leading-relaxed">Based on Dr. Elaine Aron's Highly Sensitive Person Scale. This report is for self-understanding and is not a clinical diagnosis.<br />If you need professional help, please consult a licensed therapist.</p>
          <p className="text-xs text-gray-300 mt-4">{today} · HSP Deep Personal Report</p>
        </div>
      </div>
    </div>
  );
}
