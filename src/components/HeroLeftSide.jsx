import { useState } from "react";

const HeroLeftSide = () => {
  const [flipText, setFlipText] = useState(false);

  setTimeout(() => {
    setFlipText(!flipText);
  }, 3000);

  return (
    <div className="order-2 sm:order-1 text-center sm:text-left">
      <p className="mb-2">Hi, my name is</p>
      <div className="overflow-hidden">
        <h2
          className={`relative duration-500 font-bold text-3xl ${
            flipText ? "-translate-y-full" : "translate-y-0"
          }
            md:text-5xl lg:text-6xl xl:text-7xl py-2
            after:content after:content-['Abdelkarim'] after:absolute after:w-full after:h-full after:left-0 after:top-full`}
        >
          Aoulallay
        </h2>
      </div>
      <h1
        className="font-bold text-3xl text-accent mb-2
              md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Full Stack Developer
      </h1>
      <p
        className="mb-6 text-sm text-paragraph
            md:text-base xl:max-w-lg"
      >
        I'm a web Full-Stack developer who enjoys developing creative
        applications. I have two years of experience with frontend & backend.
      </p>
      <div
        className="flex justify-center gap-8
            sm:justify-start"
      >
        <a
          href="https://github.com/karimAoulallay"
          target="_blank"
          rel="noreferrer"
          className="p-1 rounded-md hover:bg-secondary duration-300 border-2 border-transparent hover:border-primary"
        >
          <img
            src="./icons/github.svg"
            alt="github icon"
            className="w-6 lg:w-7 xl:w-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelkarim-aoulallay/"
          target="_blank"
          rel="noreferrer"
          className="p-1 rounded-md hover:bg-secondary duration-300 border-2 border-transparent hover:border-primary"
        >
          <img
            src="./icons/linkedin.svg"
            alt="linkedin icon"
            className="w-6 lg:w-7 xl:w-8"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroLeftSide;
