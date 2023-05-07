import { MediaRepository } from '@domain/repositories/MediaRepository';

/**
 * A service for interacting with media.
 * @param repository - The repository to use for data access.
 * @returns A MediaRepository object with methods for retrieving media by ID and title.
 */
export const mediaService = (repository: MediaRepository): MediaRepository => ({
    /**
     * Retrieves a media item by ID.
     * @param id - The ID of the media item to retrieve.
     * @returns A Media object.
     */
    getMediaById: id => {
        return repository.getMediaById(id);
    },

    /**
     * Retrieves a media item by title.
     * @param title - The title of the media item to retrieve.
     * @returns A Media object.
     */
    getMediaByTitle: title => {
        return repository.getMediaByTitle(title);
    }
});
