import { Http } from '@domain/repositories/Http';
import { Category } from '@domain/models/Category';
import { CategoryRepository } from '@domain/repositories/CategoryRepository';
import { CategoryDTO } from '@infrastructure/http/dto/CategoryDTO';

export const categoryRepository = (client: Http): CategoryRepository => ({
    getCategories: async () => {
        const medias = await client.get<CategoryDTO>('Library/MediaFolders');
        return medias.Items.map((categoryDto: CategoryDTO): Category => (
            { 
                id: categoryDto.Id, 
                name: categoryDto.Name,
                image: `http://192.168.1.5:8096/emby/Items/${categoryDto.Id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
            }
        ));
    },

    getCategoryById: async id => {
        const medias = await client.get<CategoryDTO>('Users/0702d46b75e74771aebcfbe9064b99a7/Items', { ParentId: id });
        return medias.Items.map((categoryDto: CategoryDTO): Category => (
            { 
                id: categoryDto.Id,
                name: categoryDto.Name,
                image: `http://192.168.1.5:8096/emby/Items/${categoryDto.Id}/Images/Primary?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6`
            }
        ));
    }
});
