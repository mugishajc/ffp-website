import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Mail, X } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { toast } from 'sonner';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  fullContent?: string;
}

export function News() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(t.contact.successMessage);
    setEmail('');
    setIsSubmitting(false);
  };

  const handleLoadMore = () => {
    setVisibleArticles(prev => prev + 6);
  };

  const featuredStory: Article = {
    title: 'New Community Garden Initiative Launches in 15 Villages',
    excerpt: 'Our largest expansion yet brings sustainable agriculture to thousands of families across North Kivu province.',
    image: 'https://images.unsplash.com/photo-1592419391068-9bd09dd58510?w=1200&h=600&fit=crop',
    category: t.pages.news.featured,
    date: 'September 28, 2025',
    readTime: '5 min read',
    fullContent: 'FoodFirst Program is excited to announce the launch of our largest community garden initiative to date, expanding to 15 villages across North Kivu province. This expansion will bring sustainable agriculture practices to thousands of families, providing them with the tools and knowledge needed to achieve food security.\n\nThe initiative includes training programs for local farmers, distribution of quality seeds, and establishment of community-managed gardens. Each village will receive dedicated support from our team of agricultural experts.\n\nWe are grateful to our partners and donors who have made this expansion possible. Together, we are building a future where every family has access to nutritious food.'
  };

  const newsArticles: Article[] = [
    {
      title: 'Training Program Graduates 200 Women Farmers',
      excerpt: 'Celebrating the achievement of 200 women who completed our advanced agricultural training program.',
      image: 'https://images.unsplash.com/photo-1610626294778-86570f49140d?w=600&h=400&fit=crop',
      category: 'Success Story',
      date: 'September 15, 2025',
      readTime: '3 min read',
      fullContent: 'This month, we celebrated the graduation of 200 women from our advanced agricultural training program. These women have spent six months learning modern farming techniques, sustainable practices, and business skills that will help them support their families and communities.\n\nThe program covered topics including soil management, crop rotation, pest control, and post-harvest handling. Graduates also received starter kits with seeds, tools, and resources to begin their farming ventures.'
    },
    {
      title: 'Partnership with EU Secures $500K in Funding',
      excerpt: 'New partnership will expand nutrition education programs to 30 additional communities.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      category: 'Partnership',
      date: 'September 8, 2025',
      readTime: '4 min read',
      fullContent: 'FoodFirst Program has secured a significant partnership with the European Union, receiving $500,000 in funding to expand our nutrition education programs. This funding will allow us to reach 30 additional communities over the next two years.\n\nThe partnership focuses on combating malnutrition through education, teaching families about balanced diets, food preparation, and child nutrition. We are grateful for this support and the positive impact it will have on thousands of lives.'
    },
    {
      title: 'Harvest Festival Celebrates Record-Breaking Yields',
      excerpt: 'Community celebrates 75% increase in crop production thanks to sustainable farming techniques.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop',
      category: 'Community Event',
      date: 'September 1, 2025',
      readTime: '3 min read',
      fullContent: 'Communities across North Kivu came together to celebrate a record-breaking harvest season, with many farms reporting a 75% increase in crop production compared to previous years. This remarkable achievement is the result of sustainable farming techniques introduced through our training programs.'
    },
    {
      title: 'Mobile Clinic Brings Nutrition Services to Remote Areas',
      excerpt: 'New mobile clinic initiative reaches families in hard-to-access regions of North Kivu.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      category: 'Health Initiative',
      date: 'August 25, 2025',
      readTime: '4 min read',
      fullContent: 'Our new mobile clinic initiative is bringing essential nutrition services to families in remote and hard-to-access areas of North Kivu. The mobile clinic provides health screenings, nutrition assessments, and educational resources to communities that previously had limited access to such services.'
    },
    {
      title: 'Youth Leadership Program Empowers Next Generation',
      excerpt: '50 young leaders trained to continue food security work in their communities.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      category: 'Education',
      date: 'August 18, 2025',
      readTime: '5 min read',
      fullContent: 'Fifty young people have completed our Youth Leadership Program, equipping them with the skills and knowledge to lead food security initiatives in their communities. These future leaders will play a crucial role in sustaining and expanding our impact.'
    },
    {
      title: 'Award Recognizes Impact on Child Malnutrition',
      excerpt: 'International recognition for our innovative approach to combating child malnutrition.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      category: 'Recognition',
      date: 'August 10, 2025',
      readTime: '4 min read',
      fullContent: 'FoodFirst Program has received international recognition for our innovative approach to combating child malnutrition in the Democratic Republic of Congo. This award acknowledges the hard work of our team and the communities we serve.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              {t.pages.news.badge}
            </div>
          </div>
          <h1 className="text-primary mb-6 text-4xl sm:text-5xl">
            {t.pages.news.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.pages.news.description}
          </p>
        </motion.div>

        {/* Featured Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                <ImageWithFallback
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                    {featuredStory.category}
                  </Badge>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h2 className="text-primary mb-4 text-3xl">{featuredStory.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {featuredStory.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredStory.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredStory.readTime}</span>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Button
                    onClick={() => setSelectedArticle(featuredStory)}
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group/btn"
                    size="lg"
                  >
                    {t.pages.news.readFull}
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.slice(0, visibleArticles).map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
            >
              <Card
                onClick={() => setSelectedArticle(article)}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group h-full flex flex-col cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/95 backdrop-blur-sm">
                      <Tag size={12} className="mr-1" />
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-foreground mb-3 text-lg">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleArticles < newsArticles.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary"
              >
                {t.pages.news.loadMore} ({newsArticles.length - visibleArticles} more)
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 md:p-16 border border-primary/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Mail className="text-primary mx-auto mb-6" size={48} />
            <h3 className="text-primary mb-4 text-2xl">
              {t.pages.news.newsletterTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t.pages.news.newsletterDesc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              >
                {t.pages.news.subscribe}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="aspect-video relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                    {selectedArticle.category}
                  </Badge>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[50vh]">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <div className="prose prose-gray max-w-none">
                  {selectedArticle.fullContent?.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-100 flex justify-end">
                <Button
                  onClick={() => setSelectedArticle(null)}
                  variant="outline"
                  className="mr-3"
                >
                  {t.common.close}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}