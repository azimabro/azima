/**
 * HSP 23题量表 - 基于 Elaine Aron 高敏感人格量表汉化
 * 四个维度：情绪敏感、感官敏感、社交敏感、审美敏感
 * 每题 1-5 分（非常不同意 → 非常同意）
 */

export const DIMENSIONS = {
  emotional: { name: '情绪敏感', icon: '💙', color: '#7c5cbf', description: '对情绪刺激的反应强度' },
  sensory: { name: '感官敏感', icon: '💜', color: '#f59e0b', description: '对外部感官刺激的敏感度' },
  social: { name: '社交敏感', icon: '💚', color: '#0ea5e9', description: '对社交环境与他人情绪的感知' },
  aesthetic: { name: '审美敏感', icon: '🧡', color: '#ec4899', description: '对美、艺术与细节的敏感度' },
};

export const questions = [
  {
    id: 1,
    dimension: 'emotional',
    text: '强烈的感官刺激很容易让我感到不堪重负',
    reverse: false,
  },
  {
    id: 2,
    dimension: 'sensory',
    text: '我能敏锐地察觉环境中的细微之处',
    reverse: false,
  },
  {
    id: 3,
    dimension: 'social',
    text: '别人的情绪很容易影响到我',
    reverse: false,
  },
  {
    id: 4,
    dimension: 'sensory',
    text: '我对疼痛比一般人更敏感',
    reverse: false,
  },
  {
    id: 5,
    dimension: 'social',
    text: '在忙碌的日子里，我需要独处来恢复精力',
    reverse: false,
  },
  {
    id: 6,
    dimension: 'sensory',
    text: '我对咖啡因的作用特别敏感',
    reverse: false,
  },
  {
    id: 7,
    dimension: 'sensory',
    text: '强光、浓烈的气味、粗糙的面料或近在耳边的警笛声，都容易让我不舒服',
    reverse: false,
  },
  {
    id: 8,
    dimension: 'aesthetic',
    text: '我拥有丰富而复杂的内心世界',
    reverse: false,
  },
  {
    id: 9,
    dimension: 'sensory',
    text: '巨大的噪音会让我感到很不舒服',
    reverse: false,
  },
  {
    id: 10,
    dimension: 'aesthetic',
    text: '艺术和音乐能深深打动我',
    reverse: false,
  },
  {
    id: 11,
    dimension: 'emotional',
    text: '我的神经系统有时会疲惫到极点，只想一个人待着',
    reverse: false,
  },
  {
    id: 12,
    dimension: 'emotional',
    text: '我是一个做事很认真、尽责的人',
    reverse: false,
  },
  {
    id: 13,
    dimension: 'emotional',
    text: '我很容易受到惊吓',
    reverse: false,
  },
  {
    id: 14,
    dimension: 'emotional',
    text: '短时间内有太多事情要做，会让我感到慌乱',
    reverse: false,
  },
  {
    id: 15,
    dimension: 'social',
    text: '当别人在某个环境中感到不舒服时，我通常知道该怎么调整（比如调暗灯光或换个座位）',
    reverse: false,
  },
  {
    id: 16,
    dimension: 'social',
    text: '别人试图让我同时做太多事情，会让我感到烦躁',
    reverse: false,
  },
  {
    id: 17,
    dimension: 'emotional',
    text: '我会竭尽全力避免犯错或忘记事情',
    reverse: false,
  },
  {
    id: 18,
    dimension: 'sensory',
    text: '我会有意识地避开暴力的影视节目',
    reverse: false,
  },
  {
    id: 19,
    dimension: 'social',
    text: '身边同时发生很多事情时，我会感到不适',
    reverse: false,
  },
  {
    id: 20,
    dimension: 'emotional',
    text: '饥饿会对我产生很大的影响，无法集中注意力或情绪变差',
    reverse: false,
  },
  {
    id: 21,
    dimension: 'social',
    text: '生活中的变化会让我感到不安',
    reverse: false,
  },
  {
    id: 22,
    dimension: 'aesthetic',
    text: '我会注意到并享受细致或精美的气味、味道、声音和艺术品',
    reverse: false,
  },
  {
    id: 23,
    dimension: 'sensory',
    text: '我会尽力安排好自己的生活，避免让自己陷入混乱或不知所措的处境',
    reverse: false,
  },
];

export const OPTIONS = [
  { value: 1, label: '非常不同意' },
  { value: 2, label: '比较不同意' },
  { value: 3, label: '中立' },
  { value: 4, label: '比较同意' },
  { value: 5, label: '非常同意' },
];

/**
 * 根据各维度得分计算等级
 */
export function getScoreLevel(totalScore) {
  if (totalScore >= 80) return { level: '高度敏感', emoji: '🦋', color: 'text-primary-dark', range: '80-115' };
  if (totalScore >= 60) return { level: '中高敏感', emoji: '🌿', color: 'text-primary', range: '60-79' };
  if (totalScore >= 40) return { level: '中等敏感', emoji: '🌼', color: 'text-warm-dark', range: '40-59' };
  return { level: '低度敏感', emoji: '🪨', color: 'text-calm-dark', range: '23-39' };
}

/**
 * 计算四个维度的得分（百分制）
 */
export function calcDimensions(answers) {
  const dims = {};
  for (const d of Object.keys(DIMENSIONS)) {
    const qs = questions.filter(q => q.dimension === d);
    const maxScore = qs.length * 5;
    const rawScore = qs.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    dims[d] = Math.round((rawScore / maxScore) * 100);
  }
  return dims;
}

/**
 * 计算总分
 */
export function calcTotalScore(answers) {
  return questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
}
