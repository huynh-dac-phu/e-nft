import React from 'react'

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
};

const Button = ({ children, disabled = false, variant = 'primary' }: Props) => {
  const variants: Record<string, string> = {
    primary: 'bg-yellow text-black-secondary hover:bg-yellow-secondary',
    secondary:
      'outline outline-1 outline-yellow-secondary outline-inset text-neutral hover:outline-yellow-tertiary',
  };
  return (
    <button
      className={`font-barlow h-9 cursor-pointer rounded-full px-6 text-base font-[900] uppercase italic transition-all duration-300 ${variants[variant]} ${disabled ? 'opacity-40' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button