'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Artwork } from '@/types';
import { formatPrice, DEFAULT_BLUR_DATA_URL } from '@/lib/utils';

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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Availability Badge */}
                  {!artwork.available && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="destructive">Sold</Badge>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {artwork.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="gallery">Featured</Badge>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Heart className="h-4 w-4" />
                      </Button>
                      {artwork.available && artwork.price && (
                        <Button size="sm" variant="secondary">
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium text-lg group-hover:text-slate-blue transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {artwork.medium} • {artwork.year}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {artwork.dimensions}
                  </p>
                  {artwork.price && artwork.available && (
                    <p className="font-medium text-gallery-gold">
                      {formatPrice(artwork.price)}
                    </p>
                  )}
                  {artwork.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {artwork.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {artworks.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="gallery-outline" size="lg" asChild>
              <Link href="/portfolio">
                View All Artworks
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
