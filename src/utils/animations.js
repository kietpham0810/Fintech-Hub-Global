/**
 * Shared Framer Motion animation variants used across blocks.
 */

export const staggerContainer = (staggerDelay = 0.15, childDelay = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

export const staggerContainerWithY = (staggerDelay = 0.1, childDelay = 0.2) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

export const slideUp = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
};

export const fadeInUp = (duration = 0.5) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration } },
});

export const fadeInFromDirection = (direction = 'up', distance = 50, duration = 0.6, delay = 0) => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const value = direction === 'right' || direction === 'down' ? distance : -distance;

  return {
    initial: { opacity: 0, [axis]: value },
    whileInView: { opacity: 1, [axis]: 0 },
    viewport: { once: true },
    transition: { duration, delay },
  };
};
