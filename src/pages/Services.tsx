import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SERVICES } from '../data/services';
import * as LucideIcons from 'lucide-react';

const ServicesPage: React.FC = () => {
  const location = useLocation();
  
  // Dynamically get icon from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={32} className="text-primary-400" /> : null;
  };
  
  useEffect(() => {
    // Scroll to specific service if URL has hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center bg-dark-950 overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of web development and design services to help your business succeed in the digital world.
          </p>
        </div>
      </div>
      
      {/* Overview Section */}
      <Section
        title="What We Offer"
        subtitle="From concept to deployment, we provide end-to-end solutions for all your web development needs."
        withStars
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="p-6 flex flex-col">
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-auto"
                onClick={() => {
                  const element = document.getElementById(service.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Detailed Service Sections */}
      {SERVICES.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          dark={index % 2 === 0}
          withStars={index % 2 !== 0}
          className="border-t border-dark-800"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{service.title}</span>
              </h2>
              <p className="text-gray-300 mb-8">
                {service.description}
              </p>
              
              <h3 className="text-xl font-bold mb-4">What We Provide</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" to="/contact">
                Discuss Your Project
              </Button>
            </div>
            
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="relative">
                {/* Service illustration */}
                <div className="relative z-10 p-6 bg-dark-900 rounded-lg border border-dark-800 shadow-xl">
                  <div className="w-full h-64 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/10 rounded-full -m-2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500/10 rounded-full -m-4"></div>
                  
                  {/* Service stats or highlights */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-dark-800 p-4 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Completion Time</p>
                      <p className="text-xl font-bold text-white">2-8 weeks</p>
                    </div>
                    <div className="bg-dark-800 p-4 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Satisfaction</p>
                      <p className="text-xl font-bold text-white">98%</p>
                    </div>
                  </div>
                </div>
                
                {/* Background shape */}
                <div className="absolute top-6 left-6 w-full h-full bg-primary-500/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </Section>
      ))}
      
      {/* Call to Action */}
      <Section
        dark
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="gradient-text">Ready to Start Your Project?</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Let's discuss how we can help bring your vision to life.
        </p>
        <Button variant="primary" size="lg" to="/contact">
          Get in Touch
        </Button>
      </Section>
    </>
  );
};

export default ServicesPage;