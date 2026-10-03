import Link from 'next/link';
import Faq from '@/components/Faq';
import QuoteForm from '@/components/QuoteForm';
import MapSection from '@/components/MapSection';
import { contact, faqs, services, social } from '@/data/site';

const businessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { 
      '@type': 'WebSite', 
      '@id': 'https://paveworkssolutions.com/#website', 
      url: 'https://paveworkssolutions.com/', 
      name: 'Paveworks Solutions', 
      inLanguage: 'en-US' 
    },
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      '@id': 'https://paveworkssolutions.com/#business',
      name: 'Paveworks Solutions',
      url: 'https://paveworkssolutions.com/',
      telephone: '+1-800-555-7283',
      email: 'contact@paveworkssolutions.com',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1536&q=80',
      logo: 'https://paveworkssolutions.com/assets/brand/paveworks-icon.jpg',
      slogan: 'Precision paving built for endurance, crafted with pride.',
      foundingDate: '2011',
      sameAs: [social.instagram, social.facebook],
      address: { 
        '@type': 'PostalAddress', 
        streetAddress: '1040 Pavement Parkway, Suite 300',
        addressLocality: 'Tampa', 
        addressRegion: 'FL', 
        addressCountry: 'US' 
      },
      geo: { '@type': 'GeoCoordinates', latitude: 27.9506, longitude: -82.4572 },
      areaServed: [
        ...['Hillsborough County', 'Pinellas County', 'Pasco County', 'Manatee County', 'Orange County'].map(name => ({ '@type': 'AdministrativeArea', name })),
        ...['Tampa', 'Riverview', 'Brandon', 'Apollo Beach', 'Ruskin', 'Orlando', 'Sarasota'].map(name => ({ '@type': 'City', name })),
      ],
      hasOfferCatalog: { 
        '@type': 'OfferCatalog', 
        name: 'Paving and Hardscape Services', 
        itemListElement: services.map(service => ({ 
          '@type': 'Offer', 
          itemOffered: { '@type': 'Service', name: service.title } 
        })) 
      },
    },
    { 
      '@type': 'FAQPage', 
      mainEntity: faqs.map(faq => ({ 
        '@type': 'Question', 
        name: faq.question, 
        acceptedAnswer: { '@type': 'Answer', text: faq.answer } 
      })) 
    },
  ],
};

