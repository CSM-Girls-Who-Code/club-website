export default function EventsDisplay() {
    const workshops = [
        {
            title: "Example Workshop",
            description: "This is a sample workshop card."
        }
    ]

    return (
        <section className="w-full px-6 py-10 font-teachers">
            //big title
            <h2 className="text-2xl font-semibold mb-6">
                past events
            </h2>

            //prop fetching action kinda like a template sorta
            <div className="grid gap-4 md:grid-cols-2">
                {workshops.map((w, index) => (
                    <div
                        key={index}
                        className="border rounded p-4 shadow-sm"
                    >
                        <h3 className="font-semibold">
                            {w.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {w.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}