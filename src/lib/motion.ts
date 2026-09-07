export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionDuration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  cinematic: 1,
} as const;

export const revealUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: motionDuration.slow,
    ease: motionEase,
  },
};

export const revealLeft = {
  initial: {
    opacity: 0,
    x: -20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: motionDuration.slow,
    ease: motionEase,
  },
};

export const revealRight = {
  initial: {
    opacity: 0,
    x: 20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: motionDuration.slow,
    ease: motionEase,
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: motionDuration.normal,
    ease: motionEase,
  },
};

export const staggerItem = (index: number, baseDelay = 0.08) => ({
  transition: {
    duration: motionDuration.normal,
    delay: index * baseDelay,
    ease: motionEase,
  },
});