import { TrendingUp, Users, Home, Wheat, Sparkles, Baby } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {value.includes('%') ? `${count}%` : count.toLocaleString() + suffix}
    </span>
  );
}

export function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: '2,500+',
      label: t.impact.livesTransformed,
      description: t.impact.livesTransformedSub,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Wheat,
      number: '150+',
      label: t.impact.foodDistributed,
      description: t.impact.foodDistributedSub,
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: TrendingUp,
      number: '250+',
      label: t.impact.farmersGraduated,
      description: t.impact.farmersGraduatedSub,
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Home,
      number: '15',
      label: t.impact.villagesReached,
      description: t.impact.villagesReachedSub,
      color: 'from-orange-400 to-amber-400'
    },
    {
      icon: TrendingUp,
      number: '65%',
      label: t.impact.yieldIncrease,
      description: t.impact.yieldIncreaseSub,
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Baby,
      number: '500+',
      label: t.impact.childrenFed,
      description: t.impact.childrenFedSub,
      color: 'from-indigo-400 to-blue-400'
    }
  ];

  const achievements = [
    { year: '2023', label: 'Year Founded' },
    { year: '100%', label: 'Community-Led' },
    { year: '24/7', label: 'Emergency Support' }
  ];

  return (
    <section ref={ref} id="impact" className="py-24 bg-gradient-to-br from-[#0066CC] via-[#0077DD] to-[#0EA5E9] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white/5 to-transparent rounded-full"
        ></motion.div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6 border border-white/30"
            >
              <Sparkles size={18} className="text-yellow-300" />
              <span>{t.impact.badge}</span>
            </motion.div>
          </div>
          <h2 className="mb-6 text-4xl sm:text-5xl font-black text-white" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            {t.impact.title}
          </h2>
          <p className="text-white/95 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed font-semibold">
            {t.impact.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-4 border-white/20`}
                >
                  <Icon className="text-white" size={42} />
                </motion.div>

                <motion.div
                  className="text-5xl sm:text-6xl mb-3 font-black text-white"
                  style={{ textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {stat.number.includes('+') ? (
                    <>
                      <AnimatedCounter value={stat.number.replace('+', '')} />+
                    </>
                  ) : stat.number.includes('%') ? (
                    <AnimatedCounter value={stat.number} />
                  ) : (
                    stat.number
                  )}
                </motion.div>

                <div className="text-xl sm:text-2xl mb-3 text-white font-black">{stat.label}</div>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/10 to-transparent rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-5xl mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {item.year}
                </div>
                <div className="text-white/90 text-lg">{item.label}</div>
                <div className="mt-4 h-1 w-16 bg-white/30 rounded-full mx-auto group-hover:bg-yellow-300 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="text-white/40 text-6xl mb-4">"</div>
          <p className="text-xl text-white/90 italic leading-relaxed mb-6">
            These programs have transformed our community. We now have the knowledge and tools to feed our families and build a better future.
          </p>
          <div className="text-white/80">— Community Member, North Kivu</div>
        </motion.div>
      </div>
    </section>
  );
}