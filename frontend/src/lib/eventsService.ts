import { supabase } from "./supabaseClient"

export async function getEvents() {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error(error)
    return []
  }

  return data
}

export async function getEventBySlug(slug: string) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error) {
    console.error(error)
    return null
  }

  return data
}

export async function createEvent({
  title,
  description,
  slug
}: {
  title: string
  description: string
  slug: string
}) {
  const { data, error } = await supabase
    .from("events")
    .insert([{ title, description, slug }])
    .select()

  if (error) {
    console.error(error)
    return null
  }

  return data?.[0]
}

export async function updateEvent(id: string, updates: any) {
  const { data, error } = await supabase
    .from("events")
    .update(updates)
    .eq("id", id)

  if (error) {
    console.error(error)
    return null
  }

  return data
}

export async function deleteEvent(id: string) {
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id)

  if (error) {
    console.error(error)
  }
}