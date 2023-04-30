import { MouseEvent } from 'react';

interface WatchButtonProps {
  label?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  }

const WatchButton = ({ label, onClick }: WatchButtonProps) => {
    return (
        <button onClick={onClick} className={`bg-[#ff0068] px-4 py-2 rounded-2xl w-full mb-1`}>{label}</button>
    );
};
  
  export default WatchButton;