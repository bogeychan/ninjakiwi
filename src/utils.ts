type Result<TBody, TError = any> = {
  error?: TError;
  sucess: boolean;
  body: TBody;
  next?: string;
  prev?: string;
};

export async function json<T>(path: string) {
  const response = await fetch(`https://data.ninjakiwi.com${path}`, {
    headers: { Accept: 'application/json' }
  });
  if (
    !response.ok ||
    !response.headers.get('Content-Type')?.startsWith('application/json')
  ) {
    throw response;
  }
  return (await response.json()) as Result<T>;
}
