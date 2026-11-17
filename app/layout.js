import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import GoogleAnalytics from '@/components/seo/GoogleAnalytics';
import GoogleTagManager from '@/components/seo/GoogleTagManager';
import GoogleAdSense from '@/components/seo/GoogleAdSense';
import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} | Ethical Tutoring & Exam Preparation`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'online tutoring',
    'exam preparation',
    'practice exams',
    'proctoring software compatibility',
    'Respondus LockDown Browser prep',
    'Examplify study help',
    'Honorlock technical setup',
    'PMP certification prep',
    'CompTIA study guide',
    'AAPC CPC CCMA tutoring',
    'ethical academic support',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans antialiased">
        <GoogleAnalytics />
        <GoogleTagManager />
        <GoogleAdSense />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
