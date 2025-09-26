import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SectionNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isDark } = useTheme();

  // Memoize sections array to prevent unnecessary re-renders
  const sections = useMemo(() => [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'education', name: 'Education' },
    { id: 'experience', name: 'Experience' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ], []);

  // Memoize scroll detection function
  const detectCurrentSection = useCallback(() => {
    if (isScrolling) return;

    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].id);
      if (element && scrollPosition >= element.offsetTop) {
        setCurrentIndex(i);
        break;
      }
    }
  }, [sections, isScrolling]);

  // Debounce scroll events for better performance
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(detectCurrentSection, 10); // Debounce by 10ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    detectCurrentSection(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [detectCurrentSection]);

  // Memoize scroll function
  const scrollToSection = useCallback((sectionId) => {
    setIsScrolling(true);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const targetPosition = element.offsetTop - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    }

    // Reduced timeout for faster re-enabling
    setTimeout(() => setIsScrolling(false), 600);
  }, []);

  // Memoize button states
  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === sections.length - 1;

  // Animation variants for realistic scrolling effect
  const sectionVariants = {
    enterFromTop: {
      y: -50,
      opacity: 0,
      scale: 0.8,
    },
    enterFromBottom: {
      y: 50,
      opacity: 0,
      scale: 0.8,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.4 }
      }
    },
    exitToBottom: {
      y: 50,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.06, 0.68, 0.19],
        opacity: { duration: 0.4 }
      }
    },
    exitToTop: {
      y: -50,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.06, 0.68, 0.19],
        opacity: { duration: 0.4 }
      }
    }
  };

  const dotVariants = {
    inactive: { scale: 1, opacity: 0.6 },
    active: {
      scale: 1.25,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    hover: {
      scale: 1.4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Track direction for animations
  const [direction, setDirection] = useState(0);

  // Enhanced click handlers with cycling direction
  const handleUpClick = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1); // Going up - next section slides down from top
      const newIndex = currentIndex - 1;
      scrollToSection(sections[newIndex].id);
    }
  }, [currentIndex, sections, scrollToSection]);

  const handleDownClick = useCallback(() => {
    if (currentIndex < sections.length - 1) {
      setDirection(1); // Going down - next section slides up from bottom
      const newIndex = currentIndex + 1;
      scrollToSection(sections[newIndex].id);
    }
  }, [currentIndex, sections, scrollToSection]);

  const handleDotClick = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    scrollToSection(sections[index].id);
  }, [sections, scrollToSection, currentIndex]);

  // Memoize current section
  const currentSection = useMemo(() => sections[currentIndex], [sections, currentIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40"
      >
        <div className={`backdrop-blur-md rounded-2xl shadow-xl border p-4 w-40 ${
          isDark 
            ? 'bg-zzz-grey-8/90 border-zzz-grey-6' 
            : 'bg-zzz-white/90 border-zzz-grey-3'
        }`}>
          {/* Vertical Navigation Layout */}
          <div className="flex flex-col items-center gap-2">
            {/* Up Button */}
            <motion.button
              onClick={handleUpClick}
              disabled={isFirstSection}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isFirstSection 
                  ? 'text-zzz-grey-4 cursor-not-allowed' 
                  : 'text-zzz-primary hover:bg-zzz-primary/10 hover:scale-110'
              }`}
              whileHover={!isFirstSection ? { scale: 1.1 } : {}}
              whileTap={!isFirstSection ? { scale: 0.9 } : {}}
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>

            {/* Dual Text Box Animation Container */}
            <div className="relative h-10 w-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSection.id}
                  variants={sectionVariants}
                  initial={direction === 1 ? "enterFromBottom" : "enterFromTop"}
                  animate="center"
                  exit={direction === 1 ? "exitToBottom" : "exitToTop"}
                  className={`absolute inset-0 px-3 py-2 rounded-xl font-semibold text-sm cursor-pointer text-center flex items-center justify-center ${
                    isDark
                      ? 'bg-zzz-primary text-white'
                      : 'bg-zzz-primary text-white'
                  }`}
                  onClick={() => scrollToSection(currentSection.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  {currentSection.name}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Down Button */}
            <motion.button
              onClick={handleDownClick}
              disabled={isLastSection}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isLastSection 
                  ? 'text-zzz-grey-4 cursor-not-allowed' 
                  : 'text-zzz-primary hover:bg-zzz-primary/10 hover:scale-110'
              }`}
              whileHover={!isLastSection ? { scale: 1.1 } : {}}
              whileTap={!isLastSection ? { scale: 0.9 } : {}}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-3 flex justify-center">
            <div className="flex gap-1">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index 
                      ? 'bg-zzz-primary scale-125' 
                      : isDark 
                        ? 'bg-zzz-grey-6 hover:bg-zzz-grey-5' 
                        : 'bg-zzz-grey-4 hover:bg-zzz-grey-5'
                  }`}
                  onClick={() => handleDotClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={dotVariants}
                  initial="inactive"
                  animate={currentIndex === index ? "active" : "inactive"}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionNavigator;
