import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  withStars?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
  withStars = false,
}) => {
  const bgClass = dark ? 'bg-dark-900' : 'bg-dark-950';
  const starClass = withStars ? 'star-bg' : '';
  
  return (
    <section id={id} className={`section ${bgClass} ${starClass} ${className}`}>
      <div className="container">
        {title && (
          <h2 className="section-title">
            <span className="gradient-text">{title}</span>
          </h2>
        )}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;