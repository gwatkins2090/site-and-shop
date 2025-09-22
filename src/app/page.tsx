import { Suspense } from 'react';
import HeroSection from '@/components/gallery/hero-section';
import GalleryGrid from '@/components/gallery/gallery-grid';
import ArtistStatement from '@/components/gallery/artist-statement';
import { siteSettings, featuredArtworks, artistInfo } from '@/lib/sample-data';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <Suspense fallback={<div className="min-h-screen bg-muted animate-pulse" />}>
        <HeroSection
          settings={siteSettings}
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
          settings={siteSettings}
          artist={artistInfo}
        />
      </Suspense>
    </div>
  );
}
