import type { Http } from '@domain/repositories/Http';
import { Media } from '@domain/models/Media';
import { MediaRepository } from '@domain/repositories/MediaRepository';
import type { MediaDTO } from '@infrastructure/http/dto/MediaDTO';

export const mediaRepository = (client: Http): MediaRepository => ({
    getMediaById: async (id, parentId) => {
        const media = await client.get<MediaDTO>(`Users/0702d46b75e74771aebcfbe9064b99a7/Items/${id}`, { ParentId: parentId });

        //return media((mediaDTO: MediaDTO): Media => (
           return {
                id: media.Id,
                name: media.Name,
                description: media.Overview,
                videoUrl: `http://27.78.33.65:8096/emby/Videos/${id}/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
            }
        //));
    }
});
