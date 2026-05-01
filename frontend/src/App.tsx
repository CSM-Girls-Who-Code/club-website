import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Admin from "./pages/Admin"
import Navbar from "./components/layout/Navbar"

export default function App() {
    return (
        <div className="font-teachers">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/workshop" element={<Events />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}