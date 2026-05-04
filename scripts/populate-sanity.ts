import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: '3r0h5v4g',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to provide this
  apiVersion: '2024-01-01',
});

// Sample data to populate
const sampleData = {
  hero: {
    _type: 'hero',
    title: 'Breaking the Cycle of Hunger',
    subtitle: 'One meal at a time, we\'re making a difference in our community',
    ctaText: 'Get Involved',
    ctaLink: '#get-involved',
    active: true,
  },

  news: [
    {
      _type: 'news',
      title: 'Community Food Drive Success',
      slug: { current: 'community-food-drive-success' },
      excerpt: 'Our recent food drive collected over 5,000 pounds of food for families in need.',
      author: 'FFP Team',
      publishedAt: new Date().toISOString(),
      featured: true,
    },
    {
      _type: 'news',
      title: 'New Partnership Announcement',
      slug: { current: 'new-partnership-announcement' },
      excerpt: 'We\'re excited to announce our partnership with local farms to provide fresh produce.',
      author: 'FFP Team',
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      featured: false,
    },
    {
      _type: 'news',
      title: 'Volunteer Appreciation Event',
      slug: { current: 'volunteer-appreciation-event' },
      excerpt: 'Join us in celebrating our amazing volunteers who make our mission possible.',
      author: 'FFP Team',
      publishedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      featured: false,
    },
  ],

  teamMembers: [
    {
      _type: 'teamMember',
      name: 'John Doe',
      slug: { current: 'john-doe' },
      position: 'Executive Director',
      email: 'john@ffp.org',
      order: 1,
      active: true,
    },
    {
      _type: 'teamMember',
      name: 'Jane Smith',
      slug: { current: 'jane-smith' },
      position: 'Program Coordinator',
      email: 'jane@ffp.org',
      order: 2,
      active: true,
    },
    {
      _type: 'teamMember',
      name: 'Mike Johnson',
      slug: { current: 'mike-johnson' },
      position: 'Community Outreach Manager',
      email: 'mike@ffp.org',
      order: 3,
      active: true,
    },
  ],

  media: [
    {
      _type: 'media',
      title: 'Community Food Distribution',
      slug: { current: 'community-food-distribution' },
      description: 'Volunteers distributing food packages to families in need',
      mediaType: 'photo',
      category: 'events',
      featured: true,
      publishedAt: new Date().toISOString(),
    },
    {
      _type: 'media',
      title: 'Children\'s Meal Program',
      slug: { current: 'childrens-meal-program' },
      description: 'Our after-school meal program serving healthy snacks to kids',
      mediaType: 'photo',
      category: 'programs',
      featured: true,
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      _type: 'media',
      title: 'Volunteer Training Session',
      slug: { current: 'volunteer-training-session' },
      description: 'New volunteers learning about food safety and distribution',
      mediaType: 'photo',
      category: 'community',
      featured: false,
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ],
};

async function populateSanity() {
  console.log('🚀 Starting to populate Sanity with sample data...\n');

  try {
    // Create Hero
    console.log('📝 Creating hero section...');
    const hero = await client.create(sampleData.hero);
    console.log('✅ Hero created:', hero.title);

    // Create News Articles
    console.log('\n📰 Creating news articles...');
    for (const article of sampleData.news) {
      const created = await client.create(article);
      console.log('✅ News article created:', created.title);
    }

    // Create Team Members
    console.log('\n👥 Creating team members...');
    for (const member of sampleData.teamMembers) {
      const created = await client.create(member);
      console.log('✅ Team member created:', created.name);
    }

    // Create Media Items
    console.log('\n📸 Creating media items...');
    for (const item of sampleData.media) {
      const created = await client.create(item);
      console.log('✅ Media item created:', item.title);
    }

    console.log('\n🎉 All sample data created successfully!');
    console.log('\n📌 Next steps:');
    console.log('1. Open Sanity Studio at http://localhost:3333');
    console.log('2. Upload images to the media items');
    console.log('3. Add body content to news articles');
    console.log('4. Upload photos for team members');
    console.log('5. Add background image to hero section');

  } catch (error) {
    console.error('❌ Error creating documents:', error);
  }
}

// Run the script
populateSanity();
