'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { GalleryFilters } from '@/types';
import { artworkCategories, mediumTypes, yearOptions, sortOptions } from '@/lib/sample-data';

interface GalleryFiltersProps {
  onFilterChange: (key: string, value: string) => void;
  activeFilters: GalleryFilters;
}

const GalleryFiltersComponent = ({ onFilterChange, activeFilters }: GalleryFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClearFilters = () => {
    onFilterChange('category', 'All');
    onFilterChange('medium', 'All');
    onFilterChange('year', 'All');
    onFilterChange('search', '');
  };

  const hasActiveFilters = 
    activeFilters.category !== 'All' ||
    activeFilters.medium !== 'All' ||
    activeFilters.year !== 'All' ||
    activeFilters.search !== '';

  return (
    <section className="py-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        {/* Search and Toggle */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search artworks..."
              value={activeFilters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Toggle and Sort */}
          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select
              value={activeFilters.sort}
              onChange={(e) => onFilterChange('sort', e.target.value)}
              className="px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <Badge variant="gallery" className="ml-1">
                  Active
                </Badge>
              )}
            </Button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Expanded Filters */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
            {/* Category Filter */}
            <div>
              <h4 className="font-medium mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {artworkCategories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilters.category === category ? "gallery" : "outline"}
                    size="sm"
                    onClick={() => onFilterChange('category', category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Medium Filter */}
            <div>
              <h4 className="font-medium mb-3">Medium</h4>
              <div className="flex flex-wrap gap-2">
                {mediumTypes.map((medium) => (
                  <Button
                    key={medium}
                    variant={activeFilters.medium === medium ? "gallery" : "outline"}
                    size="sm"
                    onClick={() => onFilterChange('medium', medium)}
                  >
                    {medium}
                  </Button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <h4 className="font-medium mb-3">Year</h4>
              <div className="flex flex-wrap gap-2">
                {yearOptions.map((year) => (
                  <Button
                    key={year}
                    variant={activeFilters.year === year ? "gallery" : "outline"}
                    size="sm"
                    onClick={() => onFilterChange('year', year)}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 pt-4"
          >
            {activeFilters.category !== 'All' && (
              <Badge variant="gallery-outline" className="flex items-center gap-1">
                Category: {activeFilters.category}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => onFilterChange('category', 'All')}
                />
              </Badge>
            )}
            {activeFilters.medium !== 'All' && (
              <Badge variant="gallery-outline" className="flex items-center gap-1">
                Medium: {activeFilters.medium}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => onFilterChange('medium', 'All')}
                />
              </Badge>
            )}
            {activeFilters.year !== 'All' && (
              <Badge variant="gallery-outline" className="flex items-center gap-1">
                Year: {activeFilters.year}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => onFilterChange('year', 'All')}
                />
              </Badge>
            )}
            {activeFilters.search && (
              <Badge variant="gallery-outline" className="flex items-center gap-1">
                Search: &quot;{activeFilters.search}&quot;
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => onFilterChange('search', '')}
                />
              </Badge>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GalleryFiltersComponent;
