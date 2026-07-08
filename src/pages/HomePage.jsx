import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SeoHead from '../components/SeoHead';

export default function HomePage() {
  useEffect(() => {
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

      {/* Bottom info cards */}
      <div className="px-5 pb-8 max-w-lg mx-auto w-full">
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
        </div>

      </div>
    </div>
  );
}
