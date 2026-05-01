import { supabase } from "./supabaseClient"

export async function getEvents() {
  const { data, error } = await supabase
    .from("events")
    .select("*")

  if (error) {
    console.error("Error fetching events:", error)
    return []
  }

  return data
}