import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createStars = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      // Remove existing stars
      const existingStars = hero.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      const starCount = Math.floor(window.innerWidth / 15);
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        hero.appendChild(star);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-dark-950 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container relative z-10 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Building</span>
              <span className="gradient-text">Stellar Digital</span>
              <span className="block">Experiences</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We're a team of passionate developers and designers creating exceptional web solutions for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button to="/services" variant="primary" size="lg">
                Our Services
              </Button>
              <Button to="/projects" variant="outline" size="lg" icon={<ArrowRight size={20} />}>
                View Our Work
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10 animate-float">
              {/* Abstract geometric shape representing code and design */}
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500/30 rounded-lg transform rotate-12 backdrop-blur-sm border border-primary-400/30"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-500/30 rounded-lg transform -rotate-12 backdrop-blur-sm border border-accent-400/30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary-500/30 rounded-full backdrop-blur-sm border border-secondary-400/30"></div>
                
                {/* Code elements */}
                <div className="absolute top-10 left-10 bg-dark-900/80 rounded p-2 backdrop-blur-sm text-xs font-mono text-primary-300 border border-primary-700/30">
                  &lt;div className="astral"&gt;
                </div>
                <div className="absolute bottom-10 right-16 bg-dark-900/80 rounded p-2 backdrop-blur-sm text-xs font-mono text-accent-300 border border-accent-700/30">
                  const stellar = () =&gt; magic();
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 right-0 w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;