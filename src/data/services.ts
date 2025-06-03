export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'We craft beautiful, responsive user interfaces that deliver exceptional user experiences across all devices.',
    icon: 'Code',
    features: [
      'Modern framework development (React, Vue, Angular)',
      'Responsive and mobile-first designs',
      'Progressive Web Applications (PWAs)',
      'Interactive UI/UX with animations',
      'State management and API integration',
      'Performance optimization'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'We build robust, scalable server-side applications that power your digital products securely and efficiently.',
    icon: 'Server',
    features: [
      'API development and integration',
      'Database design and optimization',
      'Authentication and authorization systems',
      'Microservices architecture',
      'Cloud deployment and DevOps',
      'Performance monitoring and scaling'
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'We design visually stunning interfaces that capture your brand identity and engage your users.',
    icon: 'Palette',
    features: [
      'Brand-aligned visual design',
      'Wireframing and prototyping',
      'UI/UX research and implementation',
      'Responsive design systems',
      'Accessibility compliance',
      'Interactive design elements'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'We create seamless online shopping experiences that convert visitors into customers.',
    icon: 'ShoppingCart',
    features: [
      'Custom e-commerce platforms',
      'Payment gateway integration',
      'Inventory management systems',
      'Product catalog optimization',
      'Checkout process optimization',
      'Customer retention strategies'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description: 'We develop cross-platform mobile applications that work flawlessly on iOS and Android devices.',
    icon: 'Smartphone',
    features: [
      'React Native development',
      'Native app integration',
      'Push notification systems',
      'Offline functionality',
      'App store optimization',
      'Continuous updates and support'
    ]
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'We provide expert advice on technology decisions to help your business succeed in the digital landscape.',
    icon: 'Lightbulb',
    features: [
      'Technology stack assessment',
      'Digital transformation strategies',
      'Security audits and recommendations',
      'Performance optimization',
      'Scalability planning',
      'Team training and workshops'
    ]
  }
];