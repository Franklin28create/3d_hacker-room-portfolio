const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Franklin28create"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center align-center hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://x.com/Frankli81386809"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center align-center hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/x._.mean_n_lean._.x/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center align-center hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <img
              src="/assets/instagram.svg"
              alt="linkedIn"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

        <p className="text-white-500">&copy; 2025 Franklin. All rights reserved</p>
    </section>
  );
};
export default Footer;
