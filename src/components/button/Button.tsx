import React from 'react';
import './Button.scss';

interface IButton {
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className: string;
  disabled?: boolean;
  handleClick?: () => void;
}
const Button: React.FC<IButton> = ({
  label,
  type,
  className,
  disabled,
  handleClick,
}) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
