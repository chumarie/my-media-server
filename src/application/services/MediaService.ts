import { MediaRepository } from '@domain/repositories/MediaRepository';

export const mediaService = (repository: MediaRepository): MediaRepository => ({
    getMedias: () => {
        return repository.getMedias();
    },
    getMediaById: (id, parentId) => {
        return repository.getMediaById(id, parentId);
    }
});
