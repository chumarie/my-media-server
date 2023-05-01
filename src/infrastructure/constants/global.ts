// Env contants
export const EMBY_API_KEY = import.meta.env.VITE_EMBY_SERVER_API_KEY;
export const EMBY_API_URL = import.meta.env.VITE_EMBY_SERVER_API_URL;
export const EMBY_USER_ID = '0702d46b75e74771aebcfbe9064b99a7';

// Api constants
interface category {
    [key: string]: { label: string };
}

export const API_CATEGORY: category = {
    '6': {
        label: 'Animation Library'
    },
    '4': {
        label: 'Movie Library'
    },
    '3353': {
        label: 'Documentary Library'
    }
};
