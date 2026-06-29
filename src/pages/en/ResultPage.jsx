import { useLocation, useNavigate } from 'react-router-dom';
import { calcTotalScore, calcDimensions, getScoreLevel, DIMENSIONS } from '../../data/questions.en';
import RadarChart from '../../components/RadarChart';
import SharePoster from '../../components/SharePoster';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};
  if (Object.keys(answers).length === 0) { navigate('/en/test', { replace: true }); return null; }

  const totalScore = calcTotalScore(answers);
  const maxScore = 23 * 5;
  const dimScores = calcDimensions(answers);
  const { level, emoji } = getScoreLevel(totalScore);

  const dimInterpretations = {
    emotional: { high: 'Your emotional responses are heightened. You experience feelings vividly, which gifts you deep empathy but also means emotions hit harder and linger longer. Learning emotional regulation is your most important practice.', mid: 'You have moderate emotional sensitivity — empathic when needed without being completely consumed. A relatively balanced state.', low: 'Your emotional stability is strong. You stay calm under pressure, but may need to consciously practice empathy and emotional awareness.' },
    sensory: { high: 'You\'re keenly sensitive to sensory input — light, sound, scent, touch are all amplified. Your sensory world is richer than most, but noisy environments rapidly drain you.', mid: 'Your sensory sensitivity is moderate. Most environments feel comfortable; you\'re not easily overwhelmed by everyday sensory information.', low: 'You\'re less sensitive to sensory stimuli, staying comfortable even in stimulating environments. An advantage, though you may miss subtle environmental beauty.' },
    social: { high: 'You\'re highly attuned to others\' emotions and social dynamics. A natural "emotional radar" — but easily depleted by others\' energy. Setting boundaries is your core challenge.', mid: 'You perceive others\' emotions in social settings without excessive absorption. A healthy level of social sensitivity.', low: 'You\'re relatively independent in social situations and not easily swayed by group emotion. This supports rational decisions, though you may sometimes miss subtle social cues.' },
    aesthetic: { high: 'You have an extraordinary appreciation for beauty, art, and life\'s subtle pleasures. Music, imagery, and words resonate deeply. This is one of the most precious gifts of high sensitivity.', mid: 'You enjoy art and beauty without being completely absorbed by aesthetic experiences. A comfortable level of appreciation.', low: 'You prioritize utility and efficiency over aesthetics. An advantage in some areas, but you might be missing many small, beautiful moments in daily life.' },
  };

  const strongestDim = Object.entries(dimScores).sort((a, b) => b[1] - a[1])[0];
  const weakestDim = Object.entries(dimScores).sort((a, b) => a[1] - b[1])[3];

  return (
    <div className="min-h-screen pb-10 page-enter">
      <div className="max-w-lg mx-auto w-full">
        {/* Score Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-8 pb-10 text-center text-white rounded-b-[2rem] shadow-lg">
          <div className="text-5xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-bold mb-1 text-white">{level}</h1>
          <div className="text-4xl font-extrabold my-3 text-white">
            {totalScore}<span className="text-lg font-normal text-white/60">/{maxScore}</span>
          </div>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
            {totalScore >= 80 && 'You are a textbook Highly Sensitive Person. Your nervous system was born more refined and deeper-processing than most. This is not a weakness — it\'s your unique operating system.'}
            {totalScore >= 60 && totalScore < 80 && 'You show notably heightened sensitivity, perceiving more deeply than average in many areas. Understanding HSP will bring you significant self-insight.'}
            {totalScore >= 40 && totalScore < 60 && 'You\'re at a moderate sensitivity level — sensitive in some ways, resilient in others. A well-balanced state overall.'}
            {totalScore < 40 && 'Your sensitivity level is relatively low. You\'re not easily perturbed by external stimuli, which helps you stay composed across many environments.'}
          </p>
        </div>

        {/* Radar */}
        <div className="px-5 -mt-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4 text-center">4-Dimension Analysis</h3>
            <RadarChart scores={dimScores} />
            <div className="mt-5 space-y-3">
              {Object.entries(DIMENSIONS).map(([key, dim]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-gray-600">{dim.icon} {dim.name}</span>
                    <span className="text-xs font-bold" style={{ color: dim.color }}>{dimScores[key]}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${dimScores[key]}%`, backgroundColor: dim.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-4 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">🔍 Key Insights</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                <strong>Strongest: {DIMENSIONS[strongestDim[0]].icon} {DIMENSIONS[strongestDim[0]].name} ({strongestDim[1]}%)</strong><br />
                {dimInterpretations[strongestDim[0]][strongestDim[1] >= 65 ? 'high' : strongestDim[1] >= 40 ? 'mid' : 'low']}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Weaker: {DIMENSIONS[weakestDim[0]].icon} {DIMENSIONS[weakestDim[0]].name} ({weakestDim[1]}%)</strong><br />
                {dimInterpretations[weakestDim[0]][weakestDim[1] >= 65 ? 'high' : weakestDim[1] >= 40 ? 'mid' : 'low']}
              </p>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="px-5 mt-5">
          <SharePoster totalScore={totalScore} maxScore={maxScore} level={level} dimScores={dimScores} lang="en" />
        </div>

        {/* Deep Report CTA */}
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl border border-primary/20 p-5 text-center">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-base font-bold text-gray-800 mb-1">Your Deep Personal Report</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">Detailed dimension analysis, action guides, book recommendations, and a 30-day sensitivity plan — all personalized to your scores.</p>
            <button className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-lg active:scale-[0.98] transition-transform shadow-lg shadow-primary/25" onClick={() => navigate('/en/report', { state: { answers } })}>
              View Full Report →
            </button>
          </div>
        </div>

        <div className="px-5 mt-4 text-center">
          <button onClick={() => navigate('/en/test')} className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-500">Retake Test</button>
        </div>
      </div>
    </div>
  );
}
