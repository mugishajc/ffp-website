import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string,
  dataset: (import.meta.env.VITE_SANITY_DATASET as string) || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
  token: import.meta.env.VITE_SANITY_TOKEN as string,
});

// Image URL builder for optimized images
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper function to fetch all documents of a specific type
export async function fetchDocuments<T>(type: string): Promise<T[]> {
  const query = `*[_type == $type] | order(_createdAt desc)`;
  return client.fetch<T[]>(query, { type });
}

// Helper function to fetch a single document by slug
export async function fetchDocumentBySlug<T>(type: string, slug: string): Promise<T | null> {
  const query = `*[_type == $type && slug.current == $slug][0]`;
  return client.fetch<T | null>(query, { type, slug });
}

// Helper function to fetch documents with filters
export async function fetchFilteredDocuments<T>(
  type: string,
  filters: Record<string, any> = {}
): Promise<T[]> {
  const filterStrings = Object.entries(filters)
    .map(([key, value]) => `${key} == "${value}"`)
    .join(" && ");

  const query = filterStrings
    ? `*[_type == $type && ${filterStrings}] | order(_createdAt desc)`
    : `*[_type == $type] | order(_createdAt desc)`;

  return client.fetch<T[]>(query, { type });
}
