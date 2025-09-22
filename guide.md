# Next.js Art Portfolio Website - Complete Implementation Guide

## Table of Contents
1. [Project Structure](#project-structure)
2. [Visual Design System](#visual-design-system)
3. [Core Components](#core-components)
4. [Page Layouts](#page-layouts)
5. [Responsive Design](#responsive-design)
6. [Interactive Elements](#interactive-elements)
7. [Navigation Structure](#navigation-structure)
8. [CSS and Styling](#css-and-styling)

## Project Structure

### Directory Layout (Next.js 15 App Router)

```
src/
├── app/
│   ├── (user)/                    # User-facing pages group
│   │   ├── layout.tsx            # User layout with draft mode banner
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── portfolio/
│   │   │   ├── page.tsx          # Portfolio gallery
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual artwork pages
│   │   ├── shop/
│   │   │   └── page.tsx          # Shop/purchase page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy policy
│   │   ├── terms/
│   │   │   └── page.tsx          # Terms of service
│   │   └── shipping/
│   │       └── page.tsx          # Shipping information
│   ├── studio/
│   │   └── [[...tool]]/
│   │       └── page.tsx          # Sanity Studio
│   ├── api/                      # API routes
│   │   ├── draft/route.ts        # Enable draft mode
│   │   ├── disable-draft/route.ts # Disable draft mode
│   │   ├── revalidate/route.ts   # Revalidate content
│   │   └── env-check/route.ts    # Environment check
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── not-found.tsx             # 404 page
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── gallery/
│   │   ├── hero-section.tsx
│   │   ├── gallery-grid.tsx
│   │   ├── masonry-gallery.tsx
│   │   ├── artwork-detail.tsx
│   │   ├── artwork-hover.tsx
│   │   ├── lightbox-gallery.tsx
│   │   ├── gallery-filters.tsx
│   │   ├── gallery-transition.tsx
│   │   └── artist-statement.tsx
│   ├── about/
│   │   ├── artist-biography.tsx
│   │   ├── awards-recognition.tsx
│   │   ├── exhibition-history.tsx
│   │   └── artistic-philosophy.tsx
│   ├── shop/
│   │   └── checkout-form.tsx
│   ├── cart/
│   │   └── cart-icon.tsx
│   ├── seo/
│   │   ├── index.ts
│   │   └── seo-head.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       └── [other-ui-components].tsx
├── lib/
│   ├── animations.ts
│   ├── cart-store.ts
│   ├── sample-data.ts
│   └── utils.ts
├── hooks/
│   ├── use-mobile.ts
│   └── use-sanity-content.ts
└── types/
    └── index.ts
```

## Visual Design System

### Color Scheme and Theme Configuration

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light theme colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;

    /* Custom art portfolio colors */
    --gallery-gold: 45 93% 58%;
    --sage-green: 120 25% 65%;
    --dusty-rose: 350 25% 70%;
    --slate-blue: 220 25% 65%;
    --off-black: 222 84% 5%;
    --warm-white: 45 25% 98%;
  }

  .dark {
    /* Dark theme colors */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

/* Custom utility classes */
@layer utilities {
  .gallery-wall {
    background-image:
      linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
      linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .text-balance {
    text-wrap: balance;
  }
}
```

### Typography Hierarchy

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      colors: {
        'gallery-gold': 'hsl(var(--gallery-gold))',
        'sage-green': 'hsl(var(--sage-green))',
        'dusty-rose': 'hsl(var(--dusty-rose))',
        'slate-blue': 'hsl(var(--slate-blue))',
        'off-black': 'hsl(var(--off-black))',
        'warm-white': 'hsl(var(--warm-white))',
      },
    },
  },
};
```

### Spacing Specifications

```css
/* Custom spacing scale */
.space-y-section > * + * {
  margin-top: 5rem; /* 80px */
}

.container-padding {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-padding {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .container-padding {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

/* Section spacing */
.section-padding-y {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .section-padding-y {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

@media (min-width: 1024px) {
  .section-padding-y {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}
```

## Core Components

### Header Component

```tsx
// src/components/layout/header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ImageIcon,
  Calendar,
  ShoppingBag,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/layout/theme-toggle';
import CartIcon from '@/components/cart/cart-icon';
import { useCartStore } from '@/lib/cart-store';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();
  const cartItemCount = useCartStore((state) => state.items.length);

  const navigationItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/portfolio', label: 'Portfolio', icon: ImageIcon },
    { href: '/exhibitions', label: 'Exhibitions', icon: Calendar },
    { href: '/shop', label: 'Shop', icon: ShoppingBag },
    { href: '/about', label: 'About', icon: User },
    { href: '/contact', label: 'Contact', icon: null },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 30,
      scale: 0.95
    },
    open: () => ({
      opacity: 1,
      x: 0,
      scale: 1
    })
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-xl font-bold">Jennifer Watkins</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gallery-gold relative group"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gallery-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="relative">
            <CartIcon />
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l shadow-lg md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-serif text-lg font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-lg transition-colors hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
```

### Footer Component

```tsx
// src/components/layout/footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Jennifer Watkins</h3>
            <p className="text-sm text-muted-foreground">
              Contemporary artist exploring the intersection of traditional techniques and modern expression.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/portfolio" className="hover:text-gallery-gold transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="hover:text-gallery-gold transition-colors">
                About
              </Link>
              <Link href="/exhibitions" className="hover:text-gallery-gold transition-colors">
                Exhibitions
              </Link>
              <Link href="/contact" className="hover:text-gallery-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Shop</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/shop" className="hover:text-gallery-gold transition-colors">
                Browse Artworks
              </Link>
              <Link href="/shipping" className="hover:text-gallery-gold transition-colors">
                Shipping Info
              </Link>
              <Link href="/terms" className="hover:text-gallery-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gallery-gold transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@jenniferwatkins.art</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Jennifer Watkins. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### Hero Section Component

```tsx
// src/components/gallery/hero-section.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  settings: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    ctaText: string;
    secondaryCtaText: string;
  };
  featuredArtworks: Array<{
    id: string;
    image: string;
    title: string;
  }>;
}

const HeroSection = ({ settings, featuredArtworks }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    if (featuredArtworks.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % featuredArtworks.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [featuredArtworks.length]);

  const getCurrentImage = () => {
    return featuredArtworks[currentImageIndex]?.image || '/placeholder-artwork.jpg';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src={getCurrentImage()}
              alt="Featured artwork"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6">
            {settings.heroTitle}
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gallery-gold mt-2">
              {settings.heroSubtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {settings.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gallery-gold hover:bg-gallery-gold/90 text-off-black"
              asChild
            >
              <Link href="/portfolio">
                {settings.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-off-black"
              asChild
            >
              <Link href="/about">
                {settings.secondaryCtaText}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="h-6 w-6 text-white animate-bounce" />
      </motion.div>

      {/* Image Indicators */}
      {featuredArtworks.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {featuredArtworks.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-gallery-gold w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
```

### Gallery Grid Component

```tsx
// src/components/gallery/gallery-grid.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Artwork {
  id: string;
  title: string;
  image: string;
  medium: string;
  year: number;
  dimensions: string;
  price?: number;
  slug: string;
}

interface GalleryGridProps {
  artworks: Artwork[];
  title: string;
  subtitle?: string;
}

const GalleryGrid = ({ artworks, title, subtitle }: GalleryGridProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/portfolio/${artwork.slug}`}>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium text-lg group-hover:text-gallery-gold transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {artwork.medium} • {artwork.year}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {artwork.dimensions}
                  </p>
                  {artwork.price && (
                    <p className="font-medium text-gallery-gold">
                      ${artwork.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
```

### Masonry Gallery Component

```tsx
// src/components/gallery/masonry-gallery.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface MasonryArtwork {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
  medium: string;
  year: number;
  slug: string;
}

interface MasonryGalleryProps {
  artworks: MasonryArtwork[];
  columns?: number;
  gap?: number;
}

const MasonryGallery = ({ artworks, columns = 3, gap = 24 }: MasonryGalleryProps) => {
  const [itemPositions, setItemPositions] = useState<Array<{ x: number; y: number; width: number }>>([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate masonry layout
  useEffect(() => {
    if (!containerRef.current || artworks.length === 0) {
      return;
    }

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;

    // Initialize column heights
    const heights = new Array(columns).fill(0);
    const positions: Array<{ x: number; y: number; width: number }> = [];

    artworks.forEach((artwork) => {
      // Find the shortest column
      const shortestColumnIndex = heights.indexOf(Math.min(...heights));

      // Calculate position
      const x = shortestColumnIndex * (columnWidth + gap);
      const y = heights[shortestColumnIndex];

      // Calculate height based on artwork aspect ratio
      const aspectRatio = artwork.height / artwork.width;
      const itemHeight = columnWidth * aspectRatio;

      positions.push({ x, y, width: columnWidth });

      // Update column height
      heights[shortestColumnIndex] += itemHeight + gap;
    });

    setItemPositions(positions);
    setContainerHeight(Math.max(...heights) - gap);
  }, [artworks, columns, gap]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: containerHeight }}
    >
      {artworks.map((artwork, index) => {
        const position = itemPositions[index];
        if (!position) {
          return null;
        }

        return (
          <motion.div
            key={artwork.id}
            className="absolute cursor-pointer group"
            style={{
              left: position.x,
              top: position.y,
              width: position.width,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <Link href={`/portfolio/${artwork.slug}`}>
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={position.width}
                  height={position.width * (artwork.height / artwork.width)}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Artwork Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-lg mb-1">{artwork.title}</h3>
                  <p className="text-sm opacity-90">{artwork.medium} • {artwork.year}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MasonryGallery;
```

## Page Layouts

### Homepage Layout Structure

```tsx
// src/app/(user)/page.tsx
import { Suspense } from 'react';
import HeroSection from '@/components/gallery/hero-section';
import GalleryGrid from '@/components/gallery/gallery-grid';
import ArtistStatement from '@/components/gallery/artist-statement';
import { getSanityContent } from '@/lib/sanity/client';

const HomePage = async () => {
  const { settings, featuredArtworks, artist } = await getSanityContent();

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <Suspense fallback={<div className="min-h-screen bg-muted animate-pulse" />}>
        <HeroSection
          settings={settings}
          featuredArtworks={featuredArtworks}
        />
      </Suspense>

      {/* Featured Artworks Section */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <GalleryGrid
          artworks={featuredArtworks}
          title="Featured Works"
          subtitle="A curated selection of recent pieces showcasing diverse techniques and themes"
        />
      </Suspense>

      {/* Artist Statement Section */}
      <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
        <ArtistStatement
          settings={settings}
          artist={artist}
        />
      </Suspense>
    </main>
  );
};

export default HomePage;
```

### Portfolio Page Layout

```tsx
// src/app/(user)/portfolio/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import MasonryGallery from '@/components/gallery/masonry-gallery';
import GalleryFilters from '@/components/gallery/gallery-filters';
import { useSanityContent } from '@/hooks/use-sanity-content';

const PortfolioPage = () => {
  const { artworks, loading } = useSanityContent();
  const [filters, setFilters] = useState({
    category: 'All',
    medium: 'All',
    year: 'All',
    search: '',
    sort: 'newest'
  });

  const filteredArtworks = useMemo(() => {
    let filtered = [...artworks];

    // Apply filters
    if (filters.category !== 'All') {
      filtered = filtered.filter(artwork => artwork.category === filters.category);
    }
    if (filters.medium !== 'All') {
      filtered = filtered.filter(artwork => artwork.medium.includes(filters.medium));
    }
    if (filters.search) {
      filtered = filtered.filter(artwork =>
        artwork.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        artwork.medium.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case 'newest':
        filtered.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        filtered.sort((a, b) => a.year - b.year);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
    }

    return filtered;
  }, [artworks, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gallery-gold" />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Page Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore a comprehensive collection of artworks spanning various mediums and themes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <GalleryFilters
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />

      {/* Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredArtworks.length > 0 ? (
            <MasonryGallery
              artworks={filteredArtworks}
              columns={3}
              gap={24}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No artworks found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
```

### About Page Layout

```tsx
// src/app/(user)/about/page.tsx
import ArtistBiography from '@/components/about/artist-biography';
import AwardsAndRecognition from '@/components/about/awards-recognition';
import ExhibitionHistory from '@/components/about/exhibition-history';
import ArtisticPhilosophy from '@/components/about/artistic-philosophy';
import { getSanityContent } from '@/lib/sanity/client';

const AboutPage = async () => {
  const { settings, artist } = await getSanityContent();

  return (
    <main className="min-h-screen pt-16">
      {/* Artist Biography */}
      <ArtistBiography artist={artist} />

      {/* Artistic Philosophy */}
      <ArtisticPhilosophy settings={settings} />

      {/* Awards and Recognition */}
      <AwardsAndRecognition settings={settings} />

      {/* Exhibition History */}
      <ExhibitionHistory settings={settings} />
    </main>
  );
};

export default AboutPage;
```

## Responsive Design

### Breakpoint System

```css
/* Responsive breakpoints following Tailwind CSS defaults */
/* sm: 640px and up */
/* md: 768px and up */
/* lg: 1024px and up */
/* xl: 1280px and up */
/* 2xl: 1536px and up */

/* Mobile-first approach */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: single column */
  gap: 1rem;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
    gap: 2rem;
  }
}

@media (min-width: 1280px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr); /* Large desktop: 4 columns */
  }
}
```

### Mobile Layout Adaptations

```tsx
// Mobile-specific component patterns
const MobileLayout = () => {
  return (
    <div className="block md:hidden">
      {/* Mobile-specific layout */}
      <div className="px-4 py-6">
        {/* Single column layout */}
        <div className="space-y-6">
          {/* Stacked navigation */}
          <nav className="flex flex-col space-y-4">
            {/* Mobile menu items */}
          </nav>

          {/* Mobile gallery grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* Single column artwork display */}
          </div>
        </div>
      </div>
    </div>
  );
};
```

### Tablet and Desktop Adaptations

```tsx
// Tablet layout (768px - 1024px)
const TabletLayout = () => {
  return (
    <div className="hidden md:block lg:hidden">
      <div className="px-6 py-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Two-column layout */}
        </div>
      </div>
    </div>
  );
};

// Desktop layout (1024px+)
const DesktopLayout = () => {
  return (
    <div className="hidden lg:block">
      <div className="px-8 py-12">
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Multi-column layout */}
        </div>
      </div>
    </div>
  );
};
```

## Interactive Elements

### Animation Patterns Using Framer Motion

```typescript
// src/lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};
```

### Hover Effects and Transitions

```css
/* Custom hover effects */
.artwork-card {
  @apply transition-all duration-300 ease-in-out;
}

.artwork-card:hover {
  @apply shadow-xl -translate-y-2;
}

.artwork-card:hover .artwork-image {
  @apply scale-105;
}

.artwork-card .artwork-overlay {
  @apply opacity-0 transition-opacity duration-300;
}

.artwork-card:hover .artwork-overlay {
  @apply opacity-100;
}

/* Button hover effects */
.btn-primary {
  @apply bg-gallery-gold text-off-black transition-all duration-200;
}

.btn-primary:hover {
  @apply bg-gallery-gold/90 shadow-lg transform -translate-y-0.5;
}

/* Navigation hover effects */
.nav-link {
  @apply relative transition-colors duration-200;
}

.nav-link::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-gallery-gold transition-all duration-300;
  content: '';
}

.nav-link:hover::after {
  @apply w-full;
}

/* Image hover effects */
.image-hover-zoom {
  @apply overflow-hidden;
}

.image-hover-zoom img {
  @apply transition-transform duration-500 ease-out;
}

.image-hover-zoom:hover img {
  @apply scale-110;
}

/* Card hover effects */
.card-hover {
  @apply transition-all duration-300 ease-out;
}

.card-hover:hover {
  @apply shadow-2xl -translate-y-1;
}
```

### Loading States and Micro-interactions

```tsx
// src/components/ui/loading-states.tsx
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const ImageLoader = () => (
  <div className="animate-pulse bg-muted rounded-lg aspect-square" />
);

export const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="bg-muted rounded-lg aspect-square mb-4" />
    <div className="space-y-2">
      <div className="h-4 bg-muted rounded w-3/4" />
      <div className="h-3 bg-muted rounded w-1/2" />
    </div>
  </div>
);

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gallery-gold" />
  </div>
);

// Micro-interactions
export const HeartButton = ({ isLiked, onToggle }: { isLiked: boolean; onToggle: () => void }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onToggle}
    className={`p-2 rounded-full transition-colors ${
      isLiked ? 'text-red-500' : 'text-muted-foreground'
    }`}
  >
    <motion.div
      animate={isLiked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
    </motion.div>
  </motion.button>
);

export const PulseLoader = () => (
  <div className="flex space-x-1">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-gallery-gold rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);
```

## Navigation Structure

### Primary Navigation Configuration

```tsx
// Navigation menu order and structure
export const navigationConfig = {
  primary: [
    {
      href: '/',
      label: 'Home',
      icon: null,
      description: 'Return to homepage'
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      icon: 'ImageIcon',
      description: 'Browse artwork collection'
    },
    {
      href: '/exhibitions',
      label: 'Exhibitions',
      icon: 'Calendar',
      description: 'View exhibition history and upcoming shows'
    },
    {
      href: '/shop',
      label: 'Shop',
      icon: 'ShoppingBag',
      description: 'Purchase available artworks'
    },
    {
      href: '/about',
      label: 'About',
      icon: 'User',
      description: 'Learn about the artist'
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: null,
      description: 'Get in touch'
    }
  ],
  secondary: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/shipping', label: 'Shipping Information' }
  ]
};
```

### Mobile Navigation Implementation

```tsx
// src/components/layout/mobile-menu.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationConfig } from '@/lib/navigation-config';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 30 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l shadow-lg md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-serif text-lg font-semibold">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-4 py-6">
                  <div className="space-y-4">
                    {navigationConfig.primary.map((item, index) => (
                      <motion.div
                        key={item.href}
                        custom={index}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-lg transition-colors hover:bg-muted"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon && <item.icon className="h-5 w-5" />}
                          {item.label}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
```

## CSS and Styling

### Custom CSS Classes and Utilities

```css
/* src/app/globals.css - Additional custom styles */

/* Gallery-specific styles */
.gallery-container {
  @apply container mx-auto px-4;
}

.gallery-section {
  @apply py-16 md:py-20 lg:py-24;
}

.gallery-header {
  @apply text-center mb-12 md:mb-16;
}

.gallery-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4;
}

.gallery-subtitle {
  @apply text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto;
}

/* Artwork card styles */
.artwork-card {
  @apply group relative overflow-hidden rounded-lg bg-muted transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
}

.artwork-image {
  @apply w-full h-full object-cover transition-transform duration-500 group-hover:scale-105;
}

.artwork-overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300;
}

.artwork-info {
  @apply absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300;
}

/* Button variants */
.btn-gallery-primary {
  @apply bg-gallery-gold hover:bg-gallery-gold/90 text-off-black font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5;
}

.btn-gallery-secondary {
  @apply border border-gallery-gold text-gallery-gold hover:bg-gallery-gold hover:text-off-black font-medium px-6 py-3 rounded-lg transition-all duration-200;
}

.btn-gallery-ghost {
  @apply text-gallery-gold hover:bg-gallery-gold/10 font-medium px-6 py-3 rounded-lg transition-all duration-200;
}

/* Typography styles */
.heading-primary {
  @apply text-4xl md:text-5xl lg:text-6xl font-serif font-light;
}

.heading-secondary {
  @apply text-3xl md:text-4xl lg:text-5xl font-serif font-light;
}

.heading-tertiary {
  @apply text-2xl md:text-3xl lg:text-4xl font-serif font-light;
}

.body-large {
  @apply text-lg md:text-xl leading-relaxed;
}

.body-medium {
  @apply text-base md:text-lg leading-relaxed;
}

.body-small {
  @apply text-sm md:text-base leading-relaxed;
}

/* Layout utilities */
.section-padding {
  @apply py-16 md:py-20 lg:py-24;
}

.container-padding {
  @apply px-4 md:px-6 lg:px-8;
}

.content-width {
  @apply max-w-4xl mx-auto;
}

.narrow-width {
  @apply max-w-2xl mx-auto;
}

.wide-width {
  @apply max-w-6xl mx-auto;
}

/* Animation utilities */
.fade-in {
  @apply opacity-0 animate-in fade-in duration-700;
}

.slide-up {
  @apply translate-y-4 animate-in slide-in-from-bottom duration-700;
}

.slide-left {
  @apply translate-x-4 animate-in slide-in-from-right duration-700;
}

.slide-right {
  @apply -translate-x-4 animate-in slide-in-from-left duration-700;
}

/* Focus states for accessibility */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-gallery-gold focus:ring-offset-2 focus:ring-offset-background;
}

/* Loading states */
.skeleton {
  @apply animate-pulse bg-muted rounded;
}

.skeleton-text {
  @apply skeleton h-4 w-full;
}

.skeleton-title {
  @apply skeleton h-6 w-3/4;
}

.skeleton-image {
  @apply skeleton aspect-square w-full;
}

/* Responsive text sizing */
.responsive-text-xs {
  @apply text-xs sm:text-sm;
}

.responsive-text-sm {
  @apply text-sm sm:text-base;
}

.responsive-text-base {
  @apply text-base sm:text-lg;
}

.responsive-text-lg {
  @apply text-lg sm:text-xl;
}

.responsive-text-xl {
  @apply text-xl sm:text-2xl;
}

.responsive-text-2xl {
  @apply text-2xl sm:text-3xl;
}

.responsive-text-3xl {
  @apply text-3xl sm:text-4xl;
}

.responsive-text-4xl {
  @apply text-4xl sm:text-5xl;
}
```

### Component Styling Patterns

```css
/* Component-specific styling patterns */

/* Header component */
.header-nav-link {
  @apply relative text-sm font-medium transition-colors hover:text-gallery-gold;
}

.header-nav-link::after {
  @apply absolute -bottom-1 left-0 w-0 h-0.5 bg-gallery-gold transition-all duration-300;
  content: '';
}

.header-nav-link:hover::after,
.header-nav-link.active::after {
  @apply w-full;
}

/* Footer component */
.footer-link {
  @apply text-sm text-muted-foreground hover:text-gallery-gold transition-colors;
}

.footer-section {
  @apply space-y-4;
}

.footer-heading {
  @apply font-medium text-foreground;
}

/* Card components */
.card-elevated {
  @apply bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow;
}

.card-interactive {
  @apply card-elevated hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer;
}

/* Form components */
.form-input {
  @apply w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gallery-gold focus:border-transparent;
}

.form-label {
  @apply block text-sm font-medium text-foreground mb-2;
}

.form-error {
  @apply text-sm text-destructive mt-1;
}

/* Modal components */
.modal-overlay {
  @apply fixed inset-0 z-50 bg-black/50 backdrop-blur-sm;
}

.modal-content {
  @apply fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-background border border-border rounded-lg shadow-lg;
}

/* Toast components */
.toast-success {
  @apply bg-green-50 border-green-200 text-green-800;
}

.toast-error {
  @apply bg-red-50 border-red-200 text-red-800;
}

.toast-warning {
  @apply bg-yellow-50 border-yellow-200 text-yellow-800;
}

.toast-info {
  @apply bg-blue-50 border-blue-200 text-blue-800;
}
```

### Implementation Notes

1. **File Organization**: Keep all global styles in `src/app/globals.css` and component-specific styles in their respective component files.

2. **Responsive Design**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) consistently throughout the application.

3. **Color Usage**: Always use the custom color variables defined in the CSS custom properties for consistency.

4. **Animation Performance**: Use `transform` and `opacity` properties for animations as they are GPU-accelerated.

5. **Accessibility**: Include focus states and proper contrast ratios for all interactive elements.

6. **Dark Mode**: The color system is designed to work with both light and dark themes automatically.

7. **Component Variants**: Use the utility classes to create consistent component variants across the application.

8. **Loading States**: Implement skeleton loading states for better perceived performance.

This comprehensive guide provides all the necessary information to recreate the exact layout, design, and functionality of the Next.js art portfolio website. Each section includes detailed implementation examples and follows modern web development best practices for performance, accessibility, and maintainability.
```