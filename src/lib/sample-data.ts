import { Artwork, Artist, SiteSettings, Exhibition, Award } from '@/types';
import EtherealLandscapes from '../../public/images/artworks/landscapes.jpg';
import UrbanReflections from '../../public/images/artworks/urban-reflections.jpg.jpg';
import AbstractEmotions from '../../public/images/artworks/abstract-emotions.jpg.jpg';
import BotanicalStudies from '../../public/images/artworks/botanical-studies.jpg.jpg';
import CosmicDance from '../../public/images/artworks/cosmic-dance.jpg.jpg';
import MinimalistSerenity from '../../public/images/artworks/minimalist-serenity.jpg.jpg';
import ArtistPortrait from '../../public/images/artist/artist-portrait.jpg.png';


// Sample artwork data
export const sampleArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Landscapes',
    slug: 'ethereal-landscapes',
    image: EtherealLandscapes,
    images: [
      EtherealLandscapes
    ],
    medium: 'Oil on Canvas',
    year: 2024,
    dimensions: '36" x 48"',
    price: 3500,
    description: 'A dreamlike interpretation of natural landscapes, blending reality with imagination through layered brushstrokes and ethereal color palettes.',
    category: 'Paintings',
    featured: true,
    available: true,
    width: 800,
    height: 1000
  },
  {
    id: '2',
    title: 'Urban Reflections',
    slug: 'urban-reflections',
    image: UrbanReflections,
    medium: 'Acrylic on Canvas',
    year: 2024,
    dimensions: '24" x 36"',
    price: 2800,
    description: 'Contemporary cityscapes captured through bold geometric forms and vibrant color contrasts.',
    category: 'Paintings',
    featured: true,
    available: true,
    width: 800,
    height: 1200
  },
  {
    id: '3',
    title: 'Abstract Emotions',
    slug: 'abstract-emotions',
    image: AbstractEmotions,
    medium: 'Mixed Media',
    year: 2023,
    dimensions: '30" x 40"',
    price: 4200,
    description: 'An exploration of human emotions through abstract forms, textures, and dynamic color relationships.',
    category: 'Mixed Media',
    featured: false,
    available: true,
    width: 1000,
    height: 800
  },
  {
    id: '4',
    title: 'Botanical Studies',
    slug: 'botanical-studies',
    image: BotanicalStudies,
    medium: 'Watercolor',
    year: 2023,
    dimensions: '18" x 24"',
    price: 1800,
    description: 'Delicate watercolor studies of botanical specimens, celebrating the intricate beauty of nature.',
    category: 'Watercolors',
    featured: false,
    available: true,
    width: 600,
    height: 800
  },
  {
    id: '5',
    title: 'Cosmic Dance',
    slug: 'cosmic-dance',
    image: CosmicDance,
    medium: 'Oil on Canvas',
    year: 2024,
    dimensions: '48" x 60"',
    price: 5500,
    description: 'A large-scale exploration of cosmic themes through swirling forms and celestial color palettes.',
    category: 'Paintings',
    featured: true,
    available: false,
    width: 900,
    height: 1200
  },
  {
    id: '6',
    title: 'Minimalist Serenity',
    slug: 'minimalist-serenity',
    image: MinimalistSerenity,
    medium: 'Acrylic on Canvas',
    year: 2023,
    dimensions: '20" x 30"',
    price: 2200,
    description: 'Clean, minimalist compositions that evoke tranquility and contemplation.',
    category: 'Paintings',
    featured: false,
    available: true,
    width: 800,
    height: 600
  }
];

// Artist information
export const artistInfo: Artist = {
  name: 'Jennifer Watkins',
  bio: 'Jennifer Watkins is a contemporary artist whose work explores the intersection of traditional techniques and modern expression. With over 15 years of experience, her paintings have been featured in galleries across the United States and Europe.',
  image: ArtistPortrait,
  statement: 'My art is a dialogue between the seen and unseen, the tangible and the imagined. Through layers of paint and mixed media, I seek to capture the ephemeral moments that define our human experience.',
  email: 'hello@jenniferwatkins.art',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  website: 'https://jenniferwatkins.art',
  socialMedia: {
    instagram: '@jenniferwatkinsart',
    facebook: 'Jennifer Watkins Art',
    twitter: '@jwatkinsart'
  }
};

// Site settings
export const siteSettings: SiteSettings = {
  heroTitle: 'Jennifer Watkins',
  heroSubtitle: 'Contemporary Artist',
  heroDescription: 'Exploring the intersection of traditional techniques and modern expression through painting and mixed media.',
  ctaText: 'View Portfolio',
  secondaryCtaText: 'About the Artist',
  artistStatement: 'My work is a continuous exploration of color, form, and emotion. Each piece represents a moment in time, a feeling captured and transformed into visual poetry.',
  aboutDescription: 'Jennifer Watkins is a contemporary artist based in New York, known for her ethereal landscapes and abstract compositions that bridge the gap between traditional and contemporary art.',
  contactDescription: 'Interested in commissioning a piece or learning more about available works? I would love to hear from you.',
  seoTitle: 'Jennifer Watkins - Contemporary Artist',
  seoDescription: 'Contemporary artist Jennifer Watkins creates ethereal paintings and mixed media works exploring themes of nature, emotion, and human experience.',
  siteUrl: 'https://jenniferwatkins.art'
};

// Sample exhibitions
export const sampleExhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'Ethereal Visions',
    venue: 'Modern Art Gallery',
    location: 'New York, NY',
    startDate: '2024-03-15',
    endDate: '2024-04-30',
    description: 'A solo exhibition featuring recent paintings exploring themes of nature and transcendence.',
    type: 'solo',
    featured: true
  },
  {
    id: '2',
    title: 'Contemporary Voices',
    venue: 'Chelsea Art Space',
    location: 'New York, NY',
    startDate: '2023-09-10',
    endDate: '2023-10-15',
    description: 'Group exhibition featuring emerging contemporary artists.',
    type: 'group',
    featured: false
  },
  {
    id: '3',
    title: 'Landscapes Reimagined',
    venue: 'Brooklyn Museum',
    location: 'Brooklyn, NY',
    startDate: '2023-05-20',
    endDate: '2023-07-30',
    description: 'A major group exhibition exploring contemporary approaches to landscape painting.',
    type: 'group',
    featured: true
  }
];

// Sample awards
export const sampleAwards: Award[] = [
  {
    id: '1',
    title: 'Emerging Artist Award',
    organization: 'New York Art Foundation',
    year: 2023,
    description: 'Recognized for outstanding contribution to contemporary painting.'
  },
  {
    id: '2',
    title: 'Best in Show',
    organization: 'Annual Contemporary Art Fair',
    year: 2022,
    description: 'Selected from over 200 participating artists.'
  },
  {
    id: '3',
    title: 'Artist Residency Grant',
    organization: 'International Arts Center',
    year: 2021,
    description: 'Three-month residency program in Tuscany, Italy.'
  }
];

// Featured artworks for homepage
export const featuredArtworks = sampleArtworks.filter(artwork => artwork.featured);

// Categories for filtering
export const artworkCategories = [
  'All',
  'Paintings',
  'Mixed Media',
  'Watercolors',
  'Drawings'
];

// Medium types
export const mediumTypes = [
  'All',
  'Oil on Canvas',
  'Acrylic on Canvas',
  'Watercolor',
  'Mixed Media',
  'Charcoal',
  'Pastel'
];

// Year options for filtering
export const yearOptions = [
  'All',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020'
];

// Sort options
export const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'title', label: 'Title A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
];
