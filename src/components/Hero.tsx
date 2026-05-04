import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-community.jpg"
          alt="FFP Community - Women and children in Eastern DR Congo"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hidden lg:block"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hidden lg:block"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
              <span>{t.common.building}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 leading-tight font-black"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('get-involved')}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 text-lg px-8 py-6 sm:py-7 group font-bold text-white border-0"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/40 bg-white/15 backdrop-blur-lg text-white hover:bg-white/25 hover:border-white/60 transition-all duration-300 text-lg px-8 py-6 sm:py-7 font-bold shadow-xl"
              >
                {t.hero.cta2}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Urgent Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-20 sm:top-24 left-0 right-0 z-20 flex justify-center px-4"
      >
        <div className="bg-red-500/90 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base shadow-xl border border-red-400/30 flex items-center gap-2 max-w-full">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
          <span className="truncate">{t.hero.urgentBanner}</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}