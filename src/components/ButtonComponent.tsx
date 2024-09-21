import React, { ReactNode } from 'react';

interface ButtonComponentProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // HTML button types
  variant?: 'primary' | 'secondary' | 'danger'; // Different style variants
  disabled?: boolean;
  children?: ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  onClick = () => {},
  type = 'button',
  variant = 'primary',
  disabled = false,
  children,
}) => {
  const baseStyles =
    'px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 font-semibold';

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
  };

  const disabledStyles = 'bg-gray-300 text-gray-600 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]}`}>
      {children || label}
    </button>
  );
};

export default ButtonComponent;
