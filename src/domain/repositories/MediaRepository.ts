import { Media } from '@domain/models/Media';

export interface MediaRepository {
    getMediaById: (id: string, parentId: string) => Promise<Media>;
    getMediaByTitle: (title: string) => Promise<Media>;
}