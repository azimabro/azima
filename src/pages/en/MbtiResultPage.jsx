import { useLocation, useNavigate } from 'react-router-dom';
import { calcScores, getType } from '../../data/mbtiQuestions.en';
import mbtiTypes from '../../data/mbtiTypes.en';
import SeoHead from '../../components/SeoHead';
import AdBanner from '../../components/AdBanner';

// Dimension display config
const DIM_CONFIG = [
  { key: 'EI', label: 'Energy Direction', left: { letter: 'E', label: 'Extravert E', desc: 'Energized by external world' }, right: { letter: 'I', label: 'Introvert I', desc: 'Energized by inner world' }, color: '#3b82f6' },
  { key: 'SN', label: 'Information Processing', left: { letter: 'S', label: 'Sensing S', desc: 'Focuses on concrete facts' }, right: { letter: 'N', label: 'Intuition N', desc: 'Focuses on abstract patterns' }, color: '#10b981' },
  { key: 'TF', label: 'Decision Making', left: { letter: 'T', label: 'Thinking T', desc: 'Decides by logic and objectivity' }, right: { letter: 'F', label: 'Feeling F', desc: 'Decides by values and people impact' }, color: '#f59e0b' },
  { key: 'JP', label: 'Lifestyle Approach', left: { letter: 'J', label: 'Judging J', desc: 'Prefers planning and certainty' }, right: { letter: 'P', label: 'Perceiving P', desc: 'Prefers flexibility and openness' }, color: '#8b5cf6' },
];

export default function MbtiResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  if (Object.keys(answers).length === 0) {
    navigate('/en/mbti/test', { replace: true });
    return null;
  }

  const scores = calcScores(answers);
  const typeCode = getType(scores);
  const typeData = mbtiTypes[typeCode] || {
    name: typeCode,
    emoji: '🧩',
    summary: 'You have a unique personality combination.',
    strengths: 'Strengths derived from your responses.',
    careers: 'Suited to a variety of career paths.',
    famous: '',
  };

  const handleShare = () => {
    const text = `My MBTI type is ${typeCode} ${typeData.name}！Find out yours!`;
    if (navigator.share) {
      navigator.share({ title: 'MBTI Personality Test', text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text + ' https://haltsp.com/en/mbti').then(() => alert('Link copied! Share with a friend.'));
    }
  };

  return (
    <div className="min-h-screen pb-10 page-enter">
      <SeoHead
        title={`${typeCode} ${typeData?.name || ''} Result | MBTI Personality Test`}
        description={`Your MBTI type is ${typeCode} ${typeData?.name || ''}. ${typeData?.summary?.slice(0, 80) || ''}`}
        canonical="https://haltsp.com/en/mbti/result"
      />
      <div className="max-w-lg mx-auto w-full">
        {/* Type Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-8 pb-10 text-center text-white rounded-b-[2rem] shadow-lg">
          <div className="text-5xl mb-3">{typeData.emoji}</div>
          <div className="text-4xl font-extrabold my-3 tracking-widest text-white">
            {typeCode}
          </div>
          <h1 className="text-2xl font-bold mb-1 text-white">
            {typeData.name}
          </h1>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed mt-3">
            {typeData.summary}
          </p>
        </div>

        {/* Dimension Bars */}
        <div className="px-5 -mt-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4 text-center">4-Dimension Analysis</h3>
            <div className="space-y-4">
              {DIM_CONFIG.map((dim) => {
                const score = scores[dim.key] || 50;
                const leftPct = score;
                const rightPct = 100 - score;
                const preference = score > 50 ? dim.left : dim.right;
                const preferencePct = score > 50 ? score : 100 - score;

                return (
                  <div key={dim.key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-600">{dim.label}</span>
                      <span className="text-xs font-bold" style={{ color: dim.color }}>
                        {preference.letter} · {preferencePct}%
                      </span>
                    </div>
                    {/* Continuum bar */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-500 w-10 text-right">{dim.left.letter}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden relative">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: leftPct + '%', backgroundColor: dim.color, opacity: 0.7 }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 w-10">{dim.right.letter}</span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1 text-center">
                      Leans {preference.label}：{preference.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Type Details */}
        <div className="px-5 mt-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">💪 Strengths</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{typeData.strengths}</p>

            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-3">💼 Ideal Careers</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{typeData.careers}</p>

            {typeData.famous && (
              <>
                <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-3">🌟 Famous People</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{typeData.famous}</p>
              </>
            )}
          </div>
        </div>

        {/* Ad Banner */}
        <div className="px-5 mt-4">
          <AdBanner slot="4455002909" style={{ minHeight: '60px' }} />
        </div>

        {/* Deep Report CTA */}
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl border border-primary/20 p-5 text-center">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-base font-bold text-gray-800 mb-1">View Deep Personal Report</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Based on your 40 responses, we've generated a personalized deep-dive report:
            </p>
            <ul className="text-left text-xs text-gray-600 space-y-1.5 mb-5 max-w-xs mx-auto">
              <li>📊 Detailed dimension analysis with real-life contexts</li>
              <li>💪 Your top 5 strengths and 5 challenges to watch</li>
              <li>💼 Career direction advice and pitfalls to avoid</li>
              <li>💑 Deep dive into relationships and communication style</li>
              <li>🌱 Personalized growth action plan</li>
            </ul>
            <button
              className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-lg active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
              onClick={() => navigate('/en/mbti/report', { state: { answers } })}
            >
              View My Full Report →
            </button>
          </div>
        </div>

        {/* Share & Retake */}
        <div className="px-5 mt-4 flex gap-3">
          <button
            onClick={handleShare}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 text-primary font-semibold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            📤 Share Result
          </button>
          <button
            onClick={() => navigate('/en/mbti/test')}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm active:scale-[0.98] transition-transform"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}
