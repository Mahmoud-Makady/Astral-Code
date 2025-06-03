import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import Button from './ui/Button';
import { NAV_LINKS } from '../utils/constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    
    // Check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="z-10">
          <Logo size={isScrolled ? 'sm' : 'md'} />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button variant="primary" to="/contact">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 p-2 text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-dark-950/98 flex flex-col items-center justify-center transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xl ${isActive ? 'text-primary-400 font-medium' : 'text-white'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Button variant="primary" to="/contact" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;