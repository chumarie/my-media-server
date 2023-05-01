import { Http } from '@domain/repositories/Http';
import { Category } from '@domain/models/Category';
import { CategoryRepository } from '@domain/repositories/CategoryRepository';
import { CategoryDTO } from '@infrastructure/http/dto/CategoryDTO';
import { EMBY_API_KEY, EMBY_API_URL, EMBY_USER_ID } from '@infrastructure/constants/global';

/**
 * Defines a categoryRepository function that takes a client of type Http and returns a CategoryRepository object
 * @param client - an Http client
 * @returns a CategoryRepository object
 */
export const categoryRepository = (client: Http): CategoryRepository => ({
    /**
     * Retrieves all categories
     * @returns an array of Category objects
     */
    getCategories: async () => {
        const medias = await client.get<CategoryDTO>('Library/MediaFolders');
        return medias.Items.map((categoryDto: CategoryDTO): Category => {
            return {
                id: categoryDto.Id,
                name: categoryDto.Name,
                image: `${EMBY_API_URL}/emby/Items/${categoryDto.Id}/Images/Primary?api_key=${EMBY_API_KEY}`,
                type: categoryDto.CollectionType
            };
        });
    },

    /**
     * Retrieves a category by id
     * @param id - the id of the category to retrieve
     * @returns an array of Category objects
     */
    getCategoryById: async id => {
        const medias = await client.get<CategoryDTO>(`Users/${EMBY_USER_ID}/Items`, { ParentId: id });
        return medias.Items.map(
            (categoryDto: CategoryDTO): Category => ({
                id: categoryDto.Id,
                name: categoryDto.Name,
                image: `${EMBY_API_URL}/emby/Items/${categoryDto.Id}/Images/Primary?api_key=${EMBY_API_KEY}`,
                type: categoryDto.CollectionType
            })
        );
    },

    /**
     * Retrieves all resumes
     * @returns an array of Category objects
     */
    getResumes: async () => {
        const medias = await client.get<CategoryDTO>(`Users/${EMBY_USER_ID}/Items/Resume`, {
            EnableImageTypes: 'Backdrop'
        });
        return medias.Items.map((categoryDto: CategoryDTO): Category => {
            return {
                id: categoryDto.Id,
                name: categoryDto.Name,
                image: `${EMBY_API_URL}/emby/Items/${categoryDto.Id}/Images/Primary?api_key=${EMBY_API_KEY}`,
                type: categoryDto.CollectionType
            };
        });
    }
});
