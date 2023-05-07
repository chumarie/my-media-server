/**
 * Represents a category of media.
 * @typedef {Object} Category
 * @property {string} id - The unique identifier for the category.
 * @property {string} name - The name of the category.
 * @property {string} image - The URL of the image associated with the category.
 * @property {string} type - The type of media associated with the category.
 */
export type Category = {
    id: string;
    name: string;
    image: string;
    type: string;
};
