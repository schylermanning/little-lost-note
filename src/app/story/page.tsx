import { Metadata } from 'next';
import BookReader from '@/components/BookReader';

export const metadata: Metadata = {
  title: 'Story',
  description: 'Read the story of Little Lost Note - a tale about a note searching for its place in the music.',
  openGraph: {
    title: 'Story | Little Lost Note',
    description: 'Read the story of Little Lost Note - a tale about a note searching for its place in the music.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Story | Little Lost Note',
    description: 'Read the story of Little Lost Note - a tale about a note searching for its place in the music.',
  },
};

export default function StoryPage() {
  return <BookReader />;
}

