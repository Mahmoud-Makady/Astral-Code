import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center bg-dark-950 overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you and discuss how we can help.
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* FAQ Section */}
      <section className="section bg-dark-900">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about our services and process.
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
              <h3 className="text-xl font-bold mb-3">What types of projects do you work on?</h3>
              <p className="text-gray-300">
                We work on a wide range of web and mobile projects, including corporate websites, e-commerce platforms, web applications, mobile apps, and custom software solutions. Our expertise spans across various industries, from startups to established businesses.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
              <h3 className="text-xl font-bold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
              <h3 className="text-xl font-bold mb-3">What is your pricing structure?</h3>
              <p className="text-gray-300">
                We offer flexible pricing options, including fixed-price quotes for well-defined projects and hourly rates for ongoing work. Our pricing is transparent and based on the project's scope, complexity, and timeline. We provide detailed proposals so you know exactly what you're investing in.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
              <h3 className="text-xl font-bold mb-3">Do you provide ongoing maintenance and support?</h3>
              <p className="text-gray-300">
                Yes, we offer ongoing maintenance and support packages to ensure your website or application continues to run smoothly after launch. These packages can include regular updates, security monitoring, performance optimization, and technical support.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
              <h3 className="text-xl font-bold mb-3">How do we get started working together?</h3>
              <p className="text-gray-300">
                The process begins with an initial consultation to discuss your project requirements and goals. From there, we'll provide a proposal outlining our approach, timeline, and pricing. Once approved, we'll kick off the project with a discovery phase to gather detailed requirements before moving into design and development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;