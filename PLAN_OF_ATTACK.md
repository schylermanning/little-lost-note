# Plan of Attack - Little Lost Note

## Project Overview

**Little Lost Note** is a web-based ebook application for a family story. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS, it provides an immersive reading experience with smooth page transitions, responsive design, and accessibility features.

**Deployment Target:** Vercel (utilizing native Next.js features and Image Optimization)

---

## ✅ Completed Work

### 1. Project Setup & Configuration
- ✅ Next.js 16.1.1 with App Router configured
- ✅ TypeScript configuration
- ✅ Tailwind CSS v4 setup
- ✅ ESLint configuration
- ✅ Dependencies installed:
  - `framer-motion` - For page transitions and animations
  - `react-icons` - For navigation UI elements

### 2. Data Structure
- ✅ Created `src/data/storyContent.ts` with:
  - `StoryPage` interface with all required fields:
    - `id`: number
    - `type`: 'title' | 'dedication' | 'story' | 'music' | 'end'
    - `layout`: 'image-top' | 'image-bottom' | 'image-left' | 'image-right' | 'text-only' | 'full-image' | 'zebra-strip'
    - `content`: string[] (array of paragraphs)
    - `imageSrc`: string (optional, for Next.js Image component)
    - `altText`: string (optional, for accessibility)
    - `audioSrc`: string (optional, for music pages)
  - Placeholder data structure with 3 sample pages:
    - Title page (text-only layout)
    - Story page (image-left layout)
    - Music page (full-image layout with audioSrc)

### 3. Core Components

#### `BookReader.tsx` (Main Container)
- ✅ Client-side component with state management
- ✅ Current page index tracking
- ✅ Navigation methods:
  - Next/Previous page functions
  - Keyboard navigation (ArrowLeft, ArrowRight)
  - Click-based navigation (left/right side of page)
  - Navigation arrow buttons
- ✅ Page indicator display
- ✅ Framer Motion integration with `AnimatePresence` for smooth transitions
- ✅ About button with feature flag support (`NEXT_PUBLIC_SHOW_ABOUT`)

#### `PageRenderer.tsx` (Layout Renderer)
- ✅ Renders all 7 layout types:
  - `image-top`: Image above text
  - `image-bottom`: Text above image
  - `image-left`: Image on left, text on right (responsive: stacks on mobile)
  - `image-right`: Text on left, image on right (responsive: stacks on mobile)
  - `text-only`: Centered text (used for title pages)
  - `full-image`: Full-width image with optional content below
  - `zebra-strip`: Alternating background sections
- ✅ Next.js `<Image />` component integration for optimization
- ✅ Audio player rendering for music pages
- ✅ Responsive design (mobile-first approach)

#### `AboutModal.tsx` (About Section)
- ✅ Modal/overlay component
- ✅ Keyboard support (Escape to close)
- ✅ Framer Motion animations
- ✅ Feature flag controlled visibility
- ✅ Accessibility attributes (ARIA labels, roles)

### 4. Styling & Design
- ✅ Warm paper-like background (`#fdfbf7`)
- ✅ Dark gray text color (`#2d2d2d`) for better readability
- ✅ Serif font (Lora from Google Fonts) configured in `layout.tsx`
- ✅ Global styles updated in `globals.css`
- ✅ Responsive breakpoints for mobile/desktop
- ✅ Accessible color contrast

### 5. App Configuration
- ✅ `app/layout.tsx`: Root layout with Lora font
- ✅ `app/page.tsx`: Main entry point using BookReader component
- ✅ `next.config.ts`: Default configuration (no static export, ready for Vercel)

---

## 📁 Project Structure

```
little-lost-note/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font configuration
│   │   ├── page.tsx             # Main entry point
│   │   ├── globals.css          # Global styles (warm paper theme)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── BookReader.tsx       # Main container with navigation logic
│   │   ├── PageRenderer.tsx     # Layout renderer for all page types
│   │   └── AboutModal.tsx       # About section modal
│   └── data/
│       └── storyContent.ts      # Story data structure and content
├── public/                       # Static assets (images, audio)
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── README.md                    # Project documentation
```

---

## 🏗️ Architecture

### Component Hierarchy
```
app/page.tsx
└── BookReader
    ├── PageRenderer (renders current page)
    ├── Navigation Arrows (Previous/Next)
    ├── Page Indicator
    └── AboutModal (conditionally rendered)
```

### Data Flow
1. `storyContent.ts` exports typed array of `StoryPage` objects
2. `BookReader` manages current page index state
3. `PageRenderer` receives current page data and renders appropriate layout
4. Navigation updates state, triggering re-render with animation

### State Management
- **Local State**: React `useState` for current page and modal visibility
- **No Global State**: Simple component-level state management is sufficient

### Navigation Methods
1. **Keyboard**: Arrow keys (handled via `useEffect` with event listeners)
2. **Mouse**: Click left/right sides of page (60% right = next, 40% left = prev)
3. **Buttons**: Navigation arrow buttons with proper ARIA labels

---

## 🎨 Design System

### Colors
- **Background**: `#fdfbf7` (warm paper)
- **Text**: `#2d2d2d` (dark gray, not pure black)
- **UI Elements**: White/transparent overlays with shadows

