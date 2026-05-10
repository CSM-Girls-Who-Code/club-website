import ExploreButton from "../components/ExploreButton";
import EventsDisplay from "../components/EventsDisplay";
import bg from "../assets/icons/gwcbg.png";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-porcelain relative w-full overflow-hidden tracking-wide text-carbon">

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

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 border-lilac border-2 bg-porcelain text-lilac rounded-full scale-125 hover:border-porcelain hover:bg-lilac hover:text-porcelain transition">
          <ExploreButton to="/about" label="About" />
        </div>
      </div>

      {/* Featured Event Card */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="w-full max-w-4xl bg-porcelain border border-carbon/10 rounded-2xl shadow-sm p-6 font-teachers">

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Building Products with Figma
          </h2>

          <p className="text-carbon/70 mb-4">
            An informational workshop on how to design products such as websites or application interfaces using Figma.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-carbon/60">

            <div>
              <span className="font-semibold text-carbon">Time:</span>
              {" "}May 12, 1:00 PM - 1:30 PM
            </div>

            <div>
              <span className="font-semibold text-carbon">Location:</span>
              {" "}College of San Mateo, Building 15 Conference Room
            </div>

          </div>

        </div>
      </div>

      <EventsDisplay />
    </div>
  )
}

export default Home;
