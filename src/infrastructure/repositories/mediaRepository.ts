import { Http } from '@domain/repositories/Http';
import { Media } from '@domain/models/Media';
import { MediaRepository } from '@domain/repositories/MediaRepository';
import { MediaDTO } from '@infrastructure/http/dto/MediaDTO';

export const mediaRepository = (client: Http): MediaRepository => ({
    getMedias: async () => {
        const medias = await client.get<MediaDTO>('Library/MediaFolders');
        return medias.Items.map((mediaDto: MediaDTO): Media => ({ id: mediaDto.Id, name: mediaDto.Name }));
    },

    getMediaById: async (id, parentId) => {
        const media = await client.get<MediaDTO>(`Users/0702d46b75e74771aebcfbe9064b99a7/Items/${id}`, { ParentId: parentId });
        return { 
            id: media.Id,
            name: media.Name,
            description: media.Overview,
            videoUrl: `http://192.168.1.5:8096/emby/Videos/${id}/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
        };
    }
});
