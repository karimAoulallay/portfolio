const Modal = ({ IsModalOpen, closeModal }) => {
  return (
    <div
      className={`fixed w-full h-screen bg-[#00000045] left-0 top-0 flex justify-center items-center p-4 ${
        !IsModalOpen ? "hidden" : ""
      }`}
    >
      <div className="bg-white max-w-md mx-auto rounded shadow-lg">
        <div className="flex justify-between items-center p-4 border-b-2">
          <p>Choose language</p>
          <button
            onClick={closeModal}
            className="border-[3px] border-transparent hover:border-accent p-1 rounded duration-200"
          >
            <img
              src="./icons/close_icon.svg"
              alt="close icon"
              className="w-6"
            />
          </button>
        </div>
        <ul className="flex flex-wrap p-4 py-6 gap-4">
          <li>
            <a
              href="./pdf/Abdelkarim_Aoulallay_Resume_English.pdf"
              target="_blank"
              className="bg-accent text-background p-2 rounded border-2 border-transparent hover:border-accent hover:text-accent hover:bg-transparent duration-150"
            >
              English version
            </a>
          </li>
          <li>
            <a
              href="./pdf/Abdelkarim_Aoulallay_Resume_French.pdf"
              target="_blank"
              className="bg-accent text-background p-2 rounded border-2 border-transparent hover:border-accent hover:text-accent hover:bg-transparent duration-150"
            >
              Version francais
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