### Typography
- **Font Family**: Lora (serif, from Google Fonts)
- **Sizes**: Responsive (text-lg on mobile, larger on desktop)
- **Line Height**: Relaxed (leading-relaxed)

### Spacing
- **Container**: max-w-5xl with padding
- **Gaps**: Consistent spacing (gap-6, gap-8) between elements
- **Mobile Padding**: p-4, Desktop: p-8

### Animations
- **Page Transitions**: Fade + slide (opacity 0→1, x: 20→0)
- **Duration**: 0.3s with easeInOut
- **Modal**: Scale + fade animation

---

## 🔧 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons (Io5 set)
- **Fonts**: Google Fonts (Lora)
- **Deployment**: Vercel (native Next.js features)

---

## 📋 Remaining Work

### High Priority

1. **Content Creation**
   - [ ] Replace placeholder content in `storyContent.ts` with actual story
   - [ ] Add all story pages with appropriate layouts
   - [ ] Create/add title page content
   - [ ] Add dedication page (if applicable)
   - [ ] Add end page content

2. **Assets**
   - [ ] Create/obtain all story illustrations
   - [ ] Add images to `/public` directory
   - [ ] Update `imageSrc` paths in `storyContent.ts`
   - [ ] Add `altText` for all images (accessibility)
   - [ ] Create/obtain sheet music image for music page
   - [ ] Create/obtain audio file for music page (if applicable)
   - [ ] Optimize images for web (Next.js will handle optimization, but source quality matters)

3. **Testing**
   - [ ] Test all 7 layout types with real content
   - [ ] Test responsive design on various devices
   - [ ] Test keyboard navigation
   - [ ] Test click navigation
   - [ ] Test audio playback on music page
   - [ ] Accessibility audit (screen readers, keyboard-only navigation)
   - [ ] Cross-browser testing

### Medium Priority

4. **Enhancements**
   - [ ] Add page transition preferences (if needed)
   - [ ] Consider adding swipe gestures for mobile (optional)
   - [ ] Add loading states for images
   - [ ] Add error handling for missing images/audio
   - [ ] Consider adding a table of contents (if story is long)

5. **Polish**
   - [ ] Fine-tune animations and transitions
   - [ ] Adjust spacing and typography for optimal readability
   - [ ] Test with actual content to ensure layouts work well
   - [ ] Optimize performance (image sizes, bundle size)

### Low Priority / Future Considerations

6. **Optional Features**
   - [ ] Add print stylesheet (if physical book printing is desired)
   - [ ] Add sharing functionality
   - [ ] Add bookmarking/reading progress (localStorage)
   - [ ] Add fullscreen mode
   - [ ] Add font size controls
   - [ ] Add dark mode toggle (if desired, though warm paper theme is intentional)

7. **Documentation**
   - [ ] Add inline code comments where helpful
   - [ ] Document any custom configurations
   - [ ] Create deployment guide

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All placeholder content replaced with real content
- [ ] All images added and paths updated
- [ ] Audio files added (if applicable)
- [ ] Environment variables set (if `NEXT_PUBLIC_SHOW_ABOUT` is needed)
- [ ] Test build locally: `npm run build`
- [ ] Test production build locally: `npm start`

### Vercel Deployment
- [ ] Connect repository to Vercel
- [ ] Configure build settings (should auto-detect Next.js)
- [ ] Set environment variables in Vercel dashboard
- [ ] Deploy and verify
- [ ] Test on production URL
- [ ] Verify image optimization is working
- [ ] Test all navigation methods
- [ ] Test on mobile devices

### Post-Deployment
- [ ] Verify all pages load correctly
- [ ] Check image loading and optimization
- [ ] Test audio playback (if applicable)
- [ ] Verify accessibility features
- [ ] Monitor performance metrics

---

## 🔍 Key Implementation Details

### Image Optimization
- All images use Next.js `<Image />` component
- Images should be placed in `/public` directory
- Use relative paths from `/public` (e.g., `/images/story-1.jpg`)
- Next.js will automatically optimize images on Vercel

### Feature Flags
- About button visibility controlled by `NEXT_PUBLIC_SHOW_ABOUT` environment variable
- Set to `'true'` to show About button
- Can be configured in Vercel dashboard under Environment Variables

### Accessibility
- All navigation buttons have `aria-label` attributes
- Modal has proper ARIA roles (`dialog`, `aria-modal`, `aria-labelledby`)
- Images have `altText` for screen readers
- Keyboard navigation fully supported
- Semantic HTML used throughout

### Performance Considerations
- Images are optimized by Next.js automatically
- Framer Motion animations are performant (GPU-accelerated)
- No unnecessary re-renders (proper use of `useCallback`)
- Lazy loading for images (Next.js default)

---

## 📝 Notes

- The project uses Next.js App Router, which is the modern approach for Next.js 13+
- No static export is needed since we're deploying to Vercel
- The warm paper background and serif font create a book-like reading experience
- All layouts are responsive and will stack vertically on mobile devices
- The music page type includes both image and audio player support

---

## 🐛 Known Issues / Considerations

- Placeholder images will show broken image icons until real images are added
- Audio file placeholder path will need to be updated
- About modal content is currently placeholder text
- All story content is currently placeholder

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Last Updated:** Initial setup complete
**Status:** Foundation complete, ready for content and assets

