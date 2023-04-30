// Env contants
export const EMBY_API_KEY = import.meta.env.VITE_EMBY_SERVER_API_KEY;


// Api constants
interface category {
    [key: string]: { label: string };
}

export const API_CATEGORY: category = {
    "6": {
        label: "Animation Library"
    },
    "4": {
        label: "Movie Library"
    },
    "3353": {
        label: "Documentary Library"
    }
}