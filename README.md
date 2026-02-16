# Sebastian Llovera Website

A sophisticated, contemporary portfolio website featuring fluid animations and cutting-edge web technologies, inspired by the premium design language of [retinaa.ch](https://retinaa.ch).

## ✨ Features

### 🎨 Advanced Interactions
- **Custom Cursor**: Fluid morphing cursor with magnetic effects, state-based transformations, and physics-based animations
- **Touch Ripples**: Mobile-optimized touch feedback with elegant ripple effects
- **Micro-interactions**: Sophisticated hover states, button animations, and smooth transitions throughout
- **Image Distortion**: CSS transform and filter effects on image hover

### 🚀 Premium Animations
- **Page Transitions**: Smooth route transitions with overlay effects and loading sequences
- **Parallax Effects**: Multi-layer parallax scrolling with velocity-based calculations
- **Scroll Animations**: Intersection Observer-powered reveals with staggered animations
- **Text Animations**: Word-by-word, letter-by-letter, and line-by-line reveals

### 💎 Design Excellence
- **Typography**: Professional font hierarchy with fluid responsive scaling
- **Color System**: Sophisticated neutral palette with accent colors and gradients
- **Spacing**: Fluid spacing system that scales perfectly across all devices
- **Mobile-First**: Fully responsive with touch-optimized interactions

### ⚡ Performance
- **60fps Animations**: GPU-accelerated transforms and opacity animations
- **Code Splitting**: Optimized bundle size with dynamic imports
- **Lazy Loading**: Images and components load on demand
- **Smooth Scrolling**: Lenis integration for buttery-smooth scroll experience

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Respects prefers-reduced-motion preferences
- **Focus Indicators**: Clear focus states for better navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with custom design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for production-ready animations
- **Smooth Scroll**: [@studio-freight/lenis](https://lenis.studiofreight.com/) for physics-based scrolling
- **Font**: Inter variable font with optimized loading

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/wuweillove/sebastian-llovera-website.git

# Navigate to project directory
cd sebastian-llovera-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
sebastian-llovera-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   └── projects/            # Projects pages
├── components/
│   ├── animations/          # Animation components
│   │   ├── AnimatedText.tsx
│   │   ├── PageTransition.tsx
│   │   ├── RevealOnScroll.tsx
│   │   ├── ScrollTrigger.tsx
│   │   ├── SmoothScroll.tsx
│   │   ├── StaggerReveal.tsx
│   │   ├── TextReveal.tsx
│   │   └── LetterReveal.tsx
│   ├── cursor/              # Cursor components
│   │   ├── CustomCursor.tsx
│   │   └── TouchRipple.tsx
│   ├── hero/                # Hero section
│   │   └── HeroSection.tsx
│   ├── navigation/          # Navigation components
│   │   ├── Navigation.tsx
│   │   └── NavOverlay.tsx
│   ├── projects/            # Project components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGallery.tsx
│   │   └── ProjectDetail.tsx
│   └── sections/            # Page sections
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       └── ProjectsSection.tsx
├── lib/                     # Utilities and data
│   ├── projects.ts          # Project data
│   └── utils.ts             # Helper functions
├── types/                   # TypeScript types
│   └── index.ts
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Components

### CustomCursor
Advanced custom cursor with:
- Magnetic attraction to interactive elements
- Morphing states (default, hover, text, image, button)
- Spring physics for smooth movement
- Contextual text display
- Mobile detection and graceful degradation

### PageTransition
Sophisticated page transitions with:
- Clip-path reveal animations
- Loading state indicators
- Smooth opacity fades
- Route change detection

### HeroSection
Multi-layer parallax hero with:
- Three parallax layers at different speeds
- Smooth scroll-based transformations
- Noise texture overlay
- Animated scroll indicator

### ProjectCard
3D-transformed project cards with:
- Mouse-tracking perspective effects
- Image scaling and filters on hover
- Gradient overlays
- Smooth tag animations

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  background: '#0a0a0a',
  foreground: '#fafafa',
  accent: '#ff6b6b',
  muted: '#666666',
}
```

### Typography
Adjust fluid typography scales in `tailwind.config.js`:

```javascript
fontSize: {
  'fluid-4xl': 'clamp(3rem, 2.5rem + 2.5vw, 6rem)',
  // Add more sizes...
}
```

### Animations
Modify animation timings in component files or add global animations in `tailwind.config.js`.

## 📝 Adding Projects

Add new projects in `lib/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    slug: 'project-slug',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Detailed description',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    image: 'https://example.com/image.jpg',
    year: '2024',
  },
  // Add more projects...
]
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wuweillove/sebastian-llovera-website)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables (if any)
4. Deploy!

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway
- Render

## 🐛 Known Issues

- Custom cursor is hidden on touch devices (by design)
- Some animations may be reduced on low-performance devices
- Smooth scrolling may not work in older browsers

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sebastian Llovera**
- Website: [sebastianllovera.com](https://sebastianllovera.com)
- Email: hello@sebastianllovera.com

## 🙏 Acknowledgments

- Design inspiration: [retinaa.ch](https://retinaa.ch)
- Animation techniques: Framer Motion documentation
- Smooth scrolling: Studio Freight's Lenis

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion