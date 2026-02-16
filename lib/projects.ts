import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'project-alpha',
    title: 'Project Alpha',
    description:
      'A contemporary e-commerce platform featuring fluid product animations and seamless checkout experience.',
    longDescription:
      'Project Alpha reimagines the online shopping experience with sophisticated animations, micro-interactions, and a focus on user engagement. Built with Next.js and Framer Motion, it delivers a blazing-fast, visually stunning platform.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800',
    year: '2024',
  },
  {
    id: '2',
    slug: 'digital-canvas',
    title: 'Digital Canvas',
    description:
      'An interactive portfolio platform for artists featuring gallery layouts and smooth image transitions.',
    longDescription:
      'Digital Canvas provides artists with a beautiful, customizable platform to showcase their work. Features include advanced gallery layouts, smooth transitions, and interactive elements that bring artwork to life.',
    tags: ['React', 'GSAP', 'Three.js', 'Design System'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800',
    year: '2024',
  },
  {
    id: '3',
    slug: 'motion-studio',
    title: 'Motion Studio',
    description:
      'A design system and component library with focus on fluid animations and accessibility.',
    longDescription:
      'Motion Studio is a comprehensive design system built for modern web applications. It features a complete set of accessible components with built-in animations and a flexible theming system.',
    tags: ['Design System', 'Storybook', 'Accessibility', 'Animation'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    year: '2023',
  },
  {
    id: '4',
    slug: 'wave-ui',
    title: 'Wave UI',
    description:
      'A SaaS dashboard with data visualization and real-time updates powered by modern web technologies.',
    longDescription:
      'Wave UI transforms complex data into beautiful, interactive visualizations. Built for performance and scalability, it handles real-time updates seamlessly while maintaining a delightful user experience.',
    tags: ['Dashboard', 'Data Viz', 'Real-time', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    year: '2023',
  },
]