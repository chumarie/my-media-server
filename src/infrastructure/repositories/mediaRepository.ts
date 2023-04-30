import type { Http } from '@domain/repositories/Http';
import { MediaRepository } from '@domain/repositories/MediaRepository';
import type { MediaDTO } from '@infrastructure/http/dto/MediaDTO';

export const mediaRepository = (client: Http): MediaRepository => ({
    getMediaById: async (id) => {
        const media = await client.get<MediaDTO>(`Users/0702d46b75e74771aebcfbe9064b99a7/Items/${id}`);
        return {
            id: media.Id,
            studio: media.Studios,
            production: media.ProductionYear,
            name: media.Name,
            description: media.Overview,
            genres: media.Genres,
            tagline: media.Taglines,
            thumb: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${id}/Images/Thumb?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            logo: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${id}/Images/Logo?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            image: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            backgroundImage: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${id}/Images/Backdrop?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            videoUrl: `${import.meta.env.VITE_EMBY_SERVER_API_URL}Videos/${id}/stream?static=true&allowVideoStreamCopy=true&api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
        }
    },
    
    getMediaByTitle: async (title) => {
        const { Items } = await client.get<MediaDTO>(`Items`, { IncludeItemTypes: 'Movie', SearchTerm: title, Fields: 'Overview', Recursive: 'true' });
        return {
            id: Items[0].Id,
            studio: Items[0].Studios,
            production: Items[0].ProductionYear,
            name: Items[0].Name,
            genres: Items[0].Genres,
            tagline: Items[0].Taglines,
            thumb: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${Items[0]}/Images/Thumb?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            description: Items[0].Overview,
            logo: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${Items[0]}/Images/Logo?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            image: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${Items[0].Id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            backgroundImage: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/emby/Items/${Items[0].Id}/Images/Backdrop?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`,
            videoUrl: `${import.meta.env.VITE_EMBY_SERVER_API_URL}/Videos/${Items[0].Id}/stream?static=true&allowVideoStreamCopy=true&api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
        }
    }
});
