import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { PROJECTS } from '../data/projects';
import { Project } from '../data/projects';

const Portfolio: React.FC<{ featured?: boolean }> = ({ featured = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'design', label: 'Design' },
  ];
  
  const displayProjects = featured 
    ? PROJECTS.filter(project => project.featured) 
    : PROJECTS;
    
  const filteredProjects = activeCategory === 'all' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory);

  return (
    <Section
      id="portfolio"
      title="Our Work"
      subtitle="Take a look at some of our recent projects that showcase our capabilities."
      withStars
    >
      {!featured && (
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
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {featured && (
        <div className="text-center mt-12">
          <Button variant="primary" to="/projects">
            View All Projects
          </Button>
        </div>
      )}
    </Section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60"></div>
        
        <div className="absolute top-2 right-2">
          <span className="px-3 py-1 bg-dark-900/90 text-xs rounded-full text-primary-400 capitalize">
            {project.category}
          </span>
        </div>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 p-3 bg-primary-500 text-white rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-dark-800 text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Portfolio;