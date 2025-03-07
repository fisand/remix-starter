import { prisma } from '@/lib/db'

import { Welcome } from '../welcome/welcome'
import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'fisand-remix' },
    { name: 'description', content: 'Welcome to fisand remix!' },
  ]
}

export async function loader() {
  const users = await prisma.user.findMany()
  return { users }
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  const author = loaderData.users?.[0]
  return <Welcome author={author} />
}
