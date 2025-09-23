'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Share2, ShoppingBag, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { sampleArtworks } from '@/lib/sample-data';
import { formatPrice, DEFAULT_BLUR_DATA_URL } from '@/lib/utils';
import { notFound } from 'next/navigation';

interface ArtworkPageProps {
  params: {
    slug: string;
  };
}

const ArtworkPage = ({ params }: ArtworkPageProps) => {
  const artwork = sampleArtworks.find(art => art.slug === params.slug);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!artwork) {
    notFound();
  }

  const images = artwork.images || [artwork.image];
  const relatedArtworks = sampleArtworks
    .filter(art => art.id !== artwork.id && art.category === artwork.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    // In a real app, this would update cart state/context
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: `Check out "${artwork.title}" by Jennifer Watkins`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Back Navigation */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </section>

      {/* Artwork Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted group cursor-zoom-in">
                <Image
                  src={images[currentImageIndex]}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                  onClick={() => setIsLightboxOpen(true)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        index === currentImageIndex
                          ? 'border-gallery-gold'
                          : 'border-transparent hover:border-muted-foreground'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${artwork.title} view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        placeholder="blur"
                        blurDataURL={DEFAULT_BLUR_DATA_URL}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Artwork Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Title and Badges */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-3xl md:text-4xl font-serif font-light">
                    {artwork.title}
                  </h1>
                  <div className="flex gap-2">
                    {artwork.featured && (
                      <Badge variant="gallery">Featured</Badge>
                    )}
                    {!artwork.available && (
                      <Badge variant="destructive">Sold</Badge>
                    )}
                  </div>
                </div>
                <div className="w-16 h-1 bg-sage-green mb-6" />
              </div>

              {/* Artwork Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground">Medium</p>
                    <p>{artwork.medium}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Year</p>
                    <p>{artwork.year}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Dimensions</p>
                    <p>{artwork.dimensions}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Category</p>
                    <p>{artwork.category}</p>
                  </div>
                </div>

                {artwork.description && (
                  <div>
                    <p className="font-medium text-muted-foreground mb-2">Description</p>
                    <p className="leading-relaxed">{artwork.description}</p>
                  </div>
                )}
              </div>

              {/* Price and Actions */}
              <div className="space-y-4 pt-6 border-t">
                {artwork.price && (
                  <div className="text-3xl font-semibold text-gallery-gold">
                    {formatPrice(artwork.price)}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  {artwork.available && artwork.price && (
                    <Button
                      variant="gallery"
                      size="lg"
                      onClick={handleAddToCart}
                      className="flex-1"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                  <Button variant="outline" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                {!artwork.available && (
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-muted-foreground">
                      This artwork has been sold. Contact me for similar pieces or commission work.
                    </p>
                    <Button variant="gallery-outline" className="mt-2" asChild>
                      <Link href="/contact">Contact Artist</Link>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Artworks */}
      {relatedArtworks.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-light text-center mb-12">
              Related Artworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArtworks.map((relatedArt, index) => (
                <motion.div
                  key={relatedArt.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedArt.image}
                        alt={relatedArt.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        placeholder="blur"
                        blurDataURL={DEFAULT_BLUR_DATA_URL}
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2 group-hover:text-slate-blue transition-colors">
                        <Link href={`/portfolio/${relatedArt.slug}`}>
                          {relatedArt.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedArt.medium} • {relatedArt.year}
                      </p>
                      {relatedArt.price && relatedArt.available && (
                        <p className="text-gallery-gold font-medium mt-2">
                          {formatPrice(relatedArt.price)}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex]}
              alt={artwork.title}
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-background/80"
              onClick={() => setIsLightboxOpen(false)}
            >
              ×
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ArtworkPage;
