import './globals.css';
import './inner-pages.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://paveworkssolutions.com'),
  title: { 
    default: 'Commercial & Residential Paving | Paveworks Solutions', 
    template: '%s | Paveworks Solutions' 
  },
  description: 'Precision asphalt paving, luxury interlocking pavers, commercial parking lot maintenance, concrete flatwork and sealcoating. Request a free laser-inspection quote.',
  alternates: { canonical: '/' },
  icons: { 
    icon: '/assets/brand/paveworks-icon.jpg', 
    apple: '/assets/brand/paveworks-icon.jpg' 
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Paveworks Solutions',
    title: 'Commercial & Residential Paving | Paveworks Solutions',
    description: 'Precision asphalt paving, architectural interlocking stone pavers, concrete flatwork and sealcoating.',
    url: '/',
    images: [{ 
      url: '/assets/brand/paveworks-logo.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'Paveworks Solutions - Heavy Duty Paving & Architectural Pavers' 
    }],
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Commercial & Residential Paving | Paveworks Solutions', 
    description: 'Precision asphalt paving, interlocking pavers and sealcoating.', 
    images: ['/assets/brand/paveworks-logo.jpg'] 
  },
  robots: { 
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      'max-image-preview': 'large', 
      'max-snippet': -1, 
      'max-video-preview': -1 
    } 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;750;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
