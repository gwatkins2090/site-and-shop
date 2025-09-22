import { Variants } from 'framer-motion';

// Basic fade animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

// Stagger animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Gallery specific animations
export const artworkReveal: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    scale: 0.95
  }
};

export const galleryTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

// Modal animations
export const modalVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};

export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

// Navigation animations
export const mobileMenuVariants: Variants = {
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

export const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 30,
    scale: 0.95
  },
  open: {
    opacity: 1,
    x: 0,
    scale: 1
  }
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Hover effects
export const hoverLift = {
  whileHover: { 
    y: -8,
    transition: { duration: 0.2 }
  }
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 10px 30px rgba(212, 165, 116, 0.3)",
    transition: { duration: 0.2 }
  }
};

// Loading animations
export const pulseAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const spinAnimation: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Scroll-triggered animations
export const scrollReveal: Variants = {
  initial: { 
    opacity: 0, 
    y: 50 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Parallax effect
export const parallaxVariants = {
  initial: { y: 0 },
  animate: { y: -50 }
};

// Transition configurations
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

export const easeTransition = {
  duration: 0.3,
  ease: [0.25, 0.46, 0.45, 0.94]
};

export const slowTransition = {
  duration: 0.8,
  ease: "easeInOut"
};

// Custom animation hooks
export const useScrollAnimation = () => {
  return {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, amount: 0.3 }
  };
};
