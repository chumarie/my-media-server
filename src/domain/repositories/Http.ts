/**
 * Represents an HTTP client.
 */
export interface Http {
    /**
     * Sends an HTTP GET request.
     * @param path - The URL path to send the request to.
     * @param params - Optional query parameters to include in the request.
     * @param config - Optional configuration for the request.
     * @returns A promise that resolves to the response data.
     */
    get: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    /**
     * Sends an HTTP POST request.
     * @param path - The URL path to send the request to.
     * @param params - Optional data to include in the request body.
     * @param config - Optional configuration for the request.
     * @returns A promise that resolves to the response data.
     */
    post: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    /**
     * Sends an HTTP PUT request.
     * @param path - The URL path to send the request to.
     * @param params - Optional data to include in the request body.
     * @param config - Optional configuration for the request.
     * @returns A promise that resolves to the response data.
     */
    put: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    /**
     * Sends an HTTP DELETE request.
     * @param path - The URL path to send the request to.
     * @param params - Optional query parameters to include in the request.
     * @param config - Optional configuration for the request.
     * @returns A promise that resolves to the response data.
     */
    delete: <T>(path: string, params?: any, config?: any) => Promise<T | any>;
}
