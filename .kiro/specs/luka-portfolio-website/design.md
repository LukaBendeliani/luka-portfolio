# Design Document

## Overview

The Luka Bendeliani Portfolio Website is a single-page application (SPA) built with Next.js 14+ using the App Router architecture. The application features a dark, futuristic theme with smooth scrolling navigation between sections. The design leverages NextUI v2 components styled with Tailwind CSS to create a modern, performant, and accessible portfolio experience.

The website follows a vertical scrolling layout with distinct sections: Hero, Overview, Work Experience, Technical Skills, Education, Additional Skills, and Contact. Each section uses glass morphism effects, subtle animations, and geometric background patterns to create visual interest while maintaining professional aesthetics.

## Architecture

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: NextUI v2
- **Styling**: Tailwind CSS with custom configuration
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

### Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main page component
│   ├── globals.css          # Global styles and Tailwind imports
│   └── favicon.ico          # Favicon
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── OverviewSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── AdditionalSkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── Navigation.tsx
│   │   ├── SectionContainer.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── AnimatedBackground.tsx
│   └── providers/
│       └── Providers.tsx    # NextUI and theme providers
├── lib/
│   ├── data/
│   │   └── portfolio-data.ts  # Centralized content data
│   └── utils/
│       └── animations.ts      # Reusable animation variants
├── public/
│   ├── profile-placeholder.jpg
│   └── manifest.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

### Architectural Decisions

**Decision 1: Single Page Application with Smooth Scrolling**
- Rationale: Provides seamless navigation experience without page reloads, meeting Requirement 10
- Implementation: Use `react-scroll` or native smooth scrolling with intersection observers for active section tracking

**Decision 2: Server Components by Default**
- Rationale: Leverage Next.js 14 App Router's server components for better performance (Requirement 11)
- Implementation: Only mark components as 'use client' when they require interactivity (navigation, animations)

**Decision 3: Centralized Data Management**
- Rationale: Separates content from presentation, making updates easier
- Implementation: Store all portfolio content in `lib/data/portfolio-data.ts` as typed objects

**Decision 4: Component-Based Architecture**
- Rationale: Promotes reusability and maintainability (Requirement 14)
- Implementation: Each section is a self-contained component; shared UI elements in `components/ui/`

## Components and Interfaces

### Core Components

#### 1. Layout Component (`app/layout.tsx`)

```typescript
interface RootLayoutProps {
  children: React.ReactNode;
}

// Responsibilities:
// - Wrap application with NextUI provider
// - Configure dark theme
// - Include global metadata for SEO (Requirement 12)
// - Load fonts (Inter/Poppins)
```

#### 2. Main Page Component (`app/page.tsx`)

```typescript
// Responsibilities:
// - Compose all section components
// - Implement smooth scrolling container
// - Include AnimatedBackground component
```

#### 3. Navigation Component (`components/ui/Navigation.tsx`)

```typescript
interface NavigationProps {
  activeSection: string;
}

// Responsibilities:
// - Render navigation menu with section links
// - Highlight active section based on scroll position
// - Implement smooth scroll on link click (Requirement 10)
// - Sticky positioning on scroll
```

#### 4. HeroSection Component (`components/sections/HeroSection.tsx`)

```typescript
interface HeroSectionProps {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  imageUrl: string;
}

// Responsibilities:
// - Display name, title, and contact info (Requirement 2)
// - Render professional photo with Next.js Image optimization
// - Apply glass morphism effect to contact card
// - Implement hover animations on contact items
```

#### 5. OverviewSection Component (`components/sections/OverviewSection.tsx`)

```typescript
interface OverviewSectionProps {
  introduction: string;
  highlights: string[];
  languages: { language: string; proficiency: string }[];
}

// Responsibilities:
// - Display professional introduction (Requirement 3)
// - Highlight key technologies with visual emphasis
// - Show language proficiency
```

#### 6. ExperienceSection Component (`components/sections/ExperienceSection.tsx`)

```typescript
interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

// Responsibilities:
// - Render timeline of work experiences (Requirement 4)
// - Use ExperienceCard for each entry
// - Display in reverse chronological order
```

#### 7. ExperienceCard Component (`components/ui/ExperienceCard.tsx`)

