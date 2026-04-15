import type { ApiResponse } from "@/lib/api/types";

export class ApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

type RequestInitWithQuery = RequestInit & {
  query?: Record<string, string | number | boolean | undefined | null>;
};

function withQuery(url: string, query?: RequestInitWithQuery["query"]) {
  if (!query) return url;

  const search = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      search.set(key, String(value));
    }
  });

  const queryString = search.toString();
  return queryString ? `${url}?${queryString}` : url;
}

export async function apiRequest<T>(url: string, options: RequestInitWithQuery = {}): Promise<T> {
  const { query, headers, ...rest } = options;
  const finalUrl = withQuery(url, query);

  const response = await fetch(finalUrl, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const payload = (await response.json()) as ApiResponse<T>;

  if (!response.ok || !payload.success) {
    const message = payload.success ? "Request failed" : payload.error.message;
    const code = payload.success ? undefined : payload.error.code;
    throw new ApiError(message, response.status, code);
  }

  return payload.data;
}
