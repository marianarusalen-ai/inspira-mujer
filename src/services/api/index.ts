import { fetcher, post } from '@/lib';
import type { ApiResponse } from '@/types';

export const apiClient = {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    return fetcher<T>(url);
  },
  async post<T>(url: string, body: unknown): Promise<ApiResponse<T>> {
    return post<T>(url, body);
  },
  async patch<T>(url: string, body: unknown): Promise<ApiResponse<T>> {
    return fetcher<T>(url, { method: 'PATCH', body: JSON.stringify(body) });
  },
  async remove<T>(url: string): Promise<ApiResponse<T>> {
    return fetcher<T>(url, { method: 'DELETE' });
  },
};
