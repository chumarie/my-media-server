import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Player } from 'video-react';

import { mediaService } from '@application/services/MediaService';
import { Media } from '@domain/models/Media';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import BaseLayout from '@presentation/atomic-design/templates/BaseLayout/BaseLayout';
import Tag from '@presentation/atomic-design/atoms/Tag';



const DetailPage = () => {
    const { categoryId, itemId } = useParams();
    const [media, setMedia] = useState<Media | null>(null);

    const getMedia = useCallback(async () => {
        try {
            if (categoryId && itemId) {
                const responseMedia = await mediaService(mediaRepository(httpAxios)).getMediaById(itemId);
                setMedia(responseMedia);
            }
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getMedia();
    }, []);

    if (!media) {
        return null;
    }

    const { description, production, videoUrl, logo, backgroundImage, thumb, genres, studio } = media;
    return (
        <BaseLayout>
            <div className="w-full flex">
                <div className="flex-1 w-full h-full bg-cover" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                    <div className="overlay"></div>
                    <div className="px-[120px] py-[55px] h-full z-10 relative flex gap-10 items-center">
                        <div className="w-[60%]">
                            <img src={logo} className="w-[400px] mb-6" />
                            <div className="w-[80%] text-ellipsis overflow-scroll max-h-[100px] mb-5">
                                {description}
                            </div>
                            <div className="flex gap-3 mb-6">
                                {genres.map(genre => (
                                    <Tag label={genre} />
                                ))}
                            </div>
                            <div>
                                <h3>{studio.length > 0 && studio[0].Name} - {production}</h3>
                            </div>
                        </div>
                        <div className="flex-1 h-[300px]">
                            <Player
                                playsInline
                                poster={thumb}
                                src={videoUrl}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};


export default DetailPage;