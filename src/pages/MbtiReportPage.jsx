import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { calcScores, getType } from '../data/mbtiQuestions';
import mbtiTypes from '../data/mbtiTypes';
import mbtiReports from '../data/mbtiReports';
import AdBanner from '../components/AdBanner';
import SeoHead from '../components/SeoHead';

const DIM_CONFIG = [
  { key: 'EI', label: '注意力方向', left: { letter: 'E', label: '外向' }, right: { letter: 'I', label: '内向' }, color: '#3b82f6' },
  { key: 'SN', label: '认知方式', left: { letter: 'S', label: '感觉' }, right: { letter: 'N', label: '直觉' }, color: '#10b981' },
  { key: 'TF', label: '判断方式', left: { letter: 'T', label: '思考' }, right: { letter: 'F', label: '情感' }, color: '#f59e0b' },
  { key: 'JP', label: '生活态度', left: { letter: 'J', label: '判断' }, right: { letter: 'P', label: '感知' }, color: '#8b5cf6' },
];

const STACK_ORDER = [
  { key: 'dominant', badge: '主导' },
  { key: 'auxiliary', badge: '辅助' },
  { key: 'tertiary', badge: '第三' },
  { key: 'inferior', badge: '劣势' },
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

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (Object.keys(answers).length === 0) {
    navigate('/mbti/test', { replace: true });
    return null;
  }

  const scores = calcScores(answers);
  const typeCode = getType(scores);
  const typeData = mbtiTypes[typeCode] || {};
  const report = mbtiReports[typeCode] || {};

  const overview = report.summary || typeData.summary || '';
  const coreTraits = Array.isArray(report.coreTraits) ? report.coreTraits : [];
  const strengths = Array.isArray(report.strengths) ? report.strengths : [];
  const challenges = Array.isArray(report.challenges) ? report.challenges : [];
  const career = report.career || {};
  const careerIdeal = Array.isArray(career.ideal) ? career.ideal : [];
  const careerAvoid = Array.isArray(career.avoid) ? career.avoid : [];
  const relationships = report.relationships || {};
  const relTips = Array.isArray(relationships.tips) ? relationships.tips : [];
  const growth = report.growth || {};
  const exercises = Array.isArray(growth.exercises) ? growth.exercises : [];
  const famous = Array.isArray(report.famousExamples) ? report.famousExamples : [];
  const stack = report.cognitiveStack || {};

  const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title={`${typeCode} ${typeData.name || ''} 深度人格报告 | MBTI 16型人格测试`}
        description={`查看你的 ${typeCode} ${typeData.name || ''} 深度报告：认知功能、核心优势、职业发展、人际关系与个人成长指南。`}
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
              返回
            </button>
            <span className="text-sm font-semibold text-gray-700">深度个人报告</span>
            <button
              onClick={() => window.print()}
              className="text-gray-400 hover:text-gray-600 text-sm"
              title="打印报告"
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
          <div className="text-5xl mb-3">{typeData.emoji || report.meta?.icon || '🧩'}</div>
          <div className="text-xs text-white/60 mb-2">{today} · 生成</div>
          <h1 className="text-2xl font-bold mb-2">MBTI 深度人格报告</h1>
          <div className="text-5xl font-extrabold my-4 tracking-widest">{typeCode}</div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-2">
            {typeData.name || typeCode}
          </div>
          {report.meta?.tagline && (
            <p className="text-sm text-white/70 mt-3 max-w-xs mx-auto italic">
              「{report.meta.tagline}」
            </p>
          )}
        </div>

        {/* Section 1: Overview */}
        <div className="px-5 -mt-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
            <SectionTitle icon="📋">人格总览</SectionTitle>
            <p className="text-sm text-gray-600 leading-relaxed">{overview}</p>
            {report.meta?.oneLiner && (
              <div className="mt-4 bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-sm text-primary-dark leading-relaxed">{report.meta.oneLiner}</p>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Dimension Bars */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="🎯">四维度详解</SectionTitle>
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
                        偏向 {preference.label} · {score > 50 ? score : 100 - score}%
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

        {/* Section 3: Cognitive Stack */}
        {STACK_ORDER.some((s) => stack[s.key]) && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="🧠">认知功能栈</SectionTitle>
              <div className="space-y-4">
                {STACK_ORDER.map((s) => {
                  const fn = stack[s.key];
                  if (!fn) return null;
                  return (
                    <div key={s.key} className="border-l-2 border-primary/30 pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-white bg-primary rounded px-1.5 py-0.5">{s.badge}</span>
                        <span className="text-sm font-semibold text-gray-800">{fn.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{fn.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Core Traits */}
        {coreTraits.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="✨">核心特质</SectionTitle>
              <div className="space-y-3">
                {coreTraits.map((t, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">{t.label}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{t.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 5: Strengths */}
        {strengths.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💪">核心优势</SectionTitle>
              <ul className="space-y-2">
                {strengths.map((s, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="font-bold text-primary mt-0.5">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Section 6: Challenges */}
        {challenges.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="⚠️">需要注意的挑战</SectionTitle>
              <ul className="space-y-2">
                {challenges.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="font-bold text-amber-500 mt-0.5">{i + 1}.</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Section 7: Career */}
        {(careerIdeal.length > 0 || career.sweetSpot || careerAvoid.length > 0) && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💼">职业发展建议</SectionTitle>
              {career.sweetSpot && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{career.sweetSpot}</p>
              )}
              {careerIdeal.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-green-600 mb-2">✅ 适合的职业方向</h4>
                  <div className="flex flex-wrap gap-2">
                    {careerIdeal.map((c, i) => (
                      <span key={i} className="text-xs text-gray-600 bg-green-50 rounded-full px-3 py-1">{c}</span>
                    ))}
                  </div>
                </div>
              )}
              {careerAvoid.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-red-500 mb-2">⚠️ 可能不适合</h4>
                  <ul className="space-y-1">
                    {careerAvoid.map((c, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                        <span className="text-red-300">✗</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section 8: Relationships */}
        {(relationships.overview || relationships.asFriend || relationships.asPartner || relTips.length > 0) && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="💑">人际关系与沟通</SectionTitle>
              {relationships.overview && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{relationships.overview}</p>
              )}
              {relationships.asFriend && (
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">👥 作为朋友</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{relationships.asFriend}</p>
                </div>
              )}
              {relationships.asPartner && (
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">❤️ 作为伴侣</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{relationships.asPartner}</p>
                </div>
              )}
              {relTips.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-4 mt-2">
                  <h4 className="text-xs font-semibold text-gray-600 mb-2">💡 关系小贴士</h4>
                  <ul className="space-y-1.5">
                    {relTips.map((t, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                        <span className="font-bold text-primary">{i + 1}.</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section 9: Growth */}
        {(growth.path || exercises.length > 0) && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="🌱">个人成长建议</SectionTitle>
              {growth.path && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{growth.path}</p>
              )}
              {exercises.length > 0 && (
                <div className="space-y-3">
                  {exercises.map((ex, i) => (
                    <div key={i} className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                      <h4 className="text-sm font-semibold text-primary-dark mb-1">{ex.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{ex.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section 10: Famous Examples */}
        {famous.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="🌟">同类型知名人物</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {famous.map((f, i) => (
                  <span key={i} className="text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1">{f}</span>
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
                  title: `我的MBTI类型是 ${typeCode} ${typeData.name || ''}`,
                  text: `我刚完成了MBTI 16型人格测试，我的类型是 ${typeCode} ${typeData.name || ''}！来看看你是什么类型？`,
                  url: 'https://haltsp.com/mbti',
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(
                  `我刚完成了MBTI 16型人格测试，我的类型是 ${typeCode} ${typeData.name || ''}！来看看你是什么类型？https://haltsp.com/mbti`
                ).then(() => alert('链接已复制，分享给朋友吧！'));
              }
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 text-primary font-semibold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            📤 分享报告
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 pb-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25 mb-4"
          >
            返回首页
          </button>
          <p className="text-xs text-gray-300 leading-relaxed">
            本报告基于 Myers-Briggs Type Indicator 理论改编。
            <br />
            测试结果仅供自我了解参考，不作为临床诊断依据。
            <br />
            如需专业帮助，请咨询持证心理咨询师。
          </p>
          <p className="text-xs text-gray-300 mt-4">
            {today} · MBTI 深度个人报告 · 第 1 版
          </p>
        </div>
      </div>
    </div>
  );
}
