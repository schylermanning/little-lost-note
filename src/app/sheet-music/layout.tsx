import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sheet Music',
  description: 'View and listen to the sheet music for Little Lost Note song with lyrics.',
  openGraph: {
    title: 'Sheet Music | Little Lost Note',
    description: 'View and listen to the sheet music for Little Lost Note song with lyrics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheet Music | Little Lost Note',
    description: 'View and listen to the sheet music for Little Lost Note song with lyrics.',
  },
};

export default function SheetMusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

