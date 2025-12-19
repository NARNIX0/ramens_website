import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'lg',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-display font-semibold rounded-full transition-all duration-200 ease-out flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none';
  
  const variants = {
    primary: 'bg-accent text-white shadow-md hover:brightness-90 hover:shadow-lg hover:scale-102 active:scale-98 active:shadow-sm',
    secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white shadow-none hover:shadow-md hover:scale-102 active:scale-98',
    ghost: 'bg-transparent border border-gray text-dark hover:bg-light hover:border-secondary hover:text-dark hover:shadow-sm',
  };

  const sizes = {
    sm: 'px-4 py-2 text-base',
    md: 'px-6 py-2.5 text-base md:text-lg',
    lg: 'px-6 py-2 text-base md:px-8 md:py-3 md:text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

