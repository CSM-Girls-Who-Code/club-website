export default function EventsDisplay() {
    const workshops = [
        {
            title: "AI Engineering Workshop",
            description: "Add short description of event and image",
        },
        {
            title: "Software Development Workshop",
            description: "Add short description of event and image",
        },
        {
            title: "Tech Through Her Eyes Workshop",
            description: "Add short description of event and image",
        },
    ];

    return (
        <section className="bg-porcelain py-20 px-8 font-teachers text-carbon">
            <div className="max-w-6xl mx-auto">

                <p className="text-sm tracking-widest text-carbon/60 mb-4">
                    HIGHLIGHTS
                </p>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">

                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Past Workshops
                        </h2>

                        <p className="text-carbon/60">
                            TODO: Add short description of why we host workshops and what impact they had
                        </p>
                    </div>

                    <a
                        href="/events"
                        className="text-sm underline underline-offset-4 hover:text-amaranth transition"
                    >
                        View Workshops
                    </a>
                </div>

                {/* Evcnt Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {workshops.map((w, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                        >
                            <div className="h-40 bg-lilac/30" />

                            <div className="p-5 space-y-2">
                                <h3 className="font-semibold text-lg">
                                    {w.title}
                                </h3>

                                <p className="text-sm text-carbon/60">
                                    {w.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}