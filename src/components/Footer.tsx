import { Facebook, Twitter, Instagram, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(t.contact.successMessage);
    setEmail('');
    setIsSubmitting(false);
  };

  const scrollToSection = (id: string) => {
    // Check if it's a page navigation
    if (id === 'annual-reports' || id === 'news' || id === 'privacy') {
      window.location.hash = id;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Otherwise scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: t.footer.quickLinks,
      links: [
        { name: t.footer.aboutUs, href: 'about' },
        { name: t.footer.ourPrograms, href: 'programs' },
        { name: t.footer.impact, href: 'impact' },
        { name: t.footer.involved, href: 'get-involved' }
      ]
    },
    {
      title: t.footer.resources,
      links: [
        { name: t.footer.annualReports, href: 'annual-reports' },
        { name: t.footer.newsStories, href: 'news' },
        { name: t.footer.transparency, href: 'annual-reports' },
        { name: t.footer.privacy, href: 'privacy' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ffpprogram', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ffp_program', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/foodfirstprogramme', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Logo animated={false} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t.footer.tagline}
              </p>
              <p className="text-gray-500 text-xs italic">
                {t.footer.since}
              </p>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <h3 className="mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block relative group text-left"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="mb-6">{t.footer.getInTouch}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.footer.newsletter}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                  size="sm"
                >
                  <Mail size={16} className="mr-2" />
                  {t.footer.subscribe}
                </Button>
              </form>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} FoodFirst Programme (FFP). {t.footer.rights}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{t.footer.ngo}</span>
                <Heart size={16} className="text-red-400 fill-red-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}