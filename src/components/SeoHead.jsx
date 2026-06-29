import { useEffect } from 'react';

/**
 * Injects JSON-LD BreadcrumbList structured data into document.head.
 * Expects: items = [{ name: 'Home', url: 'https://...' }, ...]
 */
export function Breadcrumb({ items }) {
  useEffect(() => {
    if (!items || items.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: { '@id': item.url, name: item.name },
      })),
    });
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [items]);
  return null;
}

/**
 * Injects JSON-LD FAQPage structured data into document.head.
 * Expects: questions = [{ question: '...', answer: '...' }, ...]
 */
export function FAQSchema({ questions }) {
  useEffect(() => {
    if (!questions || questions.length === 0) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [questions]);
  return null;
}

/**
 * Generic SEO head manager.
 * Injects/updates <title>, <meta name="description">, <link rel="canonical">,
 * and an optional JSON-LD schema script tag — all into document.head.
 * Cleans up on unmount (restores original values).
 *
 * Props:
 *   title       - document title string
 *   description - meta description content
 *   canonical   - canonical URL
 *   schema      - plain object (serialised as JSON-LD)
 */
export default function SeoHead({ title, description, canonical, schema }) {
  // --- Title ---
  useEffect(() => {
    if (!title) return;
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);

  // --- Meta description ---
  useEffect(() => {
    if (!description) return;
    let meta = document.querySelector('meta[name="description"]');
    const existed = !!meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prev = meta.getAttribute('content');
    meta.setAttribute('content', description);
    return () => {
      if (existed && prev != null) meta.setAttribute('content', prev);
      else if (!existed && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, [description]);

  // --- Canonical link ---
  useEffect(() => {
    if (!canonical) return;
    let link = document.querySelector('link[rel="canonical"]');
    const existed = !!link;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const prev = link.getAttribute('href');
    link.setAttribute('href', canonical);
    return () => {
      if (existed && prev != null) link.setAttribute('href', prev);
      else if (!existed && link.parentNode) link.parentNode.removeChild(link);
    };
  }, [canonical]);

  // --- JSON-LD schema ---
  useEffect(() => {
    if (!schema) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [schema]);

  return null;
}
