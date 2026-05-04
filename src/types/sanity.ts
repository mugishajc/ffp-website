export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanityFile {
  _type: 'file';
  asset: {
    _ref: string;
    _type: 'reference';
    url?: string;
  };
}

export interface Media {
  _id: string;
  _type: 'media';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  mediaType: 'photo' | 'video';
  image?: SanityImage;
  videoUrl?: string;
  videoFile?: SanityFile;
  thumbnail?: SanityImage;
  category?: 'events' | 'programs' | 'community' | 'impact' | 'news';
  featured: boolean;
  publishedAt: string;
}

export interface News {
  _id: string;
  _type: 'news';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: SanityImage;
  body?: any[]; // Portable Text array
  author?: string;
  publishedAt: string;
  featured: boolean;
}

export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  _createdAt: string;
  _updatedAt: string;
  name: string;
  slug: {
    current: string;
  };
  position: string;
  photo?: SanityImage;
  bio?: any[]; // Portable Text array
  email?: string;
  phone?: string;
  order: number;
  active: boolean;
}

export interface Hero {
  _id: string;
  _type: 'hero';
  _createdAt: string;
  _updatedAt: string;
  title: string;
  subtitle?: string;
  backgroundImage?: SanityImage;
  backgroundVideo?: SanityFile;
  ctaText?: string;
  ctaLink?: string;
  active: boolean;
}
