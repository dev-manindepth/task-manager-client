import { ChangeEvent, CSSProperties } from 'react';
import './Input.scss';

interface IInputProps {
  name: string;
  type: string;
  id: string;
  labelText?: string;
  value?: any;
  className?: string;
  placeholder?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

const Input: React.FC<IInputProps> = ({
  id,
  name,
  type,
  className,
  handleChange,
  placeholder,
  style,
  value,
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        className={`${className ? className : ''}`}
        placeholder={placeholder ? placeholder : ''}
        onChange={handleChange}
        style={style}
        value={value}
      />
    </>
  );
};

export default Input;
