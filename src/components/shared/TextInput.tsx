import * as React from 'react';
import { twMerge } from 'tailwind-merge';

type InputSize = 'large' | 'medium' | 'small';

interface TextInputProps {
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  size?: InputSize;
  color?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  size,
}) => {
  let inputSize = '';

  switch (size) {
    case 'large':
      inputSize = 'md:p-3';
      break;
    case 'medium':
      inputSize = 'md:p-2';
      break;
    case 'small':
      inputSize = 'md:p-1';
      break;

    default:
      inputSize = 'md:p-3';
      break;
  }

  return (
    <input
      value={value}
      onChange={onChange}
      className={twMerge(
        'border-none outline-none p-2 text-sm md:text-lg bg-[#f7f1f1] rounded-md flex-grow shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
        inputSize,
        className
      )}
      placeholder={placeholder}
    />
  );
};
