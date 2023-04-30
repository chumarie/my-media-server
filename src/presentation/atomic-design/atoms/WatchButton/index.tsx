import { MouseEvent } from 'react';

import clsx from 'clsx';

import caretRightIcon from '@presentation/assets/caret-right.png';

interface WatchButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  className?: string;
  }

const WatchButton = ({ label, onClick, width, className }: WatchButtonProps) => {
    return (
        <button onClick={onClick} className={clsx(`bg-[#ff0068] px-4 py-2 flex justify-center items-center gap-3 rounded-md`, width || 'w-full', className)}>{label}
        <img src={caretRightIcon} />
        </button>
    );
};
  
  export default WatchButton;