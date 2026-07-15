import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';
import AdBanner from '../../components/AdBanner';

export default function MbtiHomePage() {
  return (
    <div className="min-h-screen flex flex-col page-enter">
      <SeoHead
        title="MBTI Personality Test | Free Online | Discover Your Type"
        description="Free online MBTI personality test based on Myers-Briggs Type Indicator. 40 questions, 4 dimensions, discover your 16-type personality profile."
        canonical="https://haltsp.com/en/mbti"
      />

      {/* Top bar: HSP cross-link */}
      <div className="flex justify-start px-5 pt-3 max-w-lg mx-auto w-full">
        <Link to="/en" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
          ← HSP Test
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-5 py-10 max-w-lg mx-auto w-full">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="text-3xl">🧠</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            MBTI Personality Test
          </h1>
          <p className="text-sm text-gray-500 mt-1">Myers-Briggs Type Indicator</p>
        </div>

        {/* Hook */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Ever wondered <b className="text-primary">why you think and act</b> the way you do?
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Do you recharge by being around people — or by having time alone?</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Do you trust concrete facts or gut feelings when making decisions?</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Do you prefer a structured plan — or keeping your options open?</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Discover your 4-letter type among the <b className="text-primary-dark">16 personality profiles</b>.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/en/mbti/test"
          className="block w-full py-4 bg-primary text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform hover:bg-primary-dark"
        >
          Start Test · 5 min
        </Link>

        {/* Trust signals */}
        <div className="text-center mt-4 text-xs text-gray-400 space-y-1">
          <p>Based on Myers-Briggs Type Indicator framework</p>
          <p>40 Questions · 5-Point Scale · 4-Dimension Analysis</p>
          <p className="mt-2 text-gray-300">
            <span className="inline-block mr-1">🔒</span>
            Your responses stay on your device — nothing is uploaded
          </p>
        </div>
      </div>

      {/* Bottom info cards */}
      <div className="px-5 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
          About MBTI
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🧩</div>
            <h3 className="text-sm font-semibold text-gray-800">16 Types</h3>
            <p className="text-xs text-gray-400 mt-0.5">4 dichotomies form 16 unique personality profiles</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="text-sm font-semibold text-gray-800">Decades of Research</h3>
            <p className="text-xs text-gray-400 mt-0.5">Developed by Isabel Briggs Myers and Katharine Cook Briggs</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="text-sm font-semibold text-gray-800">Self-Knowledge</h3>
            <p className="text-xs text-gray-400 mt-0.5">Understand your strengths, blind spots, and growth path</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="text-sm font-semibold text-gray-800">Better Relationships</h3>
            <p className="text-xs text-gray-400 mt-0.5">Learn how your type interacts with others at work and in love</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="mb-4">
            <AdBanner slot="4455002909" style={{ minHeight: '100px' }} />
          </div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pt-2 text-center">Featured Articles</h2>
          <Link to="/en/mbti/blog/mbti-overview" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">What Is the MBTI 16 Personality Test?</h3>
                <p className="text-xs text-gray-400 mt-0.5">A complete beginner's guide to Myers-Briggs</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/en/mbti/blog/mbti-popular-types" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">The 4 Most Talked-About MBTI Types</h3>
                <p className="text-xs text-gray-400 mt-0.5">INFJ, INFP, ENFP, INTJ — do you fit one of these?</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/en/mbti/blog/mbti-vs-hsp" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">MBTI vs HSP: Can You Be Both?</h3>
                <p className="text-xs text-gray-400 mt-0.5">How personality types and sensory sensitivity relate</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/en/mbti/blog/intj-deep-dive" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">INTJ Deep Dive — The Rarest Type</h3>
                <p className="text-xs text-gray-400 mt-0.5">What goes on inside the INTJ mind?</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/en/mbti/blog/mbti-conflict-styles" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">How the 16 Types Fight</h3>
                <p className="text-xs text-gray-400 mt-0.5">Why you can't argue, or explode instantly</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
        </div>

        {/* Cross-link to HSP */}
        <div className="mt-6">
          <Link to="/en" className="block bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦋</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary-dark">Also try the HSP Self-Test</h3>
                <p className="text-xs text-gray-500 mt-0.5">Highly Sensitive Person Scale — are you among the 15-20%?</p>
              </div>
              <span className="text-primary/50 text-sm">→</span>
            </div>
          </Link>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link to="/en" className="text-sm text-gray-400 hover:text-gray-500 underline underline-offset-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
