import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading - in production, this would wait for actual content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto relative">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0066CC" />
                      <stop offset="100%" stopColor="#0EA5E9" />
                    </linearGradient>
                  </defs>
                  
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="url(#loadingGradient)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  />
                  
                  <g transform="translate(50, 50)">
                    <motion.path
                      d="M 0 -15 Q 0 -10 0 5 L 0 20"
                      stroke="#FFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.ellipse
                      cx="0"
                      cy="-18"
                      rx="3"
                      ry="5"
                      fill="#FCD34D"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    />
                    
                    <motion.path
                      d="M -8 -12 Q -8 -8 -7 5 L -6 18"
                      stroke="#FFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.ellipse
                      cx="-8"
                      cy="-15"
                      rx="2.5"
                      ry="4"
                      fill="#FCD34D"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    />
                    
                    <motion.path
                      d="M 8 -12 Q 8 -8 7 5 L 6 18"
                      stroke="#FFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.ellipse
                      cx="8"
                      cy="-15"
                      rx="2.5"
                      ry="4"
                      fill="#FCD34D"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                    />
                  </g>
                  
                  <g transform="translate(50, 65)">
                    <motion.path
                      d="M -25 0 Q -20 -5 -15 -8 Q -10 -10 -5 -10"
                      stroke="#FFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    />
                    
                    <motion.path
                      d="M 25 0 Q 20 -5 15 -8 Q 10 -10 5 -10"
                      stroke="#FFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    />
                  </g>
                </svg>

                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h2 className="text-primary text-2xl mb-2">FoodFirst Programme (FFP)</h2>
              <p className="text-muted-foreground">{t.common.building}</p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-8 w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}