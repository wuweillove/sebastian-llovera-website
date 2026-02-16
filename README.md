# Sebastian Llovera Website Redesign

A contemporary website featuring fluid animations and cutting-edge web technologies, inspired by the sophisticated design language of [retinaa.ch](https://retinaa.ch).

## 🎨 Design Philosophy

This website embraces a modern, fluid aesthetic with seamless animations and interactions that create an engaging user experience. The design draws inspiration from retinaa.ch's approach to:

- Smooth, physics-based transitions
- Minimalist yet impactful visual hierarchy
- Thoughtful micro-interactions
- Contemporary typography and spacing
- Responsive design that adapts fluidly across devices

## 🛠️ Tech Stack

### Core Framework
- **[Next.js](https://nextjs.org/)** - React framework for production-grade applications with server-side rendering, static site generation, and optimal performance

### Styling
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development with consistent design tokens and responsive design patterns

### Animation
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React
  - Declarative animation API
  - Gesture recognition (drag, pan, hover)
  - Layout animations
  - SVG path animations
  - Scroll-triggered animations

## ✨ Key Features

- 🚀 Blazing-fast performance with Next.js App Router
- 🎭 Fluid, physics-based animations powered by Framer Motion
- 📱 Fully responsive design with mobile-first approach
- ♿ Accessible and semantic HTML
- 🎨 Custom design system built with TailwindCSS
- ⚡ Optimized images and fonts
- 🌙 Smooth page transitions and micro-interactions

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

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── ...
├── components/          # React components
│   ├── animations/      # Framer Motion animation components
│   ├── ui/             # UI components
│   └── ...
├── public/             # Static assets
├── styles/             # Global styles
└── tailwind.config.js  # TailwindCSS configuration
```

## 🎯 Animation Patterns

### Page Transitions
- Smooth fade and slide effects between routes
- Stagger animations for content elements

### Scroll Interactions
- Parallax effects
- Scroll-triggered reveals
- Progress indicators

### Micro-interactions
- Button hover states
- Form input focus effects
- Loading states
- Success/error feedback

## 🎨 Design Tokens

TailwindCSS configuration includes custom:
- Color palette
- Typography scale
- Spacing system
- Border radius values
- Animation timing functions

## 📝 License

This project is private and proprietary.

## 👤 Author

**Sebastian Llovera**

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion