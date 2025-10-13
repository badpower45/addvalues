import { useState, useEffect } from 'react';
import { Menu, X, Zap, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { PageType } from '../App';

interface HeaderProps {
  currentPage: PageType;
  navigateToPage: (page: PageType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ currentPage, navigateToPage, isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: PageType) => {
    navigateToPage(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'الرئيسية', page: 'home' as PageType },
    { label: 'خدماتنا', page: 'services' as PageType },
    { label: 'من نحن', page: 'about' as PageType },
    { label: 'أعمالنا', page: 'portfolio' as PageType },
    { label: 'اتصل بنا', page: 'contact' as PageType },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
      style={isScrolled ? {} : { background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with animated icon */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
              }}
            >
              <Zap size={20} color="white" />
            </motion.div>
            <span
              className="font-bold"
              style={{
                fontSize: '28px',
                background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              CodePulse
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="relative transition-colors duration-200 text-slate-700 dark:text-slate-200"
                style={{
                  fontFamily: 'var(--font-arabic-heading)',
                  color: isScrolled ? undefined : 'white',
                }}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ backgroundColor: 'var(--electric-blue)' }}
                  initial={{ scaleX: currentPage === item.page ? 1 : 0 }}
                  animate={{ scaleX: currentPage === item.page ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button & Dark Mode Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
              style={{
                background: isScrolled 
                  ? undefined 
                  : 'rgba(255,255,255,0.2)',
                color: isScrolled ? undefined : 'white',
              }}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              aria-label={isDarkMode ? 'وضع النهار | Light mode' : 'الوضع الليلي | Dark mode'}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => handleNavigation('contact')}
                className="relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                  color: 'white',
                  fontFamily: 'var(--font-arabic-heading)',
                  border: 'none',
                }}
              >
                <span className="relative z-10">احصل على عرض مجاني</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--electric-blue), var(--codepulse-blue))',
                  }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X size={28} color={isScrolled ? 'var(--codepulse-blue)' : 'white'} />
            ) : (
              <Menu size={28} color={isScrolled ? 'var(--codepulse-blue)' : 'white'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-6 overflow-hidden"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className="text-left py-2 px-4 rounded-lg transition-all duration-200"
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      color: isScrolled ? 'var(--tech-gray)' : 'white',
                      backgroundColor: currentPage === item.page ? 'rgba(39, 118, 234, 0.2)' : 'transparent',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      backgroundColor: 'rgba(39, 118, 234, 0.1)',
                      x: 10,
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    onClick={() => handleNavigation('contact')}
                    className="w-full mt-2"
                    style={{
                      background: 'linear-gradient(135deg, var(--codepulse-blue), var(--electric-blue))',
                      color: 'white',
                      fontFamily: 'Cairo, sans-serif',
                    }}
                  >
                    احصل على عرض مجاني
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
