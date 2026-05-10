import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEventBySlug } from "../lib/eventsService"

type Event = {
  title: string
  description: string
  slug: string
}

export default function EventDetails() {
  const { slug } = useParams()
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!slug) return

      const data = await getEventBySlug(slug)
      setEvent(data)
      setLoading(false)
    }

    load()
  }, [slug])

  if (loading) {
    return <p className="p-6">Loading event...</p>
  }

  if (!event) {
    return <p className="p-6">Event not found.</p>
  }

  return (
    <main className="px-6 py-10 pt-24 font-teachers">
      <h1 className="text-3xl font-bold">{event.title}</h1>

      <p className="mt-4 text-gray-600">
        {event.description}
      </p>
    </main>
  )
}