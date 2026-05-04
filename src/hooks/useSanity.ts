import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import type { Media, News, TeamMember, Hero } from '../types/sanity';

// Generic hook to fetch Sanity documents
export function useSanityDocuments<T>(type: string, filters?: Record<string, any>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const filterStrings = filters
          ? Object.entries(filters)
              .map(([key, value]) => `${key} == ${JSON.stringify(value)}`)
              .join(' && ')
          : '';

        const query = filterStrings
          ? `*[_type == $type && ${filterStrings}] | order(_createdAt desc)`
          : `*[_type == $type] | order(_createdAt desc)`;

        const result = await client.fetch<T[]>(query, { type });
        setData(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching Sanity documents:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, JSON.stringify(filters)]);

  return { data, loading, error };
}

// Hook to fetch media items
export function useMedia(category?: string, featured?: boolean) {
  const filters: Record<string, any> = {};
  if (category) filters.category = category;
  if (featured !== undefined) filters.featured = featured;

  return useSanityDocuments<Media>('media', Object.keys(filters).length ? filters : undefined);
}

// Hook to fetch news articles
export function useNews(featured?: boolean) {
  const filters = featured !== undefined ? { featured } : undefined;
  return useSanityDocuments<News>('news', filters);
}

// Hook to fetch team members
export function useTeamMembers(active: boolean = true) {
  return useSanityDocuments<TeamMember>('teamMember', { active });
}

// Hook to fetch active hero
export function useActiveHero() {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "hero" && active == true][0]`;
        const result = await client.fetch<Hero | null>(query);
        setHero(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching hero:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  return { hero, loading, error };
}

// Hook to fetch a single document by slug
export function useSanityDocumentBySlug<T>(type: string, slug: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const query = `*[_type == $type && slug.current == $slug][0]`;
        const result = await client.fetch<T | null>(query, { type, slug });
        setData(result);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching Sanity document:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, slug]);

  return { data, loading, error };
}
