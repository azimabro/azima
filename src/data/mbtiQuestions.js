/**
 * MBTI 40题人格测试（中文版）
 * 四个维度：EI (外向/内向), SN (感觉/直觉), TF (思考/情感), JP (判断/感知)
 * 每个维度10题，每题1-5分
 */

export const OPTIONS = [
  { value: 1, label: '非常不同意' },
  { value: 2, label: '不同意' },
  { value: 3, label: '中立' },
  { value: 4, label: '同意' },
  { value: 5, label: '非常同意' },
];

export const questions = [
  // ── EI 维度：外向 (E) vs 内向 (I) ──
  { id: 1, dim: 'EI', text: '在热闹的聚会或大型社交活动后，我感到精力充沛、心情愉悦。', side: 'E' },
  { id: 2, dim: 'EI', text: '我需要定期的独处时间来恢复能量——没有它我会感到疲惫和烦躁。', side: 'I' },
  { id: 3, dim: 'EI', text: '我习惯边说边想——通过与他人讨论，我能更清晰地梳理自己的想法。', side: 'E' },
  { id: 4, dim: 'EI', text: '比起分散注意力的群体讨论，我更偏好深度的一对一交流。', side: 'I' },
  { id: 5, dim: 'EI', text: '我喜欢成为众人瞩目的焦点，在人群面前发言让我感到自在。', side: 'E' },
  { id: 6, dim: 'EI', text: '我需要先在内心仔细思考，然后才准备分享自己的观点。', side: 'I' },
  { id: 7, dim: 'EI', text: '我拥有广泛的朋友和熟人圈，并且乐于定期结识新朋友。', side: 'E' },
  { id: 8, dim: 'EI', text: '我只有少数几个深交的朋友，比起不断扩展社交圈，我更愿意维护这些深厚的关系。', side: 'I' },
  { id: 9, dim: 'EI', text: '面对问题时，我更喜欢与他人头脑风暴，而不是独自想办法解决。', side: 'E' },
  { id: 10, dim: 'EI', text: '我发现独处活动——阅读、写作、独自散步——比社交活动更能让我恢复精力。', side: 'I' },

  // ── SN 维度：感觉 (S) vs 直觉 (N) ──
  { id: 11, dim: 'SN', text: '比起抽象的理论或推测，我更相信具体的事实和亲身体验。', side: 'S' },
  { id: 12, dim: 'SN', text: '我被宏大的思想和未来的可能性所吸引——我常常想象"可能是什么"，而不是关注"现在是什么"。', side: 'N' },
  { id: 13, dim: 'SN', text: '我偏好循序渐进的指导和经过验证的实用方法，而不是模糊的大局概述。', side: 'S' },
  { id: 14, dim: 'SN', text: '我常常能看到看似无关的想法或事件之间隐藏的模式和联系。', side: 'N' },
  { id: 15, dim: 'SN', text: '我关注当下——此刻正在发生的事情比未来可能发生的事情对我更重要。', side: 'S' },
  { id: 16, dim: 'SN', text: '我喜欢探索理论概念和哲学问题，即使它们没有直接的实用价值。', side: 'N' },
  { id: 17, dim: 'SN', text: '学习新事物时，我需要具体的例子和实际应用，而不仅仅是抽象的原理。', side: 'S' },
  { id: 18, dim: 'SN', text: '我非常依赖直觉和预感——它们经常被证明是正确的，甚至在我能解释原因之前。', side: 'N' },
  { id: 19, dim: 'SN', text: '我很注重细节，能注意到某些具体事物不对劲或不正确的地方。', side: 'S' },
  { id: 20, dim: 'SN', text: '我对重复性的任务和琐碎的细节感到厌倦——我宁愿设想新的可能性，也不愿维护现有的系统。', side: 'N' },

  // ── TF 维度：思考 (T) vs 情感 (F) ──
  { id: 21, dim: 'TF', text: '我做重要决定时主要依据逻辑、事实和客观分析，而不是个人感受。', side: 'T' },
  { id: 22, dim: 'TF', text: '做决定时，我首先关心的是结果对相关人员的影响。', side: 'F' },
  { id: 23, dim: 'TF', text: '我认为公平意味着对每个人一视同仁地应用相同的规则和标准，不论个人情况如何。', side: 'T' },
  { id: 24, dim: 'TF', text: '我优先维护人际关系的和谐——即使不同意，我也宁愿迁就而不是制造冲突。', side: 'F' },
  { id: 25, dim: 'TF', text: '我乐于接受建设性的批评和辩论——我把分歧看作磨砺思维的方式，而不是人身攻击。', side: 'T' },
  { id: 26, dim: 'TF', text: '他人的情绪会强烈地影响我——当我周围有人不开心时，我也会深深感受到。', side: 'F' },
  { id: 27, dim: 'TF', text: '比起委婉，我更看重诚实和直接——我宁愿听到残酷的真相，也不愿听到安慰的谎言。', side: 'T' },
  { id: 28, dim: 'TF', text: '我相信最好的决策来自于权衡个人价值观和同情心，而不仅仅是冷静的逻辑和效率。', side: 'F' },
  { id: 29, dim: 'TF', text: '解决问题时，我会排除情感因素，纯粹专注于寻找最有效的解决方案。', side: 'T' },
  { id: 30, dim: 'TF', text: '我很难在人际关系冷漠或情感被忽视的环境中工作。', side: 'F' },

  // ── JP 维度：判断 (J) vs 感知 (P) ──
  { id: 31, dim: 'JP', text: '当我提前制定了清晰的计划、日程或待办清单时，我会感到更踏实。', side: 'J' },
  { id: 32, dim: 'JP', text: '我宁愿保持选择的开放性，而不是过早做出决定——新的信息可能会改变我的想法。', side: 'P' },
  { id: 33, dim: 'JP', text: '当一件事尘埃落定、做出决定后，我会感到强烈的满足感——悬而未决的事情会让我心神不宁。', side: 'J' },
  { id: 34, dim: 'JP', text: '我在灵活、随性的环境中如鱼得水——严格的日程和刻板的规则让我感到被束缚。', side: 'P' },
  { id: 35, dim: 'JP', text: '我更喜欢完成一个项目后再开始下一个——同时处理太多事情会让我感到压力。', side: 'J' },
  { id: 36, dim: 'JP', text: '我在压力下往往能发挥出最佳水平，临近截止日期时——紧迫感让我专注并充满活力。', side: 'P' },
  { id: 37, dim: 'JP', text: '我不喜欢计划的临时变动——我更喜欢知道接下来会发生什么并做好准备。', side: 'J' },
  { id: 38, dim: 'JP', text: '我喜欢同时进行多个项目——多样性和新鲜感让我保持投入和动力。', side: 'P' },
  { id: 39, dim: 'JP', text: '我在有明确截止日期、规则和期望的结构化环境中茁壮成长。', side: 'J' },
  { id: 40, dim: 'JP', text: '我喜欢随时接收新信息并据此做出调整，当更好的路径出现时，我常常中途改变方向。', side: 'P' },
];

