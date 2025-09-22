'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PortfolioGrid from '@/components/gallery/portfolio-grid';
import GalleryFilters from '@/components/gallery/gallery-filters';
import { sampleArtworks } from '@/lib/sample-data';
import { GalleryFilters as GalleryFiltersType } from '@/types';

const PortfolioPage = () => {
  const [filters, setFilters] = useState<GalleryFiltersType>({
    category: 'All',
    medium: 'All',
    year: 'All',
    search: '',
    sort: 'newest'
  });

  const filteredArtworks = useMemo(() => {
    let filtered = [...sampleArtworks];

    // Apply filters
    if (filters.category !== 'All') {
      filtered = filtered.filter(artwork => artwork.category === filters.category);
    }
    if (filters.medium !== 'All') {
      filtered = filtered.filter(artwork => artwork.medium.includes(filters.medium));
    }
    if (filters.year !== 'All') {
      filtered = filtered.filter(artwork => artwork.year.toString() === filters.year);
    }
    if (filters.search) {
      filtered = filtered.filter(artwork =>
        artwork.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        artwork.medium.toLowerCase().includes(filters.search.toLowerCase()) ||
        artwork.description?.toLowerCase().includes(filters.search.toLowerCase())
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
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen pt-16">
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
              Explore a comprehensive collection of artworks spanning various mediums and themes, 
              each piece representing a unique exploration of color, form, and emotion.
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
      <section className="py-12 mb-[120px] overflow-hidden">
        <div className="container mx-auto px-4">
          {filteredArtworks.length > 0 ? (
            <PortfolioGrid artworks={filteredArtworks} />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium mb-2">No artworks found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search terms to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      {filteredArtworks.length > 0 && (
        <section className="py-8 border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredArtworks.length} of {sampleArtworks.length} artworks
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioPage;
