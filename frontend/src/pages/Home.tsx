import ExploreButton from "../components/ExploreButton";
import EventsDisplay from "../components/EventsDisplay";
import bg from "../assets/icons/gwcbg.png";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-porcelain relative w-full overflow-hidden tracking-wide text-carbon">

      {/* ✅ GLOBAL BUTTON (outside hero stacking context) */}
      <Link
        to="/admin"
        className="fixed top-6 right-6 z-[9999] px-4 py-2 rounded-full bg-porcelain text-carbon border border-carbon/20 hover:opacity-80 transition font-teachers"
      >
        Board Login
      </Link>

      {/* Hero Section */}
      <div
        className="relative w-full min-h-[100svh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})`, backgroundPositionY: "0px" }}
      >
        <div className="absolute inset-0 bg-lilac/70" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center font-teachers text-porcelain space-y-6 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-right self-end mr-[8rem] lg:mr-[20rem]">
            CSM Girls Who Code
          </h1>

          <h3 className="text-md sm:text-2xl md:text-3xl lg:text-6xl text-right self-end mr-[6rem] lg:mr-[15rem]">
            Empowering students in our community.
          </h3>
        </div>

        <div className="border-lilac border-2 bg-cream text-lilac rounded-full scale-125 hover:border-basil hover:bg-basil hover:text-cream">
          <ExploreButton to="/about" label="About" />
        </div>
      </div>

      <EventsDisplay />
    </div>
  )
}

export default Home;
