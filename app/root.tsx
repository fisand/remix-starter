import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import '@unocss/reset/tailwind.css'
// main.ts
import '@unocss/reset/tailwind-compat.css'
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
