import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areaPages, contact } from '@/data/site';

export function generateStaticParams() {
  return Object.keys(areaPages).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = areaPages[slug];
  if (!page) return {};
  return { 
    title: `${page.title} | Paveworks Solutions`, 
    description: page.description, 
    alternates: { canonical: `/areas/${slug}` }, 
    openGraph: { 
      title: `${page.title} | Paveworks Solutions`, 
      description: page.description, 
      url: `/areas/${slug}` 
    } 
  };
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const page = areaPages[slug];
  if (!page) notFound();

  const city = page.title.match(/in ([^,]+)/)?.[1] || 'Florida';
  
  const schema = { 
    '@context': 'https://schema.org', 
    '@type': 'Service', 
    name: page.title, 
    description: page.description, 
    url: `https://paveworkssolutions.com/areas/${slug}`, 
    provider: { 
      '@type': 'GeneralContractor', 
      name: 'Paveworks Solutions', 
      telephone: '+1-800-555-7283', 
      url: 'https://paveworkssolutions.com/' 
    }, 
    areaServed: { '@type': 'City', name: city } 
  };

  return (
    <main className="inner-main" id="main">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
      />
      
      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#areas">Service Area</Link></li>
          <li>{city}</li>
        </ol>
      </nav>

      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">{page.eyebrow}</p>
            <h1>{city} paving with <em>uncompromising precision.</em></h1>
            <p>{page.intro}</p>
            <Link className="button button--accent" href="/#quote">Request a free estimate →</Link>
          </div>
          
          <aside className="inner-hero__proof">
            <img src="/assets/brand/paveworks-icon.jpg" alt="Paveworks Solutions" />
            <strong>Elite Regional Paving Crews.</strong>
            <span>Commercial asphalt, interlocking pavers, concrete flatwork, and sealcoating.</span>
          </aside>
        </div>
      </section>

      <section className="inner-content">
        <div className="container inner-grid">
          <article className="article-copy">
            <p className="eyebrow">Paving Excellence in {city}</p>
            <h2>Engineered surfaces that outlast Florida weather.</h2>
            <p>{page.intro}</p>
            <p>
              Whether you manage a commercial retail center needing asphalt milling and line striping or a luxury home needing an interlocking paver driveway, Paveworks delivers laser-guided grading and long-term warranties.
            </p>
            
            <h3>Communities we serve in and around {city}</h3>
            <ul className="check-grid">
              {page.areas.map(area => <li key={area}>{area}</li>)}
            </ul>

            <div className="service-note">
              <strong>Need emergency commercial repairs or immediate crew scheduling?</strong>
              <p>Call or submit your address with our quote form to confirm same-week dispatch.</p>
            </div>
          </article>

          <aside className="side-quote">
            <h2>Get your free quote</h2>
            <p>Tell us about your {city} property.</p>
            <ul>
              <li><strong>Call or text:</strong> {contact.phone}</li>
              <li><strong>Email:</strong> {contact.email}</li>
              <li><strong>Area:</strong> {city} &amp; nearby</li>
            </ul>
            <Link className="button button--accent" href="/#quote">Start my quote →</Link>
            <a href={contact.phoneHref}>Call {contact.phone}</a>
          </aside>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div>
            <h2>Ready for an enduring surface?</h2>
            <p>Request a personalized paving proposal in {city}.</p>
          </div>
          <Link className="button button--accent" href="/#quote">Get a free quote →</Link>
        </div>
      </section>
    </main>
  );
}
