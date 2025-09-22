import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-serif font-light text-gallery-gold">404</h1>
        <h2 className="text-2xl font-medium">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gallery" asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="gallery-outline" asChild>
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
