'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import GalleryFilters from '@/components/gallery/gallery-filters';
import { sampleArtworks } from '@/lib/sample-data';
import { formatPrice, DEFAULT_BLUR_DATA_URL } from '@/lib/utils';
import { GalleryFilters as GalleryFiltersType } from '@/types';

const ShopPage = () => {
  const [filters, setFilters] = useState<GalleryFiltersType>({
    category: 'All',
    medium: 'All',
    year: 'All',
    search: '',
    sort: 'newest'
  });

  // Only show available artworks with prices
  const availableArtworks = sampleArtworks.filter(artwork => artwork.available && artwork.price);

  const filteredArtworks = useMemo(() => {
    let filtered = [...availableArtworks];

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
  }, [availableArtworks, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = (artworkId: string) => {
    // Simulate adding to cart
    console.log('Adding to cart:', artworkId);
    // In a real app, this would update cart state/context
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
              Shop Artworks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and purchase original artworks. Each piece is carefully crafted and ready to 
              enhance your space with unique artistic expression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <GalleryFilters
        onFilterChange={handleFilterChange}
        activeFilters={filters}
      />

      {/* Shop Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={DEFAULT_BLUR_DATA_URL}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      
                      {/* Featured Badge */}
                      {artwork.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="gallery">Featured</Badge>
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                          <Heart className="h-4 w-4 text-dusty-rose" />
                        </Button>
                      </div>

                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="gallery"
                          size="sm"
                          className="w-full"
                          onClick={() => handleAddToCart(artwork.id)}
                        >
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-medium text-lg group-hover:text-gallery-gold transition-colors">
                            <Link href={`/portfolio/${artwork.slug}`}>
                              {artwork.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {artwork.medium} • {artwork.year}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {artwork.dimensions}
                          </p>
                        </div>

                        {artwork.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {artwork.description}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xl font-semibold text-gallery-gold">
                            {formatPrice(artwork.price!)}
                          </span>
                          <Button
                            variant="gallery-outline"
                            size="sm"
                            onClick={() => handleAddToCart(artwork.id)}
                          >
                            <ShoppingBag className="h-4 w-4 mr-1" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium mb-2">No artworks found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to find available pieces.
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
              Showing {filteredArtworks.length} of {availableArtworks.length} available artworks
            </p>
          </div>
        </section>
      )}

      {/* Purchase Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-light mb-6">
            Purchase Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-medium mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">
                All transactions are processed securely through trusted payment providers.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Worldwide Shipping</h3>
              <p className="text-sm text-muted-foreground">
                Professional packaging and insured shipping to ensure your artwork arrives safely.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Certificate of Authenticity</h3>
              <p className="text-sm text-muted-foreground">
                Each original artwork comes with a signed certificate of authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
