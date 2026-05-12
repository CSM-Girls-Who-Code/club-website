import EventCard from "./EventCard"; 

export default function EventsDisplay() {
    const workshops = [
        {
            title: "AI Engineering Workshop",
            slug: "ai-engineering", 
            image: "/images/ai-workshop.jpeg", 
            description: "In our “AI-Powered Software Development: The Future of Engineering” workshop, we featured guest speakers Dharmendra Kumar and Kiran KV...",
        },
        {
            title: "Software Development Workshop", 
            slug: "software-development",
            image: "/images/default-dev.jpg", 
            description: "Add short description of event and image",
        },
        {
            title: "Tech Through Her Eyes Workshop",
            slug: "tech-through-her-eyes",
            image: "/images/techThroughHerEyesFlyer.png", 
            description: "Girls Who Code is hosted this special event featuring our club advisor Professor Hellen Pacheco & student Michael Poiente...",
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
                            Past Events
                        </h2>
                        <p className="text-carbon/60">
                            We host workshops to bridge the gap between academic learning and industry standards, providing students with hands-on experience and professional networking.
                        </p>
                    </div>

                    <a
                        href="/events"
                        className="text-sm underline underline-offset-4 hover:text-amaranth transition"
                    >
                        View All Events
                    </a>
                </div>

                {/* Event Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {workshops.map((w, index) => (
                        <EventCard 
                            key={index}
                            title={w.title}
                            description={w.description}
                            slug={w.slug}
                            image={w.image || "/images/placeholder.jpg"} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}