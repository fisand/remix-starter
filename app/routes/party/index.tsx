import { PrismaClient } from '@prisma/client'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const prisma = new PrismaClient()

export const loader = async () => {
  const result = await prisma.events.findMany()
  return json(result)
}

export default function About() {
  const result = useLoaderData<typeof loader>()
  return (
    <div className="py-8 px-10">
      <div className="mx-auto container grid grid-cols-4 lt-sm:grid-cols-1 lt-md:grid-cols-2 gap-6">
        {result.map((event) => (
          <div key={event.id} className="h-full">
            <div className="h-full p-.5 rounded-lg hover:bg-gradient-conic hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:animate-[conic_2.5s_infinite_linear]">
              <Card className="h-full rounded-lg">
                <CardHeader>
                  <CardTitle className="flex gap-1">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="w-full overflow-hidden rounded">
                    <img src={event.cover} alt="" className="w-full h-30 object-cover transition hover:scale-110" />
                  </div>
                  <div className='h-.25 bg-border'></div>
                  <div className=''>{event.description}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
