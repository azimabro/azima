import { Link } from 'react-router-dom';

/**
 * Reusable blog section renderer — used by both HSP and MBTI blog post pages.
 *
 * Props:
 *   section  - blog section data { icon, title, content, bullets, subsections, cta, footer }
 *   ctaHtml  - inner HTML string for the CTA description paragraph
 *   ctaButton - button label text
 *   testPath - link path for the CTA button (e.g. '/test', '/mbti/test')
 */
export default function BlogSection({ section, ctaHtml, ctaButton, testPath }) {
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
            <p className="text-sm text-gray-700 mb-3" dangerouslySetInnerHTML={{ __html: ctaHtml || '' }} />
            <Link
              to={testPath || '/test'}
              className="inline-block px-6 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
            >
              {ctaButton || '开始免费测试 →'}
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
