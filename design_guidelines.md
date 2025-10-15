# Design Guidelines: Hokkaido Trip Planner Web Application

## Design Approach
**Reference-Based Approach** drawing inspiration from Airbnb's visual storytelling and Notion's content organization, creating a romantic, modern aesthetic perfect for a couple's special journey.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 200 85% 45% (Vibrant Hokkaido sky blue)
- Secondary: 15 80% 50% (Warm sunset orange)
- Background: 0 0% 98% (Soft white)
- Surface: 0 0% 100% (Pure white cards)
- Text Primary: 220 15% 20% (Deep charcoal)
- Text Secondary: 220 10% 50% (Muted gray)

**Dark Mode:**
- Primary: 200 75% 55% (Softer sky blue)
- Secondary: 15 70% 60% (Gentle sunset)
- Background: 220 20% 10% (Deep night blue)
- Surface: 220 18% 15% (Elevated dark surface)
- Text Primary: 0 0% 95% (Soft white)
- Text Secondary: 220 10% 65% (Muted light gray)

**Accent Colors:**
- Success: 150 70% 45% (Nature green for completed items)
- Romantic: 330 75% 60% (Soft pink for special moments)

### B. Typography

**Primary Font:** 'Inter' (Google Fonts) - Clean, modern, excellent readability
**Accent Font:** 'Playfair Display' (Google Fonts) - Elegant, romantic for headlines

**Type Scale:**
- Hero Title: text-6xl font-accent (Playfair Display, 60px)
- Page Titles: text-4xl font-semibold (36px)
- Section Headers: text-2xl font-semibold (24px)
- Body Text: text-base (16px)
- Captions: text-sm text-secondary (14px)
- Labels: text-xs uppercase tracking-wide (12px)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16** for consistent rhythm
- Micro spacing: p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: py-8, py-12, py-16
- Large gaps: gap-8, gap-12

**Container Strategy:**
- Top page: Full viewport immersive experience
- Itinerary page: max-w-6xl mx-auto for comfortable reading

### D. Component Library

**Top Page Components:**

1. **Hero Section with Countdown**
   - Full-screen Hokkaido landscape background (dramatic mountains or lavender fields)
   - Dark gradient overlay (from transparent to 50% black) for text readability
   - Centered content with romantic headline and countdown display
   - Countdown: Large numbers (text-7xl) in outlined cards with backdrop blur
   - Format: "X Days Until Our Hokkaido Adventure"
   - Subtle floating animation (translateY 8px, 3s ease)

2. **Navigation to Itinerary**
   - Floating action button or elegant link to itinerary
   - Positioned bottom center with gentle pulse animation

**Itinerary Page Components:**

1. **Header Bar**
   - Sticky top navigation with backdrop blur
   - Trip title in accent font
   - Back to countdown link

2. **Tab Navigation**
   - Horizontal scrollable tabs (Day 1-5)
   - Active tab: primary color bottom border (border-b-4)
   - Inactive: text-secondary with hover state
   - Smooth scroll for overflow on mobile

3. **Schedule Cards**
   - Elevated cards (shadow-lg) on surface background
   - Each card contains:
     - Time picker or input (HH:MM format)
     - Activity title (editable inline)
     - Photo upload area (drag & drop + click)
     - Edit/Delete actions (icon buttons)
   - Rounded corners: rounded-2xl
   - Spacing: gap-6 between cards

4. **Add Activity Button**
   - Prominent button at bottom of each day
   - Primary color with icon (Plus)
   - Full width on mobile, auto on desktop

5. **Photo Display**
   - Grid layout for multiple photos (grid-cols-2 md:grid-cols-3)
   - Lightbox on click for full view
   - Delete option on hover/long-press

### E. Interactions & Animations

**Minimal & Purposeful:**
- Card hover: subtle lift (translateY -2px) + shadow increase
- Button hover: brightness increase, no complex animations
- Tab transition: smooth content fade (opacity 0 to 1, 200ms)
- Photo upload: gentle scale on drop (scale 1.02)
- Countdown flip: Numbers change with slight scale pulse

**No Animations:**
- Page transitions (instant for snappy feel)
- Scroll effects (keep performance smooth)

## Images

**Hero Image (Top Page):**
- Large, high-quality Hokkaido landscape
- Suggestions: Lavender fields (Furano), Snow-capped mountains (Daisetsuzan), Blue Pond (Biei)
- Full viewport height (100vh)
- Position: center center, cover
- Overlay: Linear gradient from transparent to rgba(0,0,0,0.5)

**Itinerary Photos:**
- User-uploaded activity photos
- Thumbnail size: 200x200px (square crop)
- Display in gallery grid within schedule cards

## Accessibility & Responsiveness

- Maintain consistent dark mode across all inputs and text fields
- Focus states: primary color ring (ring-2 ring-primary)
- Mobile-first: Stack tabs vertically if needed, full-width cards
- Touch targets: min-h-12 for all interactive elements
- ARIA labels for countdown, tabs, and schedule actions

## Key Design Principles

1. **Romantic & Personal:** Soft colors, elegant typography, photo-centric
2. **Clarity:** Clear visual hierarchy, obvious interactions
3. **Immersive:** Full-screen hero creates emotional connection
4. **Functional:** Easy schedule management with drag-and-drop simplicity
5. **Responsive:** Beautiful on both mobile (planning on-the-go) and desktop (collaborative planning)