import { useEffect } from 'react';

/**
 * Google AdSense responsive ad unit.
 *
 * Props:
 *   slot  - AdSense ad-slot id (e.g. '1234567890')
 *   style - optional inline style object for the wrapper div
 *
 * Pushes an ad impression to window.adsbygoogle after mount.
 * Gracefully handles the case where AdSense is not loaded.
 */
export default function AdBanner({ slot, style }) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      // AdSense not available — fail silently
    }
  }, []);

  return (
    <div style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3101654664719729"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
