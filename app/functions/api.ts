export async function request<T = unknown>(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${input}`, init)
  return response.json() as T
}

const makeRequestFn = (method: string) => {
  return async <T = unknown>(input: RequestInfo | URL, init?: RequestInit | undefined) => request(input, {
    ...init,
    method
  }) as T
}

const api = {
  get: makeRequestFn('GET')
}

export default api