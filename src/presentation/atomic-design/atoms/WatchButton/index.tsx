import { MouseEvent } from 'react';

import clsx from 'clsx';

import caretRightIcon from '@presentation/assets/caret-right.png';

interface WatchButtonProps {
    className?: string;
    hasIcon?: boolean;
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    width?: string;
}

const WatchButton = ({ label, onClick, width, className, hasIcon = false }: WatchButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                `bg-[#ff0068] sm:text-base text-xs px-4 py-2 flex justify-center items-center gap-3 rounded-md`,
                width || 'w-full',
                className
            )}
        >
            {label}
            {hasIcon && <img src={caretRightIcon} />}
        </button>
    );
};

export default WatchButton;
