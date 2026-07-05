import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, OPTIONS } from '../../data/mbtiQuestions.en';
import ProgressBar from '../../components/ProgressBar';
import SeoHead from '../../components/SeoHead';

export default function MbtiTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const lang = (navigator.language || '').toLowerCase();
    if (lang.startsWith('zh')) {
      window.location.replace('/mbti/test');
    }
  }, []);

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const hasAnswer = answers[question.id] !== undefined;
  const answeredCount = Object.keys(answers).length;

  const goNext = useCallback(() => {
    if (!hasAnswer && currentIndex < questions.length) return;
    if (isLast) {
      navigate('/en/mbti/result', { state: { answers } });
      return;
    }
    setCurrentIndex((i) => i + 1);
  }, [hasAnswer, isLast, currentIndex, navigate, answers]);

  const goPrev = useCallback(() => {
    if (currentIndex === 0) return;
    setCurrentIndex((i) => i - 1);
  }, [currentIndex]);

  const selectOption = useCallback(
    (value) => {
      const updated = { ...answers, [question.id]: value };
      setAnswers(updated);
      setTimeout(() => {
        if (isLast) {
          navigate('/en/mbti/result', { state: { answers: updated } });
        } else {
          setCurrentIndex((i) => i + 1);
        }
      }, 350);
    },
    [question.id, isLast, answers, navigate]
  );

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen flex flex-col px-5 py-6 max-w-lg mx-auto w-full">
      <SeoHead
        title="MBTI Personality Test | 40 Questions | 16-Type Assessment"
        description="Take the MBTI personality test. 40 questions, 5-point scale. Discover your preferences across E/I, S/N, T/F, J/P dimensions."
        canonical="https://haltsp.com/en/mbti/test"
      />
      <h1 className="text-sm font-semibold text-gray-800 text-center">MBTI 16 Personality Test</h1>
      {/* Language + Header */}
      <div className="flex justify-end mb-2">
        <a href="/mbti/test" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">🌐 中文</a>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate('/en/mbti')}
            className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Exit
          </button>
          <span className="text-xs text-gray-400">
            {answeredCount}/{questions.length} answered
          </span>
        </div>
        <ProgressBar current={answeredCount} total={questions.length} />
      </div>

      {/* Question card */}
      <div className="flex-1 flex flex-col" key={question.id}>
        {/* Question number */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            Question {currentIndex + 1}
          </span>
          <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
            {question.text}
          </h2>
        </div>

        {/* Options */}
        <div className="flex-1 space-y-2.5">
          {OPTIONS.map((opt) => {
            const isSelected = answers[question.id] === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => selectOption(opt.value)}
                className={`w-full py-3.5 px-5 rounded-xl text-left text-[15px] font-medium transition-all duration-200 active:scale-[0.98] border
                  ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                      : 'bg-white text-gray-700 border-gray-100 hover:border-primary/30 hover:bg-primary/5'
                  }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs
                    ${isSelected ? 'border-white' : 'border-gray-200'}`}
                  >
                    {opt.value}
                  </span>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-6 pb-4">
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="flex-1 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-medium active:scale-[0.98] transition-transform"
          >
            Previous
          </button>
        )}
        {isLast && allAnswered && (
          <button
            onClick={goNext}
            className="flex-1 py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
          >
            View Results →
          </button>
        )}
      </div>

      {/* Bottom hint */}
      <p className="text-center text-xs text-gray-300 pb-2">
        {hasAnswer ? 'Selected — auto-advancing...' : 'Choose the option that best describes you'}
      </p>
    </div>
  );
}
