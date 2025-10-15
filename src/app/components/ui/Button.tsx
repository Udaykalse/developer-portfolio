import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  type = 'button',
  className = '' 
}: ButtonProps) => {
  const baseStyles = `
    px-6 py-3 rounded-lg font-medium 
    transition-all duration-300 ease-in-out 
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    transform transition-transform duration-300 hover:scale-105
    active:scale-95
  `;
  
  const variants = {
    primary: 'bg-primary text-black hover:bg-blue-600 shadow-lg hover:shadow-xl border',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md hover:shadow-lg border'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;