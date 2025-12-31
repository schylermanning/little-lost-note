import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Little Lost Note - a family story written in 1957 as a final paper for a child development class.',
  openGraph: {
    title: 'About | Little Lost Note',
    description: 'Learn about Little Lost Note - a family story written in 1957 as a final paper for a child development class.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Little Lost Note',
    description: 'Learn about Little Lost Note - a family story written in 1957 as a final paper for a child development class.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          About Little Lost Note
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-2xl md:text-3xl">
          <p>
            This book was written in the Fall of 1957 as a final paper for a child development class. 
            We did not want to take the book apart. The following pages are scans of the pages of the book. 
            We hope you enjoy this introduction to the orchestra.
          </p>
          <p className="text-right font-semibold mt-8">
            Suzy
          </p>
        </div>
      </div>
    </div>
  );
}

