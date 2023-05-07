import { SyntheticEvent } from 'react';

import prevIcon from '@presentation/assets/arrow-left.png';
import nextIcon from '@presentation/assets/arrow-right.png';

interface ButtonWrapperProps {
    onPrevButtonClick?: (event: SyntheticEvent<HTMLImageElement>) => void;
    onNextButtonClick?: (event: SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * ButtonWrapper component that displays two buttons for navigating between items
 * @param onPrevButtonClick - function to be called when the previous button is clicked
 * @param onNextButtonClick - function to be called when the next button is clicked
 */
const ButtonWrapper = ({ onPrevButtonClick, onNextButtonClick }: ButtonWrapperProps) => {
    return (
        <div className='flex justify-between w-full h-[15px]'>
            <img src={prevIcon} onClick={onPrevButtonClick} />
            <img src={nextIcon} onClick={onNextButtonClick} />
        </div>
    );
};

export default ButtonWrapper;
