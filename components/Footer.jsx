import Link from 'next/link';
import { contact, social, services } from '@/data/site';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__top">
          <div className="footer__brand">
            <Link className="brand brand--footer" href="/">
              <img 
                className="brand__logo" 
                src="/assets/brand/paveworks-logo.jpg" 
                alt="PAVEWORKS SOLUTIONS" 
                loading="lazy" 
              />
              <div className="brand-text">
                PAVE<span>WORKS</span>
                <span className="brand-sub">SOLUTIONS</span>
              </div>
            </Link>
            <p>
              Engineering enduring surfaces with unmatched precision and architectural prestige.<br />
              Serving Commercial, Municipal &amp; Residential Properties across Florida.
            </p>
          </div>

          <div className="footer__links">
            <h3>Explore</h3>
            <Link href="/#services">Services</Link>
            <Link href="/#why-us">Why Paveworks</Link>
            <Link href="/#areas">Service Area</Link>
            <Link href="/#faq">FAQ</Link>
          </div>

          <div className="footer__links">
            <h3>Services</h3>
            {services.map((s) => (
              <Link key={s.number} href={s.href}>{s.title}</Link>
            ))}
          </div>

          <div className="footer__contact">
            <h3>Let&apos;s talk</h3>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={contact.emailHref}>{contact.email}</a>
            <p style={{ margin: '8px 0', fontSize: '0.78rem', color: 'var(--muted)' }}>
              {contact.hours}
            </p>

            <div className="footer__social" aria-label="Follow Paveworks Solutions">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Paveworks Solutions on Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Paveworks Solutions on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>

            <Link className="button button--outline" href="/#quote">Get a free quote</Link>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Paveworks Solutions. All rights reserved. Licensed &amp; Insured.</p>
          <p>Built with precision. Engineered for endurance. ✦</p>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Quick contact">
        <a href={contact.phoneHref}>☎ Call {contact.phone}</a>
        <Link href="/#quote">Free quote <span aria-hidden="true">→</span></Link>
      </div>
    </>
  );
}
