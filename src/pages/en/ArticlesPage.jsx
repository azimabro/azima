import { Link } from 'react-router-dom';

const sections = [
  { id: 'what-is-hsp', icon: '🦋', title: 'What is a Highly Sensitive Person (HSP)?', content: `Highly Sensitive Person (HSP) is a term coined by Dr. Elaine Aron in the 1990s. It is not a disorder or illness — it's an innate nervous system trait found in approximately 15-20% of the population. This ratio appears consistently across humans and over 100 other animal species.

From a neuroscience perspective, HSP brains use more brain regions and do deeper processing when handling information:
• You take in richer sensory information than most people
• Your emotional experiences are deeper and more nuanced
• You consider more variables before making decisions
• You have heightened awareness of subtle changes

Evolutionary biologists believe HSPs serve as the "sentinels" of a group — noticing dangers and opportunities before others do. This explains both the challenges (easier overwhelm) and the gifts (empathy, insight, creativity).` },
  { id: 'signs', icon: '🔍', title: 'Common Signs of an HSP', content: `【Sensory】• Bothered by bright lights, loud noises, strong scents • Sensitive to rough fabrics, tags, or seams • Stronger reactions to caffeine, medication, or alcohol • Can taste subtle flavors others don't notice

【Emotional】• Emotions run deep and last long — joy is ecstatic, sadness takes time to recover from • Easily affected by others' moods • Deeply moved by art, music, nature • Startle easily

【Social】• Feel drained after large gatherings or noisy environments • Prefer deep one-on-one conversations over small talk • Quickly sense others' emotional states and social atmosphere • Solitude is recharging, not loneliness

【Cognitive】• Think through decisions thoroughly, considering many possibilities • Rich inner world and vivid imagination • Exceptional attention to detail • Tend toward depth over breadth in understanding` },
  { id: 'strength', icon: '💪', title: 'Sensitivity Is Not Weakness — It\'s Your Superpower', content: `1. Deep Empathy — You perceive what others leave unsaid, making you a better partner, friend, listener, and teammate.

2. Thorough Thinking — You consider more information before deciding, leading to more well-rounded, less error-prone choices.

3. Sharp Aesthetic Sense & Creativity — Your heightened perception of beauty fuels creativity. Many artists, musicians, writers, and designers are HSPs.

4. Risk Anticipation — You spot potential problems earlier than others — invaluable in business, project management, and safety-critical roles.

5. Loyalty & Depth — You build fewer but deeper relationships. Your conscientiousness and dedication are above average.

The goal is not to "become less sensitive." It's to manage overstimulation while fully leveraging your sensitivity as a strength.` },
  { id: 'self-care', icon: '🧘', title: 'Self-Care Guide for HSPs', content: `【Environment】• Create a sensory-friendly home: warm lighting, soft fabrics, blackout curtains • Carry noise-canceling headphones or earplugs • Keep your workspace visually calm and clutter-free

【Energy Management】• Learn your "overload signals": irritability, headache, inability to focus • Rest before you're completely drained • Schedule at least 30 minutes of pure alone time daily • Learn to say "no" — you don't need to accept every invitation

【Emotional Management】• Build a daily journaling habit: 10 minutes to offload accumulated feelings • Distinguish "your emotions" from "absorbed emotions" • Give yourself ample recovery after major emotional events • Mindfulness meditation is especially effective for HSPs — 5-10 minutes daily

【Social Management】• Treat social energy like a budget with a daily limit • Set an exit plan before attending any gathering • Choose quiet, small gatherings over loud parties • Find fellow HSPs — knowing you're not alone is itself healing` },
  { id: 'relationships', icon: '💑', title: 'HSPs & Relationships', content: `If you are an HSP: • Tell your partner directly: "I need alone time to recharge" or "Noisy environments drain me" • Don't discuss important issues when emotionally overloaded — regulate first, then communicate • Choose partners and friends who respect your sensitivity • Your deep empathy is a gift in relationships

If your partner is an HSP: • When they say "I need time alone," it's a genuine biological need, not rejection • Don't dismiss their complaints about noise, light, or temperature — their experience is real • Avoid harsh words during conflict — HSPs feel verbal wounds more deeply and recover more slowly • Appreciate their nuance and depth — it's a precious part of why you're together` },
  { id: 'faq', icon: '❓', title: 'FAQ', content: `Is HSP a disorder? No. It's an innate nervous system trait, not a diagnosis. It doesn't need "treatment," though challenges like overstimulation can be managed.

HSP vs. introversion? Introversion is about social energy source (introverts recharge alone). HSP is about depth of information processing. About 70% of HSPs are introverts, but ~30% are extroverted HSPs.

HSP vs. ADHD / autism? Surface similarities exist (overstimulation susceptibility), but the underlying mechanisms differ. HSP involves no attention deficit or social communication challenges. If you suspect ADHD or autism, consult a professional.

Can I become "less sensitive"? No — and you shouldn't want to. Sensitivity is your hardware, not software you can uninstall. The goal is managing overstimulation while leveraging the strengths.

What careers suit HSPs? Creative fields, helping professions (counseling, teaching, healthcare), deep-focus work (research, programming, analysis), and flexible/remote roles. Avoid open-plan offices, high-pressure sales, and constant-travel jobs.` },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-lg mx-auto w-full">
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link to="/en" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>Home</Link>
            <span className="text-sm font-semibold text-gray-700">HSP Knowledge</span>
            <div className="w-10" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-8 pb-10 text-white text-center">
          <div className="text-5xl mb-3">🦋</div><h1 className="text-2xl font-bold mb-2">Understanding HSP</h1><p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">Everything you need to know — from science to daily practice</p>
        </div>
        {/* Deep read banner */}
        <div className="px-5 -mt-4 mb-4">
          <Link to="/en/blog/what-is-hsp" className="block bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 p-4 active:scale-[0.99] transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary-dark">In-Depth Read</h3>
                <p className="text-xs text-gray-500 mt-0.5">What Is a Highly Sensitive Person (HSP)? — It's not that you're too soft. You're wired differently.</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </div>
        <div className="px-5 mb-4"><div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"><h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Contents</h3><div className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary py-1 transition-colors"><span>{s.icon}</span><span>{s.title}</span></a>))}</div></div></div>
        <div className="px-5 pb-8 space-y-4">{sections.map((s) => (<div key={s.id} id={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 scroll-mt-20"><h2 className="text-base font-bold text-gray-800 flex items-center gap-2 mb-3"><span className="text-xl">{s.icon}</span>{s.title}</h2><div className="text-sm text-gray-600 leading-relaxed space-y-3">{s.content.split('\n\n').map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}</div></div>))}</div>
        <div className="px-5 pb-10 text-center"><div className="bg-primary/5 rounded-2xl p-6 border border-primary/10"><h3 className="text-base font-bold text-primary-dark mb-2">Ready to discover yourself?</h3><p className="text-sm text-gray-500 mb-4">3 minutes to understand your sensitivity score</p><Link to="/en/test" className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25">Start Test →</Link></div></div>
      </div>
    </div>
  );
}
