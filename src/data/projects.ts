export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'e-commerce' | 'design' | 'e-learning';
  technologies: string[];
  link?: string;
  featured: boolean;
}
import TravelloImg from '../assets/Travello.png';
import EgamesImg from '../assets/E-games.png';
import SkillImg from '../assets/Skill-Stack.jpg';
// import ScreenImg from '../assets/Screen-Spot.png';


export const PROJECTS: Project[] = [
  {
    id: 'project1',
    title: 'Travello Travel Agency Platform',
    description: 'A modern tourism website for discovering, booking, and managing travel packages and tours, with integrated payment and customer support features.',
    image: TravelloImg,
    category: 'web',
    technologies: ['React', 'Firebase', 'ٌRedux', 'Formik&Yup'],
    link: 'https://travello-psi.vercel.app/',
    featured: true
  },
  {
    id: 'project2',
    title: 'E-Games',
    description: 'An interactive web platform for discovering and playing a variety of online games, featuring a modern design and smooth user experience.',
    image: EgamesImg,
    category: 'web',
    technologies: ['Html5', 'Css3', 'JavaScript', 'Bootstrap', 'Api'],
    link: 'https://mahmoud-makady.github.io/EGames/',
    featured: true
  },
  {
    id: 'project3',
    title: 'Skill-Stack',
    description: 'SkillStack is a modern, responsive e-learning web application designed to provide users with a seamless online course experience',
    image: SkillImg,
    category: 'e-learning',
    technologies: ['React', 'Css3', 'Firebase', 'ٌRedux'],
    link: 'http://musical-youtiao-78d18d.netlify.app/',
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
    category: 'e-commerce',
    technologies: ['React', 'Express', 'MongoDB', 'Redux'],
    link: 'https://astralmart.example.com',
    featured: true
  }
];