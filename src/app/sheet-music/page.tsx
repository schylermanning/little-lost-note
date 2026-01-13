'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface SheetMusicPage {
  id: number;
  imageSrc: string;
  altText: string;
}

const sheetMusicPages: SheetMusicPage[] = [
  {
    id: 1,
    imageSrc: '/assets/sheet-music-1.png',
    altText: 'Sheet music page 1 - Little Lost Note song',
  },
  {
    id: 2,
    imageSrc: '/assets/sheet-music-2.png',
    altText: 'Sheet music page 2 - Little Lost Note song',
  },
];

export default function SheetMusicPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = sheetMusicPages.length;
  const currentPageData = sheetMusicPages[currentPage];

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#e9eae6] relative">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-5xl w-full space-y-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Sheet Music
            </h1>
          </div>

          {/* Sheet Music Pages */}
          <div className="relative min-h-[60vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="relative w-full min-h-[500px] md:min-h-[700px]">
                  <Image
                    src={currentPageData.imageSrc}
                    alt={currentPageData.altText}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4">
            {currentPage > 0 && (
              <button
                onClick={goToPreviousPage}
                className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Go to previous page"
              >
                <IoChevronBack size={28} className="text-gray-800" />
              </button>
            )}

            <div className="bg-white/80 px-4 py-2 rounded-full shadow-lg text-lg text-gray-700">
              {currentPage + 1} / {totalPages}
            </div>

            {currentPage < totalPages - 1 && (
              <button
                onClick={goToNextPage}
                className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Go to next page"
              >
                <IoChevronForward size={28} className="text-gray-800" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

