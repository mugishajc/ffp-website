import { motion } from 'framer-motion';
import { Calendar, Heart, Quote, ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DonateModal } from '../DonateModal';
import { useState } from 'react';

export function History() {
  const { t } = useLanguage();
  const [showDonateModal, setShowDonateModal] = useState(false);

  const galleryImages = [
    { src: '/images/ffp-field-1.jpg', alt: 'FFP staff in agricultural field' },
    { src: '/images/ffp-women-group.jpg', alt: 'Women farmers group' },
    { src: '/images/ffp-children.jpg', alt: 'Children at Seeds of Hope' },
    { src: '/images/ffp-community.jpg', alt: 'Community gathering' },
    { src: '/images/ffp-graduates.jpg', alt: 'Women graduates' },
    { src: '/images/ffp-education.jpg', alt: 'Education program' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-6 backdrop-blur-sm border border-primary/20"
          >
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {t.about.badge}
            </span>
          </motion.div>
          <h1 className="text-primary mb-6 text-4xl sm:text-5xl lg:text-6xl font-black">
            History of FFP
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed font-medium">
            From a response to crisis to a mission of hope, resilience, and long-term recovery.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-[21/9] relative">
            <img
              src="/images/ffp-community.jpg"
              alt="FFP Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h2 className="text-white text-2xl lg:text-4xl font-black mb-4">
                Food Must Come First
              </h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Founded in 2023 in response to the humanitarian crisis in Eastern DR Congo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-black text-gray-900 mb-6">Our Beginning</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Food First Program (FFP) was founded in 2023 in response to the humanitarian crisis in Eastern Democratic Republic of Congo, where years of armed conflict, insecurity, and displacement have left thousands of families without access to food.
              </p>
              <p>
                During this period, entire communities were struggling to survive. Children, women, and elderly people were dying of hunger, not because food did not exist, but because war and insecurity cut them off from farms, markets, and humanitarian assistance. Many families were displaced, fields were abandoned, and aid could not reach the most vulnerable.
              </p>
              <p className="font-semibold text-gray-900">
                We witnessed this reality firsthand.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/ffp-field-1.jpg"
              alt="FFP Field Work"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* What We Witnessed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 lg:p-16 mb-20 text-white relative overflow-hidden"
        >
          <Quote className="absolute top-6 left-6 text-white/10" size={120} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl leading-relaxed mb-8">
              We saw children suffering from severe malnutrition, mothers unable to feed their babies, and orphaned children left without protection or support. In many areas, there was little or no help reaching the people who needed it most.
            </p>
            <p className="text-2xl lg:text-3xl font-black text-primary">
              Faced with this suffering, we could not remain silent.
            </p>
          </div>
        </motion.div>

        {/* The Birth of FFP */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="/images/ffp-women-group.jpg"
              alt="Women Farmers Group"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-6">The Birth of FFP</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                That is where the idea of Food First Program was born — from a simple but urgent belief:
              </p>
              <p className="text-2xl font-black text-primary py-4">
                Food must come first.
              </p>
              <p>
                FFP began as a grassroots initiative, using local solutions to respond to an emergency. We focused on immediate food assistance, local agricultural production, and community-based support, working closely with women, small-scale farmers, and orphanages to fight malnutrition and restore dignity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Today Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-6">Where We Are Today</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            What started as a response to hunger has grown into a mission of hope, resilience, and long-term recovery. Today, FFP works to combat malnutrition, strengthen food security, and protect vulnerable children through initiatives such as <strong>Seeds of Hope Children's Home</strong>.
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Our Work in Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1a4731] to-[#2D5F3F] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <Heart className="mx-auto mb-6 text-white/80" size={48} />
            <h3 className="text-3xl lg:text-4xl font-black mb-8">Why FFP Exists</h3>
            <div className="space-y-4 text-xl lg:text-2xl max-w-3xl mx-auto">
              <p>FFP exists because <strong>hunger cannot wait</strong>.</p>
              <p>Because <strong>no child should die of hunger in silence</strong>.</p>
              <p>And because even in times of war, <strong>humanity must come first</strong>.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            Join us in this mission of hope and resilience.
          </p>

          {/* Contact Emails */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:info@ffp-program.org"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg hover:text-primary transition-all duration-300 border border-gray-200"
            >
              <Mail size={18} />
              info@ffp-program.org
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowDonateModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Heart size={20} />
              Donate Now
            </button>
            <button
              onClick={() => {
                window.location.hash = '';
                setTimeout(() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 300);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Involved
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Donate Modal */}
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </div>
  );
}
