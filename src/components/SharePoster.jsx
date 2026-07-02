import { useRef } from 'react';

/**
 * 根据总分生成人格标签
 */
function getPersonalityTag(totalScore, dimScores) {
  const sorted = Object.entries(dimScores).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];

  const tags = {
    emotional: { emoji: '🌊', label: '深度感受者', desc: '情绪如深海，感知如潮汐' },
    sensory: { emoji: '🔮', label: '精微感知者', desc: '连空气的纹理都能察觉' },
    social: { emoji: '🤲', label: '灵魂倾听者', desc: '听懂那些没说出口的话' },
    aesthetic: { emoji: '🎨', label: '生活美学家', desc: '在日常中发现诗与光' },
  };

  if (totalScore >= 80) {
    return { emoji: '🦋', label: '高敏感灵魂', desc: '天生精密的感知系统，世界以 4K 分辨率呈现', color: '#7c5cbf' };
  }
  if (totalScore >= 60) {
    return { emoji: '🌿', label: '温和敏感者', desc: '温柔而敏锐，在感性与理性间自在穿行', color: '#a78bfa' };
  }
  if (totalScore >= 40) {
    return { emoji: '🌼', label: '平衡感知者', desc: '恰到好处的敏感，张弛有度的生活', color: '#f59e0b' };
  }
  return { emoji: '🪨', label: '沉稳感知者', desc: '内心如磐，稳中见真', color: '#0ea5e9' };
}

function getPersonalityTagEn(totalScore) {
  if (totalScore >= 80) return { emoji: '🦋', label: 'Highly Sensitive Soul', desc: 'A finely-tuned perception system — the world in 4K resolution', color: '#7c5cbf' };
  if (totalScore >= 60) return { emoji: '🌿', label: 'Gentle Sensitive', desc: 'Soft yet perceptive, moving between heart and mind with grace', color: '#a78bfa' };
  if (totalScore >= 40) return { emoji: '🌼', label: 'Balanced Perceiver', desc: 'Just the right amount of sensitivity for a well-paced life', color: '#f59e0b' };
  return { emoji: '🪨', label: 'Steady Perceiver', desc: 'Solid within, finding truth in stillness', color: '#0ea5e9' };
}

export default function SharePoster({ totalScore, maxScore, level, dimScores, lang = 'zh' }) {
  const posterRef = useRef(null);

  const isEn = lang === 'en';
  const tag = isEn ? getPersonalityTagEn(totalScore) : getPersonalityTag(totalScore, dimScores);
  const t = {
    myResult: isEn ? 'My HSP Self-Test Result' : '我的高敏感人格自测结果',
    dimAnalysis: isEn ? '4-Dimension Analysis' : '四维度分析',
    basedOn: isEn ? 'Based on Dr. Elaine Aron\'s HSP Scale' : '基于 Elaine Aron 博士 HSP 量表汉化',
    tryIt: isEn ? 'Discover your sensitivity →' : '你也来测测你的敏感度 →',
    tagline: isEn ? 'HSP Self-Test · Free · 3 min' : 'HSP自测 · 免费 · 3分钟',
  };

  const dims = isEn
    ? [
        { key: 'emotional', name: 'Emotional', icon: '💙', score: dimScores.emotional, color: '#7c5cbf' },
        { key: 'sensory', name: 'Sensory', icon: '💜', score: dimScores.sensory, color: '#f59e0b' },
        { key: 'social', name: 'Social', icon: '💚', score: dimScores.social, color: '#0ea5e9' },
        { key: 'aesthetic', name: 'Aesthetic', icon: '🧡', score: dimScores.aesthetic, color: '#ec4899' },
      ]
    : [
        { key: 'emotional', name: '情绪', icon: '💙', score: dimScores.emotional, color: '#7c5cbf' },
        { key: 'sensory', name: '感官', icon: '💜', score: dimScores.sensory, color: '#f59e0b' },
        { key: 'social', name: '社交', icon: '💚', score: dimScores.social, color: '#0ea5e9' },
        { key: 'aesthetic', name: '审美', icon: '🧡', score: dimScores.aesthetic, color: '#ec4899' },
      ];

  return (
    <div>
      {/* The actual poster - uses inline styles only (no Tailwind/OKLCH) */}
      <div
        ref={posterRef}
        style={{
          width: '100%', maxWidth: '375px', margin: '0 auto',
          backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Top gradient banner */}
        <div style={{ padding: '32px 24px 24px 24px', color: '#ffffff', textAlign: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #7c5cbf 0%, #5b3e9e 100%)' }}>
          <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '80px', opacity: 0.1 }}>🦋</div>
          <div style={{ position: 'absolute', bottom: '8px', left: '16px', fontSize: '60px', opacity: 0.05 }}>🐚</div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: '36px', marginBottom: '8px' }}>{tag.emoji}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginBottom: '4px' }}>{t.myResult}</div>
            <div style={{ fontSize: '30px', fontWeight: 800, marginBottom: '4px' }}>{totalScore}<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>/115</span></div>
            <div style={{ display: 'inline-block', padding: '2px 12px', borderRadius: '999px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{level}</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginTop: '8px' }}>{tag.label}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>{tag.desc}</div>
          </div>
        </div>

        {/* Dimension bars */}
        <div style={{ padding: '20px 24px' }}>
          <div style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center', marginBottom: '12px' }}>{t.dimAnalysis}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {dims.map((d) => (
              <div key={d.key} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', width: '24px' }}>{d.icon}</span>
                <span style={{ fontSize: '12px', color: '#6b7280', width: '32px' }}>{d.name}</span>
                <div style={{ flex: 1, height: '8px', backgroundColor: '#f3f4f6', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: '999px', width: `${d.score}%`, backgroundColor: d.color }} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, width: '36px', textAlign: 'right', color: d.color }}>{d.score}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: '0 24px 20px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: '10px', color: '#d1d5db', marginBottom: '8px' }}>{t.basedOn}</div>
          <div style={{ fontSize: '12px', color: '#7c5cbf', fontWeight: 500 }}>{t.tryIt}</div>
          <div style={{ fontSize: '10px', color: '#d1d5db', marginTop: '4px' }}>{t.tagline}</div>
        </div>
      </div>

    </div>
  );
}
