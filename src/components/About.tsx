import React from 'react';
import { Award, Clock, Sparkles, Users } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { COMPANY_INFO } from '../utils/constants';

const About: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const stats = [
    {
      icon: <Clock size={24} className="text-primary-400" />,
      value: `${new Date().getFullYear() - COMPANY_INFO.yearFounded}+`,
      label: 'Years Experience',
    },
    {
      icon: <Users size={24} className="text-primary-400" />,
      value: '15+',
      label: 'Team Members',
    },
    {
      icon: <Sparkles size={24} className="text-primary-400" />,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: <Award size={24} className="text-primary-400" />,
      value: '98%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <Section
      id="about"
      title={compact ? undefined : "About Astral-Code"}
      subtitle={compact ? undefined : "We're a team of passionate developers and designers with a mission to create exceptional digital experiences."}
      withStars
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            {/* Main image */}
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-dark-800 shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Astral-Code Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary-500/10"></div>
            </div>
            
            {/* Background shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-accent-500/10 rounded-lg border border-accent-500/20"></div>
            
            {/* Floating box */}
            <div className="absolute -bottom-4 -left-4 bg-dark-900 rounded-lg p-4 shadow-lg border border-dark-800">
              <p className="text-sm text-gray-400">Founded in</p>
              <p className="text-2xl font-bold text-white">{COMPANY_INFO.yearFounded}</p>
            </div>
          </div>
        </div>
        
        <div>
          {!compact && (
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Our Mission</span>
            </h3>
          )}
          
          <p className="text-gray-300 mb-6">
            At Astral-Code, we believe in pushing the boundaries of what's possible on the web. Our mission is to create digital experiences that are not only visually stunning but also highly functional and user-friendly.
          </p>
          
          <p className="text-gray-300 mb-8">
            Founded in {COMPANY_INFO.yearFounded}, we've grown from a small team of enthusiastic developers to a full-service web development agency. We pride ourselves on our ability to transform complex ideas into elegant solutions that help our clients achieve their business goals.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-dark-900 rounded-lg border border-dark-800">
                <div className="mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {compact && (
            <div className="text-center mt-6">
              <Button variant="primary" to="/about">
                Learn More About Us
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default About;