'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artwork, SiteSettings } from '@/types';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/utils';

interface HeroSectionProps {
  settings: SiteSettings;
  featuredArtworks: Artwork[];
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
    return featuredArtworks[currentImageIndex]?.image || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop';
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
              sizes="100vw"
              placeholder="blur"
              blurDataURL={DEFAULT_BLUR_DATA_URL}
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
              variant="gallery"
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
