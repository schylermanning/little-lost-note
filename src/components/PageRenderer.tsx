'use client';

import Image from 'next/image';
import { StoryPage } from '@/data/storyContent';

interface PageRendererProps {
  page: StoryPage;
}

export default function PageRenderer({ page }: PageRendererProps) {
  const renderContent = () => {
    return (
      <div className="space-y-4">
        {page.content.map((paragraph, index) => (
          <p
            key={index}
            className="text-2xl md:text-3xl leading-relaxed text-gray-800 indent-8 md:indent-12"
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  const renderImage = (src?: string, alt?: string, minHeight: string = 'min-h-[400px]') => {
    if (!src) return null;

    return (
      <div className={`relative w-full h-full ${minHeight}`}>
        <Image
          src={src}
          alt={alt || 'Story illustration'}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  };


  const renderAudio = () => {
    if (!page.audioSrc) return null;

    return (
      <div className="mt-6 flex justify-center">
        <audio
          controls
          className="w-full max-w-md"
          aria-label="Audio player for sheet music"
        >
          <source src={page.audioSrc} type="audio/mpeg" />
          <source src={page.audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

  // Render based on layout type
  switch (page.layout) {
    case 'image-top':
      return (
        <div className="flex flex-col gap-6 min-h-[80vh]">
          <div className="relative w-full flex-1 min-h-[60vh]">
            {renderImage(page.imageSrc, page.altText, 'min-h-[60vh]')}
          </div>
          <div className="flex-shrink-0">
            {renderContent()}
          </div>
        </div>
      );

    case 'image-bottom':
      return (
        <div className="flex flex-col gap-6 min-h-[80vh]">
          <div className="flex-shrink-0">
            {renderContent()}
          </div>
          <div className="relative w-full flex-1 min-h-[60vh]">
            {renderImage(page.imageSrc, page.altText, 'min-h-[60vh]')}
          </div>
        </div>
      );

    case 'image-left':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[70vh]">
          <div className="order-2 md:order-1 relative w-full min-h-[60vh] md:h-full">
            <Image
              src={page.imageSrc!}
              alt={page.altText || 'Story illustration'}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2 flex items-center">
            {renderContent()}
          </div>
        </div>
      );

    case 'image-right':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[70vh]">
          <div className="flex items-center">
            {renderContent()}
          </div>
          <div className="relative w-full min-h-[60vh] md:h-full">
            <Image
              src={page.imageSrc!}
              alt={page.altText || 'Story illustration'}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      );

    case 'text-only':
      // Special case: page id 2 (about page) uses smaller font
      const isAboutPage = page.id === 2;
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          {page.content.map((paragraph, index) => (
            <h1
              key={index}
              className={`${
                isAboutPage 
                  ? 'text-xl md:text-2xl font-normal mb-4' 
                  : index === 0 
                    ? 'text-6xl md:text-7xl font-bold mb-4' 
                    : 'text-3xl md:text-4xl font-light'
              } text-gray-800`}
            >
              {paragraph}
            </h1>
          ))}
        </div>
      );

    case 'full-image':
      return (
        <div className="flex flex-col items-center gap-6 min-h-[80vh]">
          <div className="relative w-full flex-1 min-h-[65vh]">
            {renderImage(page.imageSrc, page.altText, 'min-h-[65vh]')}
          </div>
          {page.content.length > 0 && (
            <div className="flex-shrink-0">
              {renderContent()}
            </div>
          )}
          {page.type === 'music' && renderAudio()}
        </div>
      );

    case 'zebra-strip':
      return (
        <div className="space-y-6 min-h-[80vh]">
          {page.content.map((paragraph, index) => (
            <div
              key={index}
              className={`p-6 ${index % 2 === 0 ? 'bg-white/50' : 'bg-transparent'}`}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                {paragraph}
              </p>
            </div>
          ))}
          <div className="relative w-full flex-1 min-h-[60vh]">
            {renderImage(page.imageSrc, page.altText, 'min-h-[60vh]')}
          </div>
        </div>
      );

    case 'multi-image':
      // Handle pages with multiple images in specific positions
      if (!page.images || page.images.length === 0) {
        return renderContent();
      }

      // Special case: End slide (id: 21) - "I'm home" text centered with image
      if (page.id === 21 && page.type === 'end' && page.images && page.images.length === 1) {
        const endImg = page.images[0];
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
            <div className="text-center">
              {page.content.map((paragraph, index) => (
                <h1
                  key={index}
                  className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                >
                  {paragraph}
                </h1>
              ))}
            </div>
            <div className="relative w-full max-w-2xl min-h-[400px]">
              {renderImage(endImg.src, endImg.altText, 'min-h-[400px]')}
            </div>
          </div>
        );
      }

      // Special case: Cover page with logo and cover image
      if (page.type === 'title' && page.images && page.images.length === 2 && page.content.length === 0) {
        const logoImg = page.images.find(img => img.src.includes('logo') || img.position === 'top') || page.images[0];
        const coverImg = page.images.find(img => img.src.includes('cover') || img.position === 'center') || page.images[1];
        
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
            <div className="relative w-full max-w-lg h-48">
              <Image
                src={logoImg.src}
                alt={logoImg.altText}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full max-w-2xl h-[500px]">
              <Image
                src={coverImg.src}
                alt={coverImg.altText}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        );
      }

      // Special layout for page 2 (id: 5) - first paragraph centered with smaller 2-1.png
      if (page.id === 5 && page.images && page.images.length === 2) {
        const leftImg = page.images.find(img => img.position === 'left') || page.images[0];
        const rightImg = page.images.find(img => img.position === 'right') || page.images[1];
        
        return (
          <div className="space-y-6">
            {/* First paragraph vertically centered with smaller 2-1.png */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative w-full min-h-[300px] order-2 md:order-1">
                {renderImage(leftImg.src, leftImg.altText, 'min-h-[300px]')}
              </div>
              <div className="order-1 md:order-2">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[0]}
                </p>
              </div>
            </div>

            {/* Remaining paragraphs with 2-2.png */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="order-2 md:order-1 space-y-4">
                {page.content.slice(1).map((paragraph, index) => (
                  <p key={index} className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative w-full min-h-[400px] order-1 md:order-2">
                {renderImage(rightImg.src, rightImg.altText, 'min-h-[400px]')}
              </div>
            </div>
          </div>
        );
      }

      // Special layout for page 10 (id: 13) - 10-1.png on left quarter, text and 10-2.png on right, aligned to bottom
      if (page.id === 13 && page.images && page.images.length === 2) {
        const bassoonImg = page.images.find(img => img.src.includes('10-1')) || page.images[0];
        const sadImg = page.images.find(img => img.src.includes('10-2')) || page.images[1];
        
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[80vh] items-end">
            {/* Left: 10-1.png - takes left quarter, aligned to bottom */}
            <div className="relative w-full min-h-[500px] md:min-h-[700px] order-2 md:order-1">
              {renderImage(bassoonImg.src, bassoonImg.altText, 'min-h-[500px] md:min-h-[700px]')}
            </div>
            
            {/* Right: Text above 10-2.png - takes remaining 3/4, aligned to bottom */}
            <div className="md:col-span-3 order-1 md:order-2 flex flex-col justify-end space-y-6">
              {/* Text content */}
              <div className="space-y-4">
                {page.content.map((paragraph, index) => (
                  <p key={index} className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* 10-2.png below text, aligned with 10-1.png at bottom */}
              <div className="relative w-full min-h-[400px]">
                {renderImage(sadImg.src, sadImg.altText, 'min-h-[400px]')}
              </div>
            </div>
          </div>
        );
      }

      // Special layout for page 4 (id: 7) - matches original book layout
      if (page.id === 7 && page.images && page.images.length === 3) {
        const bassFiddle = page.images.find(img => img.src.includes('4-1')) || page.images[0];
        const cello = page.images.find(img => img.src.includes('4-2')) || page.images[1];
        const violins = page.images.find(img => img.src.includes('4-3')) || page.images[2];
        
        return (
          <div className="space-y-8">
            {/* Top section: Bass fiddle on left, first two paragraphs vertically centered on right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative w-full min-h-[300px] order-2 md:order-1">
                {renderImage(bassFiddle.src, bassFiddle.altText, 'min-h-[300px]')}
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[0]}
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[1]}
                </p>
              </div>
            </div>

            {/* Middle section: Paragraph 3 on left, cello in center, paragraph 4 on right */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="order-2 md:order-1">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[2]}
                </p>
              </div>
              <div className="relative w-full min-h-[400px] order-1 md:order-2">
                {renderImage(cello.src, cello.altText, 'min-h-[400px]')}
              </div>
              <div className="order-3">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[3]}
                </p>
              </div>
            </div>

            {/* Bottom section: Last paragraph on left, violins on right, vertically centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                  {page.content[4]}
                </p>
              </div>
              <div className="relative w-full min-h-[300px] order-1 md:order-2">
                {renderImage(violins.src, violins.altText, 'min-h-[300px]')}
              </div>
            </div>
          </div>
        );
      }

      // For story pages with multiple images
      // Group images by position
      const topImages = page.images.filter(img => img.position?.includes('top') && img.position !== 'top-left' && img.position !== 'top-right');
      const topLeftImages = page.images.filter(img => img.position === 'top-left');
      const topRightImages = page.images.filter(img => img.position === 'top-right');
      const bottomImages = page.images.filter(img => img.position === 'bottom');
      const bottomLeftImages = page.images.filter(img => img.position === 'bottom-left');
      const bottomRightImages = page.images.filter(img => img.position === 'bottom-right');
      const leftImages = page.images.filter(img => img.position === 'left');
      const rightImages = page.images.filter(img => img.position === 'right');
      const centerImages = page.images.filter(img => img.position === 'center');

      return (
        <div className="space-y-6">
          {/* Top full-width images */}
          {topImages.length > 0 && (
            <div className={`grid grid-cols-1 ${topImages.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
              {topImages.map((img, idx) => (
                <div key={idx} className="relative w-full min-h-[400px]">
                  {renderImage(img.src, img.altText, 'min-h-[400px]')}
                </div>
              ))}
            </div>
          )}

          {/* Top left/right images with content */}
          {(topLeftImages.length > 0 || topRightImages.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topLeftImages.length > 0 && (
                <div className="relative w-full min-h-[400px]">
                  {renderImage(topLeftImages[0].src, topLeftImages[0].altText, 'min-h-[400px]')}
                </div>
              )}
              {topRightImages.length > 0 && (
                <div className="relative w-full min-h-[400px]">
                  {renderImage(topRightImages[0].src, topRightImages[0].altText, 'min-h-[400px]')}
                </div>
              )}
            </div>
          )}

          {/* Content with side images (left/right) */}
          {(leftImages.length > 0 || rightImages.length > 0) && (
            <div className="space-y-6">
              {page.content.map((paragraph, index) => {
                const leftImg = leftImages[index] || (leftImages.length > 0 && index === 0 ? leftImages[0] : null);
                const rightImg = rightImages[index] || (rightImages.length > 0 && index === page.content.length - 1 ? rightImages[0] : null);
                
                if (leftImg || rightImg) {
                  return (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      {leftImg && (
                        <div className="relative w-full min-h-[400px] order-2 md:order-1">
                          {renderImage(leftImg.src, leftImg.altText, 'min-h-[400px]')}
                        </div>
                      )}
                      <div className={`space-y-4 ${leftImg ? 'order-1 md:order-2' : ''}`}>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                          {paragraph}
                        </p>
                      </div>
                      {rightImg && !leftImg && (
                        <div className="relative w-full min-h-[400px]">
                          {renderImage(rightImg.src, rightImg.altText, 'min-h-[400px]')}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <p key={index} className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          )}

          {/* Content without side images - always render if no left/right images */}
          {leftImages.length === 0 && rightImages.length === 0 && (
            <div className="space-y-4">
              {page.content.map((paragraph, index) => {
                // Check if a center image should appear after this paragraph
                // For page 4 (id: 7), center image should appear after paragraph 2 (index 2)
                const shouldShowCenterImageAfter = centerImages.length > 0 && 
                  page.id === 7 && 
                  index === 2; // After "I don't think I know you," paragraph
                
                return (
                  <div key={index}>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800 indent-6 md:indent-10">
                      {paragraph}
                    </p>
                    {shouldShowCenterImageAfter && (
                      <div className="flex justify-center my-6">
                        <div className="relative w-full max-w-xl min-h-[400px]">
                          {renderImage(centerImages[0].src, centerImages[0].altText, 'min-h-[400px]')}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Center images - fallback if not inserted between paragraphs */}
          {centerImages.length > 0 && !(page.id === 7 && leftImages.length === 0 && rightImages.length === 0) && (
            <div className="flex justify-center my-6">
              <div className="relative w-full max-w-xl min-h-[400px]">
                {renderImage(centerImages[0].src, centerImages[0].altText, 'min-h-[400px]')}
              </div>
            </div>
          )}

          {/* Bottom left/right images */}
          {(bottomLeftImages.length > 0 || bottomRightImages.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {bottomLeftImages.length > 0 && (
                <div className="relative w-full min-h-[400px]">
                  {renderImage(bottomLeftImages[0].src, bottomLeftImages[0].altText, 'min-h-[400px]')}
                </div>
              )}
              {bottomRightImages.length > 0 && (
                <div className="relative w-full min-h-[400px]">
                  {renderImage(bottomRightImages[0].src, bottomRightImages[0].altText, 'min-h-[400px]')}
                </div>
              )}
            </div>
          )}

          {/* Bottom full-width images */}
          {bottomImages.length > 0 && (
            <div className={`grid grid-cols-1 ${bottomImages.length > 1 ? 'md:grid-cols-2' : ''} gap-4 mt-6`}>
              {bottomImages.map((img, idx) => (
                <div key={idx} className="relative w-full min-h-[400px]">
                  {renderImage(img.src, img.altText, 'min-h-[400px]')}
                </div>
              ))}
            </div>
          )}
        </div>
      );

    default:
      return renderContent();
  }
}

