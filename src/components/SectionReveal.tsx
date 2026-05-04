import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
