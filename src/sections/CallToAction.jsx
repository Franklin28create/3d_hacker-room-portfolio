import Button from "../components/Button.jsx";

const CallToAction = () => {
  return (
    <div className="text-white border border-gray-500 rounded-2xl max-md:mx-4 mx-12 my-6 flex-1 bg-gray-700 py-4">
      <div className="flex items-center flex-col h-full justify-between gap-4">
        <div>
          <p className="grid-subtext mb-1 !text-[12px] text-center">
            WANT TO LEARN MORE?
          </p>
          <h1 className="grid-headtext !text-4xl text-center">More about me</h1>
        </div>

        <div className="w-full flex justify-center items-center px-12">
          <p className="grid-subtext text-center">
            If you want to know more about me and my work, skills, and
            experience, please feel free to contact me but also, I've put
            together more informational websites like this where I also dive
            into details about me and I provide longer lists of projects that
            I've worked on.{" "}
            <strong>
              The list felt too long to be put on a single portfolio.
            </strong>
          </p>
        </div>

        <div className="flex gap-4 max-md:gap-2 max-md:max-w-[316px]">
          <a
            href="https://franks-projects.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name="Island E-Portfolio"
              containerClass="hover:bg-blue-700 transition-colors duration-500"
              isBeam
            />
          </a>
          <a
            href="https://3d-portfolio.franks-projects.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              name="Hacker Room E-Portfolio"
              containerClass="hover:bg-blue-700 transition-colors duration-500"
              isBeam
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
