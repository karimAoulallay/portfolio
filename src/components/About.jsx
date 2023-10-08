import { useEffect, useState } from "react";
import Title from "./Title";

const About = () => {
  const [index, setIndex] = useState(0);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills));
  }, []);

  const skillsElements = skills.map((skill) => (
    <div
      key={crypto.randomUUID()}
      className="bg-secondary p-1 px-2 rounded-md shadow text-accent font-bold capitalize
      lg:p-2 lg:px-6"
    >
      {skill}
    </div>
  ));

  function handleClick(e) {
    const element = e.target;
    setIndex(element.value);
  }

  return (
    <section className="py-12" id="about">
      <div className="container">
        <Title title="About Me" number="01." />
        <div
          className="flex flex-col gap-12
        lg:flex-row min-h-[500px] sm:min-h-[400px] lg:min-h-[300px] 
        "
        >
          <ul
            className="font-bold flex border-b
          lg:h-fit lg:flex-col lg:border-b-0 lg:border-l"
          >
            <li className="text-center flex-1">
              <button
                onClick={handleClick}
                value={0}
                className={`p-4 w-full relative ${
                  index == 0 ? "tabIndexZero" : "tabIndexOne"
                }
                after:duration-300 after:absolute after:h-1 after:w-full after:bg-accent after:left-0 after:bottom-0 after:rounded-full after:translate-y-1/2
                lg:after:w-1 lg:after:h-full lg:after:translate-y-0
                lg:px-12
                `}
              >
                Profile
              </button>
            </li>
            <li className="text-center flex-1">
              <button
                onClick={handleClick}
                className="p-4 w-full lg:px-12"
                value={1}
              >
                Skills
              </button>
            </li>
          </ul>
          <div className="text-paragraph leading-8">
            {index == 0 ? (
              <>
                <p className="mb-4">
                  I'm Abdelkarim Aoulallay based on Casablanca. In 2021, I took
                  my first steps into the world of coding with Python, setting
                  the stage for my journey into web development. While I
                  initially ventured into full-stack development, I discovered
                  my true passion in frontend development. My expertise lies in
                  crafting user-friendly and visually appealing interfaces, with
                  a keen eye for design, strong skills in responsive web design
                  and problem solving.
                </p>
                <p>
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to contact me.
                </p>
              </>
            ) : (
              <>
                <p className="text-text font-bold mb-4 underline">
                  Techs i've worked with
                </p>
                <div className="flex flex-wrap gap-4">{skillsElements}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
