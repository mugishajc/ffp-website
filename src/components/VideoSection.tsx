import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Eye, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
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
              {t.video.badge}
            </motion.div>
          </div>
          <h2 className="text-black mb-6 text-4xl sm:text-5xl font-black">
            {t.video.title}
          </h2>
          <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed font-bold">
            {t.video.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <img
                    src="/images/ffp-community.jpg"
                    alt="FFP community programs in DR Congo"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Play Button */}
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-primary transition-all duration-300">
                      <Play className="text-primary group-hover:text-white ml-1" size={32} />
                    </div>
                  </motion.button>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/ERpfI5jnH0Y?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                  title="Food Security in Congo - Agricultural Programs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0 }}
                ></iframe>
              )}

              {/* Video Stats - Only show when not playing */}
              {!isPlaying && (
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Eye size={16} className="text-white" />
                      <span className="text-white text-sm">15.2K {t.video.views}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <ThumbsUp size={16} className="text-white" />
                      <span className="text-white text-sm">98% {t.video.positive}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Progress */}
            <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '45%' } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-primary mb-4 text-2xl">
              {t.video.featuredTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.video.featuredDesc}
            </p>

            <div className="space-y-4">
              <div className="text-foreground mb-4">{t.video.featuredStories}</div>
              {[
                { time: '0:00', title: t.video.moment1 },
                { time: '2:15', title: t.video.moment2 },
                { time: '4:30', title: t.video.moment3 }
              ].map((moment, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="w-full flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 rounded-xl transition-all duration-300 group text-left"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <Play className="text-white" size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{moment.time}</div>
                    <div className="text-foreground group-hover:text-primary transition-colors">{moment.title}</div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Video Collection Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
                <div className="text-3xl text-primary mb-1">12+</div>
                <div className="text-sm text-muted-foreground">{t.video.videos}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100">
                <div className="text-3xl text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">{t.video.views}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}