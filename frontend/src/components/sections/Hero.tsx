export default function Hero() {
    return (
        <section className="font-teachers w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            //da big title
            <h1 className="text-4xl font-bold">
                big title
            </h1>

            //our motto or idk smt majestic like "supporting women in tech"
            <p className="mt-4 text-gray-600 max-w-md">
                supporting women in tech
            </p>

            //link to about page
            <button className="mt-6 px-5 py-2 border rounded hover:bg-black hover:text-white transition">
                about us
            </button>
        </section>
    )
}