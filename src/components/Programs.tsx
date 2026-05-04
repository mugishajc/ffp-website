import { Sprout, GraduationCap, Heart, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Programs() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 3 + 16; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const programs = [
    {
      icon: Sprout,
      title: t.programs.agriculture,
      description: t.programs.agricultureDesc,
      images: ['/images/ffp-field-1.jpg', '/images/ffp-field-2.jpg', '/images/ffp-community-field.jpg'],
      stats: `1,500+ ${t.programs.beneficiaries}`,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: t.programs.nutrition,
      description: t.programs.nutritionDesc,
      images: ['/images/ffp-children.jpg', '/images/ffp-education.jpg', '/images/ffp-children-2.jpg'],
      stats: `3,200+ ${t.programs.beneficiaries}`,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: AlertCircle,
      title: t.programs.emergency,
      description: t.programs.emergencyDesc,
      images: ['/images/ffp-community.jpg', '/images/ffp-community-2.jpg', '/images/ffp-community-3.jpg'],
      stats: `45 ${t.programs.communities}`,
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Heart,
      title: 'Community Gardens',
      description: 'Supporting women-led agricultural cooperatives and community food production initiatives.',
      images: ['/images/ffp-women-group.jpg', '/images/ffp-graduates.jpg', '/images/ffp-women-2.jpg'],
      stats: `800+ ${t.programs.beneficiaries}`,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({});

  return (
    <section ref={ref} id="programs" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
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
              {t.programs.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.programs.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.programs.description}
          </p>
        </motion.div>

        {/* Scrollable Programs Container */}
        <div className="relative">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Scroll Right Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.333%-1rem)] snap-start"
                >
                  <Card className="overflow-hidden border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-3 bg-white hover:border-primary/20 h-full">
                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                      {/* Scrollable Images */}
                      <div className="relative w-full h-full">
                        <img
                          src={program.images[activeImageIndex[index] || 0]}
                          alt={program.title}
                          className="w-full h-full object-cover transition-all duration-500"
                          loading="lazy"
                        />

                        {/* Image Navigation Dots */}
                        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                          {program.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndex(prev => ({...prev, [index]: imgIndex}));
                              }}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                (activeImageIndex[index] || 0) === imgIndex
                                  ? 'bg-white scale-125'
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Prev/Next Arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const current = activeImageIndex[index] || 0;
                            const prev = current > 0 ? current - 1 : program.images.length - 1;
                            setActiveImageIndex(p => ({...p, [index]: prev}));
                          }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const current = activeImageIndex[index] || 0;
                            const next = current < program.images.length - 1 ? current + 1 : 0;
                            setActiveImageIndex(p => ({...p, [index]: next}));
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                      {/* Icon Badge */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className={`absolute top-4 left-4 bg-gradient-to-br ${program.gradient} rounded-2xl p-4 shadow-2xl backdrop-blur-sm z-10`}
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>

                      {/* Floating Stats Badge */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border-2 border-white/80 z-10">
                        <span className={`bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent font-black text-sm`}>
                          {program.stats}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-gray-900 mb-4 text-2xl font-black group-hover:text-primary transition-colors">{program.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-base font-medium">
                        {program.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-6 h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '75%' } : {}}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${program.gradient} rounded-full shadow-lg`}
                        ></motion.div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 font-semibold">Program Impact: 75%</div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {programs.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            All programs are designed and implemented with community input to ensure cultural relevance and sustainability.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Community-Led', 'Evidence-Based', 'Sustainable Impact'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="px-6 py-2 bg-primary/5 text-primary rounded-full border border-primary/20 backdrop-blur-sm"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}