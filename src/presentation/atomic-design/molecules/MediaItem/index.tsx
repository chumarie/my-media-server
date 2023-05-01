import { useNavigate } from 'react-router-dom';

import star from '@presentation/assets/star.png';
import H3 from '@presentation/atomic-design/atoms/typography/H3';
import Subtitle from '@presentation/atomic-design/atoms/typography/Subtitle';
import WatchButton from '@presentation/atomic-design/atoms/WatchButton';

interface MediaItemProps {
    id: string;
    image: string;
    name: string;
}

const MediaItem = ({ id, image, name }: MediaItemProps) => {
    const navigate = useNavigate();

    return (
        <div className='relative overflow-hidden'>
            <img className='rounded-md' src={image} />
            <div className='overlay border-[#f1f1f1] border opacity-0 hover:opacity-100 rounded-md'>
                <div>
                    <img src={star} className='w-[10px]' />
                    <Subtitle>7.9</Subtitle>
                </div>
                <div>
                    <H3>{name}</H3>
                    <WatchButton label='Watch Now' onClick={() => navigate(`/category/6/item/${id}`)} />
                </div>
            </div>
        </div>
    );
};

export default MediaItem;
