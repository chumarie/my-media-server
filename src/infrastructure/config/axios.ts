import axios from 'axios';

const apiKey = import.meta.env.VITE_EMBY_SERVER_API_KEY;
const corsProxy = "https://cors-anywhere.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: `${corsProxy}${import.meta.env.VITE_EMBY_SERVER_API_URL}`, // Utilisez la variable d'environnement définie dans votre fichier .env
  timeout: 5000, // Temps d'attente en millisecondes avant d'abandonner la requête
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Ajoutez la clé API à l'en-tête 'Authorization' de chaque requête
    config.url = `${config.url}?api_key=${apiKey}`;

    return config;
  },
  (error) => {
    // Traitez les erreurs de requête
    return Promise.reject(error);
  }
);

export default axiosInstance;