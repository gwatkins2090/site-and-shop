import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Jennifer Watkins</h3>
            <p className="text-sm text-muted-foreground">
              Contemporary artist exploring the intersection of traditional techniques and modern expression.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com/jenniferwatkinsart" 
                className="text-muted-foreground hover:text-gallery-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://facebook.com/jenniferwatkinsart" 
                className="text-muted-foreground hover:text-gallery-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com/jwatkinsart" 
                className="text-muted-foreground hover:text-gallery-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/portfolio" className="hover:text-gallery-gold transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="hover:text-gallery-gold transition-colors">
                About
              </Link>
              <Link href="/shop" className="hover:text-gallery-gold transition-colors">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-gallery-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Information</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/shop" className="hover:text-gallery-gold transition-colors">
                Browse Artworks
              </Link>
              <Link href="/shipping" className="hover:text-gallery-gold transition-colors">
                Shipping Info
              </Link>
              <Link href="/terms" className="hover:text-gallery-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gallery-gold transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@jenniferwatkins.art</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Jennifer Watkins. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
