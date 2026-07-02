/**
 * MBTI 40-Question Personality Test (English)
 * 4 dimensions: EI (Extraversion/Introversion), SN (Sensing/Intuition), TF (Thinking/Feeling), JP (Judging/Perceiving)
 * 10 questions per dimension, each scored 1-5
 */

export const OPTIONS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const questions = [
  // ── EI Dimension: Extraversion (E) vs Introversion (I) ──
  { id: 1, dim: 'EI', text: 'I feel energized and uplifted after spending time at a lively party or large social gathering.', side: 'E' },
  { id: 2, dim: 'EI', text: 'I need regular quiet time alone to recharge — without it, I feel drained and irritable.', side: 'I' },
  { id: 3, dim: 'EI', text: 'I tend to think out loud — talking through ideas with others helps me clarify what I actually think.', side: 'E' },
  { id: 4, dim: 'EI', text: 'I prefer deep one-on-one conversations over group discussions where attention is scattered.', side: 'I' },
  { id: 5, dim: 'EI', text: 'I enjoy being the center of attention and feel comfortable speaking in front of a crowd.', side: 'E' },
  { id: 6, dim: 'EI', text: 'I process my thoughts internally — I need to think carefully before I am ready to share my views.', side: 'I' },
  { id: 7, dim: 'EI', text: 'I have a wide circle of friends and acquaintances and enjoy meeting new people regularly.', side: 'E' },
  { id: 8, dim: 'EI', text: 'I have a few close, deep friendships and prefer maintaining those over constantly expanding my social network.', side: 'I' },
  { id: 9, dim: 'EI', text: 'When I am working on a problem, I prefer to brainstorm with others rather than figure it out by myself.', side: 'E' },
  { id: 10, dim: 'EI', text: 'I find solitary activities — reading, writing, walking alone — more restorative than social events.', side: 'I' },

  // ── SN Dimension: Sensing (S) vs Intuition (N) ──
  { id: 11, dim: 'SN', text: 'I trust concrete facts and direct, hands-on experience far more than abstract theories or speculation.', side: 'S' },
  { id: 12, dim: 'SN', text: 'I am drawn to big ideas and future possibilities — I often daydream about what could be rather than focusing on what is.', side: 'N' },
  { id: 13, dim: 'SN', text: 'I prefer step-by-step instructions and practical, proven methods over vague, big-picture overviews.', side: 'S' },
  { id: 14, dim: 'SN', text: 'I often see hidden patterns and connections between seemingly unrelated ideas or events.', side: 'N' },
  { id: 15, dim: 'SN', text: 'I focus on the present moment — what is happening right now matters more to me than what might happen in the future.', side: 'S' },
  { id: 16, dim: 'SN', text: 'I enjoy exploring theoretical concepts and philosophical questions, even when they have no immediate practical use.', side: 'N' },
  { id: 17, dim: 'SN', text: 'When learning something new, I want concrete examples and real-world applications, not just abstract principles.', side: 'S' },
  { id: 18, dim: 'SN', text: 'I rely heavily on my gut instincts and hunches — they often turn out to be right even before I can explain why.', side: 'N' },
  { id: 19, dim: 'SN', text: 'I pay close attention to details and notice when something specific is out of place or incorrect.', side: 'S' },
  { id: 20, dim: 'SN', text: 'I get bored with routine tasks and repetitive details — I would rather imagine new possibilities than maintain existing systems.', side: 'N' },

  // ── TF Dimension: Thinking (T) vs Feeling (F) ──
  { id: 21, dim: 'TF', text: 'I make important decisions based primarily on logic, facts, and objective analysis rather than personal feelings.', side: 'T' },
  { id: 22, dim: 'TF', text: 'When making decisions, my first concern is how the outcome will affect the people involved.', side: 'F' },
  { id: 23, dim: 'TF', text: 'I believe fairness means applying the same rules and standards to everyone equally, regardless of individual circumstances.', side: 'T' },
  { id: 24, dim: 'TF', text: 'I prioritize maintaining harmony in my relationships — I would rather accommodate than create conflict, even when I disagree.', side: 'F' },
  { id: 25, dim: 'TF', text: 'I am comfortable with constructive criticism and debate — I see disagreement as a way to sharpen thinking, not as a personal attack.', side: 'T' },
  { id: 26, dim: 'TF', text: "Other people's emotions strongly affect me — when someone around me is upset, I feel it deeply too.", side: 'F' },
  { id: 27, dim: 'TF', text: 'I value honesty and directness more than tact — I would rather hear a hard truth than a comforting lie.', side: 'T' },
  { id: 28, dim: 'TF', text: 'I believe the best decisions come from weighing personal values and compassion, not just cold logic and efficiency.', side: 'F' },
  { id: 29, dim: 'TF', text: 'When solving a problem, I remove emotion from the equation and focus purely on finding the most effective solution.', side: 'T' },
  { id: 30, dim: 'TF', text: 'I find it difficult to work in environments where people are treated impersonally or where feelings are dismissed.', side: 'F' },

  // ── JP Dimension: Judging (J) vs Perceiving (P) ──
  { id: 31, dim: 'JP', text: 'I feel more at ease when I have a clear plan, schedule, or to-do list mapped out in advance.', side: 'J' },
  { id: 32, dim: 'JP', text: 'I prefer to keep my options open rather than committing to a decision early — new information might change my mind.', side: 'P' },
  { id: 33, dim: 'JP', text: 'I feel a strong sense of satisfaction when a decision is made and settled — unresolved matters weigh on my mind.', side: 'J' },
  { id: 34, dim: 'JP', text: 'I thrive in spontaneous, flexible environments — rigid schedules and strict routines make me feel boxed in.', side: 'P' },
  { id: 35, dim: 'JP', text: 'I prefer to finish one project completely before starting another — juggling too many things at once stresses me out.', side: 'J' },
  { id: 36, dim: 'JP', text: 'I often do my best work under pressure, with a looming deadline — the urgency focuses and energizes me.', side: 'P' },
  { id: 37, dim: 'JP', text: 'I dislike last-minute changes to plans — I prefer to know what is coming and prepare for it.', side: 'J' },
  { id: 38, dim: 'JP', text: 'I enjoy juggling multiple projects at once — variety and novelty keep me engaged and motivated.', side: 'P' },
  { id: 39, dim: 'JP', text: 'I thrive in structured environments with clear deadlines, rules, and expectations.', side: 'J' },
  { id: 40, dim: 'JP', text: 'I enjoy adapting to new information as it comes and often change course midstream when a better path appears.', side: 'P' },
];

/**
 * Calculate normalized dimension scores (0-100%)
 * scores[dim] = count>0 ? Math.round(((aScore - minScore)/(maxScore - minScore))*100) : 50
 * where minScore=count*1, maxScore=count*5
 * aScore is the score for the first pole (E/S/T/J) of each dimension
 * Result > 50 favors the first pole, < 50 favors the second pole
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
 * Determine the 4-letter MBTI type from dimension scores
 * scores: { EI: number, SN: number, TF: number, JP: number }
 * > 50 favors first pole (E/S/T/J), <= 50 favors second pole (I/N/F/P)
 */
export function getType(scores) {
  const typeLetters = [];
  typeLetters.push((scores.EI || 0) > 50 ? 'E' : 'I');
  typeLetters.push((scores.SN || 0) > 50 ? 'S' : 'N');
  typeLetters.push((scores.TF || 0) > 50 ? 'T' : 'F');
  typeLetters.push((scores.JP || 0) > 50 ? 'J' : 'P');
  return typeLetters.join('');
}