function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.6-5.6C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.6-5.6C34 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main id="main">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} 
      />

      {/* 1. Hero Section */}
      <section className="hero" aria-labelledby="hero-title">
        <picture className="hero__image">
          <img 
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1536&q=80" 
            width="1536" 
            height="1024" 
            alt="Luxury architectural paving and interlocking stones" 
            fetchPriority="high" 
          />
        </picture>
        <div className="hero__wash" />
        
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light hero__service-area">
              <span>Paving &amp; Hardscape Contractor</span>
              <small>Commercial · Residential · Municipal</small>
            </p>
            
            <h1 id="hero-title">
              Precision paving<br />
              across Florida,<br />
              <em>built to last.</em>
            </h1>
            
            <p className="hero__lede">
              Commercial asphalt, architectural interlocking pavers, and concrete flatwork engineered with laser-guided grading and generational durability.
            </p>
            
            <div className="hero__actions">
              <a className="button button--accent" href="#quote">
                Get my free quote <span>→</span>
              </a>
              <a className="text-link text-link--light" href={contact.phoneHref}>
                <span className="icon-circle">☎</span>
                <span>
                  <small>Prefer to talk?</small>
                  {contact.phone}
                </span>
              </a>
            </div>

            <ul className="hero__proof">
              <li className="hero__proof-google">
                <a href={social.googleReviews} target="_blank" rel="noopener noreferrer" aria-label="See Paveworks Solutions five-star reviews on Google">
                  <GoogleMark />
                  <span>5★<small>Google reviews</small></span>
                </a>
              </li>
              <li>
                <span>15+</span> years of excellence
              </li>
              <li>
                <span>1,400+</span> completed projects
              </li>
              <li>
                <span>100%</span> warranty backed
              </li>
            </ul>
          </div>
        </div>

        <div className="hero__note" aria-hidden="true">
          <span className="sparkle-icon">✦</span>
          <span>
            Heavy-Duty Subgrade Base.<br />
            <strong>Flawless Surface Precision.</strong>
          </span>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="trust-strip" aria-label="Our promise">
        <div className="container trust-strip__inner">
          <p className="script-note">Enduring craftsmanship, grounded in structural integrity.</p>
          
          <div className="trust-item trust-item--featured">
            <span className="trust-symbol">↻</span>
            <span>
              <strong>Turnkey Surface Solutions</strong>
              Excavation, grading, pavers, asphalt &amp; sealcoating.
            </span>
          </div>
          
          <div className="trust-item">
            <span className="trust-symbol">✓</span>
            <span>
              <strong>Laser-Guided Precision</strong>
              Zero water pooling and engineered drainage.
            </span>
          </div>
          
          <div className="trust-item">
            <span className="trust-symbol">◇</span>
            <span>
              <strong>Architectural Grade Craft</strong>
              Commercial hot-mix asphalt &amp; high-PSI pavers.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 id="services-title">Commercial &amp; residential.<br /><em>Every surface you need.</em></h2>
            </div>
            <p>
              Start with high-durability interlocking pavers or schedule heavy-duty commercial asphalt milling and overlay. Paveworks makes heavy civil hardscaping seamless.
            </p>
          </div>

          <div className="service-grid">
            {services.map(service => (
              <article className={`service-card${service.featured ? ' service-card--featured' : ''}`} key={service.number}>
                <span className="service-card__number">{service.number}</span>
                <div className="service-icon" aria-hidden="true">✦</div>
                {service.tag && <span className="service-card__tag">{service.tag}</span>}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href}>
                  Explore service <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="services__note">
            Need a custom commercial or industrial paving scope? <a href="#quote">Request a blueprint review →</a>
          </p>
        </div>
      </section>

      {/* 4. 3-Step Process */}
      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Engineered From the Soil Up</p>
            <h2 id="process-title">Flawless paving in <em>3 clear steps.</em></h2>
            <p>Transparent engineering, fixed upfront pricing, and punctual field execution.</p>
          </div>

          <div className="process-grid">
            {[
              ['1', 'On-Site Laser Inspection', 'We measure elevations, evaluate soil subgrades, and verify drainage paths to formulate your fixed-price blueprint.'],
              ['2', 'Heavy-Duty Sub-Base Prep', 'Calibrated aggregate compaction to 98%+ Proctor density, heavy geotextile membranes, and laser grading.'],
              ['3', 'Master Laying & Warranty', 'Precision machine-rolling or interlocking stone installation, polymeric joint locking, and written warranty delivery.']
            ].map((step, index) => (
              <div key={step[0]} className="process-fragment">
                <article className="process-step">
                  <span className="process-step__number">{step[0]}</span>
                  <div className="process-step__icon">{index === 0 ? '☷' : index === 1 ? '⚙' : '✦'}</div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Service Area & Regional Map */}
      <section className="section area" id="areas" aria-labelledby="area-title">
        <div className="container area__grid">
          <div className="area__copy">
            <p className="eyebrow">Florida Service Coverage</p>
            <h2 id="area-title">Regional paving fleet.<br /><em>One elite standard.</em></h2>
            <p>
              Serving commercial developers, private communities, and luxury residential estates across Central Florida and Tampa Bay. Contact us to schedule an on-site inspection.
            </p>

            <div className="location-pills">
              <strong>Operational Districts</strong>
              <Link href="/areas/tampa-paving-contractor">Tampa</Link>
              <Link href="/areas/riverview-paving-contractor">Riverview</Link>
              <Link href="/areas/brandon-paving-contractor">Brandon</Link>
              {['Apollo Beach', 'Ruskin', 'Orlando', 'Sarasota', 'Lakeland'].map(area => (
                <span key={area}>{area}</span>
              ))}
            </div>

            <a className="text-link text-link--light" href={contact.phoneHref}>
              Check crew availability near you <span>→</span>
            </a>
          </div>

          <div className="area__map">
            <MapSection />
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <Faq />

      {/* 5. The Paveworks Difference */}
      <section className="section difference difference--closing" id="why-us" aria-labelledby="difference-title">
        <div className="container difference__grid">
          <div className="difference__visual">
            <div className="detail-card detail-card--main">
              <p>It&apos;s not just paved.</p>
              <strong>It&apos;s Paveworks precision.</strong>
              
              <div className="shine-line">
                <span /><b className="sparkle-icon">✦</b><span />
              </div>
              
              <ul>
                <li><span>✓</span> 98%+ Proctor density base compaction</li>
                <li><span>✓</span> Laser slope grading preventing standing water</li>
                <li><span>✓</span> Commercial hot-mix asphalt &amp; high-PSI pavers</li>
                <li><span>✓</span> Polymeric sand joint lock (no weeds, no sinking)</li>
                <li><span>✓</span> State licensed, bonded &amp; $2M liability insured</li>
              </ul>
            </div>

            <div className="detail-card detail-card--small">
              <span className="detail-card__spark">✦</span>
              <strong>10-Year Warranty</strong>
              <p>On structural paver base &amp; craftsmanship.</p>
            </div>
          </div>

          <div className="difference__copy">
            <p className="eyebrow">The Paveworks Difference</p>
            <h2 id="difference-title">Not just another surface.<br /><em>A generational asset.</em></h2>
            <p className="intro">
              85% of pavement failures happen below the surface from weak subgrades and poor drainage. We engineer every square foot from raw soil to final seal to endure Florida heat, torrential rainfall, and commercial vehicle loads.
            </p>

            <div className="benefit-list">
              {[
                ['01', 'Laser-level subgrade compaction first', 'We dig deeper, lay commercial geotextile stabilization fabric, and compact crushed aggregate in calibrated lifts to permanently eliminate rutting or settling.'],
                ['02', 'Commercial & luxury certified crews', 'Our heavy machine operators and master masons bring over a decade of dedicated field experience, delivering razor-sharp lines and seamless transitions.'],
                ['03', 'Clean, fast & respectful job sites', 'Turf protection boards, daily magnetic sweeps for nails, dust suppression, and 95% of residential driveways completed in 48 to 72 hours.']
              ].map(item => (
                <article key={item[0]}>
                  <span>{item[0]}</span>
                  <div>
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>
                </article>
              ))}
            </div>

            <a className="button button--dark" href="#quote">Get my free quote <span>→</span></a>
          </div>
        </div>
      </section>

      {/* 9. Quote Form Section */}
      <section className="section quote" id="quote" aria-labelledby="quote-title">
        <div className="container quote__grid">
          <div className="quote__copy">
            <p className="eyebrow">Your free paving proposal</p>
            <h2 id="quote-title">Tell us what needs<br /><em>precision paving.</em></h2>
            <p>Answer a few quick questions and our team will follow up with a personalized estimate and laser-inspection proposal.</p>
            
            <div className="quote__contact">
              <a href={contact.phoneHref}>
                <span>☎</span>
                <div>
                  <small>Call or text</small>
                  <strong>{contact.phone}</strong>
                </div>
              </a>
              <a href={contact.emailHref}>
                <span>✉</span>
                <div>
                  <small>Email us</small>
                  <strong>{contact.email}</strong>
                </div>
              </a>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
