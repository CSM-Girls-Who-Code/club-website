import { useParams } from "react-router-dom"

export default function Events() {
  const { slug } = useParams()
  return (
    <main className="px-6 py-10 font-teachers">
      <h1 className="text-3xl font-bold">
        event: {slug}
      </h1>

      <p className="mt-4 text-gray-600">
        event detals loaded from cms
      </p>
    </main>
  )
}