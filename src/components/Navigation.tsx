import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, History, Users, Info } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    // If we're not on the home page, go home first
    if (window.location.hash) {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navigateToPage = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const aboutDropdownItems = [
    { id: 'about', label: t.nav.about, icon: Info, isSection: true },
    { id: 'history', label: 'History of FFP', icon: History, isSection: false },
    { id: 'team', label: 'Our Team', icon: Users, isSection: false }
  ];

  const navItems = [
    { id: 'programs', label: t.nav.programs },
    { id: 'impact', label: t.nav.impact },
    { id: 'media', label: 'Media', isPage: true },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={goHome}
          >
            <Logo animated={false} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* About Us Dropdown */}
            <div ref={aboutDropdownRef} className="relative">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="relative text-foreground hover:text-primary transition-colors group flex items-center gap-1"
              >
                {t.nav.about}
                <ChevronDown size={16} className={`transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {aboutDropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            if (item.isSection) {
                              scrollToSection(item.id);
                            } else {
                              navigateToPage(item.id);
                            }
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          <Icon size={18} />
                          {item.label}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                onClick={() => item.isPage ? navigateToPage(item.id) : scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('get-involved')}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t.nav.donate}
              </Button>
            </motion.div>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button and language switcher */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-foreground hover:bg-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {/* About Us Section */}
                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  About Us
                </div>
                {aboutDropdownItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: 0.05 * index, duration: 0.2 }}
                      onClick={() => item.isSection ? scrollToSection(item.id) : navigateToPage(item.id)}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-xl transition-all duration-300 hover:translate-x-1"
                    >
                      <Icon size={18} className="text-primary" />
                      {item.label}
                    </motion.button>
                  );
                })}

                {/* Other Nav Items */}
                <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Explore
                </div>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 * (index + aboutDropdownItems.length), duration: 0.2 }}
                    onClick={() => item.isPage ? navigateToPage(item.id) : scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 rounded-xl transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  className="px-4 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={() => scrollToSection('get-involved')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all"
                  >
                    {t.nav.donate}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}