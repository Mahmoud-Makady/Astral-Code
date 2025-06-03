export interface Tool {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'devops';
  icon: string;
  description: string;
}

export const TOOLS: Tool[] = [
  // Frontend Tools
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'React',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: 'FileType',
    description: 'Typed JavaScript at any scale'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'Wind',
    description: 'A utility-first CSS framework'
  },
  {
    id: 'next',
    name: 'Next.js',
    category: 'frontend',
    icon: 'Zap',
    description: 'The React framework for production'
  },

  // Backend Tools
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    icon: 'Server',
    description: 'JavaScript runtime built on Chrome\'s V8 engine'
  },
  {
    id: 'express',
    name: 'Express',
    category: 'backend',
    icon: 'Server',
    description: 'Fast, unopinionated, minimalist web framework for Node.js'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    icon: 'Database',
    description: 'General purpose, document-based, distributed database'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    icon: 'Database',
    description: 'The world\'s most advanced open source database'
  },

  // Design Tools
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    icon: 'Pen',
    description: 'Collaborative interface design tool'
  },
  {
    id: 'adobe',
    name: 'Adobe Creative Suite',
    category: 'design',
    icon: 'Paintbrush',
    description: 'Collection of apps for photography, design, video, web, and UX'
  },

  // DevOps Tools
  {
    id: 'git',
    name: 'Git',
    category: 'devops',
    icon: 'GitBranch',
    description: 'Free and open source distributed version control system'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    icon: 'Box',
    description: 'Platform for developing, shipping, and running applications'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    icon: 'Cloud',
    description: 'Comprehensive cloud computing platform'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'devops',
    icon: 'Github',
    description: 'Platform for hosting and collaborating on code'
  }
];