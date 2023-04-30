import ReactSlider from 'react-slick';
import { useNavigate } from 'react-router-dom';

import WatchButton from '@presentation/atomic-design/atoms/WatchButton';
import star from '@presentation/assets/star.png';
import Subtitle from '@presentation/atomic-design/atoms/typography/Subtitle';
import H3 from '@presentation/atomic-design/atoms/typography/H3';
import { Category } from '@domain/models/Category';

interface SliderProps {
    items: Category[] | [];
    sliderRef: any;
}
  
const settings = {
    speed: 500,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    slideMargin: 10
};

const Slider = ({ items, sliderRef }: SliderProps) => {
    const navigate = useNavigate();
    return (
        <ReactSlider {...settings} ref={sliderRef}>
            {items.map(item => (
                <li key={item.id} className="relative overflow-hidden">
                    <img className="rounded-2xl" src={item.image} />
                    <div className="overlay border-[#f1f1f1] border opacity-0 hover:opacity-100 rounded-2xl">
                        <div>
                            <img src={star} className="w-[10px]"/>
                            <Subtitle>7.9</Subtitle>
                        </div>
                        <div>
                            <H3>{item.name}</H3>
                            <WatchButton label='Watch Now'onClick={() => navigate(`/category/${item.id}/item/6`)} />
                        </div>
                    </div>
                </li>
            ))}
        </ReactSlider>
    );
  };
  
  export default Slider;