import MediaItem from '@presentation/atomic-design/molecules/MediaItem/MediaItem';

interface MediaListProps {
    items: Array<{ id: string; image: string; name: string }>;
    hasWatchIcon?: boolean;
}

/**
 * MediaList component that displays a list of MediaItems
 * @param items - an array of MediaItems to be displayed
 */
const MediaList = ({ items }: MediaListProps) => {
    return (
        <div className='flex flex-wrap gap-3 justify-center overflow-scroll'>
            {items.map(item => (
                <div className='w-[150px]'>
                    <MediaItem key={item.id} id={item.id} image={item.image} name={item.name} />
                </div>
            ))}
        </div>
    );
};

export default MediaList;
