import { SITE_CONFIG } from '@/lib/utils';

export const metadata = {
  title: 'Blog & Educational Guides | TUTOR PROCTORED EXAMS',
  description: 'Study guides, proctoring software technical checklists, exam strategies, and certification prep tips.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/blog`,
  },
};

export default function BlogLayout({ children }) {
  return children;
}
