import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <video src={videoUrl} controls>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default DetailPage;