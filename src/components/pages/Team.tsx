import { motion } from 'framer-motion';
import { Mail, Users, Award, Briefcase } from 'lucide-react';
import { Card } from '../ui/card';
import { useState } from 'react';
import { useTeamMembers } from '../../hooks/useSanity';
import { urlFor } from '../../lib/sanity';

type TeamCategory = 'all' | 'board' | 'staff';

interface TeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  image: string;
  email?: string;
  bio?: string;
}

export function Team() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('all');
  const { data: sanityTeam, loading, error } = useTeamMembers(true);

  const categories = [
    { id: 'all' as TeamCategory, label: 'All Team', icon: Users },
    { id: 'board' as TeamCategory, label: 'Leadership', icon: Award },
    { id: 'staff' as TeamCategory, label: 'Staff', icon: Briefcase }
  ];

  // Fallback static team members (shown if no Sanity data)
  const staticTeamMembers: TeamMember[] = [
    {
      name: 'Liliane Thamar Muyumbu',
      role: 'Founder & Presidente',
      category: 'board',
      image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=400&h=400&fit=crop&crop=faces',
      email: 'president@foodfirstprogram.org',
      bio: 'Founder and visionary leader of FoodFirst Program, dedicated to combating food insecurity across DR Congo.'
    },
    {
      name: 'Jean Marie Vianey Kagamba',
      role: 'Projects Coordinator',
      category: 'board',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&q=80',
      email: 'info@ffp-program.org',
      bio: 'Coordinating all FFP projects and ensuring effective implementation across communities.'
    },
  ];

  // Convert Sanity team members to component format
  const sanityTeamMembers: TeamMember[] = sanityTeam?.map(member => ({
    name: member.name,
    role: member.position,
    category: 'staff' as TeamCategory, // You can add category field in Sanity later
    image: member.photo ? urlFor(member.photo).width(400).height(400).url() : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    email: member.email,
    bio: member.bio ? (typeof member.bio === 'string' ? member.bio : 'Team member description') : undefined,
  })) || [];

  // Combine static and Sanity members
  const teamMembers = sanityTeamMembers.length > 0 ? sanityTeamMembers : staticTeamMembers;

  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeCategory);

  // Show loading state
  if (loading && sanityTeamMembers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Show info if using Sanity data */}
        {sanityTeamMembers.length > 0 && (
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              ✅ Loaded from Sanity CMS ({sanityTeamMembers.length} members)
            </span>
          </div>
        )}

        {/* Show error if needed */}
        {error && (
          <div className="mb-4 text-center">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
              ⚠️ Using fallback data (Sanity error)
            </span>
          </div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              Our People
            </div>
          </div>
          <h1 className="text-primary mb-6 text-4xl sm:text-5xl font-black">
            Meet Our Team
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            The dedicated individuals working tirelessly to achieve food security for communities in DR Congo.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5'
                }`}
              >
                <Icon size={18} />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white group">
                {/* Photo */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                  {member.bio && (
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/10 text-center"
        >
          <h3 className="text-primary mb-4 text-2xl font-black">Join Our Team</h3>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Interested in making a difference? We're always looking for passionate individuals to join our mission.
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
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}
