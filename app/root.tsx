import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import { Header } from './components/layout/Header'
import { EvmProvider } from './context/evm'

import '@unocss/reset/tailwind.css'
// main.ts
import '@unocss/reset/tailwind-compat.css'
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css'
import '@rainbow-me/rainbowkit/styles.css'
import './assets/styles/index.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/fav.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <EvmProvider>
          <Header />
          {children}
        </EvmProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
