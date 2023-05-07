import type { Http } from '@domain/repositories/Http';
import { MediaRepository } from '@domain/repositories/MediaRepository';
import { EMBY_API_KEY, EMBY_API_URL, EMBY_USER_ID } from '@infrastructure/constants/global';
import type { MediaDTO } from '@infrastructure/http/dto/MediaDTO';

/**
 * Defines a mediaRepository function that takes a client of type Http and returns a MediaRepository object
 * @param client - an Http client
 * @returns a MediaRepository object
 */
export const mediaRepository = (client: Http): MediaRepository => ({
    /**
     * Retrieves a media by id
     * @param id - the id of the media to retrieve
     * @returns an object of Media
     */
    getMediaById: async id => {
        const media = await client.get<MediaDTO>(`Users/${EMBY_USER_ID}/Items/${id}`);
        return {
            id: media.Id,
            studio: media.Studios,
            production: media.ProductionYear,
            name: media.Name,
            description: media.Overview,
            genres: media.Genres,
            tagline: media.Taglines,
            thumb: `${EMBY_API_URL}/emby/Items/${id}/Images/Thumb?api_key=${EMBY_API_KEY}`,
            logo: `${EMBY_API_URL}/emby/Items/${id}/Images/Logo?api_key=${EMBY_API_KEY}`,
            image: `${EMBY_API_URL}/emby/Items/${id}/Images/Primary?api_key=${EMBY_API_KEY}`,
            backgroundImage: `${EMBY_API_URL}/emby/Items/${id}/Images/Backdrop?api_key=${EMBY_API_KEY}`,
            videoUrl: `${EMBY_API_URL}Videos/${id}/stream?static=true&api_key=${EMBY_API_KEY}`
        };
    },

    /**
     * Retrieves a media by title
     * @param id - the title of the media to retrieve
     * @returns an object of Media
     */
    getMediaByTitle: async title => {
        const { Items } = await client.get<MediaDTO>(`Items`, {
            IncludeItemTypes: 'Movie',
            SearchTerm: title,
            Fields: 'Overview',
            Recursive: 'true'
        });

        const item = Items[0];
        return {
            id: item.Id,
            studio: item.Studios,
            production: item.ProductionYear,
            name: item.Name,
            genres: item.Genres,
            tagline: item.Taglines,
            thumb: `${EMBY_API_URL}/emby/Items/${item}/Images/Thumb?api_key=${EMBY_API_KEY}`,
            description: item.Overview,
            logo: `${EMBY_API_URL}/emby/Items/${item}/Images/Logo?api_key=${EMBY_API_KEY}`,
            image: `${EMBY_API_URL}/emby/Items/${item.Id}/Images/Primary?api_key=${EMBY_API_KEY}`,
            backgroundImage: `${EMBY_API_URL}/emby/Items/${item.Id}/Images/Backdrop?api_key=${EMBY_API_KEY}`,
            videoUrl: `${EMBY_API_URL}/Videos/${item.Id}/stream?static=true&&api_key=${EMBY_API_KEY}`
        };
    }
});
