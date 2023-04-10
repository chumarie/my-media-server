import { Media } from '@domain/models/Media';

export interface MediaRepository {
    getMediaById: (id: string, parentId: string) => Promise<Media>;
}