import { MouseEvent } from 'react';

import prevIcon from '@presentation/assets/arrow-left.png';
import nextIcon from '@presentation/assets/arrow-right.png';

interface ButtonWrapperProps {
    onPrevButtonClick?: (event: React.MouseEvent<MouseEvent>) => void;
    onNextButtonClick?: (event: React.MouseEvent<MouseEvent>) => void;
  }
  
  const ButtonWrapper = ({ onPrevButtonClick, onNextButtonClick }: ButtonWrapperProps) => {

    //console.log("onPrevButtonClick", onPrevButtonClick);
      return (
          <div className="flex justify-between w-full h-[15px]">
            <img src={prevIcon} onClick={onPrevButtonClick}/>
            <img src={nextIcon} onClick={onNextButtonClick} />
          </div>
      );
  };
    
    export default ButtonWrapper;