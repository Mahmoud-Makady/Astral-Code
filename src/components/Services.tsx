import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';
import { SERVICES } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC<{ featured?: boolean }> = ({ featured = false }) => {
  const navigate = useNavigate();
  const displayServices = featured ? SERVICES.slice(0, 3) : SERVICES;
  
  // Dynamically get icon from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} className="text-primary-400" /> : null;
  };

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="We provide end-to-end solutions to help your business thrive in the digital world."
      dark
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayServices.map((service) => (
          <Card key={service.id} className="p-6">
            <div className="mb-4">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="mb-6 space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-400 mr-2">•</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="sm"
              className="mt-auto"
              onClick={() => navigate(`/services#${service.id}`)}
              icon={<ArrowRight size={16} />}
            >
              Learn More
            </Button>
          </Card>
        ))}
      </div>
      
      {featured && (
        <div className="text-center mt-12">
          <Button variant="primary" to="/services">
            View All Services
          </Button>
        </div>
      )}
    </Section>
  );
};

export default Services;