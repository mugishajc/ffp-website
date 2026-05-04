import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
  projectId: '3r0h5v4g',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN || '', // Will need auth token
  apiVersion: '2024-01-01',
});

// Static team data from your website
const staticTeamMembers = [
  {
    name: 'Liliane Thamar Muyumbu',
    position: 'Founder & Presidente',
    email: 'president@foodfirstprogram.org',
    bio: 'Founder and visionary leader of FoodFirst Program, dedicated to combating food insecurity across DR Congo.',
    order: 1,
    active: true,
  },
  {
    name: 'Jean Marie Vianey Kagamba',
    position: 'Projects Coordinator',
    email: 'kagamba@ffp-program.org',
    bio: 'Coordinating all FFP projects and ensuring effective implementation across communities.',
    order: 2,
    active: true,
  },
  {
    name: 'Marhonyi Nahirimba Espérance',
    position: 'Staff Member',
    bio: 'Supporting program implementation and community engagement.',
    order: 3,
    active: true,
  },
  {
    name: 'Muhigirwa Yondino Sourire',
    position: 'Staff Member',
    bio: 'Working closely with communities to ensure program success.',
    order: 4,
    active: true,
  },
  {
    name: 'Bahizire Rusembuka Daniel',
    position: 'Staff Member',
    bio: 'Contributing to field operations and community outreach.',
    order: 5,
    active: true,
  },
  {
    name: 'Mushgalusa Ruvunangiza Zacharie',
    position: 'Staff Member',
    bio: 'Supporting agricultural training and community development initiatives.',
    order: 6,
    active: true,
  },
  {
    name: 'Amani Ramazani Gerad',
    position: 'Staff Member',
    bio: 'Assisting with program coordination and stakeholder relations.',
    order: 7,
    active: true,
  },
];

// Example news/updates
const staticNews = [
  {
    title: 'FoodFirst Program Launch in North Kivu',
    slug: { current: 'foodfirst-program-launch-north-kivu' },
    excerpt: 'Our flagship program has officially launched in North Kivu, bringing hope to thousands of families.',
    author: 'FFP Team',
    publishedAt: new Date('2024-01-15').toISOString(),
    featured: true,
  },
  {
    title: 'Community Gardens Initiative Success',
    slug: { current: 'community-gardens-initiative-success' },
    excerpt: 'Over 50 community gardens have been established, providing fresh produce to local families.',
    author: 'FFP Team',
    publishedAt: new Date('2024-02-20').toISOString(),
    featured: false,
  },
  {
    title: 'Partnership with Local Farmers Announced',
    slug: { current: 'partnership-local-farmers-announced' },
    excerpt: 'We are excited to announce our new partnership with local farming cooperatives.',
    author: 'FFP Team',
    publishedAt: new Date('2024-03-10').toISOString(),
    featured: false,
  },
];

// Hero section data
const heroData = {
  title: 'Together, We Fight Hunger',
  subtitle: 'Empowering communities through sustainable agriculture, nutrition education, and community-driven solutions',
  ctaText: 'Support Our Mission',
  ctaLink: '#get-involved',
  active: true,
};

async function migrateContentToSanity() {
  console.log('🚀 Starting content migration to Sanity...\n');

  try {
    // Check if token is provided
    if (!process.env.SANITY_AUTH_TOKEN) {
      console.error('❌ Error: SANITY_AUTH_TOKEN not found in environment variables');
      console.log('\nTo use this script, you need to:');
      console.log('1. Get a token from: https://www.sanity.io/manage');
      console.log('2. Go to your project → Settings → API → Tokens');
      console.log('3. Create a token with "Editor" permissions');
      console.log('4. Add to .env file: SANITY_AUTH_TOKEN=your_token_here');
      console.log('5. Run this script again\n');
      return;
    }

    // Migrate Team Members
    console.log('👥 Migrating team members...');
    for (const member of staticTeamMembers) {
      try {
        const doc = {
          _type: 'teamMember',
          name: member.name,
          slug: {
            _type: 'slug',
            current: member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
          },
          position: member.position,
          bio: member.bio,
          email: member.email,
          order: member.order,
          active: member.active,
        };

        const created = await client.create(doc);
        console.log(`  ✅ Created: ${created.name}`);
      } catch (error: any) {
        console.log(`  ⚠️  Skipped ${member.name}: ${error.message}`);
      }
    }

    // Migrate News Articles
    console.log('\n📰 Migrating news articles...');
    for (const article of staticNews) {
      try {
        const doc = {
          _type: 'news',
          title: article.title,
          slug: article.slug,
          excerpt: article.excerpt,
          author: article.author,
          publishedAt: article.publishedAt,
          featured: article.featured,
        };

        const created = await client.create(doc);
        console.log(`  ✅ Created: ${created.title}`);
      } catch (error: any) {
        console.log(`  ⚠️  Skipped ${article.title}: ${error.message}`);
      }
    }

    // Create Hero Section
    console.log('\n🎨 Creating hero section...');
    try {
      const doc = {
        _type: 'hero',
        title: heroData.title,
        subtitle: heroData.subtitle,
        ctaText: heroData.ctaText,
        ctaLink: heroData.ctaLink,
        active: heroData.active,
      };

      const created = await client.create(doc);
      console.log(`  ✅ Created hero: ${created.title}`);
    } catch (error: any) {
      console.log(`  ⚠️  Hero creation skipped: ${error.message}`);
    }

    console.log('\n✨ Content migration completed!');
    console.log('\n📌 Next steps:');
    console.log('1. Go to https://ffp-dashboard.sanity.studio/');
    console.log('2. Upload photos for team members');
    console.log('3. Add main images to news articles');
    console.log('4. Upload background image for hero section');
    console.log('5. Add any additional media items (photos, videos)');

    console.log('\n🎯 Your content is now in Sanity CMS!');

  } catch (error) {
    console.error('\n❌ Migration error:', error);
  }
}

// Run the migration
migrateContentToSanity();
