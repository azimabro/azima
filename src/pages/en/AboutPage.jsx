import { Link } from 'react-router-dom';
import SeoHead from '../../components/SeoHead';

const references = [
  { title: 'Aron, E. N., & Aron, A. (1997). Sensory-Processing Sensitivity and Its Relation to Introversion and Emotionality.', source: 'Journal of Personality and Social Psychology, 73(2), 345-368.' },
  { title: 'Aron, E. N. (1996). The Highly Sensitive Person: How to Thrive When the World Overwhelms You.', source: 'Broadway Books.' },
  { title: 'Aron, E. N., Aron, A., & Jagiellowicz, J. (2012). Sensory Processing Sensitivity: A Review in the Light of the Evolution of Biological Responsivity.', source: 'Personality and Social Psychology Review, 16(3), 262-282.' },
  { title: 'Lionetti, F., Aron, A., Aron, E. N., Burns, G. L., Jagiellowicz, J., & Pluess, M. (2018). Dandelions, Tulips and Orchids: Evidence for the Existence of Low-Sensitive, Medium-Sensitive and High-Sensitive Individuals.', source: 'Translational Psychiatry, 8(1), 24.' },
  { title: 'Pluess, M. (2015). Individual Differences in Environmental Sensitivity.', source: 'Child Development Perspectives, 9(3), 138-143.' },
];

const faq = [
  { q: 'Is the HSP test on this site scientifically valid?', a: 'The HSP self-test is adapted from Dr. Elaine Aron\'s Highly Sensitive Person Scale (HSPS). The original scale has been validated by 20+ years of academic research with over 100 peer-reviewed publications. The MBTI test is adapted from the Myers-Briggs Type Indicator framework. Both are self-understanding tools, not clinical diagnostic instruments.' },
  { q: 'Who created this website?', a: 'I am a highly sensitive person. After years of hearing "you\'re too sensitive" and "don\'t overthink it," I discovered the concept of HSP and felt profoundly understood — everything about me was actually normal. I built this site to help others like me discover and accept who they are.' },
  { q: 'Is my data safe?', a: 'All data is processed entirely in your browser. We have no backend server — your test answers are never uploaded, never stored, and never shared. You can clear your browser cache at any time to remove all local data.' },
  { q: 'How does this site make money?', a: 'The site displays Google AdSense ads to cover hosting and domain costs. There are no paywalls — all tests and content are and will always remain free.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title="About Us | HSP Self-Test — The Science & Story Behind the Test"
        description="Learn about the HSP self-test website: created by a highly sensitive person based on Dr. Elaine Aron's research. All tests are free, data is processed locally, no privacy concerns."
        canonical="https://haltsp.com/en/about"
      />

      <div className="max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link to="/en" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Home
            </Link>
            <span className="text-sm font-semibold text-gray-700">About</span>
            <div className="w-10" />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-10 pb-10 text-white text-center">
          <div className="text-5xl mb-3">🦋</div>
          <h1 className="text-2xl font-bold mb-2">About This Site</h1>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
            Created by an HSP, for HSPs
          </p>
        </div>

        {/* Content */}
        <div className="px-5 -mt-4 space-y-4 pb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📖 Why I Built This</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              I am a Highly Sensitive Person (HSP). Like many HSPs, I grew up hearing labels like "too sensitive," "overthinking," and "fragile." It was not until I discovered Dr. Elaine Aron's research that I understood: my sensitivity is not a flaw — it is an innate nervous system trait.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              That feeling of "I am not alone" transformed my self-understanding. I want to help more people discover HSP and understand themselves — whether your sensitivity score is high or low, knowing your nervous system's wiring is the starting point for personal growth.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Everything on this site is and will always be <strong>completely free</strong>. Google AdSense ads help cover the minimal hosting and domain costs.
            </p>
          </div>

          {/* Scientific basis */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">🔬 Scientific Basis</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The HSP concept was developed by American psychologist <strong>Dr. Elaine Aron</strong> in the 1990s, published in top-tier academic journals including the <em>Journal of Personality and Social Psychology</em>. Key findings:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span>Approximately <strong>15-20%</strong> of the population are highly sensitive — consistent across over 100 animal species</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span>High sensitivity is not a disorder but an <strong>evolutionary adaptive strategy</strong> — the "orchid vs. dandelion" hypothesis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span>fMRI studies show HSPs exhibit <strong>broader brain activation</strong> when processing information, indicating deeper processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span>The test on this site is adapted from Dr. Aron's 27-item HSPS (Highly Sensitive Person Scale), condensed to 23 items</span>
              </li>
            </ul>
          </div>

          {/* References */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📚 Academic References</h2>
            <div className="space-y-3">
              {references.map((r, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-semibold text-gray-800">{r.title}</div>
                  <div className="text-[10px] text-gray-500 mt-1">{r.source}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{item.q}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
            <h2 className="text-base font-bold text-amber-800 mb-2">⚕️ Disclaimer</h2>
            <p className="text-xs text-amber-700 leading-relaxed">
              The HSP self-test and MBTI test on this site are for self-understanding reference only and <strong>do not constitute clinical diagnosis</strong>. If you are experiencing significant emotional distress or mental health concerns, please consult a licensed therapist or psychiatrist. A high or low score does not mean "good" or "bad" — every sensitivity level has its own unique strengths and challenges.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pb-10 text-center">
          <Link to="/en/test" className="block w-full py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25 mb-4">
            Take HSP Test →
          </Link>
          <Link to="/en" className="block text-sm text-gray-400 hover:text-gray-500">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
