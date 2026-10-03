'use client';

import { useState } from 'react';
import { faqs, contact } from '@/data/site';

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__intro">
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">Questions?<br /><em>We&apos;ve got answers.</em></h2>
          <p>Have questions about permits, drying times, or pavers vs asphalt?</p>
          <a href={contact.phoneHref}>Call {contact.phone} <span aria-hidden="true">→</span></a>
        </div>
        <div className="accordion">
          {faqs.map((faq, index) => {
            const expanded = active === index;
            return (
              <article className="accordion__item" key={faq.question}>
                <button 
                  type="button" 
                  aria-expanded={expanded} 
                  onClick={() => setActive(expanded ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <i />
                </button>
                <div className="accordion__content" hidden={!expanded}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
