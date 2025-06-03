export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'design';
  technologies: string[];
  link?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'project1',
    title: 'StellarShop E-commerce Platform',
    description: 'A complete e-commerce solution with product management, payment integration, and customer analytics.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://stellarshop.example.com',
    featured: true
  },
  {
    id: 'project2',
    title: 'CosmicTask Management App',
    description: 'A responsive task management application with team collaboration features and real-time updates.',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://cosmictask.example.com',
    featured: true
  },
  {
    id: 'project3',
    title: 'GalaxyFit Health Tracker',
    description: 'A mobile application for tracking fitness activities, nutrition, and health metrics with personalized insights.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'mobile',
    technologies: ['React Native', 'GraphQL', 'AWS'],
    link: 'https://galaxyfit.example.com',
    featured: true
  },
  {
    id: 'project4',
    title: 'NebulaNotes Learning Platform',
    description: 'An educational platform with course management, interactive lessons, and student progress tracking.',
    image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Angular', 'Node.js', 'PostgreSQL'],
    link: 'https://nebulanotes.example.com',
    featured: false
  },
  {
    id: 'project5',
    title: 'OrbitMedia Content Management',
    description: 'A custom CMS for a digital media company with content scheduling, analytics, and multi-platform publishing.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'web',
    technologies: ['Next.js', 'Sanity.io', 'Vercel'],
    link: 'https://orbitmedia.example.com',
    featured: false
  },
  {
    id: 'project6',
    title: 'AstralMart Marketplace',
    description: 'A peer-to-peer marketplace platform with secure transactions, user ratings, and recommendation engine.',
    image: 'https://images.pexels.com/photos/7078883/pexels-photo-7078883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ecommerce',
    technologies: ['React', 'Express', 'MongoDB', 'Redux'],
    link: 'https://astralmart.example.com',
    featured: true
  }
];