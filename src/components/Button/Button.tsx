import { FC } from 'react';
import { IButton } from './Button.interface';

const Button: FC<IButton> = ({ children }) => {
  return (
    <button
      type='button'
      className='inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {children}
    </button>
  );
};

export default Button;
