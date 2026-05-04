import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Users, Sprout, ArrowRight } from 'lucide-react';

export function RealitySection() {
  const { language } = useLanguage();
  const ref = useRef(null);

  const challenges = [
    {
      icon: Users,
      stat: '26 millions',
      label: language === 'en' ? 'People facing acute food insecurity in DR Congo'
           : language === 'fr' ? 'Personnes confrontées à l\'insécurité alimentaire aiguë en RD Congo'
           : language === 'sw' ? 'Watu wanaokabiliwa na ukosefu wa chakula mkali nchini DR Congo'
           : 'Abantu bahura n\'ubushoboze bw\'ibiribwa bukabije muri RD Congo',
      image: '/images/ffp-community.jpg'
    },
    {
      icon: Heart,
      stat: '43%',
      label: language === 'en' ? 'Of children under 5 are chronically malnourished'
           : language === 'fr' ? 'Des enfants de moins de 5 ans souffrent de malnutrition chronique'
           : language === 'sw' ? 'Wa watoto chini ya miaka 5 wana utapiamlo wa muda mrefu'
           : 'By\'abana bari munsi y\'imyaka 5 bafite imirire mibi idakira',
      image: '/images/ffp-children.jpg'
    }
  ];

  const hope = [
    {
      icon: Sprout,
      title: language === 'en' ? 'Hope Through Agriculture'
           : language === 'fr' ? 'L\'Espoir par l\'Agriculture'
           : language === 'sw' ? 'Matumaini Kupitia Kilimo'
           : 'Ibyiringiro Binyuze mu Buhinzi',
      description: language === 'en' ? 'With proper training and resources, families can grow 3x more food and break the cycle of hunger'
                 : language === 'fr' ? 'Avec une formation et des ressources appropriées, les familles peuvent cultiver 3 fois plus de nourriture et briser le cycle de la faim'
                 : language === 'sw' ? 'Kwa mafunzo na rasilimali sahihi, familia zinaweza kukuza chakula mara 3 zaidi na kuvunja mzunguko wa njaa'
                 : 'Hamwe n\'amahugurwa akwiye n\'ibikoresho, imiryango irashobora guhinga ibiribwa 3 n\'ikurikirana inzara',
      image: '/images/ffp-field-1.jpg'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Community Transformation'
           : language === 'fr' ? 'Transformation Communautaire'
           : language === 'sw' ? 'Mabadiliko ya Jamii'
           : 'Guhindura Abaturage',
      description: language === 'en' ? 'Villages that were struggling with hunger are now self-sufficient, with thriving gardens and healthy children'
                 : language === 'fr' ? 'Les villages qui luttaient contre la faim sont maintenant autonomes, avec des jardins prospères et des enfants en bonne santé'
                 : language === 'sw' ? 'Vijiji ambavyo vilikuwa vikipambana na njaa sasa vinajitegemea, vikiwa na bustani zinazostawi na watoto wenye afya'
                 : 'Imidugudu yari ihangana n\'inzara ubu yiyitwararikiye, ifite imirima iteza imbere n\'abana b\'ubuzima bwiza',
      image: '/images/ffp-women-group.jpg'
    }
  ];

  const successStories = [
    {
      name: language === 'en' ? 'Mama Zawadi and her children'
           : language === 'fr' ? 'Maman Zawadi et ses enfants'
           : language === 'sw' ? 'Mama Zawadi na watoto wake'
           : 'Mama Zawadi n\'abana be',
      before: language === 'en' ? 'Struggling to feed her 4 children, often going days without proper meals'
            : language === 'fr' ? 'Peine à nourrir ses 4 enfants, passant souvent des jours sans repas appropriés'
            : language === 'sw' ? 'Anapambana kulisha watoto wake 4, mara nyingi anapita siku bila chakula sahihi'
            : 'Yari afite ikibazo cyo kugaburira abana 4, kenshi aramara iminsi adafite ibiryo bikwiye',
      after: language === 'en' ? 'Now grows vegetables in her garden and feeds her family 3 nutritious meals daily'
           : language === 'fr' ? 'Cultive maintenant des légumes dans son jardin et nourrit sa famille de 3 repas nutritifs par jour'
           : language === 'sw' ? 'Sasa analima mboga kwenye bustani yake na analisha familia yake milo 3 yenye lishe kila siku'
           : 'Ubu ateranya imboga mu murima we kandi agaburira umuryango we ibiryo 3 bifite intungamubiri buri munsi',
      image: '/images/ffp-graduates.jpg'
    },
    {
      name: language === 'en' ? 'Children at Kibumba School'
           : language === 'fr' ? 'Les enfants de l\'école Kibumba'
           : language === 'sw' ? 'Watoto wa Shule ya Kibumba'
           : 'Abana ba Shule ya Kibumba',
      before: language === 'en' ? 'Many students couldn\'t concentrate due to hunger, attendance was low'
            : language === 'fr' ? 'De nombreux élèves ne pouvaient pas se concentrer à cause de la faim, la fréquentation était faible'
            : language === 'sw' ? 'Wanafunzi wengi hawakuweza kuzingatia kwa sababu ya njaa, mahudhurio yalikuwa duni'
            : 'Abanyeshuri benshi ntibashobora kwibanda kubera inzara, kuza kwari gute',
      after: language === 'en' ? 'School feeding program provides daily meals. Attendance up 85%, test scores improving'
           : language === 'fr' ? 'Le programme d\'alimentation scolaire fournit des repas quotidiens. Fréquentation en hausse de 85%, notes aux tests en amélioration'
           : language === 'sw' ? 'Programu ya kulisha shuleni inatoa chakula cha kila siku. Mahudhurio yameongezeka 85%, alama za mtihani zinaboresheka'
           : 'Porogaramu yo kugaburira mu ishuri itanga ibiryo bya buri munsi. Kuza kwariyongereye 85%, amanota arateza imbere',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=95'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">

        {/* The Reality */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg group"
                >
                  <div className="absolute inset-0">
                    <img
                      src={challenge.image}
                      alt="Reality of food insecurity"
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  </div>

                  <div className="relative p-6 sm:p-8 text-white">
                    <Icon size={32} className="mb-3 sm:mb-4 text-red-400" />
                    <div className="text-3xl sm:text-4xl font-bold mb-2">{challenge.stat}</div>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{challenge.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* The Hope */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
              <span className="text-green-700">
                {language === 'en' ? 'The Solution' 
                : language === 'fr' ? 'La Solution'
                : language === 'sw' ? 'Suluhisho'
                : 'Igisubizo'}
              </span>
            </div>
            <h2 className="mb-4 text-foreground">
              {language === 'en' ? 'Creating Lasting Change' 
              : language === 'fr' ? 'Créer un Changement Durable'
              : language === 'sw' ? 'Kuunda Mabadiliko ya Kudumu'
              : 'Gukora Impinduka Zihoraho'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hope.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg group"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={item.image}
                      alt="Hope through our programs"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-800/60 to-green-700/30" />
                  </div>
                  
                  <div className="relative p-6 sm:p-8 text-white">
                    <Icon size={32} className="mb-3 sm:mb-4 text-green-300" />
                    <h3 className="text-xl sm:text-2xl mb-3 text-white font-semibold">{item.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Success Stories - Before & After */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
              <span className="text-primary">
                {language === 'en' ? 'Real Transformations' 
                : language === 'fr' ? 'Transformations Réelles'
                : language === 'sw' ? 'Mabadiliko Halisi'
                : 'Impinduka Nyazo'}
              </span>
            </div>
            <h2 className="mb-4 text-foreground">
              {language === 'en' ? 'From Struggle to Success' 
              : language === 'fr' ? 'De la Lutte au Succès'
              : language === 'sw' ? 'Kutoka Mapambano hadi Mafanikio'
              : 'Kuva mu Kibazo kugera ku Ntsinzi'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="relative h-64">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl mb-1">{story.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm text-muted-foreground uppercase tracking-wide">
                        {language === 'en' ? 'Before' 
                        : language === 'fr' ? 'Avant'
                        : language === 'sw' ? 'Kabla'
                        : 'Mbere'}
                      </span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{story.before}</p>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-muted-foreground uppercase tracking-wide">
                        {language === 'en' ? 'After' 
                        : language === 'fr' ? 'Après'
                        : language === 'sw' ? 'Baada'
                        : 'Nyuma'}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{story.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              {language === 'en' ? 'Help Transform More Lives' 
              : language === 'fr' ? 'Aidez à Transformer Plus de Vies'
              : language === 'sw' ? 'Saidia Kubadilisha Maisha Zaidi'
              : 'Dufashe Guhindura Ubuzima Bwinshi'}
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'en' ? 'See All Stories' 
              : language === 'fr' ? 'Voir Toutes les Histoires'
              : language === 'sw' ? 'Tazama Hadithi Zote'
              : 'Reba Inkuru Zose'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
