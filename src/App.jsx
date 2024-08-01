import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  let [showScrollButton, setShowScrollButton] = useState(false);
  const screenHeight = window.innerHeight;

  window.onscroll = function () {
    scrollY > screenHeight
      ? setShowScrollButton(true)
      : setShowScrollButton(false);
  };

  function handleCLick() {
    scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <button
          onClick={handleCLick}
          className={`fixed bottom-8 right-8 bg-accent rounded-md text-background flex justify-center items-center h-10 aspect-square hover:opacity-80 ${
            showScrollButton ? "visible" : "hidden"
          }`}
        >
          <img src="./icons/up-arrow.svg" alt="arrow icon" className="w-4" />
        </button>
        <Footer />
      </main>
    </div>
  );
};

export default App;
