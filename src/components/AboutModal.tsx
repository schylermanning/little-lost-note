'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
          >
            <div className="bg-[#fdfbf7] rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Close about modal"
              >
                <IoClose size={24} />
              </button>
              
              <h2 id="about-title" className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                About Little Lost Note
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-2xl md:text-3xl">
                <p>
                  Little Lost Note is a family story that has been passed down through generations.
                  This digital edition brings the tale to life with beautiful illustrations and
                  interactive elements.
                </p>
                <p>
                  We hope this story brings joy and warmth to your family, just as it has to ours
                  for many years.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

