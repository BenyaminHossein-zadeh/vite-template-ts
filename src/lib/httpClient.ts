export class HttpClient {
  #baseUrl: string;
  #defaultOptions: Omit<RequestInit, 'body'>;

  constructor(baseUrl: string, options: Omit<RequestInit, 'body'> = {}) {
    this.#baseUrl = baseUrl;
    this.#defaultOptions = options;
  }

  get<T>(endpoint: string, options: Omit<RequestInit, 'body'> = {}) {
    return this.request<T>(endpoint, options);
  }

  post<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, { method: 'POST', body });
  }

  private async request<T>(
    endpoint: string,
    options: Omit<RequestInit, 'body'> & { body?: unknown } = {}
  ): Promise<T> {
    const url = `${this.#baseUrl}${endpoint}`;
    const body = options.body ? JSON.stringify(options.body) : undefined;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...this.#defaultOptions.headers,
        ...options.headers,
      },
      ...options,
      body,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`, {
        cause: response,
      });
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json();
  }
}
