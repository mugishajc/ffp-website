import { Heart, Target, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t.about.mission,
      description: t.about.missionText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: t.about.vision,
      description: t.about.visionText,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      title: t.about.values,
      description: `${t.about.communityText}, ${t.about.sustainabilityText.toLowerCase()}, ${t.about.transparencyText.toLowerCase()}, ${t.about.empowermentText.toLowerCase()}`,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '27M+', label: 'People Face Hunger in DRC' },
    { value: '43%', label: 'Children Under 5 Malnourished' },
    { value: '6.9M', label: 'Displaced by Conflict' },
    { value: '#3', label: 'Global Food Crisis Severity' }
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl"></div>

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
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4 backdrop-blur-sm border border-primary/20"
            >
              {t.about.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.about.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-8 text-center border-2 border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 bg-white relative overflow-hidden group hover:border-primary/30">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10 group-hover:shadow-3xl`}
                  >
                    <Icon className="text-white" size={40} />
                  </motion.div>
                  <h3 className="text-gray-900 mb-4 text-2xl font-black group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base font-medium">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden border-2 border-gray-200"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content */}
            <div>
              <h3 className="text-gray-900 mb-6 text-3xl font-black">Why Food Security Matters</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                The Democratic Republic of Congo faces significant food security challenges, with millions of people experiencing hunger and malnutrition. Despite rich natural resources, conflict, poverty, and lack of infrastructure have created a humanitarian crisis.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                FoodFirst Program (FFP) works directly with communities in Eastern Congo to break the cycle of food insecurity through education, sustainable agriculture, and economic empowerment.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1a4731] to-[#2D5F3F] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-black text-white mb-3 drop-shadow-lg"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white font-semibold leading-tight drop-shadow">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}