```typescript
interface ExperienceCardProps {
  experience: Experience;
}

// Responsibilities:
// - Display single work experience entry
// - Apply glass morphism styling
// - Show achievements and technologies
// - Implement hover effects
```

#### 8. SkillsSection Component (`components/sections/SkillsSection.tsx`)

```typescript
interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

// Responsibilities:
// - Display skills organized by category (Requirement 5)
// - Use SkillBadge component for each skill
// - Implement grid layout responsive to viewport
```

#### 9. SkillBadge Component (`components/ui/SkillBadge.tsx`)

```typescript
interface SkillBadgeProps {
  skill: string;
  category: string;
}

// Responsibilities:
// - Render individual skill with badge styling
// - Apply hover animation (Requirement 5)
// - Use category-specific accent colors
```

#### 10. EducationSection Component (`components/sections/EducationSection.tsx`)

```typescript
interface Education {
  institution: string;
  degree?: string;
  startYear: number;
  endYear: number;
}

interface EducationSectionProps {
  education: Education[];
}

// Responsibilities:
// - Display educational background (Requirement 6)
// - Use card layout with glass morphism
```

#### 11. AdditionalSkillsSection Component (`components/sections/AdditionalSkillsSection.tsx`)

```typescript
interface AdditionalSkillsSectionProps {
  skills: string[];
}

// Responsibilities:
// - Display soft skills and additional capabilities (Requirement 7)
// - Use icon + text layout
```

#### 12. ContactSection Component (`components/sections/ContactSection.tsx`)

```typescript
interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
}

// Responsibilities:
// - Display contact information (Requirement 8)
// - Implement clickable email (mailto:) and phone (tel:) links
// - Apply hover effects to interactive elements
```

#### 13. SectionContainer Component (`components/ui/SectionContainer.tsx`)

```typescript
interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

// Responsibilities:
// - Provide consistent section spacing and layout
// - Implement scroll-triggered fade-in animation (Requirement 13)
// - Use Intersection Observer for animation triggers
```

#### 14. AnimatedBackground Component (`components/ui/AnimatedBackground.tsx`)

```typescript
// Responsibilities:
// - Render geometric shapes and patterns (Requirement 13)
// - Apply subtle gradient animations
// - Position as fixed background layer
// - Ensure no interference with content readability
```

### Shared Utilities

#### Animation Variants (`lib/utils/animations.ts`)

```typescript
// Framer Motion variants for consistent animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};
```

#### Portfolio Data (`lib/data/portfolio-data.ts`)

```typescript
export const portfolioData = {
  personal: {
    name: "Luka Bendeliani",
    title: "Software Engineer",
    contact: { /* ... */ }
  },
  overview: { /* ... */ },
  experiences: [ /* ... */ ],
  skills: { /* ... */ },
  education: [ /* ... */ ],
  additionalSkills: [ /* ... */ ]
};
```

## Data Models

### Personal Information

```typescript
interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  imageUrl: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}
```

### Professional Overview

```typescript
interface Overview {
  introduction: string;
  highlights: string[];
  databases: string[];
  testingTools: string[];
  languages: Language[];
}

interface Language {
  language: string;
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
}
```

### Work Experience

```typescript
interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string;   // Format: "YYYY-MM" or "Present"
  achievements: string[];
  technologies: string[];
}
```

### Technical Skills

```typescript
interface TechnicalSkills {
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
}
```

### Education

```typescript
interface EducationEntry {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  startYear: number;
  endYear: number;
}
```

## Design System

### Color Palette

```typescript
// Tailwind config extension
colors: {
  primary: {
    DEFAULT: '#00D4FF',
    dark: '#0066FF',
  },
  background: {
    primary: '#0A0A0A',
    secondary: '#1A1A1A',
    card: 'rgba(26, 26, 26, 0.6)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
  },
  accent: {
    blue: '#00D4FF',
    purple: '#8B5CF6',
  }
}
```

### Typography

```typescript
// Font configuration
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'Inter', 'sans-serif'],
}

// Font sizes (Requirement 2)
fontSize: {
  'hero-name': ['3rem', { lineHeight: '1.2' }],      // 48px
  'hero-title': ['1.5rem', { lineHeight: '1.4' }],   // 24px
  'section-title': ['2rem', { lineHeight: '1.3' }],  // 32px
  'body': ['1rem', { lineHeight: '1.6' }],           // 16px
}
```

