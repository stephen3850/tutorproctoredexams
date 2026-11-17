import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Frequently Asked Questions | TUTOR PROCTORED EXAMS',
  description: 'Find clear answers regarding 1-on-1 tutoring, proctoring software technical checks, certification coaching, and academic integrity.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/faq`,
  },
};

export default function FaqLayout({ children }) {
  return children;
}
