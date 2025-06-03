import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Card;