import React from 'react';
import Portfolio from '../components/Portfolio';

const ProjectsPage: React.FC = () => {
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
            <span className="gradient-text">Our Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of work and see how we've helped clients achieve their digital goals.
          </p>
        </div>
      </div>
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Process Section */}
      <section className="section bg-dark-900">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Our Process</span>
          </h2>
          <p className="section-subtitle">
            How we turn your ideas into successful digital products.
          </p>
          
          <div className="relative mt-16">
            {/* Process timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary-900 z-0"></div>
            
            {/* Process steps */}
            <div className="space-y-16 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="w-16 h-16 bg-dark-950 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-primary-400">1</span>
                  </div>
                  <div className="hidden md:block h-1 w-8 bg-primary-900"></div>
                </div>
                <div className="ml-24 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">Discovery</h3>
                  <p className="text-gray-300">
                    We start by understanding your business goals, target audience, and project requirements. This phase includes research, interviews, and collaborative workshops to ensure we're aligned on objectives.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 md:order-2">
                  <div className="hidden md:block h-1 w-8 bg-primary-900"></div>
                  <div className="w-16 h-16 bg-dark-950 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-primary-400">2</span>
                  </div>
                </div>
                <div className="ml-24 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Planning & Design</h3>
                  <p className="text-gray-300">
                    We create wireframes, prototypes, and visual designs to map out the user experience. This phase focuses on information architecture, interface design, and establishing the visual language.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="w-16 h-16 bg-dark-950 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-primary-400">3</span>
                  </div>
                  <div className="hidden md:block h-1 w-8 bg-primary-900"></div>
                </div>
                <div className="ml-24 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">Development</h3>
                  <p className="text-gray-300">
                    Our development team brings the designs to life, writing clean, efficient code and implementing all functionality. We follow best practices for performance, security, and maintainability.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8 md:order-2">
                  <div className="hidden md:block h-1 w-8 bg-primary-900"></div>
                  <div className="w-16 h-16 bg-dark-950 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-primary-400">4</span>
                  </div>
                </div>
                <div className="ml-24 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Testing & Refinement</h3>
                  <p className="text-gray-300">
                    We thoroughly test the product for functionality, usability, performance, and compatibility across devices. Based on feedback, we make refinements to ensure everything works flawlessly.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
                  <div className="w-16 h-16 bg-dark-950 border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-2xl font-bold text-primary-400">5</span>
                  </div>
                  <div className="hidden md:block h-1 w-8 bg-primary-900"></div>
                </div>
                <div className="ml-24 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">Launch & Support</h3>
                  <p className="text-gray-300">
                    Once everything is approved, we deploy the project to production. We provide ongoing support, maintenance, and optimizations to ensure continued success post-launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;