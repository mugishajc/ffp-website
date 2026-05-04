import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image, FileText, Mail, X, ChevronLeft, ChevronRight, Calendar, Tag, Heart } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { DonateModal } from '../DonateModal';

type MediaType = 'all' | 'videos' | 'photos' | 'press';

interface PressRelease {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  fullContent: string;
}

export function Media() {
  const [activeType, setActiveType] = useState<MediaType>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{image: string; title: string} | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [selectedPress, setSelectedPress] = useState<PressRelease | null>(null);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const mediaTypes = [
    { id: 'all' as MediaType, label: 'All Media', icon: FileText },
    { id: 'videos' as MediaType, label: 'Videos', icon: Play },
    { id: 'photos' as MediaType, label: 'Photo Gallery', icon: Image },
    { id: 'press' as MediaType, label: 'Press Releases', icon: FileText }
  ];

  const videos = [
    {
      title: 'FFP Field Operations in Eastern DRC',
      thumbnail: '/images/ffp-field-1.jpg',
      duration: '12:45',
      views: '2.3K',
      date: 'December 2025'
    },
    {
      title: 'Training Women Farmers',
      thumbnail: '/images/ffp-women-group.jpg',
      duration: '8:30',
      views: '1.8K',
      date: 'November 2025'
    },
    {
      title: 'Seeds of Hope Children\'s Home',
      thumbnail: '/images/ffp-children.jpg',
      duration: '6:15',
      views: '1.2K',
      date: 'October 2025'
    }
  ];

  const photos = [
    {
      title: 'Agricultural Field Visit',
      image: '/images/ffp-field-1.jpg',
      category: 'Programs',
      date: '2025'
    },
    {
      title: 'Staff in the Field',
      image: '/images/ffp-field-2.jpg',
      category: 'Programs',
      date: '2025'
    },
    {
      title: 'Community Field Work',
      image: '/images/ffp-community-field.jpg',
      category: 'Programs',
      date: '2025'
    },
    {
      title: 'Women Farmers Group',
      image: '/images/ffp-women-group.jpg',
      category: 'Events',
      date: '2025'
    },
    {
      title: 'Women Graduates',
      image: '/images/ffp-graduates.jpg',
      category: 'Events',
      date: '2025'
    },
    {
      title: 'Children at Seeds of Hope',
      image: '/images/ffp-children.jpg',
      category: 'Impact',
      date: '2025'
    },
    {
      title: 'Community Gathering',
      image: '/images/ffp-community.jpg',
      category: 'Community',
      date: '2025'
    },
    {
      title: 'Education Program',
      image: '/images/ffp-education.jpg',
      category: 'Education',
      date: '2025'
    },
    {
      title: 'Community Event',
      image: '/images/ffp-community-2.jpg',
      category: 'Events',
      date: '2025'
    }
  ];

  const pressReleases: PressRelease[] = [
    {
      title: 'FoodFirst Program Expands to New Communities',
      excerpt: 'New community garden initiative brings sustainable agriculture to families in Eastern DRC.',
      date: 'December 15, 2025',
      category: 'Expansion',
      fullContent: `Food First Program (FFP) is proud to announce the expansion of our community garden initiative to three new villages in Eastern Democratic Republic of Congo.

This expansion will bring sustainable agriculture training and resources to over 200 additional families who have been affected by food insecurity due to ongoing conflict in the region.

Key highlights of the expansion:
• Three new community gardens established in North Kivu
• Over 200 families to receive seeds, tools, and training
• Partnership with local agricultural cooperatives
• Focus on drought-resistant and high-yield crop varieties

"This expansion represents our commitment to reaching the most vulnerable communities," said Liliane Thamar Kagamba, FFP Founder. "Every family deserves access to nutritious food, and we are working tirelessly to make that a reality."

The program will include intensive training on modern farming techniques, soil management, and post-harvest handling to ensure long-term food security for participating families.`
    },
    {
      title: 'Seeds of Hope Children\'s Home Opens',
      excerpt: 'FFP launches initiative to protect and support vulnerable children in conflict-affected areas.',
      date: 'November 8, 2025',
      category: 'Milestone',
      fullContent: `Food First Program (FFP) is honored to announce the opening of Seeds of Hope Children's Home, a safe haven for orphaned and vulnerable children in Eastern DR Congo.

Seeds of Hope provides shelter, nutrition, education, and emotional support to children who have lost their parents or been separated from their families due to conflict and displacement.

About Seeds of Hope:
• Safe shelter for vulnerable children
• Three nutritious meals daily
• Access to education and school supplies
• Psychological support and counseling
• Recreation and play activities

"No child should face hunger, fear, or uncertainty alone," said FFP leadership. "Seeds of Hope represents our commitment to protecting the most vulnerable members of our community - our children."

The home currently supports children aged 3-16, providing them with a loving environment where they can heal, grow, and dream of a better future. We work to reunite children with their families whenever possible, while ensuring they have everything they need to thrive.

We invite supporters to join us in nurturing these children through sponsorship, donations, and volunteer opportunities.`
    },
    {
      title: 'Women Farmers Graduate from Agricultural Training',
      excerpt: 'Celebrating the achievement of women who completed farming and empowerment programs.',
      date: 'October 15, 2025',
      category: 'Achievement',
      fullContent: `Food First Program (FFP) celebrated a milestone achievement as the first cohort of women farmers graduated from our comprehensive agricultural training program.

The graduation ceremony honored 45 women from communities across North Kivu who completed six months of intensive training in sustainable farming practices, business skills, and cooperative management.

Program highlights:
• 45 women completed the training program
• Skills covered: crop cultivation, soil management, irrigation, pest control
• Business training: record-keeping, market access, cooperative formation
• Each graduate received a starter kit with seeds and tools

"These women are now equipped to transform not only their own lives but their entire communities," said the program coordinator. "They will become teachers and mentors to other women in their villages."

Graduates reported significant improvements:
• 80% reported increased crop yields within the first season
• 90% expressed confidence in their farming abilities
• 100% committed to training other women in their communities

The success of this program demonstrates the power of investing in women as agents of change in the fight against hunger and poverty.`
    }
  ];

  const getFilteredContent = () => {
    if (activeType === 'videos') return { videos, photos: [], press: [] };
    if (activeType === 'photos') return { videos: [], photos, press: [] };
    if (activeType === 'press') return { videos: [], photos: [], press: pressReleases };
    return { videos, photos, press: pressReleases };
  };

  const content = getFilteredContent();

  const openPhotoViewer = (photo: {image: string; title: string}, index: number) => {
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(index);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (selectedPhotoIndex - 1 + photos.length) % photos.length
      : (selectedPhotoIndex + 1) % photos.length;
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

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
              Media Center
            </div>
          </div>
          <h1 className="text-primary mb-6 text-4xl sm:text-5xl font-black">
            Media & Resources
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            Explore our photos and press releases showcasing our impact across DR Congo.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {mediaTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeType === type.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5'
                }`}
              >
                <Icon size={18} />
                {type.label}
              </button>
            );
          })}
        </motion.div>

        {/* Videos Section */}
        {content.videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Play className="text-primary" size={28} />
              Videos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.videos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group cursor-pointer"
                  onClick={() => toast.info('Video Coming Soon', { description: 'Full video content will be available soon.' })}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-primary ml-1" size={28} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Photos Section */}
        {content.photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Image className="text-primary" size={28} />
              Photo Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => openPhotoViewer(photo, index)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="bg-primary/90 text-white border-0 mb-2">{photo.category}</Badge>
                    <h3 className="text-white font-bold">{photo.title}</h3>
                    <p className="text-white/80 text-sm">{photo.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Press Releases Section */}
        {content.press.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="text-primary" size={28} />
              Press Releases
            </h2>
            <div className="space-y-6">
              {content.press.map((press, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:border-primary/20 cursor-pointer"
                  onClick={() => setSelectedPress(press)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {press.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{press.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {press.title}
                      </h3>
                      <p className="text-gray-600">{press.excerpt}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="gap-2 bg-gradient-to-r from-primary to-accent"
                        onClick={(e) => { e.stopPropagation(); setSelectedPress(press); }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact for Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/10 text-center"
        >
          <h3 className="text-primary mb-4 text-2xl font-black">Media Inquiries</h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            For press inquiries, interviews, or additional media resources, please contact our communications team.
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

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowDonateModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-lg transition-all duration-300"
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
              className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Contact Communications Team
            </button>
          </div>
        </motion.div>
      </div>

      {/* Photo Viewer Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-white text-xl font-bold">{selectedPhoto.title}</h3>
                <p className="text-white/70 text-sm">{selectedPhotoIndex + 1} of {photos.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Press Release Modal */}
      <AnimatePresence>
        {selectedPress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedPress(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white relative">
                <button
                  onClick={() => setSelectedPress(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-white/20 text-white border-0">
                    <Tag size={12} className="mr-1" />
                    {selectedPress.category}
                  </Badge>
                  <span className="text-white/80 text-sm flex items-center gap-1">
                    <Calendar size={14} />
                    {selectedPress.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold pr-8">{selectedPress.title}</h2>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)]">
                <div className="prose prose-gray max-w-none">
                  {selectedPress.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedPress(null)}
                >
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-primary to-accent"
                  onClick={() => {
                    toast.success('Thank you for your interest!', { description: 'Contact us for more information about this initiative.' });
                  }}
                >
                  <Mail size={16} className="mr-2" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donate Modal */}
      <DonateModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
    </div>
  );
}
