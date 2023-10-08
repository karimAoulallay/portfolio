import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [IsModalOpen, setIsModalOpen] = useState(false);

  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <header
      className={`px-4 flex justify-between items-center py-8 w-full bg-white relative
    md:px-12 z-10`}
    >
      <a href="\" className="uppercase text-accent font-bold md:text-xl">
        Abdelkarim
      </a>
      <button
        aria-expanded={isExpanded}
        aria-label="menu"
        aria-controls="navigationMenu"
        className="md:hidden z-20 relative"
        onClick={toggleMenu}
      >
        <svg width="50" height="40" aria-hidden="true">
          <line
            id="lineOne"
            x1="10"
            y1="10"
            x2="40"
            y2="10"
            strokeWidth="4"
            strokeLinecap="round"
            className="stroke-primary"
          />
          <line
            id="lineTwo"
            x1="3"
            y1="20"
            x2="47"
            y2="20"
            strokeWidth="4"
            strokeLinecap="round"
            className="stroke-primary"
          />
          <line
            id="lineThree"
            x1="10"
            y1="30"
            x2="40"
            y2="30"
            strokeWidth="4"
            strokeLinecap="round"
            className="stroke-primary"
          />
        </svg>
      </button>
      <nav
        className={`${
          isExpanded ? "block" : "hidden"
        } flex-col items-center absolute bg-white w-full left-0 top-full
        md:static md:w-auto md:bg-transparent md:block`}
      >
        <ul
          className="w-full font-bold shadow-2xl shadow-secondary text-right uppercase
        md:shadow-none md:flex md:items-center md:w-auto md:gap-12 md:text-xs tracking-wider
        lg:text-sm"
        >
          <li>
            <a
              href="#about"
              className="border-t-[1px] border-secondary p-6 px-8 md:border-none md:p-0 duration-300 hover:text-accent block relative overflow-hidden
              md:after:absolute md:after:w-full md:after:h-[2px] md:after:bottom-0 md:after:left-0 md:after:bg-accent md:after:rounded-full md:after:-translate-x-full md:hover:after:translate-x-0 md:after:duration-300"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="border-t-[1px] border-secondary p-6 px-8 md:border-none md:p-0 duration-300 hover:text-accent block relative overflow-hidden
              md:after:absolute md:after:w-full md:after:h-[2px] md:after:bottom-0 md:after:left-0 md:after:bg-accent md:after:rounded-full md:after:-translate-x-full md:hover:after:translate-x-0 md:after:duration-300"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-t-[1px] border-secondary p-6 px-8 md:border-none md:p-0 duration-300 hover:text-accent block relative overflow-hidden
              md:after:absolute md:after:w-full md:after:h-[2px] md:after:bottom-0 md:after:left-0 md:after:bg-accent md:after:rounded-full md:after:-translate-x-full md:hover:after:translate-x-0 md:after:duration-300"
            >
              contact
            </a>
          </li>
          <li
            className="border-t-[1px] border-secondary p-6 px-8 md:p-0 duration-300 hover:text-accent text-accent
          md:bg-accent md:text-background md:border-accent md:border-2 md:rounded md:hover:bg-transparent md:hover:text-accent"
          >
            <button onClick={openModal} className="md:p-1 md:px-4 md:py-1">
              <span>CV</span>
            </button>
          </li>
        </ul>
      </nav>
      <Modal closeModal={closeModal} IsModalOpen={IsModalOpen} />
    </header>
  );
};

export default Header;
