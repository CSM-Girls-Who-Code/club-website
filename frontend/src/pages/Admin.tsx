import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { getEvents, createEvent, deleteEvent } from "../lib/eventsService"

const ADMIN_USERNAME = "board"
const ADMIN_EMAIL = "board@csmgwc.local"

type Event = {
  id: string
  title: string
  description: string
  slug: string
}

export default function Admin() {
  const [user, setUser] = useState<any>(null)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [events, setEvents] = useState<Event[]>([])
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const [form, setForm] = useState({
    title: "",
    description: "",
    slug: ""
  })

  // ---------------- AUTH ----------------
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  const isAdmin = user?.email === ADMIN_EMAIL

  // ---------------- LOAD EVENTS ----------------
  useEffect(() => {
    if (!isAdmin) return

    const load = async () => {
      const data = await getEvents()
      setEvents(data)
    }

    load()
  }, [isAdmin])

  // ---------------- LOGIN ----------------
  const handleLogin = async () => {
    if (username !== ADMIN_USERNAME) {
      alert("Invalid username")
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password
    })

    if (error) {
      alert("Login failed")
      return
    }

    const { data } = await supabase.auth.getUser()
    setUser(data.user)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  // ---------------- CREATE EVENT ----------------
  const handleCreate = async () => {
    if (!form.title || !form.slug) return

    await createEvent(form)

    setForm({ title: "", description: "", slug: "" })

    const updated = await getEvents()
    setEvents(updated)
  }

  // ---------------- UPDATE EVENT ----------------
  const handleUpdate = async () => {
    if (!selectedEvent) return

    await supabase
      .from("events")
      .update({
        title: form.title || selectedEvent.title,
        description: form.description || selectedEvent.description,
        slug: form.slug || selectedEvent.slug
      })
      .eq("id", selectedEvent.id)

    const updated = await getEvents()
    setEvents(updated)
    setSelectedEvent(null)
    setForm({ title: "", description: "", slug: "" })
  }

  // ---------------- LOGIN SCREEN ----------------
  if (!user) {
    return (
      <main className="px-6 py-10 pt-24 font-teachers max-w-md">
        <h1 className="text-2xl font-bold mb-4">Board Login</h1>

        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleLogin}
          className="px-4 py-2 border rounded w-full"
        >
          Login
        </button>
      </main>
    )
  }

  // ---------------- DASHBOARD ----------------
  return (
    <main className="p-6 font-teachers max-w-3xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">CMS Dashboard</h1>

        <button onClick={handleLogout} className="border px-3 py-1 rounded">
          Logout
        </button>
      </div>

      {/* SELECT EVENT */}
      <section className="border p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Select Event</h2>

        <select
          className="border p-2 w-full"
          onChange={(e) => {
            const ev = events.find(x => x.id === e.target.value)
            setSelectedEvent(ev || null)

            if (ev) {
              setForm({
                title: ev.title,
                description: ev.description,
                slug: ev.slug
              })
            }
          }}
        >
          <option value="">-- Select event --</option>
          {events.map(ev => (
            <option key={ev.id} value={ev.id}>
              {ev.title}
            </option>
          ))}
        </select>
      </section>

      {/* CREATE */}
      <section className="border p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Create Event</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Slug"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <button onClick={handleCreate} className="border px-4 py-2">
          Create
        </button>
      </section>

      {/* UPDATE */}
      <section className="border p-4 rounded mb-6">
        <h2 className="font-semibold mb-2">Update Event</h2>

        {!selectedEvent ? (
          <p className="text-gray-500">Select an event first</p>
        ) : (
          <button onClick={handleUpdate} className="border px-4 py-2">
            Update Selected Event
          </button>
        )}
      </section>

      {/* DELETE */}
      <section className="border p-4 rounded">
        <h2 className="font-semibold mb-2">Delete Event</h2>

        {!selectedEvent ? (
          <p className="text-gray-500">Select an event first</p>
        ) : (
          <button
            className="border px-4 py-2 text-red-500"
            onClick={async () => {
              await deleteEvent(selectedEvent.id)
              setSelectedEvent(null)

              const updated = await getEvents()
              setEvents(updated)
            }}
          >
            Delete Selected Event
          </button>
        )}
      </section>

    </main>
  )
}