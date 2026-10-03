'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Paveworks Solutions home" onClick={close}>
          <img 
            className="brand__logo" 
            src="/assets/brand/paveworks-logo.jpg" 
            alt="PAVEWORKS SOLUTIONS Logo" 
          />
          <div className="brand-text">
            PAVE<span>WORKS</span>
            <span className="brand-sub">SOLUTIONS</span>
          </div>
        </Link>

        <button 
          className="menu-toggle" 
          type="button" 
          aria-label={open ? 'Close navigation' : 'Open navigation'} 
          aria-expanded={open} 
          aria-controls="main-nav" 
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${open ? ' is-open' : ''}`} id="main-nav" aria-label="Main navigation">
          <Link href="/#services" onClick={close}>Services</Link>
          <Link href="/#why-us" onClick={close}>Why Paveworks</Link>
          <Link href="/#areas" onClick={close}>Service Area</Link>
          <Link href="/#faq" onClick={close}>FAQ</Link>
          <Link className="button button--small" href="/#quote" onClick={close}>Get a free quote</Link>
        </nav>
      </div>
    </header>
  );
}
