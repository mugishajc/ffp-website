import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  // Mock partner logos - in production, these would be real organization logos
  const partners = [
    { name: 'UN World Food Programme', category: 'International Partner' },
    { name: 'FAO', category: 'Technical Partner' },
    { name: 'UNICEF', category: 'Technical Partner' },
    { name: 'European Union', category: 'Institutional Partner' }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4"
            >
              {t.partners.badge}
            </motion.div>
          </div>
          <h2 className="text-primary mb-6 text-3xl sm:text-4xl">
            {t.partners.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.partners.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
            >
              {/* Placeholder for logo - would be actual logos in production */}
              <div className="w-full h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <div className="text-xs text-center text-primary px-2">
                  {partner.name}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">{partner.category}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/10"
        >
          <h3 className="text-primary mb-4 text-2xl">
            {t.partners.partnerCTA}
          </h3>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group"
            >
              {t.partners.becomePartner}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}