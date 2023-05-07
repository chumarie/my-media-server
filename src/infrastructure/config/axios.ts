import axios from 'axios';

const apiKey = import.meta.env.VITE_EMBY_SERVER_API_KEY;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_EMBY_SERVER_API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        config.url = `${config.url}?api_key=${apiKey}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
