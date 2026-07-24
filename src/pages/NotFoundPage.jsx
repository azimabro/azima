import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title="404 页面未找到 | haltsp.com"
        description="抱歉，您访问的页面不存在。"
      />
      <div className="max-w-lg mx-auto w-full">
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <div className="w-10" />
          </div>
        </div>

        <div className="px-5 py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">页面未找到</h1>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            抱歉，您访问的页面不存在或已被移动。<br />
            试试 HSP 自测，了解一下自己的敏感度吧。
          </p>
          <div className="space-y-3">
            <Link
              to="/test"
              className="block w-full py-3.5 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
            >
              开始 HSP 自测 →
            </Link>
            <Link to="/" className="block text-sm text-gray-400 hover:text-gray-500">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
