import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Eager-loaded for first paint
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import EnHomePage from './pages/en/HomePage';
import EnTestPage from './pages/en/TestPage';

// Lazy-loaded
const ResultPage = lazy(() => import('./pages/ResultPage'));
const ReportPage = lazy(() => import('./pages/ReportPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const MbtiHomePage = lazy(() => import('./pages/MbtiHomePage'));
const MbtiTestPage = lazy(() => import('./pages/MbtiTestPage'));
const MbtiResultPage = lazy(() => import('./pages/MbtiResultPage'));
const MbtiReportPage = lazy(() => import('./pages/MbtiReportPage'));
const EnResultPage = lazy(() => import('./pages/en/ResultPage'));
const EnReportPage = lazy(() => import('./pages/en/ReportPage'));
const EnArticlesPage = lazy(() => import('./pages/en/ArticlesPage'));
const EnBlogPostPage = lazy(() => import('./pages/en/BlogPostPage'));
const EnPrivacyPage = lazy(() => import('./pages/en/PrivacyPage'));
const EnMbtiHomePage = lazy(() => import('./pages/en/MbtiHomePage'));
const EnMbtiTestPage = lazy(() => import('./pages/en/MbtiTestPage'));
const EnMbtiResultPage = lazy(() => import('./pages/en/MbtiResultPage'));
const EnMbtiReportPage = lazy(() => import('./pages/en/MbtiReportPage'));

const Loading = () => <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-gray-400 text-sm">Loading...</div></div>;

function Lazy({ children }) { return <Suspense fallback={<Loading />}>{children}</Suspense>; }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<Lazy><ResultPage /></Lazy>} />
        <Route path="/report" element={<Lazy><ReportPage /></Lazy>} />
        <Route path="/articles" element={<Lazy><ArticlesPage /></Lazy>} />
        <Route path="/blog/:slug" element={<Lazy><BlogPostPage /></Lazy>} />
        <Route path="/privacy" element={<Lazy><PrivacyPage /></Lazy>} />
        <Route path="/mbti" element={<Lazy><MbtiHomePage /></Lazy>} />
        <Route path="/mbti/test" element={<Lazy><MbtiTestPage /></Lazy>} />
        <Route path="/mbti/result" element={<Lazy><MbtiResultPage /></Lazy>} />
        <Route path="/mbti/report" element={<Lazy><MbtiReportPage /></Lazy>} />
        <Route path="/en" element={<EnHomePage />} />
        <Route path="/en/test" element={<EnTestPage />} />
        <Route path="/en/result" element={<Lazy><EnResultPage /></Lazy>} />
        <Route path="/en/report" element={<Lazy><EnReportPage /></Lazy>} />
        <Route path="/en/articles" element={<Lazy><EnArticlesPage /></Lazy>} />
        <Route path="/en/blog/:slug" element={<Lazy><EnBlogPostPage /></Lazy>} />
        <Route path="/en/privacy" element={<Lazy><EnPrivacyPage /></Lazy>} />
        <Route path="/en/mbti" element={<Lazy><EnMbtiHomePage /></Lazy>} />
        <Route path="/en/mbti/test" element={<Lazy><EnMbtiTestPage /></Lazy>} />
        <Route path="/en/mbti/result" element={<Lazy><EnMbtiResultPage /></Lazy>} />
        <Route path="/en/mbti/report" element={<Lazy><EnMbtiReportPage /></Lazy>} />
      </Routes>
    </BrowserRouter>
  );
}
