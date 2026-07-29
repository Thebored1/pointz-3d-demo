export const EASE = [0.16, 1, 0.3, 1];

export const viewportOnce = { once: true, margin: '-80px' };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
};

export const textReveal = {
  hidden: { y: '110%', rotateX: -20 },
  visible: {
    y: 0,
    rotateX: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

export const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE, delay: 0.5 },
  },
};

export const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, y: 48, scale: 1.03 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};
