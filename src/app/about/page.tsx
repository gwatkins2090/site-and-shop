'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { artistInfo, sampleExhibitions, sampleAwards } from '@/lib/sample-data';
import { formatDate, DEFAULT_BLUR_DATA_URL } from '@/lib/utils';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Artist Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={artistInfo.image}
                  alt={artistInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={DEFAULT_BLUR_DATA_URL}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gallery-gold/20 rounded-lg -z-10" />
            </div>

            {/* Artist Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">
                  {artistInfo.name}
                </h1>
                <div className="w-16 h-1 bg-gallery-gold mb-6" />
              </div>

              <p className="text-lg leading-relaxed">
                {artistInfo.bio}
              </p>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Location:</strong> {artistInfo.location}</p>
                <p><strong>Email:</strong> {artistInfo.email}</p>
                {artistInfo.phone && (
                  <p><strong>Phone:</strong> {artistInfo.phone}</p>
                )}
                {artistInfo.website && (
                  <p>
                    <strong>Website:</strong>{' '}
                    <Link 
                      href={artistInfo.website} 
                      className="text-gallery-gold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {artistInfo.website}
                    </Link>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gallery" asChild>
                  <Link href="/portfolio">
                    View Portfolio
                  </Link>
                </Button>
                <Button variant="gallery-outline" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
              Artist Statement
            </h2>
            <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-gallery-gold pl-6 text-left">
              &ldquo;{artistInfo.statement}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
            Exhibitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleExhibitions.map((exhibition) => (
              <Card key={exhibition.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{exhibition.title}</CardTitle>
                    <Badge variant={exhibition.type === 'solo' ? 'gallery' : 'outline'}>
                      {exhibition.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Venue:</strong> {exhibition.venue}</p>
                    <p><strong>Location:</strong> {exhibition.location}</p>
                    <p><strong>Dates:</strong> {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}</p>
                    {exhibition.description && (
                      <p className="text-muted-foreground mt-3">
                        {exhibition.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {sampleAwards.map((award) => (
              <Card key={award.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1">{award.title}</h3>
                      <p className="text-muted-foreground">{award.organization}</p>
                      {award.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {award.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <Badge variant="gallery">{award.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gallery-gold/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            Interested in My Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in purchasing a piece, commissioning custom artwork,
            or simply want to learn more about my artistic process, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gallery" size="lg" asChild>
              <Link href="/shop">
                Browse Available Works
              </Link>
            </Button>
            <Button variant="gallery-outline" size="lg" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
