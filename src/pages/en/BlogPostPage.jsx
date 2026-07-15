import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import blogPosts from '../../data/blogPosts.en';
import SeoHead, { Breadcrumb } from '../../components/SeoHead';
import AdBanner from '../../components/AdBanner';

function BlogSection({ section }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="text-2xl mb-3">{section.icon}</div>
      <h2 className="text-base font-bold text-gray-800 mb-3">{section.title}</h2>
      <div className="text-sm text-gray-600 leading-relaxed space-y-3">
        {section.content?.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        {section.bullets && (
          <ul className="space-y-2 mt-2">
            {section.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span><strong className="text-gray-800">{b.text}</strong>{b.desc}</span>
              </li>
            ))}
          </ul>
        )}
        {section.subsections?.map((sub, i) => (
          <div key={i}>
            <h3 className="font-semibold text-gray-800 mb-1">{sub.title}</h3>
            <p>{sub.text}</p>
          </div>
        ))}
        {section.cta && (
          <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
            <p className="text-sm text-gray-700 mb-3">
              Based on Dr. Elaine Aron's HSP Scale<br />
              <strong>23 Questions · 3 Minutes · 4-Dimension Analysis</strong>
            </p>
            <Link
              to="/en/test"
              className="inline-block px-6 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
            >
              Start Free Test →
            </Link>
          </div>
        )}
        {section.footer && (
          <p className="text-gray-800 font-medium">{section.footer}</p>
        )}
      </div>
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      window.scrollTo(0, 0);
      const enLink = document.createElement('link');
      enLink.rel = 'alternate'; enLink.hreflang = 'en';
      enLink.href = `https://haltsp.com/en/blog/${post.slug}`;
      document.head.appendChild(enLink);
      const zhLink = document.createElement('link');
      zhLink.rel = 'alternate'; zhLink.hreflang = 'zh';
      zhLink.href = `https://haltsp.com/blog/${post.slug}`;
      document.head.appendChild(zhLink);
      return () => {
        if (enLink.parentNode) enLink.parentNode.removeChild(enLink);
        if (zhLink.parentNode) zhLink.parentNode.removeChild(zhLink);
      };
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/en/articles" replace />;
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://haltsp.com/en/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'HSP Test' },
  };

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <SeoHead
        title={post.title}
        description={post.description}
        canonical={`https://haltsp.com/en/blog/${post.slug}`}
        schema={articleSchema}
      />
      <Breadcrumb items={[
        { name: 'Home', url: 'https://haltsp.com/en' },
        { name: 'HSP Knowledge Base', url: 'https://haltsp.com/en/articles' },
        { name: post.title, url: `https://haltsp.com/en/blog/${post.slug}` },
      ]} />
      <div className="max-w-lg mx-auto w-full">
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link to="/en/articles" className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Knowledge Base
            </Link>
            <Link to="/en" className="text-sm font-semibold text-gray-700">HSP Test</Link>
            <div className="w-10" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-10 pb-12 text-white">
          <p className="text-sm text-white/60 mb-2">HSP Knowledge · In-Depth</p>
          <h1 className="text-2xl font-bold leading-tight mb-3">{post.title}</h1>
          <p className="text-sm text-white/70 leading-relaxed">{post.description}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
            <span>{post.date}</span><span>·</span>
            <span>{post.readTime}</span><span>·</span>
            <span>{post.heroIcon}</span>
          </div>
        </div>

        <div className="px-5 pb-8 space-y-4 -mt-4">
          {post.sections.map((section, i) => (
            <React.Fragment key={i}>
              <BlogSection section={section} />
              {i === 1 && (
                <div className="px-0">
                  <AdBanner slot="4455002909" style={{ minHeight: '60px' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="px-5 pb-10 text-center">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <div className="text-3xl mb-3">🦋</div>
            <h3 className="text-base font-bold text-primary-dark mb-2">Knowing Yourself Is the First Step</h3>
            <p className="text-sm text-gray-500 mb-4">3 minutes to get your sensitivity score and 4-dimension analysis</p>
            <Link to="/en/test" className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25">
              Start Test →
            </Link>
            <p className="text-xs text-gray-400 mt-3">Based on Dr. Elaine Aron's Scale · Free · No Sign-Up</p>
          </div>

          <div className="mt-8 text-left">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">Continue Reading</h3>
            <div className="space-y-2">
              {otherPosts.map((p) => (
                <Link key={p.slug} to={`/en/blog/${p.slug}`} className="block bg-white rounded-xl p-4 border border-gray-100 hover:border-primary/20 active:scale-[0.99] transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.heroIcon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 truncate">{p.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{p.readTime}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Link to="/en/articles" className="block text-sm text-primary underline underline-offset-4 hover:text-primary-dark">Browse HSP Knowledge Base →</Link>
            <Link to="/en" className="block text-sm text-gray-400 hover:text-gray-500">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
