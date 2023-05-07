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

/**
 * WatchButton component that displays a button
 * @param label - the label to be displayed on the button
 * @param onClick - function to be called when the button is clicked
 * @param width - the width of the button
 * @param className - additional class names to be applied to the button
 * @param hasIcon - boolean to know if display icon image
 */
const WatchButton = ({ label, onClick, width, className, hasIcon = false }: WatchButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                `bg-[#ff0068] sm:text-base text-xs px-4 py-2 flex justify-center items-center gap-3 rounded-md ease-[transform(0.68, -0.6, 0.32, 1.6)] hover:brightness-125`,
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
