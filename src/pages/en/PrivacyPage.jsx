import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const lastUpdated = '2026-06-29';

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link
              to="/en"
              className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <span className="text-sm font-semibold text-gray-700">Privacy Policy</span>
            <div className="w-12" />
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-xs text-gray-400 mb-6">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
              {/* Introduction */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">1. Our Commitment to Privacy</h2>
                <p>
                  At HSP Test, your privacy is our highest priority. This website is designed with
                  a privacy-first philosophy: <strong>all test responses are processed entirely within
                  your browser</strong>. No personal data, test answers, or personality results are ever
                  uploaded to our servers.
                </p>
              </section>

              {/* Data Collection */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">2. What We Do NOT Collect</h2>
                <p className="mb-2">We do <strong>not</strong> collect, store, or transmit:</p>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your HSP or MBTI test answers — all computation happens locally in your browser.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your personality type or score results.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personally identifiable information (name, email, phone number).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Browser fingerprinting data or cross-site tracking identifiers.</span>
                  </li>
                </ul>
              </section>

              {/* What We Collect */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">3. What We DO Collect</h2>
                <p className="mb-2">
                  We use a minimal, privacy-respecting analytics service that collects only:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Anonymous page view counts (which pages are visited and how often).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Aggregated country-level geographic data (not precise location).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Referrer information (how visitors found our site).</span>
                  </li>
                </ul>
                <p className="mt-2 text-xs text-gray-400">
                  None of this data can be used to identify you personally. It helps us understand
                  which pages are most helpful so we can improve the site.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">4. Cookies</h2>
                <p>
                  We do <strong>not</strong> use any tracking cookies, advertising cookies, or
                  third-party cookies. The only cookie set by this site is a strictly necessary
                  one used by our analytics provider to count unique page views — it does not
                  store personal information and cannot track you across other websites.
                </p>
              </section>

              {/* Third Parties */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">5. Third-Party Services</h2>
                <p className="mb-2">
                  We use the following third-party services on this site:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Google AdSense</strong> — May display advertisements. Google may use
                      cookies to serve ads based on prior visits to this or other websites. You can
                      opt out of personalized advertising by visiting{' '}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        Google Ad Settings
                      </a>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Privacy-friendly analytics</strong> — Anonymous usage statistics (as
                      described in Section 3). No personal data is shared.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">6. Data Sharing</h2>
                <p>
                  We do <strong>not</strong> sell, trade, rent, or share any personal information
                  with third parties. The anonymous analytics data described in Section 3 is
                  accessible only to the site operator for the purpose of improving the website.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">7. Children&#39;s Privacy</h2>
                <p>
                  This website is intended for general audiences and does not knowingly collect
                  any personal information from children under the age of 13. If you believe a
                  child has provided personal information through this site, please contact us
                  and we will promptly remove it.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">8. Your Rights</h2>
                <p className="mb-2">
                  Depending on your jurisdiction (including GDPR in the EU/UK and CCPA in California),
                  you may have the following rights:
                </p>
                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The right to know what personal data is collected about you.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The right to request deletion of your data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The right to opt out of the sale of personal data (note: we do not sell data).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>The right to non-discrimination for exercising your privacy rights.</span>
                  </li>
                </ul>
                <p className="mt-2">
                  Since we collect virtually no personal data, exercising these rights is
                  straightforward. Contact us at the email below with any privacy-related requests.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">9. Data Security</h2>
                <p>
                  Because all test responses stay on your device and we do not collect personal
                  information, the most sensitive data — your personality results — is inherently
                  secure. The site itself is served over HTTPS, encrypting all data in transit.
                </p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. When we do, we will revise
                  the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to
                  review this policy periodically to stay informed about how we protect your privacy.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-base font-semibold text-gray-800 mb-2">11. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this privacy policy
                  or your data, please reach out:
                </p>
                <p className="mt-2">
                  Email:{' '}
                  <a href="mailto:privacy@haltsp.com" className="text-primary underline">
                    privacy@haltsp.com
                  </a>
                </p>
              </section>
            </div>
          </div>

          {/* Footer nav */}
          <div className="mt-6 text-center">
            <Link
              to="/en"
              className="text-sm text-primary underline underline-offset-4 hover:text-primary-dark"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
