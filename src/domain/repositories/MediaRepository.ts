import { Media } from '@domain/models/Media';

/**
 * Represents a repository for media.
 */
export interface MediaRepository {
    getMediaById: (id: string) => Promise<Media>;
    getMediaByTitle: (title: string) => Promise<Media>;
}
