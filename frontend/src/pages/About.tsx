import { RiCommunityLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";

const About = () => {
    return (
        <div className="bg-cream text-fog">
            <section className="flex flex-col items-center py-8 space-y-6 tracking-wide bg-cream text-fog">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl transform font-teachers">
                    our values
                </h1>
                <p className="w-2/3 text-xl font-teachers text-center">
                    CSM Girls Who Code is a club.
                </p>
            </section>

            <section className="flex flex-col py-12 tracking-wide bg-cream text-fog px-6">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="mb-16">
                        <h1 className="text-5xl font-teachers text-center">our values</h1>
                    </div>

                    <div className="grid gap-8 tracking-wide grid-cols-1 md:grid-cols-3">
                        {/* Community  */}
                        <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
                            <RiCommunityLine size={48} />
                            <h1 className="mt-4 text-xl font-semibold">Community</h1>
                            <p className="mt-auto pt-6">
                                We are committed to being a safe space where students feel
                                supported and valued.
                            </p>
                        </div>

                        {/* Inclusion */}
                        <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
                            <LuHeartHandshake size={48} />
                            <h1 className="mt-4 text-xl font-semibold">Inclusion</h1>
                            <p className="mt-auto pt-6">
                                We are committed to ensure that everyone, regardless of identity feels included.

                            </p>
                        </div>

                        {/* Accessibility */}
                        <div className="shadow-md mt-4 bg-cream text-fog px-8 py-6 rounded-3xl text-left text-lg font-teachers flex flex-col items-start">
                            <IoAccessibility size={48} />
                            <h1 className="mt-4 text-xl font-semibold">Accessibility</h1>
                            <p className="mt-auto pt-6">
                                We are committed to providing help to all, regardless of
                                background or circumstance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
