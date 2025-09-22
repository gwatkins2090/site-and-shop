'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ImageIcon,
  ShoppingBag,
  User,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const navigationItems = [
    { href: '/', label: 'Home', icon: null },
    { href: '/portfolio', label: 'Portfolio', icon: ImageIcon },
    { href: '/about', label: 'About', icon: User },
    { href: '/shop', label: 'Shop', icon: ShoppingBag },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 30,
      scale: 0.95
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${isMenuOpen && isMobile ? 'bg-background backdrop-blur-md' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'}`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/icons/wa-icon.jpeg"
            alt="JW logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            priority
          />
          <span className="font-serif text-xl font-bold">Jennifer Watkins</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-slate-blue relative group"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 z-[99999] w-full max-w-sm bg-background text-foreground border-l shadow-lg md:hidden relative"
          >
            {/* Solid background layer to guarantee full opacity */}
            <div className="pointer-events-none absolute inset-0 bg-background z-0" aria-hidden="true" />
            <div className="relative z-10 flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-serif text-lg font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-lg font-medium rounded-lg transition-colors hover:bg-muted hover:text-slate-blue"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-off-black backdrop-blur-md md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
