import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Marie Kabila',
      role: 'Farmer & Mother of 4',
      location: 'Goma, North Kivu',
      image: '/images/ffp-women-group.jpg',
      quote: 'Before joining the program, we struggled to feed our family. Now, with the training I received, our farm yields have tripled. My children go to bed with full stomachs every night.',
      rating: 5
    },
    {
      name: 'Jean-Pierre Mukendi',
      role: 'Agricultural Cooperative Leader',
      location: 'Rutshuru Territory',
      image: '/images/ffp-field-2.jpg',
      quote: 'The FoodFirst Programme transformed our entire community. We\'ve learned sustainable farming techniques that will benefit generations to come. This is more than aid—it\'s empowerment.',
      rating: 5
    },
    {
      name: 'Grace Nakimuli',
      role: 'Community Health Worker',
      location: 'Masisi Territory',
      image: '/images/ffp-graduates.jpg',
      quote: 'The nutrition education program has been life-changing. We\'ve seen child malnutrition rates drop by 40% in our village. Parents now understand the importance of diverse diets.',
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

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
              className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full mb-4 backdrop-blur-sm border border-primary/20"
            >
              {t.testimonials.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.testimonials.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.testimonials.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-8 border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-white relative overflow-hidden group h-full hover:border-primary/30">
                {/* Quote Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                  <Quote size={100} className="text-primary" />
                </div>

                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl flex-shrink-0 group-hover:ring-primary/40 transition-all"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-900 mb-1 font-black text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-semibold">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.05 }}
                    >
                      <Star size={18} className="fill-yellow-400 text-yellow-400 drop-shadow" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic relative z-10 text-base font-medium">
                  "{testimonial.quote}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <motion.img
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-foreground">
              {t.testimonials.joinCommunity}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}