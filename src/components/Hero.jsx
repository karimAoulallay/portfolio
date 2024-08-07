import HeroLeftSide from "./HeroLeftSide";
import HeroRightSide from "./HeroRightSide";

const Hero = () => {
  return (
    <section className="py-8" id="hero">
      <div className="container">
        <div
          className="flex flex-col gap-8 items-center justify-center
        sm:flex-row sm:items-center
        h-[calc(100vh-156px)]"
        >
          {/* left side */}
          <HeroLeftSide />
          {/* right side */}
          <HeroRightSide />
        </div>
      </div>
    </section>
  );
};

export default Hero;
