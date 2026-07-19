import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

const references = [
  { title: 'Aron, E. N., & Aron, A. (1997). Sensory-Processing Sensitivity and Its Relation to Introversion and Emotionality.', source: 'Journal of Personality and Social Psychology, 73(2), 345-368.' },
  { title: 'Aron, E. N. (1996). The Highly Sensitive Person: How to Thrive When the World Overwhelms You.', source: 'Broadway Books.' },
  { title: 'Aron, E. N., Aron, A., & Jagiellowicz, J. (2012). Sensory Processing Sensitivity: A Review in the Light of the Evolution of Biological Responsivity.', source: 'Personality and Social Psychology Review, 16(3), 262-282.' },
  { title: 'Lionetti, F., Aron, A., Aron, E. N., Burns, G. L., Jagiellowicz, J., & Pluess, M. (2018). Dandelions, Tulips and Orchids: Evidence for the Existence of Low-Sensitive, Medium-Sensitive and High-Sensitive Individuals.', source: 'Translational Psychiatry, 8(1), 24.' },
  { title: 'Pluess, M. (2015). Individual Differences in Environmental Sensitivity.', source: 'Child Development Perspectives, 9(3), 138-143.' },
];

const faq = [
  { q: '这个网站的测试科学吗？', a: '本网站的 HSP 自测基于 Elaine Aron 博士的 Highly Sensitive Person Scale (HSPS) 量表汉化改编，原始量表经过 20+ 年学术验证，在同行评审期刊上发表超过 100 篇相关论文。MBTI 测试基于 Myers-Briggs Type Indicator 理论框架改编。两者均为自我了解工具，不作为临床诊断依据。' },
  { q: '谁创建了这个网站？', a: '我是一名高敏感者。在经历多年的"你是不是太敏感了""别想那么多"之后，我发现 HSP 这个概念并深受触动——原来这一切都是正常的。我创建这个网站，希望能帮助更多像我一样的人认识自己、接纳自己。' },
  { q: '我的数据安全吗？', a: '全部数据在浏览器本地处理，我们没有任何后端服务器，你的测试答案不会被上传、不会被存储、不会被分享。你可以随时清除浏览器缓存来删除所有本地数据。' },
  { q: '这个网站怎么盈利？', a: '网站通过 Google AdSense 展示广告维持运营成本。没有任何付费墙——所有测试和内容都是免费开放的。' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title="关于我们 | HSP自测 — 了解这份测试背后的科学与人"
        description="了解HSP自测网站的创建初衷：基于Elaine Aron博士量表，由高敏感者创建，为高敏感者服务。所有测试免费，数据本地处理，无隐私顾虑。"
        canonical="https://haltsp.com/about"
      />

      <div className="max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <span className="text-sm font-semibold text-gray-700">关于</span>
            <div className="w-10" />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-10 pb-10 text-white text-center">
          <div className="text-5xl mb-3">🦋</div>
          <h1 className="text-2xl font-bold mb-2">关于这个网站</h1>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
            由高敏感者创建，为高敏感者服务
          </p>
        </div>

        {/* Story */}
        <div className="px-5 -mt-4 space-y-4 pb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📖 我为什么创建这个网站</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              我是一个高敏感者（HSP）。和很多 HSP 一样，我从小被贴上"太敏感""想太多""脆弱"的标签。直到我了解到 Elaine Aron 博士的研究，我才第一次理解：我的敏感不是缺陷，而是一种天生神经系统特质。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              这种"原来我不是一个人"的感受，改变了我的自我认知。我希望能帮助更多人了解 HSP、认识自己——不管你的敏感度是高分还是低分，了解自己的神经系统特质都是自我成长的起点。
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              这个网站的所有测试和内容都是<strong>完全免费</strong>的，并且会永远免费。通过 Google AdSense 广告覆盖服务器和域名成本。
            </p>
          </div>

          {/* Scientific basis */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">🔬 科学基础</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              HSP 概念由美国心理学家 <strong>Elaine Aron 博士</strong>于 1990 年代提出，发表在《Journal of Personality and Social Psychology》等顶级学术期刊上。核心发现：
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span>约 <strong>15-20%</strong> 的人口属于高敏感者，这个比例在 100 多种动物中保持一致</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span>高敏感不是障碍，而是一种<strong>进化适应性策略</strong>——"兰花 vs 蒲公英"假说</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span>fMRI 研究发现高敏感者在处理信息时<strong>大脑激活区域更广</strong>，加工更深</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span>本网站使用的量表基于 Aron 博士的 27 题 HSPS（Highly Sensitive Person Scale），汉化为 23 题</span>
              </li>
            </ul>
          </div>

          {/* References */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📚 学术参考文献</h2>
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
            <h2 className="text-base font-bold text-gray-800 mb-3">❓ 常见问题</h2>
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
            <h2 className="text-base font-bold text-amber-800 mb-2">⚕️ 免责声明</h2>
            <p className="text-xs text-amber-700 leading-relaxed">
              本网站提供的 HSP 自测和 MBTI 测试仅供自我了解参考，<strong>不作为临床诊断依据</strong>。如果你正经历严重的情绪困扰或心理问题，请务必咨询持证心理咨询师或精神科医生。测试分数高低不代表"好坏"——每一种敏感度水平都有其独特的优势和挑战。
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pb-10 text-center">
          <Link to="/test" className="block w-full py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25 mb-4">
            开始 HSP 自测 →
          </Link>
          <Link to="/" className="block text-sm text-gray-400 hover:text-gray-500">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
