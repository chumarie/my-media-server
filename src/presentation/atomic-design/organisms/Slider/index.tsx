import ReactSlider from 'react-slick';

import { Category } from '@domain/models/Category';
import MediaItem from '@presentation/atomic-design/molecules/MediaItem';

interface SliderProps {
    items: Category[] | [];
    sliderRef: any;
}
  
const settings = {
    speed: 500,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slideMargin: 10,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
};

const Slider = ({ items, sliderRef }: SliderProps) => {
    return (
        <ReactSlider {...settings} ref={sliderRef}>
            {items.map(item => (
                <MediaItem id={item.id} image={item.image} name={item.name} />
            ))}
        </ReactSlider>
    );
  };
  
  export default Slider;