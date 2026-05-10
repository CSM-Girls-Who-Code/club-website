import { Link } from "react-router-dom"

type EventCardProps = {
  title: string
  description: string
  slug: string
}

export default function EventCard({
  title,
  description,
  slug
}: EventCardProps) {
  return (
    <Link
      to={`/event/${slug}`}
      className="block border rounded p-4 shadow-sm hover:shadow-md transition font-teachers"
    >
      <h3 className="font-semibold text-lg">{title}</h3>

      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>

      <p className="text-xs text-gray-400 mt-4">
        view event details →
      </p>
    </Link>
  )
}