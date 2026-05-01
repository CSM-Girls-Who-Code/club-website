type EventDisplayCardProps = {
  title: string
  description: string
  image?: string
  date?: string
}

export default function EventDisplayCard({
  title,
  description,
  image,
}: EventDisplayCardProps) {
  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white">

      //title
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      //summarshort sdecsripton
      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>

      //image
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
      )}

    </div>
  )
}