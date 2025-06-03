import React from 'react';
import About from '../components/About';
import Team from '../components/Team';
import { ChevronDown } from 'lucide-react';
import Section from '../components/ui/Section';
import { COMPANY_INFO } from '../utils/constants';

const AboutPage: React.FC = () => {
  // Company values
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that exceed expectations.',
    },
    {
      title: 'Quality',
      description: 'We are committed to excellence in everything we do, from code quality to user experience design.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients to achieve exceptional results.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards in all our business practices.',
    },
    {
      title: 'User-Centric',
      description: 'We place users at the center of our design and development process to create intuitive, accessible solutions.',
    },
    {
      title: 'Continuous Learning',
      description: 'We\'re dedicated to growth and staying at the forefront of our industry through ongoing education and skill development.',
    },
  ];

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
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get to know the story, values, and people behind Astral-Code
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-primary-400" />
          </div>
        </div>
      </div>
      
      {/* Main About Section */}
      <About />
      
      {/* Our Values */}
      <Section
        id="values"
        title="Our Values"
        subtitle="These core principles guide everything we do at Astral-Code."
        dark
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-6 bg-dark-900 rounded-lg border border-dark-800 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Our Story */}
      <Section
        id="story"
        title="Our Story"
        subtitle="How Astral-Code came to be and our journey so far."
        withStars
      >
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
          <p>
            Founded in {COMPANY_INFO.yearFounded}, Astral-Code began as a small team of passionate developers with a shared vision: to create exceptional digital experiences that help businesses thrive in the digital landscape.
          </p>
          
          <p>
            What started as a small operation focused on frontend development quickly expanded as we added talented designers, backend developers, and project managers to our team. Our commitment to quality and client satisfaction helped us build a strong reputation in the industry.
          </p>
          
          <p>
            Today, we're proud to be a full-service web development agency working with clients across various industries. Our team has grown, but our core values and commitment to excellence remain unchanged. We continue to push boundaries and explore new technologies to deliver innovative solutions that drive business growth.
          </p>
          
          <p>
            As we look to the future, we're excited to continue our journey, taking on new challenges and helping more businesses achieve their digital goals. We're not just building websites and applications – we're crafting digital experiences that make a difference.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-900"></div>
          
          <div className="space-y-12">
            {/* Timeline item 1 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="ml-auto mr-8 md:ml-0 md:mr-auto md:w-1/2 p-6 bg-dark-900 rounded-lg border border-dark-800 md:text-right">
                <h4 className="text-xl font-bold text-primary-400">{COMPANY_INFO.yearFounded}</h4>
                <p className="text-white">Astral-Code was founded</p>
              </div>
            </div>
            
            {/* Timeline item 2 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="ml-8 md:ml-auto md:mr-0 md:w-1/2 p-6 bg-dark-900 rounded-lg border border-dark-800">
                <h4 className="text-xl font-bold text-primary-400">{COMPANY_INFO.yearFounded + 1}</h4>
                <p className="text-white">Expanded our team and services</p>
              </div>
            </div>
            
            {/* Timeline item 3 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="ml-auto mr-8 md:ml-0 md:mr-auto md:w-1/2 p-6 bg-dark-900 rounded-lg border border-dark-800 md:text-right">
                <h4 className="text-xl font-bold text-primary-400">{COMPANY_INFO.yearFounded + 2}</h4>
                <p className="text-white">Completed our 25th project</p>
              </div>
            </div>
            
            {/* Timeline item 4 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="ml-8 md:ml-auto md:mr-0 md:w-1/2 p-6 bg-dark-900 rounded-lg border border-dark-800">
                <h4 className="text-xl font-bold text-primary-400">Today</h4>
                <p className="text-white">Continuing to grow and innovate</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Team Section */}
      <Team />
    </>
  );
};

export default AboutPage;