/**
 * HSP 23-item Scale - Based on Elaine Aron's Highly Sensitive Person Scale
 * Four dimensions: Emotional, Sensory, Social, Aesthetic
 * Each item scored 1-5 (Strongly Disagree → Strongly Agree)
 */

export const DIMENSIONS = {
  emotional: { name: 'Emotional', icon: '💙', color: '#7c5cbf', description: 'Reactivity to emotional stimuli' },
  sensory: { name: 'Sensory', icon: '💜', color: '#f59e0b', description: 'Sensitivity to external sensory input' },
  social: { name: 'Social', icon: '💚', color: '#0ea5e9', description: 'Awareness of social cues & others\' emotions' },
  aesthetic: { name: 'Aesthetic', icon: '🧡', color: '#ec4899', description: 'Appreciation of beauty, art & subtleties' },
};

export const questions = [
  { id: 1, dimension: 'emotional', text: 'I am easily overwhelmed by strong sensory input.', reverse: false },
  { id: 2, dimension: 'sensory', text: 'I am acutely aware of subtleties in my environment.', reverse: false },
  { id: 3, dimension: 'social', text: 'Other people\'s moods affect me strongly.', reverse: false },
  { id: 4, dimension: 'sensory', text: 'I am more sensitive to pain than others.', reverse: false },
  { id: 5, dimension: 'social', text: 'During busy days, I need to withdraw and have privacy to recover.', reverse: false },
  { id: 6, dimension: 'sensory', text: 'I am particularly sensitive to the effects of caffeine.', reverse: false },
  { id: 7, dimension: 'sensory', text: 'I get easily overwhelmed by bright lights, strong smells, coarse fabrics, or loud noises.', reverse: false },
  { id: 8, dimension: 'aesthetic', text: 'I have a rich and complex inner life.', reverse: false },
  { id: 9, dimension: 'sensory', text: 'Loud noises make me feel uncomfortable.', reverse: false },
  { id: 10, dimension: 'aesthetic', text: 'I am deeply moved by the arts or music.', reverse: false },
  { id: 11, dimension: 'emotional', text: 'My nervous system sometimes feels so frazzled that I just have to be alone.', reverse: false },
  { id: 12, dimension: 'emotional', text: 'I am conscientious — I try hard to do things right.', reverse: false },
  { id: 13, dimension: 'emotional', text: 'I startle easily.', reverse: false },
  { id: 14, dimension: 'emotional', text: 'I get rattled when I have a lot to do in a short amount of time.', reverse: false },
  { id: 15, dimension: 'social', text: 'I tend to know what needs to be done to make a physical environment more comfortable for others.', reverse: false },
  { id: 16, dimension: 'social', text: 'I get annoyed when people try to get me to do too many things at once.', reverse: false },
  { id: 17, dimension: 'emotional', text: 'I try hard to avoid making mistakes or forgetting things.', reverse: false },
  { id: 18, dimension: 'sensory', text: 'I make a point to avoid violent movies and TV shows.', reverse: false },
  { id: 19, dimension: 'social', text: 'I become unpleasantly aroused when a lot is going on around me.', reverse: false },
  { id: 20, dimension: 'emotional', text: 'Being very hungry creates a strong reaction in me, disrupting my concentration or mood.', reverse: false },
  { id: 21, dimension: 'social', text: 'Changes in my life shake me up.', reverse: false },
  { id: 22, dimension: 'aesthetic', text: 'I notice and enjoy delicate or fine scents, tastes, sounds, and works of art.', reverse: false },
  { id: 23, dimension: 'sensory', text: 'I make it a high priority to arrange my life to avoid upsetting or overwhelming situations.', reverse: false },
];

export const OPTIONS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export function getScoreLevel(totalScore) {
  if (totalScore >= 80) return { level: 'Highly Sensitive', emoji: '🦋', color: 'text-primary-dark', range: '80-115' };
  if (totalScore >= 60) return { level: 'Moderately High', emoji: '🌿', color: 'text-primary', range: '60-79' };
  if (totalScore >= 40) return { level: 'Moderate', emoji: '🌼', color: 'text-warm-dark', range: '40-59' };
  return { level: 'Low Sensitivity', emoji: '🪨', color: 'text-calm-dark', range: '23-39' };
}

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

export function calcTotalScore(answers) {
  return questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
}
