'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Artist, SiteSettings } from '@/types';
import { DEFAULT_BLUR_DATA_URL } from '@/lib/utils';

interface ArtistStatementProps {
  settings: SiteSettings;
  artist: Artist;
}

const ArtistStatement = ({ settings, artist }: ArtistStatementProps) => {
  return (
    <section className="py-20 bg-sage-green/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-blue/20 rounded-lg -z-10" />
          </motion.div>

          {/* Artist Statement Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Artist Statement
              </h2>
              <div className="w-16 h-1 bg-sage-green mb-6" />
            </div>

            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed italic border-l-4 border-gallery-gold pl-6">
              &ldquo;{settings.artistStatement}&rdquo;
            </blockquote>

            <div className="space-y-4">
              <p className="text-base leading-relaxed">
                {artist.statement}
              </p>
              
              <p className="text-base leading-relaxed">
                {settings.aboutDescription}
              </p>
            </div>

            {/* Artist Details */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Location:</strong> {artist.location}</p>
              <p><strong>Email:</strong> {artist.email}</p>
              {artist.website && (
                <p>
                  <strong>Website:</strong>{' '}
                  <Link 
                    href={artist.website} 
                    className="text-slate-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {artist.website}
                  </Link>
                </p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="gallery" asChild>
                <Link href="/about">
                  Learn More About the Artist
                </Link>
              </Button>
              <Button variant="gallery-outline" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;
