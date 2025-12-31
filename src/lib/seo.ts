import { DefaultSeoProps } from 'next-seo';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://little-lost-note.vercel.app';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Little Lost Note',
  defaultTitle: 'Little Lost Note - A Family Story',
  description: 'A digital ebook of the family story Little Lost Note, written in 1957. An introduction to the orchestra through the tale of a little lost note.',
  canonical: baseUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Little Lost Note',
    title: 'Little Lost Note - A Family Story',
    description: 'A digital ebook of the family story Little Lost Note, written in 1957. An introduction to the orchestra through the tale of a little lost note.',
    images: [
      {
        url: `${baseUrl}/assets/little-lost-note-cover.png`,
        width: 1200,
        height: 630,
        alt: 'Little Lost Note Cover',
      },
    ],
  },
  twitter: {
    handle: '@littlelostnote',
    site: '@littlelostnote',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
  ],
};

