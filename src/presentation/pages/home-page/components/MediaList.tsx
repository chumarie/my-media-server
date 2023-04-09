import { useCallback, useEffect, useState } from 'react';

import { Media } from '@domain/models/Media';
import { mediaService } from '@application/services/MediaService';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';

export const MediaList = () => {
    const [medias, setMedias] = useState<Media[]>([]);
    
    const getMedias = useCallback(async () => {
        try {
            const responseProducts = await mediaService(mediaRepository(httpAxios)).getMedias();
            setMedias(responseProducts);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getMedias();
    }, []);

    console.log('medias', medias)


    return (
        <div>
            <h2>List of medias</h2>
            {/* <video src="http://192.168.1.5:8096/emby/Videos/105/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6" controls>
                Your browser does not support the video tag.
            </video> */}
            <ul>
                {medias.map(media => (
                    <li key={media.id}>
                        <button>
                            {media.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
