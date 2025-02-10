'use client';

import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      className={`w-[145px] h-[40px] rounded-[12px] shadow-md transition-all active:scale-95 ${
        variant === 'primary'
          ? 'bg-gradient-to-b from-[#3A8DFF] to-[#1369D9] text-white hover:shadow-lg'
          : 'border border-[#E0E8F2] bg-white text-black shadow-sm hover:shadow-md'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
