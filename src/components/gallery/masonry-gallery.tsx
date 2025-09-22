'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Artwork } from '@/types';
import { formatPrice, DEFAULT_BLUR_DATA_URL } from '@/lib/utils';

interface MasonryGalleryProps {
  artworks: Artwork[];
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

      // Update column height (add extra space for info)
      heights[shortestColumnIndex] += itemHeight + 120 + gap; // 120px for artwork info
    });

    setItemPositions(positions);
    setContainerHeight(Math.max(...heights) - gap);
  }, [artworks, columns, gap]);

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: 1 column
        if (columns !== 1) return;
      } else if (window.innerWidth < 1024) {
        // Tablet: 2 columns
        if (columns !== 2) return;
      }
      // Desktop: 3+ columns
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

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
              <div className="relative overflow-hidden rounded-lg bg-muted shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={position.width}
                    height={position.width * (artwork.height / artwork.width)}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={DEFAULT_BLUR_DATA_URL}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {artwork.featured && (
                      <Badge variant="gallery">Featured</Badge>
                    )}
                    {!artwork.available && (
                      <Badge variant="destructive">Sold</Badge>
                    )}
                  </div>

                  {/* Hover Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-medium text-lg mb-1">{artwork.title}</h3>
                    <p className="text-sm opacity-90">{artwork.medium} • {artwork.year}</p>
                  </div>
                </div>

                {/* Artwork Info Below Image */}
                <div className="p-4 bg-background">
                  <h3 className="font-medium text-lg mb-2 group-hover:text-gallery-gold transition-colors">
                    {artwork.title}
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{artwork.medium} • {artwork.year}</p>
                    <p>{artwork.dimensions}</p>
                    {artwork.price && artwork.available && (
                      <p className="font-medium text-gallery-gold text-base">
                        {formatPrice(artwork.price)}
                      </p>
                    )}
                  </div>
                  {artwork.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {artwork.description}
                    </p>
                  )}
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
