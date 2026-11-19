'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  User,
  Search,
} from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { getBlogsContent } from '@/lib/contentLoader';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [articlesList, setArticlesList] = useState(() => getBlogsContent());

  // Real-time API synchronization with CMS saves
  useEffect(() => {
    fetch('/api/blog', { cache: 'no-store' })
      .then((res) => res.json())
      .then((resData) => {
        if (resData?.success && resData?.data && Array.isArray(resData.data)) {
          setArticlesList(resData.data);
        }
      })
      .catch((err) => console.error('[Blog Live Sync Error]:', err));
  }, []);

  // Dynamically extract unique categories from articles
  const categories = [
    'All',
    ...Array.from(new Set(articlesList.map((a) => a.category).filter(Boolean))),
  ];

  const filteredArticles = articlesList.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.excerpt && article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-4">
      <PageContainer>
        <Breadcrumb items={[{ label: 'Blog & Articles' }]} />

        {/* 1. HERO BANNER */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-12 my-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <Badge variant="blue" className="bg-brand-blue/20 text-brand-lightBlue border-brand-blue/30 px-3 py-1 text-xs">
              Academic & Certification Blog
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Study Guides & Proctored Examination Insights
            </h1>

            <p className="text-brand-muted/90 text-base sm:text-lg leading-relaxed text-balance">
              Expert articles on exam preparation strategies, proctoring software technical setup, time management techniques, and professional certification pathways.
            </p>
          </div>
        </div>

        {/* 2. SEARCH & CATEGORY FILTER */}
        <div className="space-y-4 my-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-white border border-brand-border text-brand-navy hover:bg-brand-bg'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-brand-border bg-white text-xs text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <Search className="w-4 h-4 text-brand-muted absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* 3. ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {filteredArticles.map((article) => (
            <div
              key={article.slug}
              className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-card hover:border-brand-blue transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <Badge variant="blue" className="text-[10px]">
                    {article.category}
                  </Badge>
                  <span>{article.publishDate}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-snug hover:text-brand-blue transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-blue">
                <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-1.5 hover:underline">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
