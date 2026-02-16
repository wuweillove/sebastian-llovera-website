# Sebastian Llovera Website - Premium Portfolio

A sophisticated, contemporary website featuring advanced animations and interactions inspired by [retinaa.ch](https://retinaa.ch). Built with Next.js 14, TailwindCSS, and Framer Motion to deliver a premium user experience.

## ✨ Advanced Features

### 🎯 **1. Advanced Custom Cursor**
- **Fluid morphing cursor** that deforms and changes size smoothly
- **State-based transformations** for different hover targets (text, links, images, buttons)
- **Cursor trail effects** with physics-based spring animations  
- **Magnetic attraction** to interactive elements using `data-magnetic` attribute
- **Mix-blend-difference** for sophisticated visual effects
- Smooth transitions with custom spring configurations

### 🎬 **2. Sophisticated Page Transitions**
- **Complex revealing effects** with staggered vertical panels
- **Loading animations** between route changes with route name display
- **Staggered element entry** animations for smooth content appearance
- Smooth opacity, transform, and blur combinations
- Custom easing functions: `cubic-bezier(0.33, 1, 0.68, 1)`

### 🌊 **3. Advanced Parallax Effects**
- **Multi-layer parallax** with different scroll speeds
- **Velocity-based calculations** using Framer Motion's `useSpring`
- **Subtle rotation and scale** effects on scroll
- **Intersection Observer** integration for performance optimization
- Smooth scroll progress tracking with `useScroll` hook

### ✨ **4. Extensive Micro-interactions**
- Hover effects on ALL interactive elements
- **Button press animations** with scale and opacity
- **Link underline grow effects** with smooth timing
- **Image scaling and filter effects** on hover (blur, contrast, hue)
- **Text reveal animations** (word-by-word, character-by-character)
- **Letter spacing changes** on hover
- Magnetic button components with spring physics

### 🖼️ **5. Image Distortion Effects**
- CSS filter distortions on hover (contrast, saturate)
- Scale (1.1x) and rotation transforms
- Overlay gradient effects on interaction
- Smooth `cubic-bezier` timing functions
- GPU-accelerated transforms with `will-change`

### 📝 **6. Premium Typography Treatment**
- Advanced font loading with `display: 'swap'`
- **Fluid typography** using `clamp()` for responsive scaling
- Sophisticated letter spacing (`tracking-tight`, `tracking-widest`)
- Optimized line heights for readability
- Text reveal animations with blur effects
- Hierarchy with multiple font weights
- Kerning and ligature optimizations (`font-feature-settings`)

### 📜 **7. Perfect Scroll Animations**
- **Intersection Observer API** for performance
- Staggered animations for multiple elements
- Smooth opacity, transform, and filter transitions
- **Progress-based animations** that respond to scroll position
- Scroll-triggered reveals with `viewport={{ once: true }}`
- Custom margins for animation triggers

### 🎨 **8. Refined Color Palette**
- Sophisticated neutral palette with CSS variables
- Accent colors (`#ff6b6b`) that complement the design
- Dark theme with high contrast ratios
- Hover state color variations with smooth transitions
- RGB color system for alpha channel support
- Gradient animations for visual interest

### 📏 **9. Precise Spacing System**
- **Fluid spacing** that scales with viewport using `clamp()`
- Consistent rhythm and proportional relationships
- Micro-spacing for fine details
- Visual hierarchy through spacing
- Custom spacing scale: `fluid-xs` to `fluid-2xl`

### ⚡ **10. Performance Optimizations**
- Strategic use of `will-change` property
- `requestAnimationFrame` for smooth 60fps animations
- GPU acceleration for transforms with `translateZ(0)`
- Optimized re-renders with React best practices
- CSS containment for animation performance
- Lazy loading and code splitting
- Optimized font loading with fallbacks

## 🚀 Additional Advanced Features

### Smooth Scrolling
- **Lenis smooth scroll** integration for buttery smooth scrolling
- Custom scroll physics with configurable duration and easing
- Prevent scroll during modal/overlay states

### Magnetic Cursor Effects
- Custom `MagneticButton` component with attraction physics
- Configurable strength parameter
- Spring-based animations for natural movement

### Clip-Path Reveals
- Advanced reveal animations using `clip-path`
- Custom keyframe animations
- Smooth entrance effects for content

### Grain Texture
- Subtle noise texture overlay for premium feel
- SVG-based grain effect with low opacity
- Non-intrusive visual enhancement

### Loading States
- Animated loading indicators
- Route-based loading screens
- Skeleton states for content

### Accessibility
- **Reduced motion support** with `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for readability

## 🛠️ Tech Stack

### Core
- **Next.js 14** - App Router with Server Components
- **React 18** - Latest features and optimizations
- **TypeScript** - Type safety and better DX

### Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- Custom design tokens and utilities
- Responsive design with mobile-first approach

### Animation
- **Framer Motion 11** - Production-ready motion library
- **Lenis** - Smooth scroll library
- Custom spring physics and easing functions

### Performance
- **Vercel** - Optimized hosting and deployment
- Image optimization with Next.js Image
- Font optimization with `next/font`

## 📁 Project Structure

```
sebastian-llovera-website/
├── app/
│   ├── layout.tsx           # Root layout with cursor, nav, transitions
│   ├── page.tsx             # Homepage with advanced hero
│   ├── projects/
│   │   ├── page.tsx         # Projects gallery
│   │   └── [slug]/page.tsx  # Individual project pages
│   ├── about/page.tsx       # About page
│   └── globals.css          # Global styles & utilities
├── components/
│   ├── cursor/
│   │   └── AdvancedCursor.tsx       # Morphing cursor with states
│   ├── animations/
│   │   ├── PageTransitionEffect.tsx # Complex page transitions
│   │   ├── ParallaxSection.tsx      # Multi-layer parallax
│   │   ├── RevealText.tsx           # Text reveal animations
│   │   ├── StaggeredFade.tsx        # Staggered content reveals
│   │   ├── ScrollTrigger.tsx        # Scroll-based animations
│   │   └── SmoothScroll.tsx         # Lenis integration
│   ├── navigation/
│   │   ├── Navigation.tsx           # Advanced navigation bar
│   │   └── NavOverlay.tsx           # Full-screen overlay menu
│   ├── hero/
│   │   └── AdvancedHero.tsx         # Parallax hero section
│   ├── projects/
│   │   ├── AdvancedProjectCard.tsx  # 3D project cards
│   │   ├── ProjectGallery.tsx       # Project grid layout
│   │   └── ProjectDetail.tsx        # Project detail pages
│   ├── sections/
│   │   ├── ProjectsSection.tsx      # Featured projects
│   │   ├── AboutSection.tsx         # About section
│   │   └── ContactSection.tsx       # Contact CTA
│   └── ui/
│       ├── MagneticButton.tsx       # Magnetic attraction button
│       ├── ImageDistortion.tsx      # Image hover effects
│       └── AnimatedLink.tsx         # Link with underline animation
├── lib/
│   ├── utils.ts             # Utility functions (cn, etc.)
│   └── projects.ts          # Project data
├── types/
│   └── index.ts             # TypeScript type definitions
├── tailwind.config.js       # Custom design tokens
├── next.config.js           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Key Animation Patterns

### Page Transitions
```tsx
// Staggered vertical panel reveal
{[...Array(5)].map((_, i) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.76, 0, 0.24, 1],
    }}
  />
))}
```

### Parallax Scrolling
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
})
const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])
```

### Magnetic Effect
```tsx
const handleMouseMove = (e) => {
  const rect = ref.current.getBoundingClientRect()
  const x = (e.clientX - rect.left - rect.width / 2) * strength
  const y = (e.clientY - rect.top - rect.height / 2) * strength
  setPosition({ x, y })
}
```

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
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` and `app/globals.css`:
```css
:root {
  --background: 10 10 10;
  --foreground: 250 250 250;
  --accent: 255 107 107;
  --muted: 102 102 102;
}
```

