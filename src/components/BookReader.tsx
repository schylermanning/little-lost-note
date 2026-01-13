'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { storyContent } from '@/data/storyContent';
import PageRenderer from './PageRenderer';
import AboutModal from './AboutModal';

export default function BookReader() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const showAbout = process.env.NEXT_PUBLIC_SHOW_ABOUT === 'true';

  const totalPages = storyContent.length;
  const currentPageData = storyContent[currentPage];

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < totalPages - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPreviousPage();
      } else if (e.key === 'ArrowRight') {
        goToNextPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPreviousPage]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    
    // Click on right side (60% of width) goes to next page
    // Click on left side (40% of width) goes to previous page
    if (clickX > width * 0.6) {
      goToNextPage();
    } else if (clickX < width * 0.4) {
      goToPreviousPage();
    }
  };

  return (
    <div className="min-h-screen bg-[#e9eae6] relative">
      {/* About Button */}
      {showAbout && (
        <button
          onClick={() => setIsAboutOpen(true)}
          className="absolute top-4 right-4 z-30 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Open about page"
        >
          About
        </button>
      )}

      {/* Main Content */}
      <div
        className="min-h-screen flex items-center justify-center p-4 md:p-8 cursor-pointer"
        onClick={handleClick}
      >
        <div className="max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <PageRenderer page={currentPageData} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {/* Previous Button */}
        {currentPage > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousPage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Go to previous page"
          >
            <IoChevronBack size={28} className="text-gray-800" />
          </button>
        )}

        {/* Next Button */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextPage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Go to next page"
          >
            <IoChevronForward size={28} className="text-gray-800" />
          </button>
        )}
      </div>

      {/* Page Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-white/80 px-4 py-2 rounded-full shadow-lg text-sm text-gray-700">
          {currentPage + 1} / {totalPages}
        </div>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}

