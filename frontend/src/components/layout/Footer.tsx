export default function Footer() {
    return (
        <footer className="w-full border-t mt-10 px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                //left side
                <div className="text-sm text-gray-600">
                    © 2026 our websit ename
                </div>
                //fopoter links
                //pls add more links like to socials or other pages or idk
                <div className="flex gap-4 text-sm">
                    <a href="#" className="hover:underline">
                        example link
                    </a>
                </div>
            </div>
        </footer>
    )
}