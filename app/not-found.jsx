import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="inner-main" id="main">
      <section className="inner-hero">
        <div className="container inner-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">404 · Page Not Found</p>
            <h1>Let&apos;s get you <em>back on track.</em></h1>
            <p>The page or paving service you requested could not be located.</p>
            <Link className="button button--accent" href="/">
              Return to Paveworks Home →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
