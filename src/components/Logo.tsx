import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

export function Logo({ className = "h-14", animated = true }: LogoProps) {
  return (
    <motion.img
      src="/ffp-logo.png"
      alt="FoodFirst Program Logo"
      className={className}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    />
  );
}

// Simple version for small displays
export function LogoMark({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src="/ffp-logo.png"
      alt="FFP Logo"
      className={className}
    />
  );
}