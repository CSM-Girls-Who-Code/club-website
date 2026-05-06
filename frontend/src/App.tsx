import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import HomeButton from "./components/HomeButton"

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-porcelain">
            <BrowserRouter>
                <div className="fixed top-4 left-4 z-50">
                    <HomeButton />
                </div>
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    )
}