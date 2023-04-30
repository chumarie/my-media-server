import { MediaRepository } from '@domain/repositories/MediaRepository';

export const mediaService = (repository: MediaRepository): MediaRepository => ({
    getMediaById: (id, parentId) => {
        return repository.getMediaById(id, parentId);
    },
    getMediaByTitle: (title) => {
        return repository.getMediaByTitle(title);
    }
});
