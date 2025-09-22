# Art Portfolio Website Design Prompt

## Project Overview
Build a complete sophisticated art portfolio website using Next.js that mimics the experience of walking through a physical art gallery. The site should feel immersive, elegant, and professional while showcasing artwork in the most compelling way possible.

## Core Gallery Experience
Design a unique scrolling portfolio section that transforms the webpage into a virtual gallery exhibition:

- **Gallery Walkthrough**: As users scroll down, they "walk" through different rooms or sections of a gallery
- **Artwork Presentation**: Each piece appears with gallery-style presentation - proper lighting effects, subtle shadows, and appropriate spacing
- **Progressive Revelation**: Artworks fade in elegantly as they come into view, with smooth parallax effects
- **Interactive Elements**: Hover effects reveal artwork details, dimensions, medium, and year created
- **Zoom Functionality**: Click to view high-resolution details in a lightbox gallery
- **Navigation Flow**: Seamless transitions between pieces with optional category filtering

## Technical Requirements

### Framework & Performance
- **Next.js** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations and scroll-triggered effects
- **Next/Image** for optimized artwork loading with proper aspect ratios
- **Intersection Observer API** for scroll-based animations
- **Progressive Web App** capabilities for mobile users

### Gallery Features
- **Infinite Scroll** or pagination for large portfolios
- **Lazy Loading** for optimal performance
- **Image Optimization** with multiple formats (WebP, AVIF fallbacks)
- **Responsive Images** that adapt to screen sizes while maintaining quality
- **Accessibility** features including alt text, keyboard navigation, and screen reader support

## Design System

### Typography
- **Primary Font**: Modern serif for headings (consider Playfair Display or Crimson Text)
- **Secondary Font**: Clean sans-serif for body text (Inter or Source Sans Pro)
- **Gallery Labels**: Elegant, museum-style typography for artwork information


## Color Implementation

### Primary Color Usage
- **Deep Charcoal (#2B2D31)**: Navigation text, artwork titles, body text
- **Warm White (#FEFDF8)**: Main backgrounds, gallery walls
- **Gallery Gold (#D4A574)**: CTA buttons, price tags, premium accents, hover states

### Secondary Color Integration
- **Sage Green (#8B9A7A)**: Section dividers, subtle backgrounds for artist statement
- **Dusty Rose (#D4A5A5)**: Heart/favorite icons, gentle accent elements
- **Slate Blue (#6B7B9B)**: Links, navigation hover states
- **Terracotta (#C07855)**: Sale indicators, special collection highlights

### Neutral Applications
- **Light Gray (#F5F5F5)**: Card backgrounds, input fields
- **Medium Gray (#8A8A8A)**: Artwork descriptions, metadata
- **Off-Black (#1A1A1A)**: Important headings, emphasis text

## Gallery-Specific Features

### Scroll-Triggered Animations
- **Artwork Entrance**: Pieces slide in from different directions as they enter viewport
- **Gallery Transitions**: Smooth color/background transitions between different "rooms"
- **Parallax Effects**: Subtle background movement to create depth
- **Progressive Focus**: Blur-to-sharp effects as artworks come into focus

### Interactive Elements
- **Artwork Hover States**: Reveal additional information without overwhelming the visual
- **Gallery Lighting**: Subtle shadow and lighting effects that respond to cursor position
- **Zoom Previews**: Magnifying glass effect on hover for detail-rich pieces
- **Favorite System**: Allow visitors to save pieces to a wishlist

### Mobile Experience
- **Touch Gestures**: Swipe between artworks, pinch to zoom
- **Thumb-Friendly Navigation**: Large, accessible touch targets
- **Vertical Scrolling**: Optimized single-column layout for mobile gallery experience
- **Fast Loading**: Compressed images with progressive enhancement

## Content Strategy

### Artwork Presentation
- **High-Quality Images**: Minimum 2000px on longest side for zoom functionality
- **Multiple Views**: Front view, detail shots, installation context where relevant
- **Artwork Information**: Title, year, medium, dimensions, price (if available)
- **Artist Notes**: Optional personal insights or inspiration behind specific pieces

### SEO & Performance
- **Structured Data**: Schema markup for artwork and artist information
- **Meta Descriptions**: Unique descriptions for each artwork or collection
- **Image Alt Text**: Detailed, descriptive alt text for accessibility and SEO
- **Page Speed**: Target < 3 second load times with optimized images

## Inspiration References
Consider the user experience of world-class museum websites like MoMA, Guggenheim, or Tate Modern, but adapted for a personal artist portfolio with commercial capabilities.

The final result should feel like a premium, immersive art viewing experience that honors both the artwork and the artist's professional presentation.

Create your own sub-agents as needed to handle different aspects (components, styling, data processing, content creation, etc.). The site should feel like walking through a sophisticated art gallery with the ability to purchase pieces.

## Advanced Features

### E-commerce Integration
- **Stripe/PayPal Integration**: Secure payment processing
- **Inventory Management**: Real-time availability updates
- **Digital Downloads**: For prints or digital artwork
- **Commission Requests**: Custom artwork inquiry system

### Admin/Content
- **Analytics Integration**: Track visitor engagement and popular pieces
- **Social Sharing**: Easy sharing of individual artworks
- **Email Collection**: Newsletter signup for exhibition announcements

## Success Metrics
- **Engagement**: Time spent on portfolio section, scroll depth
- **Conversion**: Inquiry form submissions, artwork purchases
- **Performance**: Page load speeds, Core Web Vitals scores
- **Accessibility**: WCAG 2.1 AA compliance

## Inspiration References
Consider the user experience of world-class museum websites like MoMA, Guggenheim, or Tate Modern, but adapted for a personal artist portfolio with commercial capabilities.

The final result should feel like a premium, immersive art viewing experience that honors both the artwork and the artist's professional presentation.

Create your own sub-agents as needed to handle different aspects (components, styling, data processing, content creation, etc.). The site should feel like walking through a sophisticated art gallery with the ability to purchase pieces.