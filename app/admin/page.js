'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Briefcase,
  HelpCircle,
  Settings,
  Plus,
  Edit,
  Trash2,
  Lock,
  LogOut,
  Search,
  CheckCircle,
  X,
  Save,
  Globe,
  Loader2,
  Eye,
  ShieldCheck,
  Inbox,
  Mail,
  Phone,
  User,
  Calendar,
  MessageSquare,
  ExternalLink,
  Navigation,
  Sparkles,
  MapPin,
  Award,
  Cpu,
  FolderOpen,
  Image as ImageIcon,
  UploadCloud,
  Check,
  ToggleLeft,
  ToggleRight,
  ArrowUp,
  ArrowDown,
  Layers,
  Clock,
  ArrowRight,
  Activity,
  TrendingUp,
  Zap,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Menu,
  PanelLeftClose,
  PanelLeft,
  Filter,
  Tag,
  Sliders,
  RefreshCw,
  Bell,
  AlertCircle,
  GraduationCap,
  Monitor,
  Edit3,
  ChevronsLeft,
  Palette,
} from 'lucide-react';

export default function CustomAdminCmsPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Navigation Tab
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sidebar & Navigation Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({
    OVERVIEW: true,
    WEBSITE: true,
    CONTENT: true,
    CUSTOMER: true,
    CONFIG: true,
  });

  const toggleGroup = (groupKey) => {
    setExpandedGroups((prev) => ({ ...prev, [groupKey]: !prev[groupKey] }));
  };

  // Content States
  const [blogArticles, setBlogArticles] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [faqsList, setFaqsList] = useState([]);
  const [siteSettings, setSiteSettings] = useState({});
  const [inquiriesList, setInquiriesList] = useState([]);
  const [pagesData, setPagesData] = useState({});
  const [navData, setNavData] = useState({ topBanner: {}, navLinks: [] });
  const [certificationsList, setCertificationsList] = useState([]);
  const [platformsList, setPlatformsList] = useState([]);
  const [studyResourcesList, setStudyResourcesList] = useState([]);
  const [partnershipsList, setPartnershipsList] = useState([]);

  // Theme & Visual Appearance State
  const [themeData, setThemeData] = useState({
    themePreset: 'Royal Purple',
    primaryColor: '#581C87',
    sidebarColor: '#1E1035',
    accentColor: '#7C3AED',
    mode: 'dark',
    borderRadius: 'rounded-2xl',
  });

  // Media Library State
  const [mediaLibrary, setMediaLibrary] = useState([]);
  const [isMediaPickerOpen, setIsMediaPickerOpen] = useState(false);
  const [mediaPickerTargetField, setMediaPickerTargetField] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  // Loading & Notification States
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('All');
  const [faqCategoryFilter, setFaqCategoryFilter] = useState('All');
  const [faqLocationFilter, setFaqLocationFilter] = useState('All');

  // Section-Specific Search & Filter States
  const [blogSearchQuery, setBlogSearchQuery] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('All');

  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState('All');

  const [certSearchQuery, setCertSearchQuery] = useState('');
  const [certCategoryFilter, setCertCategoryFilter] = useState('All');

  const [platformSearchQuery, setPlatformSearchQuery] = useState('');
  const [resourceSearchQuery, setResourceSearchQuery] = useState('');
  const [partnerSearchQuery, setPartnerSearchQuery] = useState('');
  const [pageSearchQuery, setPageSearchQuery] = useState('');

  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [faqLocationFilterState, setFaqLocationFilterState] = useState('All');

  const [inquirySearchQuery, setInquirySearchQuery] = useState('');
  const [inquiryFilterState, setInquiryFilterState] = useState('All');

  // Editor & View Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItemType, setEditingItemType] = useState(''); // 'blog', 'service', 'faq', 'settings', 'inquiry', 'page', 'navigation', 'certification', 'platform', 'resource', 'partnership'
  const [editFormData, setEditFormData] = useState({});

  // Check server-side HttpOnly session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const json = await res.json();
        if (json.authenticated) {
          setIsAuthenticated(true);
          fetchContentData();
          fetchMediaLibrary();
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: adminPasswordInput }),
      });

      const json = await res.json();
      if (json.success) {
        setIsAuthenticated(true);
        setAdminPasswordInput('');
        setLoginError('');
        fetchContentData();
        fetchMediaLibrary();
      } else {
        setLoginError(json.error || 'Invalid administrator credentials');
      }
    } catch (err) {
      setLoginError('Authentication service error');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {
      // Ignore
    }
    setIsAuthenticated(false);
  };

  // Fetch all JSON content from API
  const fetchContentData = async () => {
    setLoading(true);
    try {
      // Fetch Blog Articles
      const blogRes = await fetch('/api/admin/content?file=blog.json');
      const blogJson = await blogRes.json();
      if (blogJson.success && blogJson.data?.articles) {
        setBlogArticles(blogJson.data.articles);
      }

      // Fetch Services
      const servRes = await fetch('/api/admin/content?file=services.json');
      const servJson = await servRes.json();
      if (servJson.success && servJson.data?.services) {
        setServicesList(servJson.data.services);
      }

      // Fetch FAQs
      const faqRes = await fetch('/api/admin/content?file=faqs.json');
      const faqJson = await faqRes.json();
      if (faqJson.success && faqJson.data?.categories) {
        setFaqsList(faqJson.data.categories);
      }

      // Fetch Settings
      const setRes = await fetch('/api/admin/content?file=settings.json');
      const setJson = await setRes.json();
      if (setJson.success && setJson.data) {
        setSiteSettings(setJson.data);
      }

      // Fetch Inquiries
      const inqRes = await fetch('/api/admin/content?file=inquiries.json');
      const inqJson = await inqRes.json();
      if (inqJson.success && inqJson.data?.inquiries) {
        setInquiriesList(inqJson.data.inquiries);
      }

      // Fetch Pages Data
      const pageRes = await fetch('/api/admin/content?file=pages.json');
      const pageJson = await pageRes.json();
      if (pageJson.success && pageJson.data?.pages) {
        setPagesData(pageJson.data.pages);
      }

      // Fetch Navigation Data
      const navRes = await fetch('/api/admin/content?file=navigation.json');
      const navJson = await navRes.json();
      if (navJson.success && navJson.data) {
        setNavData(navJson.data);
      }

      // Fetch Certifications
      const certRes = await fetch('/api/admin/content?file=certifications.json');
      const certJson = await certRes.json();
      if (certJson.success && certJson.data?.certifications) {
        setCertificationsList(certJson.data.certifications);
      }

      // Fetch Exam Platforms
      const platRes = await fetch('/api/admin/content?file=platforms.json');
      const platJson = await platRes.json();
      if (platJson.success && platJson.data?.platforms) {
        setPlatformsList(platJson.data.platforms);
      }

      // Fetch Study Resources
      const resRes = await fetch('/api/admin/content?file=study-resources.json');
      const resJson = await resRes.json();
      if (resJson.success && resJson.data?.resources) {
        setStudyResourcesList(resJson.data.resources);
      }

      // Fetch Partnerships & Logos
      const partRes = await fetch('/api/admin/content?file=partnerships.json');
      const partJson = await partRes.json();
      if (partJson.success && partJson.data?.partners) {
        setPartnershipsList(partJson.data.partners);
      }

      // Fetch Themes & Visual Appearance
      const themeRes = await fetch('/api/admin/content?file=theme.json');
      const themeJson = await themeRes.json();
      if (themeJson.success && themeJson.data?.primaryColor) {
        setThemeData(themeJson.data);
      }
    } catch (err) {
      console.error('Failed to load content', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTheme = () => {
    saveContentFile('theme.json', themeData);
  };

  // Fetch Media Library Images
  const fetchMediaLibrary = async () => {
    try {
      const res = await fetch('/api/admin/upload');
      const json = await res.json();
      if (json.success && json.media) {
        setMediaLibrary(json.media);
      }
    } catch (err) {
      console.error('Failed to load media library', err);
    }
  };

  // Upload New Image
  const handleUploadImageFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (json.success) {
        setSaveStatus(`Image uploaded: ${json.filename}`);
        fetchMediaLibrary();
        if (mediaPickerTargetField) {
          setEditFormData((prev) => ({ ...prev, [mediaPickerTargetField]: json.url }));
          setIsMediaPickerOpen(false);
        }
      } else {
        alert(`Upload error: ${json.error}`);
      }
    } catch (err) {
      alert('Failed to upload image file.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Delete Media Image
  const handleDeleteMediaImage = async (filename) => {
    if (!confirm(`Are you sure you want to delete image "${filename}" from server storage?`)) return;

    try {
      const res = await fetch(`/api/admin/upload?filename=${encodeURIComponent(filename)}`, {
        method: 'DELETE',
      });
      const json = await res.json();
      if (json.success) {
        setSaveStatus(`Image deleted: ${filename}`);
        fetchMediaLibrary();
      } else {
        alert(`Delete error: ${json.error}`);
      }
    } catch (err) {
      alert('Failed to delete media file.');
    }
  };

  // Save updated JSON to backend API
  const saveContentFile = async (fileName, dataPayload) => {
    setLoading(true);
    setSaveStatus('');
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file: fileName,
          data: dataPayload,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSaveStatus('Changes saved successfully!');
        setIsModalOpen(false);
        fetchContentData();
      } else {
        setSaveStatus(`Error: ${json.error}`);
      }
    } catch (err) {
      setSaveStatus('Failed to save changes.');
    } finally {
      setLoading(false);
      setTimeout(() => setSaveStatus(''), 4000);
    }
  };

  // Open Media Picker Modal for a specific field
  const openMediaPickerFor = (fieldName) => {
    setMediaPickerTargetField(fieldName);
    fetchMediaLibrary();
    setIsMediaPickerOpen(true);
  };

  // Select Image from Media Picker
  const selectMediaImage = (url) => {
    if (mediaPickerTargetField) {
      setEditFormData((prev) => ({ ...prev, [mediaPickerTargetField]: url }));
    }
    setIsMediaPickerOpen(false);
  };

  // --- BLOG HANDLERS ---
  const openBlogEditor = (article = null) => {
    setEditingItemType('blog');
    setEditFormData(
      article || {
        slug: `new-article-${Date.now()}`,
        title: '',
        category: 'Examination Preparation',
        publishDate: new Date().toISOString().split('T')[0],
        excerpt: '',
        intro: '',
        metaTitle: '',
        metaDescription: '',
        published: true,
        order: blogArticles.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSaveBlog = () => {
    let updated;
    const existingIndex = blogArticles.findIndex((a) => a.slug === editFormData.slug);
    if (existingIndex >= 0) {
      updated = [...blogArticles];
      updated[existingIndex] = editFormData;
    } else {
      updated = [editFormData, ...blogArticles];
    }
    saveContentFile('blog.json', { articles: updated });
  };

  const handleDeleteBlog = (slug) => {
    if (confirm('Are you sure you want to delete this article?')) {
      const updated = blogArticles.filter((a) => a.slug !== slug);
      saveContentFile('blog.json', { articles: updated });
    }
  };

  // --- SERVICE HANDLERS ---
  const openServiceEditor = (service = null) => {
    setEditingItemType('service');
    setEditFormData(
      service || {
        slug: `new-service-${Date.now()}`,
        title: '',
        category: 'Academic Support',
        tagline: '',
        overview: '',
        heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        published: true,
        order: servicesList.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSaveService = () => {
    let updated;
    const existingIndex = servicesList.findIndex((s) => s.slug === editFormData.slug);
    if (existingIndex >= 0) {
      updated = [...servicesList];
      updated[existingIndex] = editFormData;
    } else {
      updated = [...servicesList, editFormData];
    }
    saveContentFile('services.json', { services: updated });
  };

  const handleDeleteService = (slug) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updated = servicesList.filter((s) => s.slug !== slug);
      saveContentFile('services.json', { services: updated });
    }
  };

  // --- CERTIFICATION HANDLERS ---
  const openCertEditor = (cert = null) => {
    setEditingItemType('certification');
    setEditFormData(
      cert || {
        slug: `new-cert-${Date.now()}`,
        title: '',
        category: 'Project Management',
        description: '',
        logo: '/logos/pmp.svg',
        published: true,
        order: certificationsList.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSaveCertification = () => {
    let updated;
    const existingIndex = certificationsList.findIndex((c) => c.slug === editFormData.slug);
    if (existingIndex >= 0) {
      updated = [...certificationsList];
      updated[existingIndex] = editFormData;
    } else {
      updated = [...certificationsList, editFormData];
    }
    saveContentFile('certifications.json', { certifications: updated });
  };

  const handleDeleteCertification = (slug) => {
    if (confirm('Are you sure you want to delete this certification?')) {
      const updated = certificationsList.filter((c) => c.slug !== slug);
      saveContentFile('certifications.json', { certifications: updated });
    }
  };

  // --- EXAM PLATFORM HANDLERS ---
  const openPlatformEditor = (platform = null) => {
    setEditingItemType('platform');
    setEditFormData(
      platform || {
        slug: `new-platform-${Date.now()}`,
        title: '',
        description: '',
        logo: '/logos/respondus.svg',
        published: true,
        order: platformsList.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSavePlatform = () => {
    let updated;
    const existingIndex = platformsList.findIndex((p) => p.slug === editFormData.slug);
    if (existingIndex >= 0) {
      updated = [...platformsList];
      updated[existingIndex] = editFormData;
    } else {
      updated = [...platformsList, editFormData];
    }
    saveContentFile('platforms.json', { platforms: updated });
  };

  const handleDeletePlatform = (slug) => {
    if (confirm('Are you sure you want to delete this exam platform?')) {
      const updated = platformsList.filter((p) => p.slug !== slug);
      saveContentFile('platforms.json', { platforms: updated });
    }
  };

  // --- STUDY RESOURCE HANDLERS ---
  const openResourceEditor = (resource = null) => {
    setEditingItemType('resource');
    setEditFormData(
      resource || {
        slug: `new-resource-${Date.now()}`,
        title: '',
        category: 'Project Management',
        description: '',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        published: true,
        order: studyResourcesList.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSaveResource = () => {
    let updated;
    const existingIndex = studyResourcesList.findIndex((r) => r.slug === editFormData.slug);
    if (existingIndex >= 0) {
      updated = [...studyResourcesList];
      updated[existingIndex] = editFormData;
    } else {
      updated = [...studyResourcesList, editFormData];
    }
    saveContentFile('study-resources.json', { resources: updated });
  };

  const handleDeleteResource = (slug) => {
    if (confirm('Are you sure you want to delete this study resource?')) {
      const updated = studyResourcesList.filter((r) => r.slug !== slug);
      saveContentFile('study-resources.json', { resources: updated });
    }
  };

  // --- PARTNERSHIP / LOGO HANDLERS ---
  const openPartnershipEditor = (partner = null) => {
    setEditingItemType('partnership');
    setEditFormData(
      partner || {
        id: `partner-${Date.now()}`,
        name: '',
        logo: '/logos/pmp.svg',
        url: '/',
        published: true,
        order: partnershipsList.length + 1,
      }
    );
    setIsModalOpen(true);
  };

  const handleSavePartnership = () => {
    let updated;
    const existingIndex = partnershipsList.findIndex((p) => (p.id && p.id === editFormData.id) || p.name === editFormData.name);
    if (existingIndex >= 0) {
      updated = [...partnershipsList];
      updated[existingIndex] = editFormData;
    } else {
      updated = [...partnershipsList, editFormData];
    }
    saveContentFile('partnerships.json', { partners: updated });
  };

  const handleDeletePartnership = (identifier) => {
    if (confirm('Are you sure you want to delete this partner logo?')) {
      const updated = partnershipsList.filter((p) => p.id !== identifier && p.name !== identifier);
      saveContentFile('partnerships.json', { partners: updated });
    }
  };

  // --- SETTINGS & INQUIRY HANDLERS ---
  const openSettingsEditor = () => {
    setEditingItemType('settings');
    setEditFormData({ ...siteSettings });
    setIsModalOpen(true);
  };

  const handleSaveSettings = () => {
    saveContentFile('settings.json', editFormData);
  };

  const openInquiryViewer = (inquiry) => {
    setEditingItemType('inquiry');
    setEditFormData(inquiry);
    setIsModalOpen(true);
  };

  const handleToggleInquiryStatus = (inquiryId) => {
    const updated = inquiriesList.map((inq) => {
      if (inq.id === inquiryId) {
        return { ...inq, status: inq.status === 'New' ? 'Responded' : 'New' };
      }
      return inq;
    });
    saveContentFile('inquiries.json', { inquiries: updated });
  };

  const handleDeleteInquiry = (inquiryId) => {
    if (confirm('Are you sure you want to delete this inquiry submission?')) {
      const updated = inquiriesList.filter((inq) => inq.id !== inquiryId);
      saveContentFile('inquiries.json', { inquiries: updated });
    }
  };

  // FAQ Editor Handlers
  const openFaqEditor = (catName = 'General Questions', item = null) => {
    setEditingItemType('faq');
    setEditFormData(
      item
        ? { ...item, originalQuestion: item.question, category: catName }
        : {
            category: catName,
            originalQuestion: '',
            question: '',
            answer: '',
            pageLocation: '/faq',
          }
    );
    setIsModalOpen(true);
  };

  const handleSaveFaq = () => {
    const targetCat = editFormData.category || 'General Questions';
    const targetLoc = editFormData.pageLocation || '/faq';

    let catFound = false;
    const updatedCategories = faqsList.map((catObj) => {
      if (catObj.category.toLowerCase() === targetCat.toLowerCase()) {
        catFound = true;
        let items = catObj.items || [];
        const matchIndex = items.findIndex(
          (i) => i.question === editFormData.originalQuestion || i.question === editFormData.question
        );
        if (matchIndex >= 0) {
          items[matchIndex] = {
            question: editFormData.question,
            answer: editFormData.answer,
            pageLocation: targetLoc,
          };
        } else {
          items = [
            ...items,
            {
              question: editFormData.question,
              answer: editFormData.answer,
              pageLocation: targetLoc,
            },
          ];
        }
        return { ...catObj, pageLocation: targetLoc, items };
      }
      return catObj;
    });

    if (!catFound) {
      updatedCategories.push({
        category: targetCat,
        pageLocation: targetLoc,
        items: [
          {
            question: editFormData.question,
            answer: editFormData.answer,
            pageLocation: targetLoc,
          },
        ],
      });
    }

    saveContentFile('faqs.json', { categories: updatedCategories });
  };

  const handleDeleteFaq = (categoryName, questionText) => {
    if (confirm('Are you sure you want to delete this FAQ question?')) {
      const updatedCategories = faqsList.map((catObj) => {
        if (catObj.category === categoryName) {
          return {
            ...catObj,
            items: (catObj.items || []).filter((i) => i.question !== questionText),
          };
        }
        return catObj;
      });
      saveContentFile('faqs.json', { categories: updatedCategories });
    }
  };

  // Page Content & Navbar Handlers
  const openPageEditor = (pageKey, defaultObj) => {
    setEditingItemType('page');
    setEditFormData({
      pageKey,
      ...(pagesData[pageKey] || defaultObj),
    });
    setIsModalOpen(true);
  };

  const handleSavePage = () => {
    const pageKey = editFormData.pageKey;
    const updatedPages = {
      ...pagesData,
      [pageKey]: editFormData,
    };
    setPagesData(updatedPages);
    saveContentFile('pages.json', { pages: updatedPages });
  };

  const openNavEditor = () => {
    setEditingItemType('navigation');
    setEditFormData(JSON.parse(JSON.stringify(navData)));
    setIsModalOpen(true);
  };

  const handleSaveNavigation = () => {
    setNavData(editFormData);
    saveContentFile('navigation.json', editFormData);
  };

  // Flattened FAQ items list with page location
  const allFlattenedFaqs = faqsList.flatMap((catObj) =>
    (catObj.items || []).map((item) => ({
      ...item,
      category: catObj.category,
      pageLocation: item.pageLocation || catObj.pageLocation || '/faq',
    }))
  );

  // Extract unique page locations for filter pills
  const uniquePageLocations = ['All', ...Array.from(new Set(allFlattenedFaqs.map((f) => f.pageLocation)))];

  const newInquiriesCount = inquiriesList.filter((i) => i.status === 'New').length;

  // Derive reliable recent website activity records from real data sources (Inquiries, Blogs, Media uploads)
  const getRecentWebsiteActivity = () => {
    const activities = [];

    // Real Inquiry Activities
    inquiriesList.forEach((inq) => {
      if (inq.date) {
        activities.push({
          id: `act-inq-${inq.id || inq.date}`,
          type: 'inquiry',
          title: `Inquiry from ${inq.fullName || 'Client'}`,
          subtitle: inq.service || inq.subject || 'Customer Inquiry Received',
          timestamp: inq.date,
          dateObj: new Date(inq.date.replace(' ', 'T')),
          badge: inq.status || 'New',
          badgeColor:
            inq.status === 'New'
              ? 'bg-amber-50 text-amber-800 border-amber-200'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: Inbox,
          iconBg: 'bg-purple-100 text-purple-700',
          action: () => openInquiryViewer(inq),
        });
      }
    });

    // Real Blog Publication Activities
    blogArticles.forEach((art) => {
      if (art.publishDate) {
        activities.push({
          id: `act-blog-${art.slug}`,
          type: 'blog',
          title: `Blog Published: ${art.title}`,
          subtitle: art.category || 'Article Published',
          timestamp: art.publishDate,
          dateObj: new Date(art.publishDate),
          badge: art.published !== false ? 'Published' : 'Draft',
          badgeColor:
            art.published !== false
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-slate-100 text-slate-700 border-slate-200',
          icon: BookOpen,
          iconBg: 'bg-blue-100 text-blue-700',
          action: () => openBlogEditor(art),
        });
      }
    });

    // Real Media Upload Activities
    mediaLibrary.forEach((media) => {
      if (media.updatedAt) {
        const formattedDate = new Date(media.updatedAt).toISOString().split('T')[0];
        activities.push({
          id: `act-media-${media.filename}`,
          type: 'media',
          title: `Media Uploaded: ${media.filename}`,
          subtitle: `${(media.size / 1024).toFixed(1)} KB`,
          timestamp: formattedDate,
          dateObj: new Date(media.updatedAt),
          badge: 'Uploaded',
          badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          icon: ImageIcon,
          iconBg: 'bg-indigo-100 text-indigo-700',
          action: () => openMediaPickerFor(''),
        });
      }
    });

    // Sort by timestamp descending
    activities.sort((a, b) => {
      const timeA = isNaN(a.dateObj?.getTime()) ? 0 : a.dateObj.getTime();
      const timeB = isNaN(b.dateObj?.getTime()) ? 0 : b.dateObj.getTime();
      return timeB - timeA;
    });

    return activities.slice(0, 6);
  };

  const recentWebsiteActivities = getRecentWebsiteActivity();

  // Pages Directory Definition
  const ALL_SITE_PAGES = [
    { key: 'home', slug: '/', name: 'Homepage', path: '/' },
    { key: 'about', slug: '/about', name: 'About Us', path: '/about' },
    { key: 'services', slug: '/services', name: 'Services Directory', path: '/services' },
    { key: 'exam-platforms', slug: '/exam-platforms', name: 'Exam Platforms', path: '/exam-platforms' },
    { key: 'certifications', slug: '/certifications', name: 'Certifications', path: '/certifications' },
    { key: 'study-resources', slug: '/study-resources', name: 'Study Resources', path: '/study-resources' },
    { key: 'faq', slug: '/faq', name: 'FAQ Page', path: '/faq' },
    { key: 'contact', slug: '/contact', name: 'Contact Page', path: '/contact' },
  ];

  // Grouped Navigation Definition
  const NAV_GROUPS = [
    {
      key: 'OVERVIEW',
      title: 'OVERVIEW',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboard,
          onClick: () => setActiveTab('dashboard'),
          isActive: activeTab === 'dashboard',
          badge: null,
        },
      ],
    },
    {
      key: 'WEBSITE',
      title: 'WEBSITE MANAGEMENT',
      items: [
        {
          id: 'pages',
          label: 'Pages & Navbar',
          icon: FileText,
          onClick: () => setActiveTab('pages'),
          isActive: activeTab === 'pages',
          badge: ALL_SITE_PAGES.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'services',
          label: 'Services',
          icon: Briefcase,
          onClick: () => setActiveTab('services'),
          isActive: activeTab === 'services',
          badge: servicesList.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'certifications',
          label: 'Certifications',
          icon: Award,
          onClick: () => setActiveTab('certifications'),
          isActive: activeTab === 'certifications',
          badge: certificationsList.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'platforms',
          label: 'Exam Platforms',
          icon: Cpu,
          onClick: () => setActiveTab('platforms'),
          isActive: activeTab === 'platforms',
          badge: platformsList.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'resources',
          label: 'Study Resources',
          icon: FolderOpen,
          onClick: () => setActiveTab('resources'),
          isActive: activeTab === 'resources',
          badge: studyResourcesList.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'partnerships',
          label: 'Partnerships & Logos',
          icon: Sparkles,
          onClick: () => setActiveTab('partnerships'),
          isActive: activeTab === 'partnerships',
          badge: partnershipsList.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
      ],
    },
    {
      key: 'CONTENT',
      title: 'CONTENT MANAGEMENT',
      items: [
        {
          id: 'blogs',
          label: 'Blogs',
          icon: BookOpen,
          onClick: () => setActiveTab('blogs'),
          isActive: activeTab === 'blogs',
          badge: blogArticles.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'faqs',
          label: 'Documents & FAQs',
          icon: HelpCircle,
          onClick: () => setActiveTab('faqs'),
          isActive: activeTab === 'faqs',
          badge: allFlattenedFaqs.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
        {
          id: 'media',
          label: 'Media Library',
          icon: ImageIcon,
          onClick: () => openMediaPickerFor(''),
          isActive: false,
          badge: mediaLibrary.length,
          badgeColor: 'bg-purple-900/60 text-purple-300',
        },
      ],
    },
    {
      key: 'CUSTOMER',
      title: 'CUSTOMER MANAGEMENT',
      items: [
        {
          id: 'inquiries',
          label: 'Inquiries',
          icon: Inbox,
          onClick: () => setActiveTab('inquiries'),
          isActive: activeTab === 'inquiries',
          badge: newInquiriesCount > 0 ? `${newInquiriesCount} New` : inquiriesList.length,
          badgeColor: newInquiriesCount > 0 ? 'bg-rose-500 text-white font-black animate-pulse' : 'bg-purple-900/60 text-purple-300',
        },
      ],
    },
    {
      key: 'CONFIG',
      title: 'CONFIGURATION',
      items: [
        {
          id: 'settings',
          label: 'Site Settings & SEO',
          icon: Settings,
          onClick: () => setActiveTab('settings'),
          isActive: activeTab === 'settings',
          badge: null,
        },
        {
          id: 'theme',
          label: 'Themes & Appearance',
          icon: Palette,
          onClick: () => setActiveTab('theme'),
          isActive: activeTab === 'theme',
          badge: null,
        },
      ],
    },
  ];

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#130924] flex items-center justify-center p-4 font-sans text-slate-100">
        <div className="bg-[#1E1035] border border-purple-900/50 p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400 shadow-lg">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">TUTOR PROCTORED EXAMS</h1>
            <p className="text-xs text-purple-300/80">Content Management System Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-purple-200 mb-1.5 uppercase tracking-wider">
                Administrator Password
              </label>
              <input
                type="password"
                placeholder="Enter Administrator Password"
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#130924] border border-purple-800/60 text-white placeholder-purple-400/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {loginError && (
              <div className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-xs font-medium">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm shadow-xl transition-all tracking-wide cursor-pointer"
            >
              Sign In to CMS Dashboard
            </button>
          </form>

          <div className="text-center text-[11px] text-purple-400/60 border-t border-purple-900/40 pt-4 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Protected by Server-Side Session Authentication</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. LOGGED IN CMS DASHBOARD UI
  return (
    <div className="h-screen w-full overflow-hidden bg-[#F8FAFC] flex flex-col lg:flex-row font-sans text-slate-800">
      {/* MOBILE HEADER BAR */}
      <div className="lg:hidden bg-[#1E1035] border-b border-purple-900/50 px-4 py-3 flex items-center justify-between text-white sticky top-0 z-40 shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-xl bg-purple-900/50 border border-purple-800 text-purple-200 hover:text-white transition-colors"
            aria-label="Open Navigation Drawer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-black text-xs tracking-tight text-white block leading-none">TUTOR PROCTORED EXAMS</span>
              <span className="text-[9px] uppercase font-bold text-purple-400 tracking-wider">CMS Control Panel</span>
            </div>
          </div>
        </div>

        <span className="text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full bg-purple-600/40 border border-purple-500/30 text-purple-200">
          {activeTab}
        </span>
      </div>

      {/* MOBILE SLIDE-OUT DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          />

          {/* Drawer Body */}
          <aside className="relative w-80 max-w-[85vw] bg-[#1E1035] text-purple-200 flex flex-col justify-between p-5 shadow-2xl border-r border-purple-800/50 z-10 animate-in slide-in-from-left duration-300">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-md">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-black text-white tracking-tight leading-none uppercase">
                      Tutor Proctored Exams
                    </h2>
                    <span className="text-[9px] uppercase font-bold text-purple-400 tracking-wider block mt-0.5">
                      CMS Control Panel
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-purple-900/40 text-purple-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)] pr-1">
                {NAV_GROUPS.map((group) => (
                  <div key={group.key} className="space-y-1.5">
                    <span className="text-[9px] font-black tracking-widest text-purple-400 uppercase px-2">
                      {group.title}
                    </span>

                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              item.onClick();
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-bold text-xs transition-all ${
                              item.isActive
                                ? 'bg-[#581C87] text-white shadow-lg shadow-purple-950/60 font-extrabold border-l-4 border-purple-400'
                                : 'hover:bg-purple-900/40 text-purple-200 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <IconComponent className="w-4 h-4 shrink-0 text-purple-300" />
                              <span>{item.label}</span>
                            </div>

                            {item.badge !== null && item.badge !== undefined && (
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                  item.badgeColor || 'bg-purple-900/60 text-purple-300'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Profile & Bottom Actions */}
            <div className="pt-4 border-t border-purple-900/50 space-y-3">
              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-900/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/40 border border-purple-400/40 flex items-center justify-center font-black text-white text-xs shrink-0 shadow-sm">
                  AD
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Admin User</span>
                  </div>
                  <span className="text-[10px] text-purple-300/80 font-medium truncate block">Super Administrator</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 text-xs font-bold pt-1">
                <a
                  href="/"
                  target="_blank"
                  className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Site</span>
                </a>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden lg:flex flex-col justify-between bg-[#1E1035] text-purple-200 shrink-0 shadow-2xl border-r border-purple-900/50 transition-all duration-300 relative z-30 h-screen sticky top-0 overflow-y-auto ${
          isSidebarCollapsed ? 'w-20 p-3' : 'w-64 p-5'
        }`}
      >
        <div className="space-y-6">
          {/* Desktop Sidebar Logo & Toggle Header */}
          <div className="flex items-center justify-between pb-3 border-b border-purple-900/50">
            {!isSidebarCollapsed && (
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-md shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs font-black text-white tracking-tight leading-none uppercase truncate">
                    TUTOR PROCTORED EXAMS
                  </h2>
                  <span className="text-[9px] uppercase font-bold text-purple-400 tracking-wider block mt-0.5 truncate">
                    CMS Control Panel
                  </span>
                </div>
              </div>
            )}

            {isSidebarCollapsed && (
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-md mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
            )}

            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 rounded-lg bg-purple-900/40 hover:bg-purple-800/60 text-purple-300 hover:text-white transition-colors shrink-0 ml-1"
              title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isSidebarCollapsed ? <PanelLeft className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            </button>
          </div>

          {/* Desktop Navigation Grouped Items */}
          <nav className="space-y-4 overflow-y-auto max-h-[calc(100vh-230px)] pr-1 scrollbar-thin scrollbar-thumb-purple-900">
            {NAV_GROUPS.map((group) => (
              <div key={group.key} className="space-y-1.5">
                {/* Section Header */}
                {!isSidebarCollapsed ? (
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.key)}
                    className="w-full flex items-center justify-between px-2 py-1 text-[9px] font-black tracking-widest text-purple-400 uppercase hover:text-purple-200 transition-colors"
                  >
                    <span>{group.title}</span>
                    {expandedGroups[group.key] ? (
                      <ChevronDown className="w-3 h-3 text-purple-400" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-purple-400" />
                    )}
                  </button>
                ) : (
                  <div className="h-px bg-purple-900/60 my-2" />
                )}

                {/* Section Items */}
                {(expandedGroups[group.key] || isSidebarCollapsed) && (
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={item.id} className="relative group">
                          <button
                            type="button"
                            onClick={item.onClick}
                            className={`w-full flex items-center ${
                              isSidebarCollapsed ? 'justify-center p-2.5' : 'justify-between px-3 py-2.5'
                            } rounded-xl font-bold text-xs transition-all ${
                              item.isActive
                                ? 'bg-[#581C87] text-white shadow-lg shadow-purple-950/60 font-extrabold border-l-4 border-purple-400'
                                : 'hover:bg-purple-900/40 text-purple-200 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <IconComponent className="w-4 h-4 shrink-0 text-purple-300" />
                              {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                            </div>

                            {!isSidebarCollapsed && item.badge !== null && item.badge !== undefined && (
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                  item.badgeColor || 'bg-purple-900/60 text-purple-300'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </button>

                          {/* Hover Tooltip in Collapsed Mode */}
                          {isSidebarCollapsed && (
                            <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#130924] text-white text-xs font-bold rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-purple-800 z-50 transition-opacity flex items-center gap-2">
                              <span>{item.label}</span>
                              {item.badge !== null && item.badge !== undefined && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-600 text-white font-extrabold">
                                  {item.badge}
                                </span>
                              )}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop Sidebar Administrator Profile & Bottom Actions */}
        <div className="pt-4 border-t border-purple-900/50 space-y-3">
          {!isSidebarCollapsed ? (
            <>
              {/* Profile Card */}
              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-900/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/40 border border-purple-400/40 flex items-center justify-center font-black text-white text-xs shrink-0 shadow-sm">
                  AD
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Admin User</span>
                  </div>
                  <span className="text-[10px] text-purple-300/80 font-medium truncate block">Super Administrator</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold pt-1">
                <a
                  href="/"
                  target="_blank"
                  className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Site</span>
                </a>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <a
                href="/"
                target="_blank"
                className="p-2 rounded-xl bg-purple-900/40 text-purple-300 hover:text-white hover:bg-purple-800/60 transition-colors group relative"
                title="View Live Website"
              >
                <Globe className="w-4 h-4" />
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#130924] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-purple-800 z-50">
                  Live Website
                </span>
              </a>

              <button
                type="button"
                onClick={handleLogout}
                className="p-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-colors group relative"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-[#130924] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-purple-800 z-50">
                  Sign Out
                </span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        {/* TOP RIGHT USER & NOTIFICATION HEADER BAR */}
        <div className="flex items-center justify-end gap-3 pb-1 border-b border-slate-200/50">
          <button
            onClick={() => setActiveTab('inquiries')}
            className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-purple-700 relative transition-colors"
            title="Notifications & Inquiries"
          >
            <Bell className="w-5 h-5" />
            {newInquiriesCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-black text-[9px] rounded-full flex items-center justify-center shadow-xs">
                {newInquiriesCount}
              </span>
            )}
          </button>
          <span className="w-px h-5 bg-slate-200" />
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-[#581C87] text-white font-extrabold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              AD
            </div>
            <span className="text-xs font-bold text-slate-700 hidden sm:inline group-hover:text-purple-700 transition-colors">
              Admin User
            </span>
          </div>
        </div>

        {saveStatus && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-bold flex items-center justify-between shadow-sm animate-in fade-in">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              {saveStatus}
            </span>
            <button onClick={() => setSaveStatus('')}><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* TAB 1: REDESIGNED PREMIUM MODERN DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* WELCOME HEADER BANNER */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1B0D38] via-[#2D1258] to-[#581C87] text-white p-6 sm:p-8 shadow-xl border border-purple-900/50">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
              <div className="absolute right-40 -top-10 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Welcome back, Admin!
                    </h1>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-300 flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Operational</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-200/90 font-medium">
                    Manage your Tutor Proctored Exams website with confidence.
                  </p>

                  <p className="text-xs text-purple-300/80 font-medium flex items-center gap-2 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                    <span>
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </p>
                </div>

                {/* Header Quick Actions */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => openBlogEditor()}
                    className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-950/60 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Article</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="px-4 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700/50 text-white text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Inbox className="w-4 h-4 text-purple-300" />
                    <span>Inquiries</span>
                    {newInquiriesCount > 0 && (
                      <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        {newInquiriesCount}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => openMediaPickerFor('')}
                    className="px-4 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-700/50 text-white text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <ImageIcon className="w-4 h-4 text-purple-300" />
                    <span>Media Library</span>
                  </button>
                </div>
              </div>
            </div>

            {/* REAL-DATA STATISTICS GRID (8 Cards, 2x4 Layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {/* 1. Total Inquiries */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Inquiries</span>
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                    <Inbox className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{inquiriesList.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('inquiries')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>View All</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 2. New Inquiries */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Inquiries</span>
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{newInquiriesCount}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('inquiries')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>View New</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3. Published Blogs */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Published Blogs</span>
                  <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">
                    {blogArticles.filter((a) => a.published !== false).length}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('blogs')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 4. Services */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Services</span>
                  <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{servicesList.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('services')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 5. Website Pages */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Website Pages</span>
                  <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{ALL_SITE_PAGES.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1">
                    SEO OK <Check className="w-3 h-3" />
                  </span>
                  <button onClick={() => setActiveTab('pages')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 6. Certifications */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Certifications</span>
                  <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#9333EA] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{certificationsList.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('certifications')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 7. Exam Platforms */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Platforms</span>
                  <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] text-[#DB2777] flex items-center justify-center font-bold">
                    <Monitor className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{platformsList.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('platforms')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 8. Study Resources */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all space-y-3 group flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Study Resources</span>
                  <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{studyResourcesList.length}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-end text-xs font-bold">
                  <button onClick={() => setActiveTab('resources')} className="text-[#6D28D9] hover:underline inline-flex items-center gap-1">
                    <span>Manage</span> <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* SPLIT SECTION 1: QUICK ACTIONS GRID & RECENT INQUIRIES TABLE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* QUICK ACTIONS GRID (Spans 5 cols on lg) */}
              <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#7C3AED]" /> Quick Actions
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => openBlogEditor()}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Create Blog Article</span>
                  </button>

                  <button
                    onClick={() => openServiceEditor()}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Add Service</span>
                  </button>

                  <button
                    onClick={() => openCertEditor()}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Add Certification</span>
                  </button>

                  <button
                    onClick={() => openPlatformEditor()}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Monitor className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Add Exam Platform</span>
                  </button>

                  <button
                    onClick={() => openResourceEditor()}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Add Study Resource</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('pages')}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Manage Pages</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">View Inquiries</span>
                  </button>

                  <button
                    onClick={() => openMediaPickerFor('')}
                    className="bg-[#F5F3FF] hover:bg-[#EDE9FE] border border-purple-100 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-200/60 text-[#6D28D9] flex items-center justify-center group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-900 leading-tight">Open Media Library</span>
                  </button>
                </div>
              </div>

              {/* RECENT INQUIRIES TABLE (Spans 7 cols on lg) */}
              <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#7C3AED]" /> Recent Inquiries
                  </h3>

                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="px-3.5 py-1.5 rounded-full bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#6D28D9] text-xs font-bold transition-colors inline-flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] uppercase font-extrabold text-slate-400">
                        <th className="py-3 px-5">Customer</th>
                        <th className="py-3 px-5">Service</th>
                        <th className="py-3 px-5">Date</th>
                        <th className="py-3 px-5">Status</th>
                        <th className="py-3 px-5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {inquiriesList.slice(0, 4).map((inq) => (
                        <tr key={inq.id || inq.date} className="hover:bg-purple-50/20 transition-colors">
                          <td className="py-3.5 px-5 font-bold text-slate-900 whitespace-nowrap">
                            {inq.fullName}
                          </td>
                          <td className="py-3.5 px-5 font-medium text-slate-700 whitespace-nowrap">
                            {inq.service}
                          </td>
                          <td className="py-3.5 px-5 text-slate-500 font-medium whitespace-nowrap text-[11px]">
                            {inq.date}
                          </td>
                          <td className="py-3.5 px-5 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 w-fit ${
                                inq.status === 'New'
                                  ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${inq.status === 'New' ? 'bg-rose-600' : 'bg-emerald-600'}`} />
                              <span>{inq.status || 'New'}</span>
                            </span>
                          </td>
                          <td className="py-3.5 px-5 text-right whitespace-nowrap">
                            <button
                              onClick={() => openInquiryViewer(inq)}
                              className="px-3.5 py-1.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white font-bold text-xs shadow-xs inline-flex items-center gap-1 transition-colors"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SPLIT SECTION 2: RECENT ACTIVITY & "YOUR CMS IS ALL SET!" BANNER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* RECENT ACTIVITY (Spans 5 cols on lg) */}
              <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm p-6 flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#7C3AED]" /> Recent Activity
                  </h3>
                  <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                    Live Activity Feed
                  </span>
                </div>

                <div className="space-y-3.5 flex-grow">
                  {recentWebsiteActivities.slice(0, 3).map((act) => {
                    const IconComp = act.icon || Clock;
                    return (
                      <div
                        key={act.id}
                        onClick={act.action}
                        className="p-3 rounded-xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 cursor-pointer transition-all flex items-start gap-3 group"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${act.iconBg}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-purple-700 transition-colors">
                              {act.title}
                            </h4>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">{act.timestamp}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* "YOUR CMS IS ALL SET!" BANNER (Spans 7 cols on lg) */}
              <div className="lg:col-span-7 bg-gradient-to-r from-[#2E0B54] via-[#4C1D95] to-[#6D28D9] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4 max-w-md relative z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shadow-inner">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white tracking-tight">Your CMS is all set!</h3>
                    <p className="text-xs text-purple-200/90 font-medium leading-relaxed">
                      Everything is running smoothly and ready to help you manage your content.
                    </p>
                  </div>

                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#581C87] font-black text-xs px-5 py-2.5 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Visit Your Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Laptop Website Preview Mockup Illustration */}
                <div className="relative z-10 w-48 sm:w-64 shrink-0">
                  <div className="bg-slate-900 p-2 rounded-t-xl border-t-2 border-x-2 border-slate-700 shadow-2xl">
                    <div className="bg-white rounded-lg p-3 text-center space-y-2 border border-slate-200">
                      <div className="w-8 h-8 rounded-full bg-[#581C87] text-white flex items-center justify-center mx-auto shadow-sm">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] font-black text-slate-900 tracking-tight uppercase leading-tight">
                        TUTOR PROCTORED EXAMS
                      </div>
                      <div className="h-1 w-12 bg-purple-600 rounded-full mx-auto" />
                    </div>
                  </div>
                  <div className="bg-slate-800 h-3 rounded-b-xl border-b border-slate-600 shadow-md flex items-center justify-center">
                    <div className="w-8 h-1 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 1: CERTIFICATIONS MANAGER */}
        {activeTab === 'certifications' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Certifications Manager</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage professional certification preparation programs, badges, descriptions, and publish status
                </p>
              </div>

              <button
                onClick={() => openCertEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Certification</span>
              </button>
            </div>

            {/* Control Bar: Search & Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search certification title, category, description..."
                  value={certSearchQuery}
                  onChange={(e) => setCertSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {['All', 'Project Management', 'Information Technology', 'Healthcare & Coding', 'Human Resources', 'Licensing & Real Estate'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCertCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      certCategoryFilter === cat
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">Program Title</th>
                      <th className="py-3.5 px-6">Category</th>
                      <th className="py-3.5 px-6">Description</th>
                      <th className="py-3.5 px-6">Slug ID</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {certificationsList
                      .filter((cert) => {
                        const matchesCategory = certCategoryFilter === 'All' || cert.category === certCategoryFilter;
                        const matchesSearch =
                          certSearchQuery.trim() === '' ||
                          cert.title.toLowerCase().includes(certSearchQuery.toLowerCase()) ||
                          cert.description?.toLowerCase().includes(certSearchQuery.toLowerCase()) ||
                          cert.category?.toLowerCase().includes(certSearchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                      })
                      .map((cert) => (
                        <tr key={cert.slug} className="hover:bg-purple-50/30 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-900">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-black text-xs shrink-0">
                                <Award className="w-4 h-4" />
                              </div>
                              <span className="group-hover:text-purple-700 transition-colors">{cert.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] border border-blue-100 whitespace-nowrap">
                              {cert.category}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-slate-500 max-w-xs truncate">
                            {cert.description || 'No description provided.'}
                          </td>
                          <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                            #{cert.slug}
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                cert.published !== false
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}
                            >
                              {cert.published !== false ? 'Published' : 'Unpublished'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => openCertEditor(cert)}
                              className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-purple-200"
                            >
                              <Edit className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteCertification(cert.slug)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {certificationsList.filter((cert) => {
                const matchesCategory = certCategoryFilter === 'All' || cert.category === certCategoryFilter;
                const matchesSearch =
                  certSearchQuery.trim() === '' ||
                  cert.title.toLowerCase().includes(certSearchQuery.toLowerCase()) ||
                  cert.description?.toLowerCase().includes(certSearchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <Award className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No certifications found matching search or filter criteria.</p>
                  <button
                    onClick={() => {
                      setCertSearchQuery('');
                      setCertCategoryFilter('All');
                    }}
                    className="text-purple-600 font-bold hover:underline"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 2: EXAM PLATFORMS MANAGER */}
        {activeTab === 'platforms' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Exam Platforms Manager</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage supported proctoring assessment software guides, technical requirements, and setup documentation
                </p>
              </div>

              <button
                onClick={() => openPlatformEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Exam Platform</span>
              </button>
            </div>

            {/* Control Bar */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search exam platform title, description..."
                  value={platformSearchQuery}
                  onChange={(e) => setPlatformSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">Software Title</th>
                      <th className="py-3.5 px-6">Description / Technical Overview</th>
                      <th className="py-3.5 px-6">Slug ID</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {platformsList
                      .filter((plat) => {
                        return (
                          platformSearchQuery.trim() === '' ||
                          plat.title.toLowerCase().includes(platformSearchQuery.toLowerCase()) ||
                          plat.description?.toLowerCase().includes(platformSearchQuery.toLowerCase())
                        );
                      })
                      .map((plat) => (
                        <tr key={plat.slug} className="hover:bg-purple-50/30 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-900">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 font-black text-xs shrink-0">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <span className="group-hover:text-purple-700 transition-colors">{plat.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-slate-500 max-w-md truncate">
                            {plat.description || 'No overview provided.'}
                          </td>
                          <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                            #{plat.slug}
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                plat.published !== false
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}
                            >
                              {plat.published !== false ? 'Supported' : 'Unpublished'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => openPlatformEditor(plat)}
                              className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-purple-200"
                            >
                              <Edit className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeletePlatform(plat.slug)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {platformsList.filter((plat) => {
                return (
                  platformSearchQuery.trim() === '' ||
                  plat.title.toLowerCase().includes(platformSearchQuery.toLowerCase()) ||
                  plat.description?.toLowerCase().includes(platformSearchQuery.toLowerCase())
                );
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <Cpu className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No exam platforms found matching query.</p>
                  <button onClick={() => setPlatformSearchQuery('')} className="text-purple-600 font-bold hover:underline">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 3: STUDY RESOURCES MANAGER */}
        {activeTab === 'resources' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Study Resources Manager</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage revision notes, study guides, formula sheets, and practice exam catalogues
                </p>
              </div>

              <button
                onClick={() => openResourceEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Study Resource</span>
              </button>
            </div>

            {/* Control Bar */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search study resource title, category, description..."
                  value={resourceSearchQuery}
                  onChange={(e) => setResourceSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">Resource Title</th>
                      <th className="py-3.5 px-6">Category</th>
                      <th className="py-3.5 px-6">Description</th>
                      <th className="py-3.5 px-6">Slug ID</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {studyResourcesList
                      .filter((res) => {
                        return (
                          resourceSearchQuery.trim() === '' ||
                          res.title.toLowerCase().includes(resourceSearchQuery.toLowerCase()) ||
                          res.category?.toLowerCase().includes(resourceSearchQuery.toLowerCase()) ||
                          res.description?.toLowerCase().includes(resourceSearchQuery.toLowerCase())
                        );
                      })
                      .map((res) => (
                        <tr key={res.slug} className="hover:bg-purple-50/30 transition-colors group">
                          <td className="py-4 px-6 font-bold text-slate-900">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-black text-xs shrink-0">
                                <FolderOpen className="w-4 h-4" />
                              </div>
                              <span className="group-hover:text-purple-700 transition-colors">{res.title}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 font-bold text-[10px] border border-blue-100 whitespace-nowrap">
                              {res.category}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-slate-500 max-w-xs truncate">
                            {res.description || 'No description provided.'}
                          </td>
                          <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                            #{res.slug}
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                res.published !== false
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}
                            >
                              {res.published !== false ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => openResourceEditor(res)}
                              className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-purple-200"
                            >
                              <Edit className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteResource(res.slug)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {studyResourcesList.filter((res) => {
                return (
                  resourceSearchQuery.trim() === '' ||
                  res.title.toLowerCase().includes(resourceSearchQuery.toLowerCase()) ||
                  res.category?.toLowerCase().includes(resourceSearchQuery.toLowerCase())
                );
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <FolderOpen className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No study resources found matching query.</p>
                  <button onClick={() => setResourceSearchQuery('')} className="text-purple-600 font-bold hover:underline">
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 4: PARTNERSHIPS & LOGOS MANAGER */}
        {activeTab === 'partnerships' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Partnerships & Logos Manager</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage partner logos, order, target URLs, and homepage slider visibility
                </p>
              </div>

              <button
                onClick={() => openPartnershipEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Partner Logo</span>
              </button>
            </div>

            {/* Control Bar */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search partner name or URL..."
                  value={partnerSearchQuery}
                  onChange={(e) => setPartnerSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Grid of Partner Logo Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {partnershipsList
                .filter((p) => {
                  return (
                    partnerSearchQuery.trim() === '' ||
                    p.name.toLowerCase().includes(partnerSearchQuery.toLowerCase()) ||
                    p.url?.toLowerCase().includes(partnerSearchQuery.toLowerCase())
                  );
                })
                .map((partner, idx) => (
                  <div
                    key={partner.id || idx}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-20 h-14 rounded-xl bg-slate-50 border border-slate-200 p-2.5 flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                        <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="text-center space-y-1">
                        <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-purple-700 transition-colors">
                          {partner.name}
                        </h4>
                        <a
                          href={partner.url || '/'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-purple-600 hover:underline block truncate"
                        >
                          {partner.url || '/'}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] border ${
                          partner.published !== false
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}
                      >
                        {partner.published !== false ? 'Published' : 'Unpublished'}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openPartnershipEditor(partner)}
                          className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 hover:bg-purple-100 text-[11px] border border-purple-200 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePartnership(partner.id || partner.name)}
                          className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 text-[11px] border border-rose-200 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {partnershipsList.filter((p) => {
              return (
                partnerSearchQuery.trim() === '' ||
                p.name.toLowerCase().includes(partnerSearchQuery.toLowerCase()) ||
                p.url?.toLowerCase().includes(partnerSearchQuery.toLowerCase())
              );
            }).length === 0 && (
              <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <Sparkles className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-bold text-slate-700">No partner logos found matching search query.</p>
                <button onClick={() => setPartnerSearchQuery('')} className="text-purple-600 font-bold hover:underline">
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* SECTION 5: PAGES & NAVBAR MANAGEMENT */}
        {activeTab === 'pages' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Website Pages & Navigation Manager</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Configure page titles, hero text, SEO metadata, top navigation bar links, and site announcement banner
                </p>
              </div>

              <button
                onClick={openNavEditor}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Edit Navigation Bar</span>
              </button>
            </div>

            {/* Announcement Banner Highlight */}
            <div className="bg-gradient-to-r from-[#1E1035] via-[#2D1654] to-purple-900 text-white p-6 rounded-2xl shadow-md space-y-3 border border-purple-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Active Top Navigation Announcement Banner
                </div>
                <button
                  onClick={openNavEditor}
                  className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all border border-white/20"
                >
                  Edit Header Navbar
                </button>
              </div>
              <p className="text-xs text-purple-100 font-medium leading-relaxed">
                <strong>Main Announcement:</strong> &ldquo;{navData.topBanner?.mainAnnouncement || 'Ethical Educational Support & Proctoring Software Technical Guidance for Students Worldwide'}&rdquo;
              </p>
            </div>

            {/* Control Bar */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search page by title, route, or subtitle..."
                  value={pageSearchQuery}
                  onChange={(e) => setPageSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Grid of Page Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ALL_SITE_PAGES.filter((pg) => {
                const pageInfo = pagesData[pg.key] || {};
                return (
                  pageSearchQuery.trim() === '' ||
                  pg.name.toLowerCase().includes(pageSearchQuery.toLowerCase()) ||
                  pg.slug.toLowerCase().includes(pageSearchQuery.toLowerCase()) ||
                  pageInfo.subtitle?.toLowerCase().includes(pageSearchQuery.toLowerCase())
                );
              }).map((pg) => {
                const pageInfo = pagesData[pg.key] || {};
                const pageFaqCount = allFlattenedFaqs.filter(
                  (f) => f.pageLocation === pg.path || f.pageLocation.startsWith(pg.path)
                ).length;

                return (
                  <div
                    key={pg.key}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 hover:border-purple-300 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-slate-900 group-hover:text-purple-700 transition-colors">
                          {pg.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            {pageFaqCount} FAQs
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                            {pg.slug}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
                        {pageInfo.subtitle || pageInfo.metaDescription || `Content manager for ${pg.name}`}
                      </p>

                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-mono truncate">
                        https://tutorproctoredexams.com{pg.path}
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setFaqLocationFilterState(pg.path);
                          setActiveTab('faqs');
                        }}
                        className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold inline-flex items-center gap-1 transition-colors border border-purple-200"
                      >
                        <HelpCircle className="w-3.5 h-3.5" /> Filter FAQs ({pageFaqCount})
                      </button>

                      <a
                        href={pg.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-500" /> View Live Page
                      </a>

                      <button
                        onClick={() => openPageEditor(pg.key, pg)}
                        className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Edit className="w-3.5 h-3.5" /> Edit Page
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 6: DOCUMENTS & FAQS CATALOGUE */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Documents & FAQs Catalogue</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage all {allFlattenedFaqs.length} frequently asked questions grouped separately by website page location
                </p>
              </div>

              <button
                onClick={() => openFaqEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New FAQ</span>
              </button>
            </div>

            {/* Control Bar & Page Location Pills */}
            <div className="space-y-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-grow max-w-md">
                  <input
                    type="text"
                    placeholder="Search question, answer content, page URL..."
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>

                <span className="text-xs text-slate-400 font-bold shrink-0">
                  Showing {allFlattenedFaqs.filter((item) => {
                    const matchesLocation =
                      faqLocationFilterState === 'All' ||
                      item.pageLocation === faqLocationFilterState ||
                      item.pageLocation.startsWith(faqLocationFilterState);
                    const matchesSearch =
                      faqSearchQuery.trim() === '' ||
                      item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                      item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                      item.pageLocation.toLowerCase().includes(faqSearchQuery.toLowerCase());
                    return matchesLocation && matchesSearch;
                  }).length} FAQs
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider shrink-0 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-purple-600" /> Location:
                </span>
                {uniquePageLocations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setFaqLocationFilterState(loc)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      faqLocationFilterState === loc
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {loc === 'All' ? 'All Locations' : loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">#</th>
                      <th className="py-3.5 px-6">Question</th>
                      <th className="py-3.5 px-6">Answer Text</th>
                      <th className="py-3.5 px-6">Category</th>
                      <th className="py-3.5 px-6">Page Location</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {allFlattenedFaqs
                      .filter((item) => {
                        const matchesLocation =
                          faqLocationFilterState === 'All' ||
                          item.pageLocation === faqLocationFilterState ||
                          item.pageLocation.startsWith(faqLocationFilterState);
                        const matchesSearch =
                          faqSearchQuery.trim() === '' ||
                          item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                          item.pageLocation.toLowerCase().includes(faqSearchQuery.toLowerCase());
                        return matchesLocation && matchesSearch;
                      })
                      .map((item, idx) => (
                        <tr key={idx} className="hover:bg-purple-50/30 transition-colors group">
                          <td className="py-4 px-6 font-mono text-slate-400">
                            {String(idx + 1).padStart(2, '0')}
                          </td>
                          <td
                            onClick={() => openFaqEditor(item.category, item)}
                            className="py-4 px-6 font-bold text-slate-900 max-w-xs leading-snug cursor-pointer group-hover:text-purple-700 transition-colors"
                          >
                            {item.question}
                          </td>
                          <td className="py-4 px-6 text-slate-500 max-w-sm truncate">
                            {item.answer}
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 font-bold text-[10px] border border-purple-100 whitespace-nowrap">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <a
                              href={item.pageLocation}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-[11px] text-purple-700 bg-purple-50/80 px-2.5 py-1 rounded-lg border border-purple-200 hover:underline"
                            >
                              <span>{item.pageLocation}</span>
                              <ExternalLink className="w-3 h-3 text-purple-500" />
                            </a>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => openFaqEditor(item.category, item)}
                              className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-purple-200"
                            >
                              <Edit className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteFaq(item.category, item.question)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {allFlattenedFaqs.filter((item) => {
                const matchesLocation =
                  faqLocationFilterState === 'All' ||
                  item.pageLocation === faqLocationFilterState ||
                  item.pageLocation.startsWith(faqLocationFilterState);
                const matchesSearch =
                  faqSearchQuery.trim() === '' ||
                  item.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                  item.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
                return matchesLocation && matchesSearch;
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No FAQ questions found matching query or location filter.</p>
                  <button
                    onClick={() => {
                      setFaqSearchQuery('');
                      setFaqLocationFilterState('All');
                    }}
                    className="text-purple-600 font-bold hover:underline"
                  >
                    Reset FAQ Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 7: CUSTOMER INQUIRIES DIRECTORY */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Customer Inquiries Directory</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Review, manage, and respond to incoming customer form submissions and lead requests
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl">
                  Total: <strong className="text-slate-900">{inquiriesList.length}</strong>
                </span>
                {newInquiriesCount > 0 && (
                  <span className="text-xs font-black text-white bg-rose-500 px-3 py-1.5 rounded-xl shadow-sm animate-pulse">
                    {newInquiriesCount} Unread
                  </span>
                )}
              </div>
            </div>

            {/* Control Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-1.5 bg-slate-100/80 p-1 rounded-xl">
                {['All', 'New', 'Responded'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setInquiryFilterState(st)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all ${
                      inquiryFilterState === st
                        ? 'bg-white text-purple-900 shadow-sm border border-slate-200/60'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {st === 'New' && newInquiriesCount > 0 ? (
                      <span className="flex items-center gap-1.5">
                        <span>New</span>
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      </span>
                    ) : (
                      st
                    )}
                  </button>
                ))}
              </div>

              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search by client name, email, phone, service, subject..."
                  value={inquirySearchQuery}
                  onChange={(e) => setInquirySearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">Date & Time</th>
                      <th className="py-3.5 px-6">Client Name</th>
                      <th className="py-3.5 px-6">Email / Phone</th>
                      <th className="py-3.5 px-6">Service Requested & Subject</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {inquiriesList
                      .filter((inq) => {
                        const matchesStatus = inquiryFilterState === 'All' || inq.status === inquiryFilterState;
                        const matchesSearch =
                          inquirySearchQuery.trim() === '' ||
                          inq.fullName.toLowerCase().includes(inquirySearchQuery.toLowerCase()) ||
                          inq.email.toLowerCase().includes(inquirySearchQuery.toLowerCase()) ||
                          inq.phone?.toLowerCase().includes(inquirySearchQuery.toLowerCase()) ||
                          inq.service?.toLowerCase().includes(inquirySearchQuery.toLowerCase()) ||
                          inq.subject?.toLowerCase().includes(inquirySearchQuery.toLowerCase());
                        return matchesStatus && matchesSearch;
                      })
                      .map((inq) => (
                        <tr
                          key={inq.id}
                          className={`transition-colors ${
                            inq.status === 'New'
                              ? 'bg-amber-50/40 hover:bg-amber-50/80 border-l-4 border-amber-500'
                              : 'hover:bg-purple-50/30'
                          }`}
                        >
                          <td className="py-4 px-6 text-slate-500 font-mono text-[11px] whitespace-nowrap">
                            {inq.date}
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-extrabold text-slate-900 flex items-center gap-2">
                              {inq.status === 'New' && <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />}
                              <span>{inq.fullName}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-slate-600">
                            <div className="font-medium text-slate-800">{inq.email}</div>
                            <div className="text-[11px] text-slate-400 font-mono">{inq.phone || 'N/A'}</div>
                          </td>
                          <td className="py-4 px-6 max-w-xs">
                            <div className="font-bold text-slate-800 truncate">{inq.service}</div>
                            <div className="text-[11px] text-purple-600 font-medium truncate">{inq.subject || inq.message}</div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                inq.status === 'New'
                                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                                  : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              }`}
                            >
                              {inq.status || 'New'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <button
                              onClick={() => openInquiryViewer(inq)}
                              className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] shadow-sm inline-flex items-center gap-1 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" /> View Message
                            </button>
                            <button
                              onClick={() => handleToggleInquiryStatus(inq.id)}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-slate-200"
                            >
                              <RefreshCw className="w-3.5 h-3.5" /> {inq.status === 'New' ? 'Mark Responded' : 'Mark New'}
                            </button>
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {inquiriesList.filter((inq) => {
                const matchesStatus = inquiryFilterState === 'All' || inq.status === inquiryFilterState;
                const matchesSearch =
                  inquirySearchQuery.trim() === '' ||
                  inq.fullName.toLowerCase().includes(inquirySearchQuery.toLowerCase()) ||
                  inq.email.toLowerCase().includes(inquirySearchQuery.toLowerCase());
                return matchesStatus && matchesSearch;
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <Inbox className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No customer inquiries found matching filter criteria.</p>
                  <button
                    onClick={() => {
                      setInquirySearchQuery('');
                      setInquiryFilterState('All');
                    }}
                    className="text-purple-600 font-bold hover:underline"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 8: BLOG ARTICLES CATALOGUE */}
        {activeTab === 'blogs' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Blog Articles Catalogue</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Create, edit, or publish educational blog articles, study guides, and SEO meta descriptions
                </p>
              </div>

              <button
                onClick={() => openBlogEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Article</span>
              </button>
            </div>

            {/* Control Bar: Search & Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search articles by title, category, or excerpt..."
                  value={blogSearchQuery}
                  onChange={(e) => setBlogSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {['All', 'Examination Preparation', 'Professional Certifications', 'Study Strategies', 'Examination Software Guidance', 'Nursing Exam Preparation'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setBlogCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      blogCategoryFilter === cat
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Surface */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] uppercase font-bold text-slate-400">
                      <th className="py-3.5 px-6">#</th>
                      <th className="py-3.5 px-6">Article Title</th>
                      <th className="py-3.5 px-6">Category</th>
                      <th className="py-3.5 px-6">Publish Date</th>
                      <th className="py-3.5 px-6">Slug ID</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {blogArticles
                      .filter((article) => {
                        const matchesCategory = blogCategoryFilter === 'All' || article.category === blogCategoryFilter;
                        const matchesSearch =
                          blogSearchQuery.trim() === '' ||
                          article.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
                          article.category?.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
                          article.excerpt?.toLowerCase().includes(blogSearchQuery.toLowerCase());
                        return matchesCategory && matchesSearch;
                      })
                      .map((article, idx) => (
                        <tr key={article.slug} className="hover:bg-purple-50/30 transition-colors group">
                          <td className="py-4 px-6 font-mono text-slate-400">
                            {String(idx + 1).padStart(2, '0')}
                          </td>
                          <td className="py-4 px-6 font-bold text-slate-900 max-w-xs">
                            <span className="line-clamp-1 group-hover:text-purple-700 transition-colors">{article.title}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 font-bold text-[10px] border border-purple-100 whitespace-nowrap">
                              {article.category}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-slate-600 whitespace-nowrap font-mono text-[11px]">
                            {article.publishDate}
                          </td>
                          <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                            #{article.slug}
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${
                                article.published !== false
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border-rose-200'
                              }`}
                            >
                              {article.published !== false ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                            <a
                              href={`/blog/${article.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-slate-200"
                            >
                              <Eye className="w-3.5 h-3.5 text-slate-500" /> View
                            </a>
                            <button
                              onClick={() => openBlogEditor(article)}
                              className="px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-purple-200"
                            >
                              <Edit className="w-3.5 h-3.5" /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(article.slug)}
                              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-rose-200"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {blogArticles.filter((article) => {
                const matchesCategory = blogCategoryFilter === 'All' || article.category === blogCategoryFilter;
                const matchesSearch =
                  blogSearchQuery.trim() === '' ||
                  article.title.toLowerCase().includes(blogSearchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
              }).length === 0 && (
                <div className="p-12 text-center text-xs text-slate-400 space-y-2">
                  <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="font-bold text-slate-700">No blog articles found matching search criteria.</p>
                  <button
                    onClick={() => {
                      setBlogSearchQuery('');
                      setBlogCategoryFilter('All');
                    }}
                    className="text-purple-600 font-bold hover:underline"
                  >
                    Reset Article Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 9: SERVICES DIRECTORY */}
        {activeTab === 'services' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Services Directory</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage learning support programs, descriptions, hero images, and service offerings
                </p>
              </div>

              <button
                onClick={() => openServiceEditor()}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            </div>

            {/* Control Bar: Search & Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search services by title, category, or tagline..."
                  value={serviceSearchQuery}
                  onChange={(e) => setServiceSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50/50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {['All', 'Academic Support', 'Examination Support', 'Assessment Practice', 'Career Credentials', 'Academic Strategy', 'Technical Assistance'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setServiceCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      serviceCategoryFilter === cat
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList
                .filter((service) => {
                  const matchesCategory = serviceCategoryFilter === 'All' || service.category === serviceCategoryFilter;
                  const matchesSearch =
                    serviceSearchQuery.trim() === '' ||
                    service.title.toLowerCase().includes(serviceSearchQuery.toLowerCase()) ||
                    service.category?.toLowerCase().includes(serviceSearchQuery.toLowerCase()) ||
                    service.tagline?.toLowerCase().includes(serviceSearchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                })
                .map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Hero Image Thumbnail */}
                      <div className="h-36 bg-slate-100 relative overflow-hidden">
                        <img
                          src={service.heroImage || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-white font-bold text-[10px] border border-white/20">
                          {service.category}
                        </span>
                      </div>

                      <div className="p-5 space-y-2">
                        <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-purple-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed">
                          {service.tagline || service.overview}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] border ${
                          service.published !== false
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-rose-50 text-rose-700 border-rose-200'
                        }`}
                      >
                        {service.published !== false ? 'Published' : 'Unpublished'}
                      </span>

                      <div className="flex items-center gap-2">
                        <a
                          href={`/services/${service.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-[11px] transition-colors"
                        >
                          View
                        </a>
                        <button
                          onClick={() => openServiceEditor(service)}
                          className="px-2.5 py-1 rounded-xl bg-purple-50 text-purple-800 hover:bg-purple-100 text-[11px] border border-purple-200 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.slug)}
                          className="px-2.5 py-1 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 text-[11px] border border-rose-200 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {servicesList.filter((service) => {
              const matchesCategory = serviceCategoryFilter === 'All' || service.category === serviceCategoryFilter;
              const matchesSearch =
                serviceSearchQuery.trim() === '' ||
                service.title.toLowerCase().includes(serviceSearchQuery.toLowerCase());
              return matchesCategory && matchesSearch;
            }).length === 0 && (
              <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200/80 rounded-2xl space-y-2">
                <Briefcase className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-bold text-slate-700">No services found matching search query.</p>
                <button
                  onClick={() => {
                    setServiceSearchQuery('');
                    setServiceCategoryFilter('All');
                  }}
                  className="text-purple-600 font-bold hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* SECTION 10: SITE SETTINGS & SEO */}
        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-4xl animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Global Site Settings & SEO</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Manage site-wide metadata, contact details, Google Analytics tracking, and global SEO defaults
                </p>
              </div>

              <button
                onClick={openSettingsEditor}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Settings</span>
              </button>
            </div>

            {/* Overview Surfaces */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* General Site Information */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-600" /> General Information
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Active Production
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Site Name</span>
                    <span className="font-extrabold text-slate-900">{siteSettings.siteName || 'Tutor Proctored Exams'}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Primary Site Domain URL</span>
                    <span className="font-mono text-purple-700 font-bold">{siteSettings.siteUrl || 'https://tutorproctoredexams.com'}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Support Email Contact</span>
                    <span className="font-mono text-slate-700">{siteSettings.contactEmail || 'support@tutorproctoredexams.com'}</span>
                  </div>
                </div>
              </div>

              {/* Global SEO Default Metadata */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" /> Default SEO Meta Tags
                  </h3>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    SEO Configured
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Default SEO Meta Title</span>
                    <span className="font-bold text-slate-900 line-clamp-1">{siteSettings.defaultMetaTitle || 'Tutor Proctored Exams — Educational Support'}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Default Meta Description</span>
                    <span className="text-slate-600 line-clamp-2 leading-relaxed">{siteSettings.defaultMetaDescription || 'Ethical Educational Support & Proctoring Software Guidance'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Edit Trigger Bar */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="font-black text-sm text-white">Update Global Configuration</h4>
                <p className="text-xs text-purple-200/80 font-medium">Modify site metadata, default title, description, and contact info</p>
              </div>

              <button
                onClick={openSettingsEditor}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg transition-all"
              >
                Edit Settings Payload
              </button>
            </div>
          </div>
        )}

        {/* SECTION 11: THEMES & VISUAL APPEARANCE */}
        {activeTab === 'theme' && (
          <div className="space-y-6 max-w-4xl animate-in fade-in duration-300">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-600" />
                  <h1 className="text-2xl font-black text-slate-900">Themes & Visual Appearance</h1>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Customize the primary brand color palette, sidebar background, accent highlights, and UI styles
                </p>
              </div>

              <button
                onClick={handleSaveTheme}
                disabled={loading}
                className="px-5 py-2.5 rounded-xl bg-[#581C87] hover:bg-[#4C1D95] text-white text-xs font-bold shadow-md flex items-center gap-2 shrink-0 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>Save Theme Palette</span>
              </button>
            </div>

            {/* PRESET PALETTE CARDS */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Preset Color Palettes
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Royal Purple', primary: '#581C87', sidebar: '#1E1035', accent: '#7C3AED' },
                  { name: 'Navy & Indigo', primary: '#1E3A8A', sidebar: '#0F172A', accent: '#3B82F6' },
                  { name: 'Emerald & Teal', primary: '#047857', sidebar: '#064E3B', accent: '#10B981' },
                  { name: 'Midnight Slate', primary: '#1E293B', sidebar: '#090D16', accent: '#6366F1' },
                  { name: 'Burgundy Crimson', primary: '#881337', sidebar: '#1C050C', accent: '#F43F5E' },
                ].map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() =>
                      setThemeData({
                        ...themeData,
                        themePreset: preset.name,
                        primaryColor: preset.primary,
                        sidebarColor: preset.sidebar,
                        accentColor: preset.accent,
                      })
                    }
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer ${
                      themeData.primaryColor === preset.primary
                        ? 'bg-purple-50/80 border-purple-500 ring-2 ring-purple-500/30 shadow-md'
                        : 'bg-white border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: preset.primary }} />
                      <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: preset.sidebar }} />
                      <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: preset.accent }} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-slate-900">{preset.name}</h4>
                      <span className="text-[10px] text-slate-500 font-mono block">{preset.primary}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CUSTOM COLOR PICKER INPUTS */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
              <h3 className="font-extrabold text-sm text-slate-900 border-b pb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-600" /> Custom Palette Color Controls
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                {/* Primary Brand Color */}
                <div className="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="font-extrabold text-slate-700 block">Primary Brand Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeData.primaryColor || '#581C87'}
                      onChange={(e) => setThemeData({ ...themeData, primaryColor: e.target.value })}
                      className="w-10 h-10 rounded-lg cursor-pointer border border-slate-300 p-0.5"
                    />
                    <input
                      type="text"
                      value={themeData.primaryColor || '#581C87'}
                      onChange={(e) => setThemeData({ ...themeData, primaryColor: e.target.value })}
                      className="flex-grow px-3 py-2 border rounded-xl font-mono text-xs text-slate-800 bg-white"
                    />
                  </div>
                </div>

                {/* Sidebar Background Color */}
                <div className="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="font-extrabold text-slate-700 block">Sidebar Background Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeData.sidebarColor || '#1E1035'}
                      onChange={(e) => setThemeData({ ...themeData, sidebarColor: e.target.value })}
                      className="w-10 h-10 rounded-lg cursor-pointer border border-slate-300 p-0.5"
                    />
                    <input
                      type="text"
                      value={themeData.sidebarColor || '#1E1035'}
                      onChange={(e) => setThemeData({ ...themeData, sidebarColor: e.target.value })}
                      className="flex-grow px-3 py-2 border rounded-xl font-mono text-xs text-slate-800 bg-white"
                    />
                  </div>
                </div>

                {/* Accent Highlight Color */}
                <div className="space-y-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="font-extrabold text-slate-700 block">Accent Highlight Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={themeData.accentColor || '#7C3AED'}
                      onChange={(e) => setThemeData({ ...themeData, accentColor: e.target.value })}
                      className="w-10 h-10 rounded-lg cursor-pointer border border-slate-300 p-0.5"
                    />
                    <input
                      type="text"
                      value={themeData.accentColor || '#7C3AED'}
                      onChange={(e) => setThemeData({ ...themeData, accentColor: e.target.value })}
                      className="flex-grow px-3 py-2 border rounded-xl font-mono text-xs text-slate-800 bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SAVE BUTTON BAR */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="font-black text-sm text-white">Save Visual Theme Settings</h4>
                <p className="text-xs text-purple-200/80 font-medium">Persist active color palette to theme.json configuration</p>
              </div>

              <button
                onClick={handleSaveTheme}
                disabled={loading}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg transition-all flex items-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>Save Theme Settings</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* MEDIA LIBRARY & IMAGE PICKER MODAL */}
      {isMediaPickerOpen && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-purple-600" />
                <span>Media Library & Image Upload</span>
              </h2>
              <button onClick={() => setIsMediaPickerOpen(false)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* UPLOAD NEW IMAGE DROPZONE */}
            <div className="p-6 border-2 border-dashed border-purple-300 bg-purple-50/50 rounded-2xl text-center space-y-3">
              <UploadCloud className="w-10 h-10 text-purple-600 mx-auto" />
              <div>
                <span className="font-extrabold text-sm text-slate-900 block">Upload New Image File</span>
                <span className="text-xs text-slate-500">Supports PNG, JPG, WEBP, SVG, GIF (Max file size: 5MB)</span>
              </div>

              <label className="inline-block px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow-md transition-colors">
                {uploadingImage ? 'Uploading Image...' : 'Choose File to Upload'}
                <input
                  type="file"
                  accept="image/*,.svg"
                  onChange={handleUploadImageFile}
                  className="hidden"
                  disabled={uploadingImage}
                />
              </label>
            </div>

            {/* MEDIA GALLERY GRID */}
            <div className="space-y-2">
              <span className="font-extrabold text-xs text-slate-700 block">Server Storage Gallery ({mediaLibrary.length} files)</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-h-64 overflow-y-auto p-1">
                {mediaLibrary.map((item) => (
                  <div key={item.filename} className="group border border-slate-200 rounded-xl p-2 bg-slate-50 hover:border-purple-500 flex flex-col justify-between space-y-2">
                    <div className="h-20 bg-white rounded-lg border flex items-center justify-center p-1 overflow-hidden">
                      <img src={item.url} alt={item.filename} className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-600 truncate block">{item.filename}</span>
                    <div className="flex items-center justify-between pt-1 border-t">
                      <button
                        onClick={() => selectMediaImage(item.url)}
                        className="text-[10px] font-bold text-purple-700 hover:underline inline-flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" /> Select
                      </button>
                      <button
                        onClick={() => handleDeleteMediaImage(item.filename)}
                        className="text-[10px] font-bold text-rose-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button onClick={() => setIsMediaPickerOpen(false)} className="px-4 py-2 border rounded-xl text-xs font-bold text-slate-600">
                Close Media Library
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDITING / VIEWING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 max-w-2xl lg:max-w-3xl w-full shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col justify-between">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-black text-sm shadow-sm">
                  {editingItemType === 'blog' && <BookOpen className="w-5 h-5" />}
                  {editingItemType === 'service' && <Briefcase className="w-5 h-5" />}
                  {editingItemType === 'certification' && <Award className="w-5 h-5" />}
                  {editingItemType === 'platform' && <Cpu className="w-5 h-5" />}
                  {editingItemType === 'resource' && <FolderOpen className="w-5 h-5" />}
                  {editingItemType === 'partnership' && <Sparkles className="w-5 h-5" />}
                  {editingItemType === 'settings' && <Settings className="w-5 h-5" />}
                  {editingItemType === 'inquiry' && <Inbox className="w-5 h-5" />}
                  {editingItemType === 'faq' && <HelpCircle className="w-5 h-5" />}
                  {editingItemType === 'page' && <FileText className="w-5 h-5" />}
                  {editingItemType === 'navigation' && <Navigation className="w-5 h-5" />}
                </div>

                <div>
                  <h2 className="text-lg font-black text-slate-900 leading-tight">
                    {editingItemType === 'blog' && (editFormData.slug ? 'Edit Blog Article' : 'Create New Article')}
                    {editingItemType === 'service' && (editFormData.slug ? 'Edit Service Program' : 'Add New Service')}
                    {editingItemType === 'certification' && (editFormData.slug ? 'Edit Certification Program' : 'Add Certification')}
                    {editingItemType === 'platform' && (editFormData.slug ? 'Edit Exam Platform' : 'Add Exam Platform')}
                    {editingItemType === 'resource' && (editFormData.slug ? 'Edit Study Resource' : 'Add Study Resource')}
                    {editingItemType === 'partnership' && (editFormData.id ? 'Edit Partner Logo' : 'Add Partner Logo')}
                    {editingItemType === 'settings' && 'Global Site Settings & SEO'}
                    {editingItemType === 'inquiry' && 'Customer Form Submission Details'}
                    {editingItemType === 'faq' && 'Edit / Add FAQ Item'}
                    {editingItemType === 'page' && `Edit Page Content & SEO (${editFormData.name || editFormData.pageKey})`}
                    {editingItemType === 'navigation' && 'Edit Navigation Bar & Header Announcement'}
                  </h2>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block mt-0.5">
                    CMS Executive Content Editor
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                title="Close Editor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Container */}
            <div className="space-y-5 overflow-y-auto pr-1 max-h-[calc(90vh-170px)] flex-grow scrollbar-thin scrollbar-thumb-purple-200">
              {/* CERTIFICATION FORM FIELDS */}
              {editingItemType === 'certification' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Certification Title <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PMP, CompTIA Security+, AAPC CPC"
                        value={editFormData.title || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Category <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Project Management, Information Technology"
                        value={editFormData.category || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Slug Identifier <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. pmp, comptia, aapc"
                      value={editFormData.slug || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, slug: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  {/* Logo Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Certification Logo / Emblem Badge Image
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="/logos/pmp.svg or image URL"
                        value={editFormData.logo || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, logo: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('logo')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {editFormData.logo && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.logo}
                          alt="Preview"
                          className="w-10 h-10 rounded-lg object-contain bg-white border p-1"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">{editFormData.logo}</span>
                          <span className="text-[9px] font-bold text-emerald-600">Logo Image Selected</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, logo: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Program Overview Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter detailed description of certification prep..."
                      value={editFormData.description || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published on Public Website</span>
                    </label>
                  </div>
                </div>
              )}

              {/* EXAM PLATFORM FORM FIELDS */}
              {editingItemType === 'platform' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Software Platform Title <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Respondus LockDown Browser, Examplify"
                      value={editFormData.title || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Slug Identifier <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. respondus-lockdown-browser, examplify"
                      value={editFormData.slug || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, slug: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  {/* Logo Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Platform Logo Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="/logos/respondus.svg or image URL"
                        value={editFormData.logo || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, logo: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('logo')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {editFormData.logo && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.logo}
                          alt="Preview"
                          className="w-10 h-10 rounded-lg object-contain bg-white border p-1"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">{editFormData.logo}</span>
                          <span className="text-[9px] font-bold text-emerald-600">Logo Image Selected</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, logo: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Technical Overview & Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter software technical overview and setup guidance..."
                      value={editFormData.description || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published on Public Website</span>
                    </label>
                  </div>
                </div>
              )}

              {/* STUDY RESOURCE FORM FIELDS */}
              {editingItemType === 'resource' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Resource Title <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PMP Certification Prep Study Materials"
                        value={editFormData.title || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Category <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Project Management, Information Technology"
                        value={editFormData.category || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Slug Identifier <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. pmp, comptia, aapc"
                      value={editFormData.slug || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, slug: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  {/* Cover Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Cover Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/... or image URL"
                        value={editFormData.image || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, image: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('image')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {editFormData.image && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.image}
                          alt="Preview"
                          className="w-12 h-12 rounded-lg object-cover bg-white border p-0.5"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">{editFormData.image}</span>
                          <span className="text-[9px] font-bold text-emerald-600">Cover Image Loaded</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, image: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Description & Revision Material Overview
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter revision materials breakdown..."
                      value={editFormData.description || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published on Public Website</span>
                    </label>
                  </div>
                </div>
              )}

              {/* PARTNERSHIP FORM FIELDS */}
              {editingItemType === 'partnership' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Partner Institution Name <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PMI, CompTIA, AAPC"
                      value={editFormData.name || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  {/* Logo Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Partner Logo URL <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="/logos/pmp.svg or image URL"
                        value={editFormData.logo || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, logo: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('logo')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {editFormData.logo && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.logo}
                          alt="Preview"
                          className="w-12 h-10 rounded-lg object-contain bg-white border p-1"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">{editFormData.logo}</span>
                          <span className="text-[9px] font-bold text-emerald-600">Logo Image Selected</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, logo: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Target Web Link / URL
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. https://pmi.org or /certifications"
                      value={editFormData.url || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, url: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published in Homepage Slider</span>
                    </label>
                  </div>
                </div>
              )}

              {/* PAGE CONTENT & SEO EDITOR MODAL */}
              {editingItemType === 'page' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Page Display Name / Title
                    </label>
                    <input
                      type="text"
                      value={editFormData.name || editFormData.pageKey || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Page Hero Headline (H1 Title)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Professional Educational Support & Proctoring Guidance"
                      value={editFormData.title || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Page Subtitle / Hero Tagline
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter hero section subtitle description..."
                      value={editFormData.subtitle || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, subtitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="border-t pt-4 space-y-3 bg-purple-50/40 p-4 rounded-2xl border border-purple-100">
                    <span className="font-extrabold text-purple-900 block text-xs flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" /> SEO Metadata Overrides
                    </span>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                        SEO Meta Title Tag
                      </label>
                      <input
                        type="text"
                        placeholder="Meta title for Google search results"
                        value={editFormData.metaTitle || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, metaTitle: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                        SEO Meta Description
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Meta description for search engine snippets"
                        value={editFormData.metaDescription || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, metaDescription: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                        SEO Keywords (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="proctored exams, tutoring, certification prep"
                        value={editFormData.keywords || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, keywords: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION BAR & ANNOUNCEMENT HEADER MODAL */}
              {editingItemType === 'navigation' && (
                <div className="space-y-4 text-xs">
                  <div className="space-y-3 bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                    <span className="font-extrabold text-purple-900 block text-xs flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" /> Top Announcement Bar Banner
                    </span>
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider block mb-1">
                        Main Announcement Banner Text
                      </label>
                      <input
                        type="text"
                        value={editFormData.topBanner?.mainAnnouncement || ''}
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            topBanner: { ...editFormData.topBanner, mainAnnouncement: e.target.value },
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-extrabold text-slate-900 block text-xs">Header Navbar Links</span>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {(editFormData.navLinks || []).map((linkItem, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                          <input
                            type="text"
                            value={linkItem.label}
                            onChange={(e) => {
                              const updatedLinks = [...editFormData.navLinks];
                              updatedLinks[idx].label = e.target.value;
                              setEditFormData({ ...editFormData, navLinks: updatedLinks });
                            }}
                            className="flex-grow px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-900 bg-white"
                          />
                          <span className="font-mono text-[11px] text-purple-700 font-bold bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                            {linkItem.href}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ EDITOR MODAL */}
              {editingItemType === 'faq' && (
                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        FAQ Category <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. General Questions, Tutoring, Professional Certifications"
                        value={editFormData.category || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Target Website Page Location
                      </label>
                      <select
                        value={editFormData.pageLocation || '/faq'}
                        onChange={(e) => setEditFormData({ ...editFormData, pageLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono font-bold bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      >
                        <option value="/">Homepage (/)</option>
                        <option value="/about">About Us (/about)</option>
                        <option value="/services">Services Directory (/services)</option>
                        <option value="/services/one-on-one-tutoring">1-on-1 Tutoring Service (/services/one-on-one-tutoring)</option>
                        <option value="/services/academic-exam-preparation">Academic Exam Prep (/services/academic-exam-preparation)</option>
                        <option value="/services/practice-questions-mock-tests">Practice Questions (/services/practice-questions-mock-tests)</option>
                        <option value="/services/software-technical-guidance">Software Technical Guidance (/services/software-technical-guidance)</option>
                        <option value="/exam-platforms">Exam Platforms (/exam-platforms)</option>
                        <option value="/exam-platforms/respondus-lockdown-browser">Respondus LockDown Browser (/exam-platforms/respondus-lockdown-browser)</option>
                        <option value="/certifications">Certifications (/certifications)</option>
                        <option value="/certifications/pmp">PMP Certification (/certifications/pmp)</option>
                        <option value="/certifications/comptia">CompTIA Certifications (/certifications/comptia)</option>
                        <option value="/study-resources">Study Resources (/study-resources)</option>
                        <option value="/faq">Master FAQ Page (/faq)</option>
                        <option value="/contact">Contact Page (/contact)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Question Text <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the complete question text..."
                      value={editFormData.question || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, question: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Answer / Response Text <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter the complete detailed answer text..."
                      value={editFormData.answer || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, answer: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium leading-relaxed text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                </div>
              )}

              {/* INQUIRY VIEWER MODAL */}
              {editingItemType === 'inquiry' && (
                <div className="space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Client Full Name
                      </span>
                      <span className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                        {editFormData.status === 'New' && <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />}
                        <span>{editFormData.fullName}</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Submission Timestamp
                      </span>
                      <span className="font-mono text-slate-700 font-medium">{editFormData.date}</span>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Email Address
                      </span>
                      <a href={`mailto:${editFormData.email}`} className="font-bold text-purple-700 hover:underline">
                        {editFormData.email}
                      </a>
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-0.5">
                        Phone / WhatsApp
                      </span>
                      <span className="font-mono text-slate-800 font-medium">{editFormData.phone || 'N/A'}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Service Program Requested
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-900 font-extrabold px-3 py-1 rounded-xl text-xs border border-purple-200">
                      {editFormData.service}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                      Message & Learning Goals
                    </span>
                    <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-wrap font-sans text-xs">
                      {editFormData.message}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t">
                    <button
                      type="button"
                      onClick={() => handleToggleInquiryStatus(editFormData.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        editFormData.status === 'New'
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {editFormData.status === 'New' ? 'Mark as Responded' : 'Mark as New'}
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleDeleteInquiry(editFormData.id)}
                        className="px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 transition-colors"
                      >
                        Delete Inquiry
                      </button>

                      <a
                        href={`mailto:${editFormData.email}?subject=RE: ${encodeURIComponent(editFormData.service)} Inquiry`}
                        className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md inline-flex items-center gap-2 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Reply via Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* BLOG FORM FIELDS */}
              {editingItemType === 'blog' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Article Title <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. How to Prepare for a Proctored Online Examination"
                      value={editFormData.title || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Category <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Examination Preparation, Professional Certifications"
                        value={editFormData.category || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                        Publication Date
                      </label>
                      <input
                        type="date"
                        value={editFormData.publishDate || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, publishDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  {/* Cover Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Cover Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/... or image URL"
                        value={editFormData.heroImage || editFormData.image || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, heroImage: e.target.value, image: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('heroImage')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {(editFormData.heroImage || editFormData.image) && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.heroImage || editFormData.image}
                          alt="Preview"
                          className="w-12 h-12 rounded-lg object-cover bg-white border p-0.5"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">
                            {editFormData.heroImage || editFormData.image}
                          </span>
                          <span className="text-[9px] font-bold text-emerald-600">Cover Image Loaded</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, heroImage: '', image: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Article Excerpt / Summary
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter short summary excerpt for article cards..."
                      value={editFormData.excerpt || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, excerpt: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published on Public Website</span>
                    </label>
                  </div>
                </div>
              )}

              {/* SERVICE FORM FIELDS */}
              {editingItemType === 'service' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Service Program Title <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1-on-1 Online Tutoring, Academic Exam Preparation"
                      value={editFormData.title || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Category <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Academic Support, Examination Support"
                      value={editFormData.category || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  {/* Hero Image Preview & Media Picker */}
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Hero Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/... or image URL"
                        value={editFormData.heroImage || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, heroImage: e.target.value })}
                        className="flex-grow px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                      <button
                        type="button"
                        onClick={() => openMediaPickerFor('heroImage')}
                        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5 shrink-0"
                      >
                        <ImageIcon className="w-4 h-4" /> Choose Media
                      </button>
                    </div>

                    {editFormData.heroImage && (
                      <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-xl border border-slate-200 mt-2">
                        <img
                          src={editFormData.heroImage}
                          alt="Preview"
                          className="w-12 h-12 rounded-lg object-cover bg-white border p-0.5"
                        />
                        <div className="flex-grow min-w-0">
                          <span className="font-mono text-[10px] text-slate-600 truncate block">{editFormData.heroImage}</span>
                          <span className="text-[9px] font-bold text-emerald-600">Hero Image Loaded</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditFormData({ ...editFormData, heroImage: '' })}
                          className="text-[10px] text-rose-600 font-bold hover:underline"
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Service Tagline / Short Summary
                    </label>
                    <input
                      type="text"
                      placeholder="Enter short tagline summary..."
                      value={editFormData.tagline || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, tagline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Overview Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter comprehensive overview description..."
                      value={editFormData.overview || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, overview: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>

                  <div className="flex items-center gap-3 border-t pt-3">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800">
                      <input
                        type="checkbox"
                        checked={editFormData.published !== false}
                        onChange={(e) => setEditFormData({ ...editFormData, published: e.target.checked })}
                        className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                      />
                      <span>Published on Public Website</span>
                    </label>
                  </div>
                </div>
              )}

              {/* SETTINGS FORM FIELDS */}
              {editingItemType === 'settings' && (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Website Brand Name <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      value={editFormData.siteName || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, siteName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Primary Website Domain URL
                    </label>
                    <input
                      type="text"
                      value={editFormData.siteUrl || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, siteUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-purple-700 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Default Global SEO Meta Title
                    </label>
                    <input
                      type="text"
                      value={editFormData.defaultMetaTitle || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, defaultMetaTitle: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Default Global Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={editFormData.defaultMetaDescription || ''}
                      onChange={(e) => setEditFormData({ ...editFormData, defaultMetaDescription: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 leading-relaxed"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Buttons Footer */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>

              {editingItemType !== 'inquiry' && (
                <button
                  type="button"
                  onClick={() => {
                    if (editingItemType === 'blog') handleSaveBlog();
                    if (editingItemType === 'service') handleSaveService();
                    if (editingItemType === 'certification') handleSaveCertification();
                    if (editingItemType === 'platform') handleSavePlatform();
                    if (editingItemType === 'resource') handleSaveResource();
                    if (editingItemType === 'partnership') handleSavePartnership();
                    if (editingItemType === 'settings') handleSaveSettings();
                    if (editingItemType === 'faq') handleSaveFaq();
                    if (editingItemType === 'page') handleSavePage();
                    if (editingItemType === 'navigation') handleSaveNavigation();
                  }}
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
