import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SeoHead from '../components/SeoHead';
import AdBanner from '../components/AdBanner';

function isBot() {
  const ua = (navigator.userAgent || '').toLowerCase();
  return /googlebot|bingbot|baiduspider|yandexbot|duckduckbot|applebot|ahrefsbot|claudebot|claude-searchbot|mediapartners|yisouspider|petalbot|slurp|facebookexternalhit|twitterbot|bytespider/i.test(ua);
}

export default function HomePage() {
  useEffect(() => {
    if (isBot()) return;
    if (sessionStorage.getItem('lang_checked')) return;
    sessionStorage.setItem('lang_checked', '1');
    try {
      const stored = localStorage.getItem('lang');
      const lang = stored || (navigator.language || '').toLowerCase();
      if (!lang.startsWith('zh')) {
        window.location.replace('/en');
      }
    } catch (e) {
      const lang = (navigator.language || '').toLowerCase();
      if (!lang.startsWith('zh')) window.location.replace('/en');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-enter">
      <SeoHead
        title="高敏感人格(HSP)自测 | 免费在线测试 | 3分钟了解你的敏感度"
        description="基于Elaine Aron博士量表汉化，23题专业HSP高敏感人格自测。免费在线测试，即时出结果，四维度分析你的敏感类型。"
        canonical="https://haltsp.com"
      />
      <div className="flex justify-between px-5 pt-3 max-w-lg mx-auto w-full">
        <Link to="/mbti" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary">🧩 16型人格</Link>
        <button onClick={() => { try { localStorage.setItem('lang', 'en'); } catch(e) {} window.location.href = '/en'; }} className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary">🌐 English</button>
      </div>
      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-5 py-10 max-w-lg mx-auto w-full">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="text-3xl">🦋</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            高敏感人格自测
          </h1>
          <p className="text-sm text-gray-500 mt-1">HSP · Highly Sensitive Person</p>
        </div>

        {/* Hook */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-gray-700 leading-relaxed text-[15px]">
            你是不是也经常被说<b className="text-primary">"太敏感了"</b>？
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>容易被别人的情绪影响，看完一部电影好几天走不出来</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>嘈杂的环境让你精疲力尽，独处才是充电</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>对细节异常敏感——光、声音、气味、他人的表情变化</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            这不是缺陷。这是你的<b className="text-primary-dark">出厂设置</b>。
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/test"
          className="block w-full py-4 bg-primary text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform hover:bg-primary-dark"
        >
          开始测试 · 3分钟
        </Link>

        {/* Trust signals */}
        <div className="text-center mt-4 text-xs text-gray-400 space-y-1">
          <p>基于 Elaine Aron 博士 HSP 量表汉化</p>
          <p>23 题 · 5 级评分 · 四维度分析</p>
          <p className="mt-2 text-gray-300">
            <span className="inline-block mr-1">🔒</span>
            你的数据不会被上传，全部在本地处理
          </p>
        </div>
      </div>

      {/* Content Section - HSP科学解读 */}
      <div className="px-5 pb-8 max-w-lg mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
          <h2 className="text-base font-bold text-gray-800 mb-3">高敏感人格（HSP）是什么？</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            高敏感人格（Highly Sensitive Person）是由美国心理学家 <strong>Elaine Aron 博士</strong>于 1990 年代提出的科学概念。它<strong>不是疾病或障碍</strong>，而是一种天生的神经系统特质——大约 15-20% 的人口天生就拥有更深入处理信息的神经系统。
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            进化生物学研究发现，这个比例在人类和 100 多种其他动物中惊人地一致。高敏感者被视为群体中的"哨兵"——能比其他人更早察觉环境变化和潜在风险，这对群体生存至关重要。
          </p>
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
            <p className="text-xs text-primary-dark leading-relaxed">
              <strong>💡 关键认知：</strong>敏感不是"玻璃心"，而是你的大脑以更高的分辨率处理信息。你的共情力、洞察力、深度思考能力和审美感知力，都是高敏感带来的独特优势。
            </p>
          </div>
        </div>

        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
          关于高敏感人格
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="text-sm font-semibold text-gray-800">15-20%</h3>
            <p className="text-xs text-gray-400 mt-0.5">全球人口比例，你并不孤单</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="text-sm font-semibold text-gray-800">天生特质</h3>
            <p className="text-xs text-gray-400 mt-0.5">不是病，不需要"治"</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-sm font-semibold text-gray-800">深度加工</h3>
            <p className="text-xs text-gray-400 mt-0.5">你的大脑处理信息比常人更深入</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">💪</div>
            <h3 className="text-sm font-semibold text-gray-800">一种优势</h3>
            <p className="text-xs text-gray-400 mt-0.5">共情力、洞察力、创造力更强</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="mb-4">
            <AdBanner slot="4455002909" style={{ minHeight: '60px' }} />
          </div>
          <Link to="/articles" className="block bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/10 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary-dark">浏览 HSP 知识库</h3>
                <p className="text-xs text-gray-500 mt-0.5">什么是HSP、常见表现、自我照顾指南、常见问题</p>
              </div>
              <span className="text-primary/50 text-sm">→</span>
            </div>
          </Link>

          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pt-2 text-center">精选博文</h2>
          <Link to="/blog/what-is-hsp" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">高敏感人格(HSP)是什么？</h3>
                <p className="text-xs text-gray-400 mt-0.5">不是你太脆弱，是15%的人出厂设置不一样</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/blog/hsp-traits" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">高敏感者的 23 个日常特征</h3>
                <p className="text-xs text-gray-400 mt-0.5">从感官到情绪，你的出厂配置与常人不同</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/blog/how-to-live-with-hsp" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧘</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">高敏感者怎么活得更轻松？</h3>
                <p className="text-xs text-gray-400 mt-0.5">感官管理、能量保护和日常实操指南</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/blog/hsp-vs-introvert" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔄</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">高敏感 vs 内向：别搞混了</h3>
                <p className="text-xs text-gray-400 mt-0.5">70% 高敏感者是内向者，但这是两个不同的概念</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>

          <div className="pt-2">
            <Link to="/articles" className="block text-sm text-primary text-center font-medium hover:text-primary-dark">
              浏览全部 HSP 文章 →
            </Link>
          </div>

          {/* Trust / About card */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📋</span>
              <h3 className="text-sm font-bold text-gray-800">关于本站</h3>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              本网站由一位高敏感者独立创建和维护。HSP 自测基于 Elaine Aron 博士原版量表汉化改编，经过 20+ 年学术验证。所有测试完全免费，数据存储在你的浏览器本地，不会上传或分享。
            </p>
            <Link to="/about" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark">
              了解更多关于我们 →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
