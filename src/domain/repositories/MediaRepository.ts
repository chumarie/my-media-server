import { Media } from '@domain/models/Media';

export interface MediaRepository {
    getMediaById: (id: string) => Promise<Media>;
    getMediaByTitle: (title: string) => Promise<Media>;
}