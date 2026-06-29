import { Link } from 'react-router-dom';

export default function MbtiHomePage() {
  return (
    <div className="min-h-screen flex flex-col page-enter">
      {/* Top bar: HSP cross-link + Language switcher */}
      <div className="flex justify-between px-5 pt-3 max-w-lg mx-auto w-full">
        <Link to="/" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
          ← HSP 自测
        </Link>
        <a href="/en/mbti" className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors">
          🌐 English
        </a>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-5 py-10 max-w-lg mx-auto w-full">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <span className="text-3xl">🧩</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            16 型人格测试
          </h1>
          <p className="text-sm text-gray-500 mt-1">MBTI Personality Test</p>
        </div>

        {/* Hook */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <p className="text-gray-700 leading-relaxed text-[15px]">
            你是否曾好奇自己<b className="text-primary">为什么这样思考、决策和与人相处</b>？
          </p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>了解你在外向/内向、感觉/直觉、思考/情感、判断/感知四个维度的偏好</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>发现与你最匹配的职业方向、人际模式和个人成长路径</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span>基于 Myers-Briggs 理论，全球每年超过 200 万人使用的性格工具</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            这不是贴标签。这是<b className="text-primary-dark">认识自己的起点</b>。
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/mbti/test"
          className="block w-full py-4 bg-primary text-white text-center rounded-xl font-semibold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform hover:bg-primary-dark"
        >
          开始测试 · 约 5 分钟
        </Link>

        {/* Trust signals */}
        <div className="text-center mt-4 text-xs text-gray-400 space-y-1">
          <p>基于 Myers-Briggs Type Indicator 理论改编</p>
          <p>40 题 · 5 级评分 · 四维度分析</p>
          <p className="mt-2 text-gray-300">
            <span className="inline-block mr-1">🔒</span>
            你的数据不会被上传，全部在本地处理
          </p>
        </div>
      </div>

      {/* Bottom info cards */}
      <div className="px-5 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
          关于 MBTI
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">📐</div>
            <h3 className="text-sm font-semibold text-gray-800">4 个维度</h3>
            <p className="text-xs text-gray-400 mt-0.5">E/I · S/N · T/F · J/P，每个维度两个方向</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="text-sm font-semibold text-gray-800">16 种类型</h3>
            <p className="text-xs text-gray-400 mt-0.5">四个维度组合出 16 种独特人格画像</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="text-sm font-semibold text-gray-800">职业指南</h3>
            <p className="text-xs text-gray-400 mt-0.5">发现适合你性格的职业方向与工作方式</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="text-2xl mb-2">🪞</div>
            <h3 className="text-sm font-semibold text-gray-800">自我认知</h3>
            <p className="text-xs text-gray-400 mt-0.5">深度理解你的思维模式、沟通风格与成长路径</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pt-2 text-center">精选文章</h2>
          <Link to="/blog/mbti-overview" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">MBTI 是什么？16 型人格完整指南</h3>
                <p className="text-xs text-gray-400 mt-0.5">从零了解 Myers-Briggs 人格理论的来龙去脉</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/blog/mbti-popular-types" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">最常见的 MBTI 类型和最稀有的 MBTI 类型</h3>
                <p className="text-xs text-gray-400 mt-0.5">看看你的类型在人群中有多常见或多稀有</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
          <Link to="/blog/mbti-vs-hsp" className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">MBTI vs HSP：两种人格体系的区别与联系</h3>
                <p className="text-xs text-gray-400 mt-0.5">性格类型与敏感特质究竟有何不同？</p>
              </div>
              <span className="text-gray-300 text-sm">→</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
