import { json, LoaderFunctionArgs } from '@remix-run/node'

export const loader = (c: LoaderFunctionArgs) => {
  const search = new URL(c.request.url).searchParams

  return json({ ok: true, id: search.get('id') ?? null })
}
