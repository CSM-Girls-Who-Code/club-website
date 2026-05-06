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

  return (<Link
    to={`/workshop/${slug}`}
    className="block border rounded p-4 shadow-sm hover:shadow-md transition font-teachers"
  >

    //event title
    <h3 className="font-semibold text-lg">
      {title}
    </h3>

    //short event desc
    <p className="text-sm text-gray-600 mt-2">
      {description}
    </p>

    //view detail kinda thinghy
    <p className="text-xs text-gray-400 mt-4">
      view our event PLEASEEEEE
    </p>

  </Link>
  )
}