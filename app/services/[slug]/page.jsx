import Link from 'next/link';
import { notFound } from 'next/navigation';
import { contact, servicePages } from '@/data/site';

export function generateStaticParams() {
  return Object.keys(servicePages).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) return {};
  return { 
    title: `${page.title} | Paveworks Solutions`, 
    description: page.description, 
    alternates: { canonical: `/services/${slug}` }, 
    openGraph: { 
      title: `${page.title} | Paveworks Solutions`, 
      description: page.description, 
      url: `/services/${slug}` 
    } 
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();

  const schema = { 
    '@context': 'https://schema.org', 
    '@type': 'Service', 
    name: page.title, 
    description: page.description, 
    url: `https://paveworkssolutions.com/services/${slug}`, 
    provider: { 
      '@type': 'GeneralContractor', 
      name: 'Paveworks Solutions', 
      telephone: '+1-800-555-7283', 
      url: 'https://paveworkssolutions.com/' 
    }, 
    areaServed: ['Hillsborough County', 'Pinellas County', 'Pasco County', 'Manatee County', 'Orange County'].map(name => ({ '@type': 'AdministrativeArea', name })) 
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
          <li><Link href="/#services">Services</Link></li>
          <li>{page.title}</li>
        </ol>
      </nav>

      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">{page.eyebrow} · Florida Regional Operations</p>
            <h1>{page.title} <em>engineered for life.</em></h1>
            <p>{page.intro}</p>
            <Link className="button button--accent" href="/#quote">Request a free estimate →</Link>
          </div>
          
          <aside className="inner-hero__proof">
            <img src="/assets/brand/paveworks-icon.jpg" alt="Paveworks Solutions" />
            <strong>Heavy-Duty Standards. Guaranteed Finish.</strong>
            <span>Laser-graded installations backed by our multi-year written warranty.</span>
          </aside>
        </div>
      </section>

      <section className="inner-content">
        <div className="container inner-grid">
          <article className="article-copy">
            <p className="eyebrow">Precision Engineering</p>
            <h2>Built around your property&apos;s load demands.</h2>
            <p>{page.intro}</p>
            <p>
              We conduct a comprehensive sub-base laser inspection, slope gradient evaluation, and traffic load calculation before starting. Every project includes heavy compaction, commercial-grade materials, and laser-guided grading.
            </p>
            
            <h3>What to expect</h3>
            <ul className="check-grid">
              {page.bullets.map(item => <li key={item}>{item}</li>)}
            </ul>

            <div className="service-note">
              <strong>Need a custom commercial or industrial blueprint review?</strong>
              <p>Send us your site plan or project dimensions and our Chief Estimator will generate a tailored proposal.</p>
            </div>
          </article>

          <aside className="side-quote">
            <h2>Get your free quote</h2>
            <p>Tell us about your property, timing, and surface requirements.</p>
            <ul>
              <li><strong>Call or text:</strong> {contact.phone}</li>
              <li><strong>Email:</strong> {contact.email}</li>
              <li><strong>Hours:</strong> {contact.hours}</li>
            </ul>
            <Link className="button button--accent" href="/#quote">Start my quote →</Link>
            <a href={contact.phoneHref}>Call {contact.phone}</a>
          </aside>
        </div>
      </section>

      <section className="local-section">
        <div className="container local-section__grid">
          <div>
            <p className="eyebrow">Proudly Regional</p>
            <h2>Serving Florida <em>commercial &amp; residential clients.</em></h2>
          </div>
          <div>
            <p>
              Paveworks Solutions operates fully equipped asphalt, grading, and paver crews across the greater Tampa Bay and Central Florida regions. Schedule a free site visit to lock in your project timeline.
            </p>
            <Link className="text-link" href="/#areas">View the service area →</Link>
          </div>
        </div>
      </section>

      <section className="inner-cta">
        <div className="container inner-cta__grid">
          <div>
            <h2>Ready to transform your surface?</h2>
            <p>Request a personalized paving proposal and laser inspection.</p>
          </div>
          <Link className="button button--accent" href="/#quote">Get a free quote →</Link>
        </div>
      </section>
    </main>
  );
}
