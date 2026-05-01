import { useEffect, useState } from "react"
import { getEvents } from "./api"

export type Event = {
    id?: string
    title: string
    description: string
    slug: string
}

export function useEvents() {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            const data = await getEvents()
            setEvents(data)

            setLoading(false)
        }

        fetchData()
    }, [])

    return { events, loading }
}