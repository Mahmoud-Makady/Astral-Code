import React from 'react';
import { Star } from 'lucide-react';
import Logoo from '../../components/ui/logoo.png';
interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withText = true }) => {
  const sizes = {
    sm: 'h-7 w-7',
    md: 'h-9 w-9',
    lg: 'h-12 w-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizes[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full opacity-70 blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Star className="text-white" size={size === 'sm' ? 16 : size === 'md' ? 20 : 28} fill="white" />
        </div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-1 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>
      
      {withText && (
        <span className={`font-display font-bold ${textSizes[size]} text-white`}>
          {/* Astral<span className="text-primary-400">-Code</span> */}
          <img className='logoo' src={Logoo} alt="logo" />
        </span>
      )}
    </div>
  );
};

export default Logo;