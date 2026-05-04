import { useMedia } from '../hooks/useSanity';
import { urlFor } from '../lib/sanity';
import type { Media } from '../types/sanity';

interface SanityMediaProps {
  category?: string;
  featured?: boolean;
  limit?: number;
}

export function SanityMedia({ category, featured, limit }: SanityMediaProps) {
  const { data: mediaItems, loading, error } = useMedia(category, featured);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        <p>Error loading media: {error.message}</p>
      </div>
    );
  }

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <p>No media items found.</p>
      </div>
    );
  }

  const displayItems = limit ? mediaItems.slice(0, limit) : mediaItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayItems.map((item: Media) => (
        <div
          key={item._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          {item.mediaType === 'photo' && item.image && (
            <div className="relative aspect-video">
              <img
                src={urlFor(item.image).width(600).height(400).url()}
                alt={item.image.alt || item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {item.mediaType === 'video' && (
            <div className="relative aspect-video bg-gray-100">
              {item.thumbnail && (
                <img
                  src={urlFor(item.thumbnail).width(600).height(400).url()}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {item.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 rounded-full p-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
            )}
            {item.category && (
              <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                {item.category}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
