import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'

export const loader = (c: LoaderFunctionArgs) => {
  const search = new URL(c.request.url).searchParams

  return json({ ok: true, list: search.get('id') ?? null })
}

export const action = async (c: ActionFunctionArgs) => {
  const body = await c.request.json()
  console.log(body)
  return json({
    ...body,
  })
}
