const Footer = () => {
  return (
    <footer className="bg-text text-background ">
      <div className="container">
        <div
          className="flex flex-col items-center p-4 text-xs gap-4
        sm:flex-row sm:justify-between sm:p-8"
        >
          <p>© Copyright 2023. Made with love</p>
          <div
            className="flex justify-center gap-8
            sm:justify-start"
          >
            <a
              href="https://github.com/karimAoulallay"
              target="_blank"
              rel="noreferrer"
              className="p-1 rounded-md bg-slate-300 hover:opacity-70"
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
              className="p-1 rounded-md bg-slate-300 hover:opacity-70"
            >
              <img
                src="./icons/linkedin.svg"
                alt="linkedin icon"
                className="w-6 lg:w-7 xl:w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
