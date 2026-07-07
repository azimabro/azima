import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calcScores, getType } from '../../data/mbtiQuestions.en';
import mbtiTypes from '../../data/mbtiTypes.en';
import mbtiReports from '../../data/mbtiReports.en';
import AdBanner from '../../components/AdBanner';
import SeoHead from '../../components/SeoHead';

const DIM_CONFIG = [
  { key: 'EI', label: 'Energy Direction', left: { letter: 'E', label: 'Extravert' }, right: { letter: 'I', label: 'Introvert' }, color: '#3b82f6' },
  { key: 'SN', label: 'Information Processing', left: { letter: 'S', label: 'Sensing' }, right: { letter: 'N', label: 'Intuition' }, color: '#10b981' },
  { key: 'TF', label: 'Decision Making', left: { letter: 'T', label: 'Thinking' }, right: { letter: 'F', label: 'Feeling' }, color: '#f59e0b' },
  { key: 'JP', label: 'Lifestyle Approach', left: { letter: 'J', label: 'Judging' }, right: { letter: 'P', label: 'Perceiving' }, color: '#8b5cf6' },
];

function SectionTitle({ icon, children }) {
  return (
    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      {children}
    </h2>
  );
}

export default function MbtiReportPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  if (Object.keys(answers).length === 0) {
    navigate('/en/mbti/test', { replace: true });
    return null;
  }

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scores = calcScores(answers);
  const typeCode = getType(scores);
  const typeData = mbtiTypes[typeCode] || {};
  const reportData = mbtiReports[typeCode] || {};

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Split growth tips by newline regex
  const growthTips = reportData.growth ? reportData.growth.split(/\n/) : [];

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title={`${typeCode} ${typeData.name || ''} Deep Personality Report | MBTI Test`}
        description={`View your ${typeCode} ${typeData.name || ''} deep report: strengths, weaknesses, career advice, relationships, and personal growth guide.`}
      />

      <div className="max-w-lg mx-auto w-full">
        {/* Sticky Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <span className="text-sm font-semibold text-gray-700">Deep Personal Report</span>
            <button
              onClick={() => window.print()}
              className="text-gray-400 hover:text-gray-600 text-sm"
              title="Print"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cover */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark px-5 pt-10 pb-10 text-white text-center">
          <div className="text-5xl mb-3">{typeData.emoji || '🧩'}</div>
          <div className="text-xs text-white/60 mb-2">{today} · Generated</div>
          <h1 className="text-2xl font-bold mb-2">MBTI Deep Personality Report</h1>
          <div className="text-5xl font-extrabold my-4 tracking-widest">{typeCode}</div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-2">
            {typeData.name || typeCode}
          </div>
          <p className="text-sm text-white/70 mt-3 max-w-xs mx-auto">
            {typeData.summary}
          </p>
        </div>

        {/* Section 1: Overview */}
        <div className="px-5 -mt-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
            <SectionTitle icon="📋">Personality Overview</SectionTitle>
            <p className="text-sm text-gray-600 leading-relaxed">
              {typeData.summary}
            </p>
          </div>
        </div>

        {/* Section 2: Dimension Bars */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="🎯">Four Dimensions in Detail</SectionTitle>
            <div className="space-y-5">
              {DIM_CONFIG.map((dim) => {
                const score = scores[dim.key] || 50;
                const leftPct = score;
                const rightPct = 100 - score;
                const preference = score > 50 ? dim.left : dim.right;

                return (
                  <div key={dim.key}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-700">{dim.label}</span>
                      <span className="text-xs font-bold" style={{ color: dim.color }}>
                        Prefers {preference.label} · {score > 50 ? score : 100 - score}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 w-8">{dim.left.letter}</span>
                      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: leftPct + '%', backgroundColor: dim.color }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">{dim.right.letter}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-gray-400">{leftPct}%</span>
                      <span className="text-[10px] text-gray-400">{rightPct}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 3: Strengths */}
        {reportData.strengths && reportData.strengths.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💪">Core Strengths</SectionTitle>
              <ul className="space-y-2">
                {reportData.strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="font-bold text-primary mt-0.5">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Section 4: Weaknesses */}
        {reportData.weaknesses && reportData.weaknesses.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="⚠️">Challenges to Watch</SectionTitle>
              <ul className="space-y-2">
                {reportData.weaknesses.map((w, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="font-bold text-amber-500 mt-0.5">{i + 1}.</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Section 5: Career */}
        {reportData.career && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💼">Career Development</SectionTitle>
              <p className="text-sm text-gray-600 leading-relaxed">{reportData.career}</p>
            </div>
          </div>
        )}

        {/* Section 6: Relationships */}
        {reportData.relationships && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💑">Relationships &amp; Communication</SectionTitle>
              <p className="text-sm text-gray-600 leading-relaxed">{reportData.relationships}</p>
            </div>
          </div>
        )}

        {/* Section 7: Growth Tips */}
        {growthTips.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="🌱">Personal Growth</SectionTitle>
              <div className="space-y-3">
                {growthTips.filter(Boolean).map((tip, i) => (
                  <div key={i} className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <p className="text-sm text-gray-700 leading-relaxed">{tip.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ad Banner */}
        <div className="px-5 mb-4">
          <AdBanner slot="1234567890" style={{ minHeight: '100px' }} />
        </div>

        {/* Share Button */}
        <div className="px-5 mb-4">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: `My MBTI type is ${typeCode} ${typeData.name || ''}`,
                  text: `I just completed the MBTI test and my type is ${typeCode} ${typeData.name || ''}! Discover your type too!`,
                  url: 'https://haltsp.com/en/mbti',
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(
                  `My MBTI type is ${typeCode} ${typeData.name || ''}! Discover yours: https://haltsp.com/en/mbti`
                ).then(() => alert('Link copied! Share with a friend.'));
              }
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 text-primary font-semibold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            📤 Share Report
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 pb-8 text-center">
          <button
            onClick={() => navigate('/en/mbti')}
            className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25 mb-4"
          >
            Back to Home
          </button>
          <p className="text-xs text-gray-300 leading-relaxed">
            This report is adapted from Myers-Briggs Type Indicator theory.
            <br />
            Results are for self-understanding only and not clinical diagnosis.
            <br />
            For professional help, please consult a licensed therapist.
          </p>
          <p className="text-xs text-gray-300 mt-4">
            {today} · MBTI Deep Personal Report
          </p>
        </div>
      </div>
    </div>
  );
}
