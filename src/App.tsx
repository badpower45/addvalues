import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { MVPPage } from './pages/MVPPage';
import { BackToTop } from './components/BackToTop';
import { SkipToContent } from './components/SkipToContent';
import { HelpWidget } from './components/HelpWidget';
import { motion, AnimatePresence } from 'motion/react';

export type PageType = 'home' | 'services' | 'about' | 'portfolio' | 'contact' | 'mvp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [direction, setDirection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode detection and persistence
  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.slice(1) || 'home';
      setCurrentPage(path as PageType);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page from hash
    const initialPath = window.location.hash.slice(1) || 'home';
    if (initialPath !== 'home') {
      setCurrentPage(initialPath as PageType);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (page: PageType) => {
    if (page === currentPage) return;
    
    // Determine direction for animation
    const pages: PageType[] = ['home', 'services', 'about', 'portfolio', 'contact', 'mvp'];
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(page);
    setDirection(newIndex > currentIndex ? 1 : -1);
    
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage key="home" navigateToPage={navigateToPage} />;
      case 'services':
        return <ServicesPage key="services" navigateToPage={navigateToPage} />;
      case 'about':
        return <AboutPage key="about" navigateToPage={navigateToPage} />;
      case 'portfolio':
        return <PortfolioPage key="portfolio" navigateToPage={navigateToPage} />;
      case 'contact':
        return <ContactPage key="contact" navigateToPage={navigateToPage} />;
      case 'mvp':
        return <MVPPage key="mvp" navigateToPage={navigateToPage} />;
      default:
        return <HomePage key="home" navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Toaster position="top-center" />
      <Header 
        currentPage={currentPage} 
        navigateToPage={navigateToPage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.main
          id="main-content"
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer navigateToPage={navigateToPage} />
      <BackToTop />
      <HelpWidget />
    </div>
  );
}