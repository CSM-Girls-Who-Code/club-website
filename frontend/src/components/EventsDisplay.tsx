export default function EventsDisplay() {
    const workshops = [
        {
            title: "AI Engineering Workshop",
            image: "/images/ai-workshop.jpeg", 
            description: "In our “AI-Powered Software Development: The Future of Engineering” workshop, we featured guest speakers Dharmendra Kumar and Kiran KV, principal software engineers at Magnit Global. During the workshop, they shared professional insights into AI-integrated development and how these technologies are being applied in higher-level engineering environments. The event featured a technical presentation followed by an interactive Q&A session, which gave students the opportunity to speak directly with the guest speakers. ",
        },
        {
            title: "SMCCD 3rd Hackathon", 
            image: "/images/hackathonflyer.png", 
            description: "The 3rd SMCCD Hackathon brought together a diverse group of students to explore the intersections of technology and community. Designed for all experience levels, the event featured three distinct trials: Game Development, Embedded Systems, and Improving SMCCD. Participants spent the day collaborating on solutions ranging from district-wide process improvements to creative digital experiences and hardware prototypes, highlighting the versatility and ingenuity of our student body.",
        },
        {
            title: "Tech Through Her Eyes Workshop",
            image: "/images/techThroughHerEyesFlyer.png", 
            description: "Girls Who Code is hosted this special event featuring our club advisor Professor Hellen Pacheco & student Michael Poiente, who shared their experiences navigating the field of technology. This program highlighted the diverse perspectives, challenges, and successes within the tech industry, offering students the opportunity to learn from real-world journeys and engage in meaningful conversations.",
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
                            TODO: Add short description of why we host events and what impact they had
                        </p>
                    </div>

                    <a
                        href="/events"
                        className="text-sm underline underline-offset-4 hover:text-amaranth transition"
                    >
                        View Events
                    </a>
                </div>

                {/* Event Cards */}
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