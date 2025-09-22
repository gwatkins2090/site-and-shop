import type { StaticImageData } from 'next/image';

// Core artwork interface
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  image: string | StaticImageData;
  images?: Array<string | StaticImageData>; // Additional images for gallery view
  medium: string;
  year: number;
  dimensions: string;
  price?: number;
  description?: string;
  category: string;
  featured?: boolean;
  available?: boolean;
  width: number;
  height: number;
}

// Artist information
export interface Artist {
  name: string;
  bio: string;
  image: string | StaticImageData;
  statement: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

// Site settings
export interface SiteSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  ctaText: string;
  secondaryCtaText: string;
  artistStatement: string;
  aboutDescription: string;
  contactDescription: string;
  seoTitle: string;
  seoDescription: string;
  siteUrl: string;
}

// Exhibition information
export interface Exhibition {
  id: string;
  title: string;
  venue: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  image?: string;
  type: 'solo' | 'group';
  featured?: boolean;
}

// Award/Recognition
export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
}

// Cart item for e-commerce
export interface CartItem {
  artwork: Artwork;
  quantity: number;
}

// Filter options for gallery
export interface GalleryFilters {
  category: string;
  medium: string;
  year: string;
  search: string;
  sort: 'newest' | 'oldest' | 'title' | 'price-low' | 'price-high';
}

// Navigation item
export interface NavigationItem {
  href: string;
  label: string;
  icon?: import('react').ComponentType<{ className?: string }> | null;
  description?: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  artworkInterest?: string;
}

// Newsletter subscription
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

// SEO metadata
export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  initial: unknown;
  animate: unknown;
  exit?: unknown;
  transition?: unknown;
}

// Lightbox image data
export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// Theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  fonts: {
    serif: string;
    sans: string;
    mono: string;
  };
}
