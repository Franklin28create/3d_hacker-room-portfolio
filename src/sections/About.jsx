import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { useState } from "react";
import earthDay from "/assets/earth-day.jpg";
import earthNight from '/assets/earth-night.jpg';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isMorning, setIsMorning] = useState(true);
  const handleCopy = () => {
    navigator.clipboard.writeText("frankrierar07@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I am Frank</p>
              <p className="grid-subtext">
                With a passion for web development, I bring a unique blend of
                creativity and technical expertise to the world of software
                development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="w-full mx-auto flex justify-between border-2 py-2 px-12 border-white-600 rounded-xl relative">
              <button
                className="text-sm text-white font-generalsans z-10 font-semibold"
                onClick={() => !isMorning && setIsMorning(true)}
              >
                Day time
              </button>
              <button
                className="text-sm text-white font-generalsans z-10 font-semibold"
                onClick={() => isMorning && setIsMorning(false)}
              >
                Night time
              </button>
              <div
                className={`rounded-14 before:h-100 absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-16px)] opacity-50 overflow-hidden shadow-400 transition-transform duration-500 bg-blue-400 rounded-lg ${!isMorning && "!translate-x-[110%]"}`}
              />
            </div>
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                width={326}
                height={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={isMorning ? earthDay : earthNight}
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in the US, with remote work available
              </p>
              <a href="#contact">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container min-h-12" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl text-white font-medium text-gray_gradient">
                  frankrierar07@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
