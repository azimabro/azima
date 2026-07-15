import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';
import AdBanner from '../../components/AdBanner';

export default function HomePage() {
  useEffect(() => {
    if (sessionStorage.getItem('lang_checked')) return;
    sessionStorage.setItem('lang_checked', '1');
    try {
      const stored = localStorage.getItem('lang');
      const lang = stored || (navigator.language || '').toLowerCase();
      if (lang.startsWith('zh')) {
        window.location.replace('/');
      }
    } catch (e) {
      const lang = (navigator.language || '').toLowerCase();
      if (lang.startsWith('zh')) window.location.replace('/');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <SeoHead
        title="HSP Self-Test | Free Online Test | Discover Your Sensitivity Score"
        description="Based on Dr. Elaine Aron's HSP Scale. 23 questions, 5-point scale, 4-dimension analysis. Take the free HSP test and understand your sensitivity profile."
        canonical="https://haltsp.com/en"
      />
      <div className="flex justify-between px-5 pt-3 max-w-lg mx-auto w-full">
        <Link to="/en/mbti" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary">🧩 16 Personalities</Link>
        <button onClick={() => { try { localStorage.setItem('lang', 'zh'); } catch(e) {} window.location.href = '/'; }} className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">🌐 中文</button>
      </div>
      <div className="flex-1 flex flex-col justify-center px-5 py-10 max-w-lg mx-auto w-full">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="text-3xl">🦋</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            HSP Self-Test
          </h1>
          <p className="text-sm text-gray-500 mt-1">Highly Sensitive Person</p>
        </div>

        {/* Hook */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Have you ever been told you're <b className="text-primary">"too sensitive"</b>?
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>You feel other people's emotions deeply — a sad movie stays with you for days</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>Noisy environments drain your energy — solitude is how you recharge</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>You notice subtle details others miss — light, sound, scent, a shift in someone's tone</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            It's not a flaw. It's your <b className="text-primary-dark">factory setting</b>.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/en/test"
          className="block w-full py-4 bg-primary text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform hover:bg-primary-dark"
        >
          Start Test · 3 min
        </Link>

        {/* Trust */}
        <div className="text-center mt-4 text-xs text-gray-400 space-y-1">
          <p>Based on Dr. Elaine Aron's HSP Scale</p>
          <p>23 Questions · 5-Point Scale · 4-Dimension Analysis</p>
          <p className="mt-2 text-gray-300">
            <span className="inline-block mr-1">🔒</span>
            Your responses stay on your device — nothing is uploaded
          </p>
        </div>
      </div>

      {/* Info cards */}
      <div className="px-5 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
          About HSP
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="text-sm font-semibold text-gray-800">15-20%</h3>
            <p className="text-xs text-gray-400 mt-0.5">Of the population — you're not alone</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="text-sm font-semibold text-gray-800">Innate Trait</h3>
            <p className="text-xs text-gray-400 mt-0.5">Not a disorder — nothing to "fix"</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-sm font-semibold text-gray-800">Deep Processing</h3>
            <p className="text-xs text-gray-400 mt-0.5">Your brain processes information more thoroughly</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">💪</div>
            <h3 className="text-sm font-semibold text-gray-800">A Superpower</h3>
            <p className="text-xs text-gray-400 mt-0.5">Empathy, insight, and creativity amplified</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="mb-4">
            <AdBanner slot="4455002909" style={{ minHeight: '60px' }} />
          </div>
          <Link to="/en/articles" className="block bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary-dark">Browse HSP Knowledge Base</h3>
                <p className="text-xs text-gray-500 mt-0.5">What is HSP, common signs, self-care guide, FAQ</p>
              </div>
              <span className="text-primary/50 text-sm">→</span>
            </div>
          </Link>

          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pt-2 text-center">Featured Articles</h2>
          <Link to="/en/blog/what-is-hsp" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">What Is a Highly Sensitive Person (HSP)?</h3>
                <p className="text-xs text-gray-400 mt-0.5">It's not that you're too soft — you're wired differently</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/en/blog/hsp-traits" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">10 Everyday Signs You Might Be an HSP</h3>
                <p className="text-xs text-gray-400 mt-0.5">From senses to emotions — your factory settings are different</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
