import { useNews } from '../hooks/useSanity';
import { urlFor } from '../lib/sanity';
import type { News } from '../types/sanity';

interface SanityNewsProps {
  featured?: boolean;
  limit?: number;
}

export function SanityNews({ featured, limit }: SanityNewsProps) {
  const { data: newsItems, loading, error } = useNews(featured);

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
        <p>Error loading news: {error.message}</p>
      </div>
    );
  }

  if (!newsItems || newsItems.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <p>No news articles found.</p>
      </div>
    );
  }

  const displayItems = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayItems.map((article: News) => (
        <article
          key={article._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          {article.mainImage && (
            <div className="relative aspect-video">
              <img
                src={urlFor(article.mainImage).width(600).height(400).url()}
                alt={article.mainImage.alt || article.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 line-clamp-2">{article.title}</h3>

            {article.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
            )}

            <div className="flex items-center justify-between text-sm text-gray-500">
              {article.author && <span>By {article.author}</span>}
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {article.featured && (
              <span className="inline-block mt-3 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                Featured
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
