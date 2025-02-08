interface ResponseData<T> {
  code: string;
  isSuccess: boolean;
  result: T;
}

type FetchOptions = RequestInit & {
  params?: Record<string, string>;
  revalidate?: number | false;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? '';

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const handleError = (error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  console.error('API Error:', errorMessage);
};

const createFetchInstance = (baseUrl: string) => {
  const fetchInstance = async (url: string, options: FetchOptions = {}) => {
    const { params, revalidate, ...init } = options;
    const requestUrl = `${baseUrl}${url}`;
    const headers = new Headers(defaultHeaders);

    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    const fullUrl = `${requestUrl}${queryString}`;

    const nextConfig = revalidate !== undefined ? { next: { revalidate } } : {};

    const config: RequestInit = {
      ...init,
      headers,
      ...nextConfig,
    };

    try {
      const response = await fetch(fullUrl, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  };
  return fetchInstance;
};

export const fetchApi = createFetchInstance(baseURL);

const createApiMethods = (instance: (url: string, options?: FetchOptions) => Promise<any>) => ({
  Get: async <T>(url: string, params = {}, options: { revalidate?: number | false } = {}): Promise<ResponseData<T>> => {
    try {
      return await instance(url, {
        method: 'GET',
        params,
        ...options,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  Post: async <T, D = unknown>(url: string, data?: D, options = {}): Promise<ResponseData<T>> => {
    try {
      return await instance(url, {
        method: 'POST',
        body: JSON.stringify(data),
        cache: 'no-store',
        ...options,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  Put: async <T, D = unknown>(url: string, data?: D, options = {}): Promise<ResponseData<T>> => {
    try {
      return await instance(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        cache: 'no-store',
        ...options,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  Delete: async <T>(url: string, options = {}): Promise<ResponseData<T>> => {
    try {
      return await instance(url, {
        method: 'DELETE',
        cache: 'no-store',
        ...options,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  Patch: async <T, D = unknown>(url: string, data?: D, options = {}): Promise<ResponseData<T>> => {
    try {
      return await instance(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        cache: 'no-store',
        ...options,
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
});

export const { Get, Post, Put, Delete, Patch } = createApiMethods(fetchApi);
