"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Artwork } from "@/types";
import { DEFAULT_BLUR_DATA_URL, formatPrice } from "@/lib/utils";

interface PortfolioGridProps {
  artworks: Artwork[];
}

// Uniform portfolio grid with equal-height cards
// - 3 cols desktop, 2 cols tablet, 1 col mobile
// - 24px gaps on desktop/tablet (gap-6), 16px on mobile (gap-4)
// - Image area: fixed 4:3 aspect
// - Content area: standardized spacing; text clamped for consistency
export default function PortfolioGrid({ artworks }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
      {artworks.map((art) => (
        <Link key={art.id} href={`/portfolio/${art.slug}`} className="group">
          <article className="h-full min-h-[450px] flex flex-col rounded-lg overflow-hidden bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={DEFAULT_BLUR_DATA_URL}
                priority={false}
              />

              {/* Badges (optional) */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {art.featured && <Badge variant="gallery">Featured</Badge>}
                {!art.available && <Badge variant="destructive">Sold</Badge>}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-4 gap-1 flex-1">
              <h3 className="text-foreground text-lg font-medium truncate transition-colors group-hover:text-slate-blue">
                {art.title}
              </h3>
              <p className="text-sm text-muted-foreground truncate decoration-transparent">
                {art.medium} • {art.year}
              </p>
              {art.dimensions && (
                <p className="text-sm text-muted-foreground truncate">{art.dimensions}</p>
              )}
              {art.description && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{art.description}</p>
              )}

              {/* Bottom-aligned price */}
              {art.price && art.available && (
                <div className="mt-auto pt-2 text-gallery-gold font-medium">
                  {formatPrice(art.price)}
                </div>
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

