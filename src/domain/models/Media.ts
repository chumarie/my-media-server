/**
 * Represents a media.
 * @typedef {Object} Media
 * @property {string} id - The unique identifier for the media.
 * @property {string} name - The name of the media.
 * @property {string} description - A description of the media.
 * @property {string} image - The URL of the image associated with the media.
 * @property {string} backgroundImage - The URL of the background image associated with the media.
 * @property {string} production - The production company associated with the media.
 * @property {string} videoUrl - The URL of the video associated with the media.
 * @property {string} logo - The URL of the logo associated with the media.
 * @property {Array<string>} genres - An array of genre IDs associated with the media.
 * @property {string} tagline - The tagline associated with the media.
 * @property {any} studio - The studio associated with the media.
 * @property {string} thumb - The URL of the thumbnail image associated with the media.
 */
export type Media = {
    id: string;
    name: string;
    description: string;
    image: string;
    backgroundImage: string;
    production: string;
    videoUrl: string;
    logo: string;
    genres: Array<string>;
    tagline: string;
    studio: any;
    thumb: string;
};