### Typography
Fluid typography scales automatically. Adjust in `tailwind.config.js`:
```js
'fluid-4xl': 'clamp(3rem, 2.5rem + 2.5vw, 6rem)'
```

### Animation Timing
Custom easing functions in `tailwind.config.js`:
```js
'smooth': 'cubic-bezier(0.33, 1, 0.68, 1)',
'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
```

### Projects Data
Edit `lib/projects.ts` to add your projects:
```ts
export const projects: Project[] = [
  {
    id: '1',
    slug: 'project-name',
    title: 'Project Title',
    description: 'Short description',
    longDescription: 'Full description',
    tags: ['Next.js', 'TailwindCSS'],
    image: 'https://...',
    year: '2024',
  },
]
```

## 🎯 Performance Tips

1. **Image Optimization**: Use Next.js `<Image>` component
2. **Font Loading**: Fonts are preloaded with `display: 'swap'`
3. **Animation Performance**: Uses GPU acceleration with `transform` and `opacity`
4. **Code Splitting**: Automatic with Next.js App Router
5. **Reduced Motion**: Respects user preferences automatically

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Sebastian Llovera**

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion

---

## 🎓 Learning Resources

Inspired by:
- [retinaa.ch](https://retinaa.ch) - Premium interactions and animations
- [Awwwards](https://awwwards.com) - Contemporary web design
- [Codrops](https://tympanus.net/codrops) - Cutting-edge tutorials

## 🙏 Acknowledgments

Special thanks to the creators of:
- Framer Motion - Incredible animation library
- Lenis - Smooth scroll perfection
- TailwindCSS - Rapid styling workflow
- Next.js - Best React framework