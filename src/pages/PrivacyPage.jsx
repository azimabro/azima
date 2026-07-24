import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

export default function PrivacyPage() {
  return (
    <>
      <SeoHead
        title="隐私政策 | HSP自测"
        description="HSP高敏感人格自测隐私政策。了解我们如何收集、使用和保护你的个人信息。所有测试数据在本地处理，不上传服务器。"
        canonical="https://haltsp.com/privacy"
      />
      <div className="min-h-screen bg-gray-50 page-enter">
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
            <span className="text-sm font-semibold text-gray-700">隐私政策</span>
            <div className="w-10" />
          </div>
        </div>

        <div className="px-5 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">隐私政策</h1>
          <p className="text-sm text-gray-400 mt-2">最后更新于 2026 年 7 月</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6 text-sm text-gray-700 leading-relaxed">
          {/* Intro */}
          <p>
            欢迎使用我们的服务。我们深知隐私对您的重要性，本隐私政策旨在说明我们如何收集、使用和保护您的个人信息。
            使用本网站即表示您同意本隐私政策中描述的做法。
          </p>

          {/* Data Collection */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">一、数据收集</h2>
            <p className="mb-2">
              我们非常重视您的隐私。我们收集的信息分为两类：
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>自动收集的信息：</strong>当您访问本网站时，我们会通过第三方服务（如 Cloudflare）自动收集一些基本信息，包括 IP 地址、浏览器类型、设备信息、访问时间等。这些信息用于网站性能优化和安全防护。</li>
              <li><strong>您主动提供的信息：</strong>当您使用我们的测试功能（如 HSP 自测、MBTI 人格测试）时，您的测试答案<strong>完全在您的本地设备上处理</strong>，我们不会将您的测试答案上传到任何服务器。</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">二、第三方服务</h2>
            <p className="mb-2">
              我们使用以下第三方服务来优化网站体验。这些服务可能会根据各自的隐私政策收集数据：
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Google AdSense：</strong>
                我们使用 Google AdSense 展示广告。Google 使用 Cookie 来根据您的浏览历史展示个性化广告。
                您可以访问 <a href="https://adssettings.google.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google 广告设置</a> 来管理您的广告偏好。
                Google 的隐私政策请参见 <a href="https://policies.google.com/privacy" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google 隐私政策</a>。
              </li>
              <li>
                <strong>Cloudflare：</strong>
                我们使用 Cloudflare 提供内容分发网络（CDN）和安全防护服务。Cloudflare 可能会收集访问者的 IP 地址和其他网络信息以提供安全防护。
                Cloudflare 的隐私政策请参见 <a href="https://www.cloudflare.com/privacypolicy/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Cloudflare 隐私政策</a>。
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">三、Cookie 的使用</h2>
            <p>
              我们和我们的第三方合作伙伴（如 Google AdSense）使用 Cookie 和类似技术来提升用户体验。
              Cookie 是存储在您设备上的小型文本文件，用于记住您的偏好、分析网站流量以及展示相关广告。
              您可以通过浏览器设置禁用 Cookie，但这可能会影响您使用网站的某些功能。
              使用本网站即表示您同意我们按照本政策使用 Cookie。
            </p>
          </section>

          {/* External Links */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">四、外部链接</h2>
            <p>
              我们的网站可能包含指向其他网站的链接（如推荐书籍的购买链接、参考资料的链接等）。
              我们对这些第三方网站的隐私做法不承担任何责任。
              当您离开我们的网站时，建议您阅读您访问的每个网站的隐私政策。
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">五、儿童隐私</h2>
            <p>
              我们的服务不面向 13 岁以下的儿童。我们不会在知情的情况下收集 13 岁以下儿童的个人信息。
              如果您是父母或监护人，并且发现您的孩子向我们提供了个人信息，请与我们联系，我们将尽快删除相关信息。
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">六、免责声明</h2>
            <p className="mb-2">
              本网站提供的所有测试（包括 HSP 高敏感人格自测和 MBTI 人格测试）均为自我了解参考工具，<strong>不构成任何形式的医学诊断、心理评估或专业建议</strong>。
            </p>
            <p>
              测试结果仅供个人兴趣和自我认识参考。如果您对自己的心理健康状况有任何担忧，请咨询持证心理咨询师或医疗专业人员。
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">七、联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问或建议，请通过以下邮箱与我们联系：
            </p>
            <p className="mt-2">
              📧 <a href="mailto:privacy@haltsp.com" className="text-primary underline">privacy@haltsp.com</a>
            </p>
          </section>
        </div>

          {/* Footer */}
          <div className="text-center mt-8 text-xs text-gray-400">
            <p>本隐私政策可能会不时更新，更新后的政策将在本页面发布。</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
