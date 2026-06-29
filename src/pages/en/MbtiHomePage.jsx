import { Link } from 'react-router-dom';

export default function MbtiHomePage() {
  return (
    <div className="min-h-screen flex flex-col page-enter">
      {/* Language switcher */}
      <div className="flex justify-end px-5 pt-3 max-w-lg mx-auto w-full">
        <a href="/mbti" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">🌐 中文</a>
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
      </div>
    </div>
  );
}
