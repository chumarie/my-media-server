import { Media } from '@domain/models/Media';

export interface MediaRepository {
    getMedias: () => Promise<Media[]>;
    getMediaById: (id: number, parentId: number) => Promise<Media[]>;
}