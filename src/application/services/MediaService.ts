import { MediaRepository } from '@domain/repositories/MediaRepository';

export const mediaService = (repository: MediaRepository): MediaRepository => ({
    getMediaById: id => {
        return repository.getMediaById(id);
    },
    getMediaByTitle: title => {
        return repository.getMediaByTitle(title);
    }
});
