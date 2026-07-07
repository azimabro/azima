import { useLocation, useNavigate } from 'react-router-dom';
import { calcTotalScore, calcDimensions, getScoreLevel, DIMENSIONS } from '../data/questions';
import RadarChart from '../components/RadarChart';
import SharePoster from '../components/SharePoster';
import SeoHead from '../components/SeoHead';

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  // If no answers, redirect to test
  if (Object.keys(answers).length === 0) {
    navigate('/test', { replace: true });
    return null;
  }

  const totalScore = calcTotalScore(answers);
  const maxScore = 23 * 5; // 115
  const dimScores = calcDimensions(answers);
  const { level, emoji, color } = getScoreLevel(totalScore);

  // Find strongest dimension
  const strongestDim = Object.entries(dimScores).sort((a, b) => b[1] - a[1])[0];
  const weakestDim = Object.entries(dimScores).sort((a, b) => a[1] - b[1])[3];

  // Dimension interpretations
  const dimInterpretations = {
    emotional: {
      high: '你对情绪刺激的反应非常敏锐。这让你拥有丰富的内在体验，但也意味着你更容易被负面情绪淹没。学会情绪调节是你最重要的课题。',
      mid: '你有一定程度的情绪敏感性，能在需要时调动共情能力，但不会被情绪完全裹挟。这是一种相对平衡的状态。',
      low: '你的情绪稳定性较强，不容易受到外部情绪波动的影响。在高压环境下这是优势，但你可能需要刻意练习共情和情绪觉察。',
    },
    sensory: {
      high: '你对感官刺激异常敏感——光线、声音、气味、触感都能被你精细地捕捉到。这让你的感官世界比常人丰富，但也让你在嘈杂环境中容易过载。',
      mid: '你对感官刺激有正常的敏感度，能在大多数环境中舒适地生活，不会被日常感官信息所困扰。',
      low: '你对感官刺激不太敏感，在嘈杂或刺激强烈的环境中也能保持舒适。这是优势，但你可能不太容易注意到环境中的细节之美。',
    },
    social: {
      high: '你对他人的情绪和社交环境的变化非常敏感。你是天生的"情绪雷达"，但也容易被他人的情绪所消耗。建立边界感是你的核心课题。',
      mid: '你在社交中能感知到他人的情绪，但不会过度卷入。这是一种健康的社交敏感水平。',
      low: '你在社交中相对独立，不容易被群体情绪左右。这让你在决策时更理性，但有时可能显得不够"会读空气"。',
    },
    aesthetic: {
      high: '你对美、艺术和生活中的精微之美有着超越常人的感知力。音乐、文字、画面都能深刻触动你。这是高敏感人格给的最珍贵的礼物之一。',
      mid: '你对艺术和美有一定的欣赏能力，能够享受审美体验，但不会过度沉浸在感性世界中。',
      low: '你更注重实用和效率而非审美体验。这在某些领域是优势，但你可能错过了生活中许多微小的美好。',
    },
  };

  return (
    <div className="min-h-screen pb-10 page-enter">
      <SeoHead
        title="你的HSP自测结果 | 高敏感人格测试"
        description={`总分${totalScore}/${maxScore}，等级${level}。查看四维度分析：情绪敏感、感官敏感、社交敏感、审美敏感。了解你的高敏感人格画像。`}
        canonical="https://haltsp.com/result"
      />
      <div className="max-w-lg mx-auto w-full">
        {/* Score Banner */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-8 pb-10 text-center text-white rounded-b-[2rem] shadow-lg">
          <div className="text-5xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-bold mb-1 text-white">
            {level}
          </h1>
          <div className="text-4xl font-extrabold my-3 text-white">
            {totalScore}
            <span className="text-lg font-normal text-white/60"> / {maxScore}</span>
          </div>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
            {totalScore >= 80 && '你是典型的高敏感者。你的神经系统天生就比大多数人更精细、更深入。这不是弱点，是你独特的操作系统。'}
            {totalScore >= 60 && totalScore < 80 && '你具有较高的敏感度，在很多方面比常人感知更深。你可以从了解 HSP 中获得很多自我理解。'}
            {totalScore >= 40 && totalScore < 60 && '你处于中等敏感水平，在某些方面敏感，某些方面不敏感。这是一个很好的平衡状态。'}
            {totalScore < 40 && '你的敏感度相对较低，不太容易被外部刺激影响。这让你在很多环境下更加从容。'}
          </p>
        </div>

        {/* Radar Chart Section */}
        <div className="px-5 -mt-5">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4 text-center">四维度分析</h3>
            <RadarChart scores={dimScores} />

            {/* Dimension bars */}
            <div className="mt-5 space-y-3">
              {Object.entries(DIMENSIONS).map(([key, dim]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-gray-600">
                      {dim.icon} {dim.name}
                    </span>
                    <span className="text-xs font-bold" style={{ color: dim.color }}>
                      {dimScores[key]}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${dimScores[key]}%`,
                        backgroundColor: dim.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Key insights */}
            <div className="mt-5 p-4 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">🔍 关键洞察</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">
                <strong>最强维度：{DIMENSIONS[strongestDim[0]].icon} {DIMENSIONS[strongestDim[0]].name}（{strongestDim[1]}%）</strong>
                <br />
                {dimInterpretations[strongestDim[0]][strongestDim[1] >= 65 ? 'high' : strongestDim[1] >= 40 ? 'mid' : 'low']}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>相对较弱：{DIMENSIONS[weakestDim[0]].icon} {DIMENSIONS[weakestDim[0]].name}（{weakestDim[1]}%）</strong>
                <br />
                {dimInterpretations[weakestDim[0]][weakestDim[1] >= 65 ? 'high' : weakestDim[1] >= 40 ? 'mid' : 'low']}
              </p>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="px-5 mt-5">
          <SharePoster
            totalScore={totalScore}
            maxScore={maxScore}
            level={level}
            dimScores={dimScores}
          />
        </div>

        {/* Deep Report CTA */}
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl border border-primary/20 p-5 text-center">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-base font-bold text-gray-800 mb-1">查看深度个人报告</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              基于你的 23 项回答，我们为你生成了一份个性化深度解读报告，包含：
            </p>
            <ul className="text-left text-xs text-gray-600 space-y-1.5 mb-5 max-w-xs mx-auto">
              <li>📊 每个维度的详细分析与生活场景解读</li>
              <li>🎯 基于你分数区间的个性化行动建议</li>
              <li>📚 专属书单推荐</li>
              <li>💼 职场 / 亲密关系 / 自我照顾实操指南</li>
              <li>📅 为期 30 天的敏感力提升计划</li>
            </ul>
            <button
              className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-lg active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
              onClick={() => navigate('/report', { state: { answers } })}
            >
              查看我的完整报告 →
            </button>
          </div>
        </div>

        {/* Retake */}
        <div className="px-5 mt-4 text-center">
          <button
            onClick={() => navigate('/test')}
            className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-500"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
}