### Glass Morphism Effect

```css
.glass-card {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### Spacing System

```typescript
// Consistent spacing scale
spacing: {
  section: '6rem',      // Vertical spacing between sections
  container: '1.5rem',  // Container padding
  card: '1.5rem',       // Card internal padding
}
```

### Responsive Breakpoints

```typescript
screens: {
  'sm': '640px',   // Mobile
  'md': '768px',   // Tablet (Requirement 9)
  'lg': '1024px',  // Desktop (Requirement 9)
  'xl': '1280px',
  '2xl': '1536px',
}
```

## Error Handling

### Image Loading Errors

- Use Next.js Image component with fallback placeholder
- Implement `onError` handler to display default avatar
- Log errors to console in development mode

### Navigation Errors

- Validate section IDs exist before scrolling
- Gracefully handle missing sections by scrolling to top
- Provide visual feedback if navigation fails

### Data Validation

- Validate portfolio data structure at build time using TypeScript
- Provide default values for optional fields
- Log warnings for missing required data

### Accessibility Errors

- Ensure all interactive elements have proper ARIA labels
- Validate color contrast ratios meet WCAG AA standards (Requirement 1)
- Test with screen readers and keyboard navigation

## Testing Strategy

### Unit Testing

- Test utility functions (animations, data transformations)
- Test component rendering with various props
- Use Jest and React Testing Library

### Integration Testing

- Test navigation flow between sections
- Test smooth scrolling behavior
- Test responsive layout changes at breakpoints
- Verify intersection observer triggers animations correctly

### Performance Testing

- Run Lighthouse audits to verify scores ≥90 (Requirement 11)
- Test First Contentful Paint on throttled connections
- Verify image optimization with Next.js Image component
- Measure bundle size and code splitting effectiveness

### Accessibility Testing

- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing (VoiceOver on macOS)
- Color contrast validation
- Test prefers-reduced-motion support (Requirement 13)

### Cross-Browser Testing

- Test on Chrome, Firefox, Safari, Edge
- Verify glass morphism effects render correctly
- Test smooth scrolling behavior across browsers

### Responsive Testing

- Test on mobile devices (iPhone, Android)
- Test on tablets (iPad)
- Test on various desktop resolutions
- Verify touch targets meet 44x44px minimum (Requirement 9)

### SEO Testing

- Validate meta tags are present and correct (Requirement 12)
- Test Open Graph tags with social media debuggers
- Verify semantic HTML structure
- Check robots.txt and sitemap generation

## Performance Optimization

### Image Optimization

- Use Next.js Image component with automatic format selection (WebP/AVIF)
- Implement lazy loading for below-fold images
- Provide appropriate sizes for responsive images
- Compress images before deployment

### Code Splitting

- Leverage Next.js automatic code splitting
- Use dynamic imports for heavy components (Framer Motion animations)
- Separate client and server components appropriately

### Font Optimization

- Use Next.js font optimization with `next/font`
- Subset fonts to include only required characters
- Preload critical fonts

### Bundle Optimization

- Tree-shake unused NextUI components
- Minimize Tailwind CSS output with purge configuration
- Use production builds for deployment

### Caching Strategy

- Configure appropriate cache headers for static assets
- Leverage Vercel's edge network for CDN caching
- Implement stale-while-revalidate for dynamic content

## Deployment Configuration

### Vercel Configuration

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Environment Variables

- No sensitive environment variables required for initial deployment
- Future: Add analytics tracking IDs if needed

### Build Optimization

- Enable Next.js production optimizations
- Configure image optimization domains
- Set up automatic deployments from main branch

## Accessibility Considerations

### Keyboard Navigation

- All interactive elements accessible via Tab key
- Visible focus indicators with high contrast
- Skip-to-content link for screen reader users

### Screen Reader Support

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for icon-only buttons
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast

- All text meets WCAG AA standards (4.5:1 for normal text)
- Interactive elements have sufficient contrast
- Focus indicators visible against all backgrounds

## Future Enhancements

- Project showcase section with filterable portfolio items
- Blog integration for technical articles
- Contact form with backend integration
- Dark/light theme toggle
- Multi-language support (English/Georgian)
- Analytics integration (Google Analytics or Plausible)
- Resume download functionality
