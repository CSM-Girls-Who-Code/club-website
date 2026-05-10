import { useEffect, useState } from "react"
import { getEvents } from "../lib/eventsService"
import EventCard from "../components/EventCard"

type Event = {
  id: string
  title: string
  description: string
  slug: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function load() {
      const data = await getEvents()
      setEvents(data)
    }

    load()
  }, [])

  return (
    <main className="px-6 py-10 pt-24 font-teachers">
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      <div className="grid gap-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            slug={event.slug}
          />
        ))}
      </div>
    </main>
  )
}