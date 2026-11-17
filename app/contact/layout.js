import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Contact Us | TUTOR PROCTORED EXAMS',
  description: 'Get in touch with our educational support team for 1-on-1 tutoring, exam prep, and technical guidance inquiries.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}
