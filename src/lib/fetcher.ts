import type { ApiResponse } from '@/types';

async function request<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      ...options,
    });
    if (!response.ok) {
      return {
        data: null,
        error: `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      };
    }
    const data = (await response.json()) as T;
    return { data, error: null, status: response.status };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { data: null, error: message, status: 0 };
  }
}

export async function fetcher<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  return request<T>(url, options);
}

export async function post<T>(
  url: string,
  body: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  return request<T>(url, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
}
