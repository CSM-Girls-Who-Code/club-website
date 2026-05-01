import { useState } from "react"

export default function Admin() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    //temp login js one user tho
    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    if (!isLoggedIn) {
        return (
            <main className="p-6">

                <h1 className="text-2xl font-bold mb-4">
                    board login
                </h1>

                <button
                    onClick={handleLogin}
                    className="px-4 py-2 border rounded"
                >
                    login as board mmember
                </button>
            </main>
        )
    }

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                cms dashboard
            </h1>

            <section className="mb-8 border p-4 rounded">
                <h2 className="font-semibold mb-2">
                    create event
                </h2>
                //add fields title desc slug
            </section>

            <section className="border p-4 rounded">
                <h2 className="font-semibold mb-2">
                    events
                </h2>
            </section>
        </main>
    )
}