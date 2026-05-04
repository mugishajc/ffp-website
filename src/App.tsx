import { useState, useEffect, lazy, Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEO } from './components/SEO';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ScrollProgress } from './components/ScrollProgress';
import { FloatingDonate } from './components/FloatingDonate';
import { BackToTop } from './components/BackToTop';
import { Toaster } from './components/ui/sonner';

// Lazy load heavy components for better initial load performance
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Programs = lazy(() => import('./components/Programs').then(m => ({ default: m.Programs })));
const Impact = lazy(() => import('./components/Impact').then(m => ({ default: m.Impact })));
const RealitySection = lazy(() => import('./components/RealitySection').then(m => ({ default: m.RealitySection })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Partners = lazy(() => import('./components/Partners').then(m => ({ default: m.Partners })));
const GetInvolved = lazy(() => import('./components/GetInvolved').then(m => ({ default: m.GetInvolved })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const AnnualReports = lazy(() => import('./components/pages/AnnualReports').then(m => ({ default: m.AnnualReports })));
const News = lazy(() => import('./components/pages/News').then(m => ({ default: m.News })));
const History = lazy(() => import('./components/pages/History').then(m => ({ default: m.History })));
const Team = lazy(() => import('./components/pages/Team').then(m => ({ default: m.Team })));
const Media = lazy(() => import('./components/pages/Media').then(m => ({ default: m.Media })));

type Page = 'home' | 'annual-reports' | 'news' | 'history' | 'team' | 'media';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Listen for hash changes in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'annual-reports') setCurrentPage('annual-reports');
      else if (hash === 'news') setCurrentPage('news');
      else if (hash === 'history') setCurrentPage('history');
      else if (hash === 'team') setCurrentPage('team');
      else if (hash === 'media') setCurrentPage('media');
      else setCurrentPage('home');
    };

    // Handle initial load
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <SEO />
        <LoadingScreen />
        <ScrollProgress />
        <div className="min-h-screen overflow-x-hidden">
          <Navigation />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-primary text-lg">Loading...</div>
          </div>}>
            {currentPage === 'home' && (
              <main>
                <Hero />
                <Stats />
                <RealitySection />
                <About />
                <Programs />
                <Impact />
                <Testimonials />
                <Partners />
                <GetInvolved />
                <Contact />
              </main>
            )}
            {currentPage === 'annual-reports' && <AnnualReports />}
            {currentPage === 'news' && <News />}
            {currentPage === 'history' && <History />}
            {currentPage === 'team' && <Team />}
            {currentPage === 'media' && <Media />}
            <Footer />
          </Suspense>
          <Toaster />
          <FloatingDonate />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
}