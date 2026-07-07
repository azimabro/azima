import { useLocation, useNavigate } from 'react-router-dom';
import { calcScores, getType } from '../data/mbtiQuestions';
import mbtiTypes from '../data/mbtiTypes';
import SeoHead from '../components/SeoHead';

// Dimension display config
const DIM_CONFIG = [
  { key: 'EI', label: '注意力方向', left: { letter: 'E', label: '外向 E', desc: '从外部世界获取能量' }, right: { letter: 'I', label: '内向 I', desc: '从内心世界获取能量' }, color: '#3b82f6' },
  { key: 'SN', label: '认知方式', left: { letter: 'S', label: '感觉 S', desc: '关注具体事实与细节' }, right: { letter: 'N', label: '直觉 N', desc: '关注抽象模式与可能' }, color: '#10b981' },
  { key: 'TF', label: '判断方式', left: { letter: 'T', label: '思考 T', desc: '以逻辑和客观标准决定' }, right: { letter: 'F', label: '情感 F', desc: '以价值观和人际影响决定' }, color: '#f59e0b' },
  { key: 'JP', label: '生活态度', left: { letter: 'J', label: '判断 J', desc: '偏好规划与确定性' }, right: { letter: 'P', label: '感知 P', desc: '偏好灵活与开放性' }, color: '#8b5cf6' },
];

export default function MbtiResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  if (Object.keys(answers).length === 0) {
    navigate('/mbti/test', { replace: true });
    return null;
  }

  const scores = calcScores(answers);
  const typeCode = getType(scores);
  const typeData = mbtiTypes[typeCode] || {
    name: typeCode,
    emoji: '🧩',
    summary: '你拥有独特的性格组合。',
    strengths: '根据你的回答分析得出的优势。',
    careers: '适合多种职业方向。',
    famous: '',
  };

  const handleShare = () => {
    const text = `我的MBTI人格类型是 ${typeCode} ${typeData.name}！来测测你是什么类型？`;
    if (navigator.share) {
      navigator.share({ title: 'MBTI 16型人格测试', text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text + ' https://haltsp.com/mbti').then(() => alert('链接已复制，分享给朋友吧！'));
    }
  };

  return (
    <>
      <SeoHead
        title={`${typeCode} ${typeData?.name || ''} 测试结果 | MBTI 16型人格测试`}
        description={`你的MBTI人格类型是 ${typeCode} ${typeData?.name || ''}——${typeData?.summary?.slice(0, 80) || ''}`}
        canonical="https://haltsp.com/mbti/result"
      />
      <div className="min-h-screen pb-10 page-enter">
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
            <h3 className="text-sm font-semibold text-gray-800 mb-4 text-center">四维度分析</h3>
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
                      偏向 {preference.label}：{preference.desc}
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
            <h3 className="text-sm font-semibold text-gray-800 mb-3">💪 优势特质</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{typeData.strengths}</p>

            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-3">💼 适合的职业</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{typeData.careers}</p>

            {typeData.famous && (
              <>
                <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-3">🌟 知名人物</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{typeData.famous}</p>
              </>
            )}
          </div>
        </div>

        {/* Deep Report CTA */}
        <div className="px-5 mt-4">
          <div className="bg-gradient-to-br from-primary/5 to-accent/20 rounded-2xl border border-primary/20 p-5 text-center">
            <div className="text-3xl mb-2">📖</div>
            <h3 className="text-base font-bold text-gray-800 mb-1">查看深度个人报告</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              基于你的 40 项回答，我们为你生成了一份个性化深度解读报告，包含：
            </p>
            <ul className="text-left text-xs text-gray-600 space-y-1.5 mb-5 max-w-xs mx-auto">
              <li>📊 每个维度的详细分析与生活场景解读</li>
              <li>💪 你的五大优势和需要注意的五大挑战</li>
              <li>💼 职业方向建议与避坑指南</li>
              <li>💑 人际关系与沟通风格深度解读</li>
              <li>🌱 专属个人成长行动建议</li>
            </ul>
            <button
              className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-lg active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
              onClick={() => navigate('/mbti/report', { state: { answers } })}
            >
              查看我的完整报告 →
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
            📤 分享结果
          </button>
          <button
            onClick={() => navigate('/mbti/test')}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm active:scale-[0.98] transition-transform"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
