import { Link } from "react-router-dom"

type EventCardProps = {
  title: string
  description: string
  slug: string
  image: string // Added this
}

export default function EventCard({
  title,
  description,
  slug,
  image // Added this
}: EventCardProps) {
  return (
    <Link
      to={`/event/${slug}`}
      className="group block bg-white overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition font-teachers"
    >
      {/* Event Preview Image */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg group-hover:text-amaranth transition">
          {title}
        </h3>

        {/* line-clamp keeps the home page neat by cutting off long text */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description}
        </p>

        <p className="text-xs font-bold uppercase tracking-wider text-amaranth mt-4 opacity-80">
          view event details →
        </p>
      </div>
    </Link>
  )
}