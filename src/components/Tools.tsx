import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import { TOOLS } from '../data/tools';
import { Tool } from '../data/tools';

const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'devops', label: 'DevOps' },
  ];
  
  const filteredTools = activeCategory === 'all' 
    ? TOOLS 
    : TOOLS.filter(tool => tool.category === activeCategory);
    
  // Dynamically get icon from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} className="text-primary-400" /> : null;
  };

  return (
    <Section
      id="tools"
      title="Our Technology Stack"
      subtitle="We use the latest technologies to deliver high-quality, scalable solutions."
      dark
    >
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredTools.map((tool) => (
          <Card 
            key={tool.id} 
            className="p-4 flex flex-col items-center text-center"
          >
            <div className="mb-3 p-3 bg-dark-800 rounded-full">
              {getIcon(tool.icon)}
            </div>
            <h3 className="text-lg font-medium mb-1">{tool.name}</h3>
            <p className="text-xs text-gray-400">{tool.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Tools;