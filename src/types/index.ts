// --- SEO ---
export interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article' | 'profile';
  noIndex: boolean;
  ogImage?: string;
  ogImageAlt?: string;
}

// --- Navigation ---
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

// --- Social ---
export interface SocialLinks {
  instagram?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
}

// --- Authors & Team ---
export interface Author {
  name: string;
  bio?: string;
  avatar?: string;
  social?: SocialLinks;
}

export interface TeamMember extends Author {
  role: string;
  featured: boolean;
}

// --- Taxonomy ---
export interface Tag {
  label: string;
  slug: string;
}

export interface Category {
  label: string;
  slug: string;
  description?: string;
}

// --- Events ---
export interface Event {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  address?: string;
  isOnline: boolean;
  streamUrl?: string;
  registrationUrl?: string;
  image?: string;
  tags: string[];
  price?: number;
  currency: 'ARS' | 'USD';
  capacity?: number;
  isFeatured: boolean;
  draft: boolean;
}

// --- Sponsors ---
export interface Sponsor {
  name: string;
  logo: string;
  logoAlt?: string;
  url?: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'media';
  featured: boolean;
  active: boolean;
}

// --- Testimonials ---
export interface Testimonial {
  author: string;
  role?: string;
  avatar?: string;
  quote: string;
  rating?: number;
}

// --- Forms ---
export interface NewsletterPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
}

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// --- API ---
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

// --- UI Components ---
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

// --- i18n ---
export type Locale = 'es';

export interface TranslationKeys {
  nav: {
    home: string;
    programa: string;
    comunidad: string;
    recursos: string;
    eventos: string;
    contacto: string;
  };
  common: {
    learnMore: string;
    viewAll: string;
    close: string;
    open: string;
    menu: string;
    loading: string;
    error: string;
    success: string;
    back: string;
    next: string;
    previous: string;
  };
  meta: {
    defaultDescription: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    location: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
    success: string;
    error: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
  pages: {
    home: { title: string; description: string };
    programa: { title: string; description: string };
    comunidad: { title: string; description: string };
    recursos: { title: string; description: string };
    eventos: { title: string; description: string };
    contacto: { title: string; description: string };
    notFound: { title: string; description: string; cta: string };
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    externalLink: string;
    socialLinks: string;
  };
}
