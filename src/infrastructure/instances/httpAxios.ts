import { Http } from '@domain/repositories/Http';
import axiosInstance from '@infrastructure/config/axios';


const headers = {
    'Content-Type': 'application/json'
};

export const httpAxios: Http = {
    get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axiosInstance.get(path, { ...config, params: params, headers });
        return response.data as T;
    },
    post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axiosInstance.post(path, { ...params }, { ...config, headers });
        return response.data as T;
    },
    put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await axiosInstance.put(path, { ...params }, { ...config, headers });
        return response.data as T;
    },
    delete: async <T>(path: string, params?: any, config?: any) => {
        const response = await axiosInstance.delete(path, { ...config, params: params, headers });
        return response.data as T;
    }
};
