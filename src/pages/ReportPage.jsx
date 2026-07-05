import { useLocation, useNavigate } from 'react-router-dom';
import { calcTotalScore, calcDimensions, getScoreLevel, DIMENSIONS } from '../data/questions';
import {
  LEVEL_INTERPRETATIONS,
  DIMENSION_REPORTS,
  getPatternAnalysis,
  BOOK_RECOMMENDATIONS,
  get30DayPlan,
  LIFESTYLE_ADVICE,
} from '../data/reportContent';
import RadarChart from '../components/RadarChart';
import SeoHead from '../components/SeoHead';

function getLevelKey(totalScore) {
  if (totalScore >= 80) return 'high';
  if (totalScore >= 60) return 'midHigh';
  if (totalScore >= 40) return 'mid';
  return 'low';
}

function getDimLevel(score) {
  if (score >= 65) return 'high';
  if (score >= 40) return 'mid';
  return 'low';
}

function SectionTitle({ icon, children }) {
  return (
    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
      <span className="text-xl">{icon}</span>
      {children}
    </h2>
  );
}

export default function ReportPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  if (Object.keys(answers).length === 0) {
    navigate('/test', { replace: true });
    return null;
  }

  const totalScore = calcTotalScore(answers);
  const maxScore = 23 * 5;
  const dimScores = calcDimensions(answers);
  const { level, emoji, color } = getScoreLevel(totalScore);

  const reportSeoHead = (
    <SeoHead
      title="HSP深度个人报告 | 高敏感人格测试"
      description={`总分${totalScore}/${maxScore}，等级${level}。包含四维度深度解读、敏感模式分析、职业生涯建议、30天敏感力提升计划。`}
      canonical="https://haltsp.com/report"
    />
  );
  const levelKey = getLevelKey(totalScore);
  const levelData = LEVEL_INTERPRETATIONS[levelKey];
  const patterns = getPatternAnalysis(dimScores);
  const plan30 = get30DayPlan(totalScore);

  // Lifestyle advice by tier
  const careerTier = levelKey === 'high' ? 'high' : levelKey === 'midHigh' ? 'midHigh' : 'mid';
  const relTier = levelKey === 'high' ? 'high' : levelKey === 'midHigh' ? 'midHigh' : 'mid';
  const selfCareTier = levelKey === 'high' ? 'high' : levelKey === 'midHigh' ? 'midHigh' : 'mid';

  const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      {reportSeoHead}
      <div className="min-h-screen bg-gray-50 page-enter">
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

        {/* ============ COVER / SCORE OVERVIEW ============ */}
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark px-5 pt-10 pb-10 text-white text-center">
          <div className="text-5xl mb-3">{emoji}</div>
          <div className="text-xs text-white/60 mb-2">{today} · 生成</div>
          <h1 className="text-2xl font-bold mb-2">高敏感人格深度报告</h1>
          <div className="text-5xl font-extrabold my-4">{totalScore}<span className="text-xl font-normal text-white/60">/{maxScore}</span></div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-2">
            {level}
          </div>
          <p className="text-sm text-white/70 mt-3 max-w-xs mx-auto">
            {levelData.title}
          </p>
        </div>

        {/* ============ SECTION 1: 总体解读 ============ */}
        <div className="px-5 -mt-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
            <SectionTitle icon="📋">你的敏感度总览</SectionTitle>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {levelData.summary}
            </p>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 rounded-xl p-3">
                <h4 className="text-xs font-semibold text-green-700 mb-2">💪 你的优势</h4>
                <ul className="text-xs text-green-800 space-y-1">
                  {levelData.strengths.map((s, i) => (
                    <li key={i} className="leading-relaxed">• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-3">
                <h4 className="text-xs font-semibold text-amber-700 mb-2">⚠️ 挑战与注意</h4>
                <ul className="text-xs text-amber-800 space-y-1">
                  {levelData.challenges.map((c, i) => (
                    <li key={i} className="leading-relaxed">• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key message */}
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <p className="text-sm text-primary-dark leading-relaxed font-medium">
                💡 {levelData.keyMessage}
              </p>
            </div>
          </div>
        </div>

        {/* ============ SECTION 2: 四维度雷达图 ============ */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="🎯">四维度雷达图</SectionTitle>
            <RadarChart scores={dimScores} />
            <p className="text-xs text-gray-400 text-center mt-2">
              数值越高代表该维度越敏感（百分制）
            </p>
          </div>
        </div>

        {/* ============ SECTION 3: 四维度深度解读 ============ */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="🔬">四维度深度解读</SectionTitle>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              以下基于你在每个维度的得分，提供个性化的解读和建议。请特别关注你的高分维度——它们既是你的超能力也是你的"耗能大户"。
            </p>

            <div className="space-y-6">
              {Object.entries(DIMENSION_REPORTS).map(([key, dimReport]) => {
                const score = dimScores[key];
                const lvl = getDimLevel(score);
                const data = dimReport.levels[lvl];
                const dimMeta = DIMENSIONS[key];

                return (
                  <div key={key} className="border border-gray-100 rounded-xl overflow-hidden">
                    {/* Dim header */}
                    <div className="p-4 flex items-center justify-between" style={{ backgroundColor: dimMeta.color + '08' }}>
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{dimReport.icon}</span>
                        <div>
                          <h4 className="text-sm font-bold text-gray-800">{dimReport.name}</h4>
                          <p className="text-[10px] text-gray-500">{dimReport.whatItMeasures}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold" style={{ color: dimMeta.color }}>{score}%</div>
                        <div className="text-[10px] text-gray-500">{data.label}</div>
                      </div>
                    </div>

                    {/* Dim body */}
                    <div className="p-4">
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{data.description}</p>

                      {/* Scenarios */}
                      <div className="mb-3">
                        <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">你可能经历的日常场景</h5>
                        <ul className="space-y-1.5">
                          {data.scenarios.map((s, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                              <span className="text-gray-300 mt-0.5">▸</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h5 className="text-xs font-semibold text-gray-600 mb-2">💡 给你的建议</h5>
                        <ul className="space-y-1.5">
                          {data.tips.map((t, i) => (
                            <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                              <span className="font-bold text-primary">{i + 1}.</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============ SECTION 4: 跨维度模式分析 ============ */}
        {patterns.length > 0 && (
          <div className="px-5 mb-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <SectionTitle icon="🧩">你的敏感模式</SectionTitle>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                只看单一维度是不够的。以下分析了你的维度组合所形成的行为模式——就像用不同大小的声音调出的和弦，你的敏感是一组相互关联的系统。
              </p>
              <div className="space-y-3">
                {patterns.map((p, i) => (
                  <div key={i} className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <h4 className="text-sm font-bold text-primary-dark mb-1.5">{p.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============ SECTION 5: 生活方式建议 ============ */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="🧭">个性化行动指南</SectionTitle>

            {/* Career */}
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-800 mb-2">💼 职场建议</h4>
              {LIFESTYLE_ADVICE.career[careerTier].suitable.length > 0 && (
                <div className="mb-2">
                  <span className="text-xs font-semibold text-green-600">✅ 适合你的工作类型</span>
                  <ul className="mt-1 space-y-0.5">
                    {LIFESTYLE_ADVICE.career[careerTier].suitable.map((s, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-green-400">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {LIFESTYLE_ADVICE.career[careerTier].avoid.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-red-500">⚠️ 可能需要谨慎选择</span>
                  <ul className="mt-1 space-y-0.5">
                    {LIFESTYLE_ADVICE.career[careerTier].avoid.map((s, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-red-300">✗</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Relationships */}
            <div className="mb-5">
              <h4 className="text-sm font-bold text-gray-800 mb-2">💑 关系中的建议</h4>
              <ul className="space-y-1.5">
                {LIFESTYLE_ADVICE.relationships[relTier].map((r, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="text-primary font-bold">{i + 1}.</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-care */}
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-2">🧘 自我照顾清单</h4>
              <ul className="space-y-1.5">
                {LIFESTYLE_ADVICE.selfCare[selfCareTier].map((s, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                    <span className="text-primary font-bold">{i + 1}.</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ SECTION 6: 书单推荐 ============ */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="📚">专属书单推荐</SectionTitle>
            {levelKey === 'high' || levelKey === 'midHigh' ? (
              <>
                <BookList title="入门必读" books={BOOK_RECOMMENDATIONS.beginner} />
                <BookList title="深入探索" books={BOOK_RECOMMENDATIONS.intermediate} />
                <BookList title="进阶提升" books={BOOK_RECOMMENDATIONS.advanced} />
              </>
            ) : (
              <>
                <BookList title="推荐阅读" books={BOOK_RECOMMENDATIONS.beginner} />
                <BookList title="延展阅读" books={BOOK_RECOMMENDATIONS.intermediate} />
              </>
            )}
          </div>
        </div>

        {/* ============ SECTION 7: 30天计划 ============ */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <SectionTitle icon="📅">30 天敏感力提升计划</SectionTitle>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              以下是为期 4 周的渐进式练习计划。每天只需 10-30 分钟。关键是持续而非完美——即使你某天没完成，第二天继续就好。
            </p>

            <div className="space-y-4">
              {plan30.themes.map((week, wi) => (
                <div key={wi} className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="bg-primary/5 px-4 py-2.5">
                    <h4 className="text-sm font-bold text-primary-dark">
                      第 {week.week} 周：{week.theme}
                    </h4>
                    <p className="text-[10px] text-gray-500">{week.focus}</p>
                  </div>
                  <div className="p-3">
                    <div className="space-y-1.5">
                      {plan30.tasks[wi].map((task, ti) => (
                        <div key={ti} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            {ti + 1}
                          </span>
                          <span>第 {ti + 1} 天：{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ FOOTER ============ */}
        <div className="px-5 pb-8 text-center">
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => navigate('/result')}
              className="flex-1 py-3 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
            >
              返回结果页
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-3 rounded-xl bg-white border border-gray-200 text-gray-600 font-semibold active:scale-[0.98] transition-transform"
            >
              保存/打印报告
            </button>
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: '高敏感人格(HSP)深度报告', text: '我刚完成了HSP自测，这份深度报告让我更了解自己。你也来测测？', url: 'https://haltsp.com' }).catch(() => {});
              } else {
                navigator.clipboard.writeText('我刚完成了HSP高敏感人格自测，来看看你的敏感度分数：https://haltsp.com').then(() => alert('链接已复制，分享给朋友吧！'));
              }
            }}
            className="w-full py-3 mb-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/20 border border-primary/20 text-primary font-semibold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            📤 分享给朋友
          </button>
          <p className="text-xs text-gray-300 leading-relaxed">
            本报告基于 Elaine Aron 博士的高敏感人格量表（Highly Sensitive Person Scale）汉化改编。
            <br />
            测试结果仅供自我了解参考，不作为临床诊断依据。
            <br />
            如需专业帮助，请咨询持证心理咨询师。
          </p>
          <p className="text-xs text-gray-300 mt-4">
            {today} · HSP 深度个人报告 · 第 1 版
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

/** Book list sub-component */
function BookList({ title, books }) {
  return (
    <div className="mb-3 last:mb-0">
      <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{title}</h5>
      <div className="space-y-2">
        {books.map((b, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs font-semibold text-gray-800">{b.title}</div>
            <div className="text-[10px] text-gray-400 mb-1">{b.author}</div>
            <div className="text-[10px] text-gray-500 leading-relaxed">{b.reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
