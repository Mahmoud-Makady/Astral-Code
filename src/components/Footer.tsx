import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';
import { COMPANY_INFO, NAV_LINKS, SOCIAL_LINKS } from '../utils/constants';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Dynamically get icon from Lucide
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="bg-dark-900 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo size="md" />
            <p className="text-gray-400 mt-4 mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#frontend" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link to="/services#backend" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link to="/services#web-design" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="text-gray-400 hover:text-primary-400 transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#mobile" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Mobile Applications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-primary-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>{COMPANY_INFO.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-800 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;