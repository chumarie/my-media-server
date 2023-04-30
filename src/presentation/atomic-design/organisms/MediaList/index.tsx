import MediaItem from '@presentation/atomic-design/molecules/MediaItem';

interface MediaListProps {
    items: Array,
    hasWatchIcon?: boolean
  }
  
  const MediaList = ({ items, hasWatchIcon = false}: MediaListProps) => {
      return (
          <div className="flex flex-wrap gap-3 justify-center overflow-scroll">
                {items.map(item => (
                    <div className="w-[150px]">
                        <MediaItem id={item.id} image={item.image} name={item.name}/>
                    </div>
                ))}
          </div>
      );
  };
    
    export default MediaList;