/**
 * 计算每个维度的归一化得分（0-100%）
 * scores[dim] = count>0 ? Math.round(((aScore - minScore)/(maxScore - minScore))*100) : 50
 * 其中 minScore=count*1, maxScore=count*5
 * aScore 是每个维度中第一极（E/S/T/J）的得分
 * 结果 > 50 表示偏向第一极，< 50 表示偏向第二极
 */
export function calcScores(answers) {
  const dims = ['EI', 'SN', 'TF', 'JP'];
  const firstPoles = { EI: 'E', SN: 'S', TF: 'T', JP: 'J' };
  const secondPoles = { EI: 'I', SN: 'N', TF: 'F', JP: 'P' };
  const scores = {};

  for (const dim of dims) {
    const firstPole = firstPoles[dim];
    const secondPole = secondPoles[dim];

    let firstScore = 0;
    let count = 0;

    for (const q of questions) {
      if (q.dim === dim && q.side === firstPole) {
        const val = answers[q.id] || 0;
        if (val > 0) {
          count++;
          firstScore += val;
        }
      }
    }

    if (count > 0) {
      const minScore = count * 1;
      const maxScore = count * 5;
      const normalized = Math.round(((firstScore - minScore) / (maxScore - minScore)) * 100);
      scores[dim] = Math.max(0, Math.min(100, normalized));
    } else {
      scores[dim] = 50;
    }
  }

  return scores;
}

/**
 * 根据维度得分返回四字母 MBTI 类型代码
 * scores: { EI: number, SN: number, TF: number, JP: number }
 * > 50 偏向第一极 (E/S/T/J)，<= 50 偏向第二极 (I/N/F/P)
 */
export function getType(scores) {
  const typeLetters = [];
  typeLetters.push((scores.EI || 0) > 50 ? 'E' : 'I');
  typeLetters.push((scores.SN || 0) > 50 ? 'S' : 'N');
  typeLetters.push((scores.TF || 0) > 50 ? 'T' : 'F');
  typeLetters.push((scores.JP || 0) > 50 ? 'J' : 'P');
  return typeLetters.join('');
}
