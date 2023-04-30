import type { Http } from '@domain/repositories/Http';
import { MediaRepository } from '@domain/repositories/MediaRepository';
import type { MediaDTO } from '@infrastructure/http/dto/MediaDTO';

export const mediaRepository = (client: Http): MediaRepository => ({
    getMediaById: async (id, parentId) => {
        const media = await client.get<MediaDTO>(`Users/0702d46b75e74771aebcfbe9064b99a7/Items/${id}`, { ParentId: parentId });
        return {
            id: media.Id,
            name: media.Name,
            description: media.Overview,
            image: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            videoUrl: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Videos/${id}/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
        }
    },
    
    getMediaByTitle: async (title) => {
        const { Items } = await client.get<MediaDTO>(`Items`, { IncludeItemTypes: 'Movie', SearchTerm: title, Fields: 'Overview', Recursive: 'true' });
        return {
            id: Items[0].Id,
            name: Items[0].Name,
            description: Items[0].Overview,
            image: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${Items[0].Id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            videoUrl: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Videos/${Items[0].Id}/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
        }
    }
});
