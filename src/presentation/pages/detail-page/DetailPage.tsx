import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Player } from 'video-react';

import { Media } from '@domain/models/Media';
import { mediaService } from '@application/services/MediaService';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';


const DetailPage = () => {
    const { categoryId, itemId } = useParams();
    const [media, setMedia] =  useState<Media[]>([]);

    const getMedia = useCallback(async () => {
        try {
            console.log('itemId', itemId)
            console.log('categoryId', categoryId)
            const responseMedia = await mediaService(mediaRepository(httpAxios)).getMediaById(categoryId, itemId);
            setMedia(responseMedia);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getMedia();
    }, []);

    const { id, name, description, videoUrl } = media;

    return (
        <div className="category-list-page">
            <h2>{name}</h2>
            <span>
                { description }
            </span>
            <Player
          playsInline
          poster="http://192.168.1.5:8096/emby/Items/6/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6&ParentId=3195"
          src={videoUrl}
        />
        </div>
    );
};

export default DetailPage;