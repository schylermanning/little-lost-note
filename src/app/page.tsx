import { Metadata } from 'next';
import BookReader from '@/components/BookReader';

export const metadata: Metadata = {
  title: 'Little Lost Note',
  description: 'Welcome to Little Lost Note - A Family Story. Start reading the digital ebook.',
  openGraph: {
    title: 'Little Lost Note - A Family Story',
    description: 'Welcome to Little Lost Note - A Family Story. Start reading the digital ebook.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Lost Note - A Family Story',
    description: 'Welcome to Little Lost Note - A Family Story. Start reading the digital ebook.',
  },
};

export default function Home() {
  return <BookReader />;
}
