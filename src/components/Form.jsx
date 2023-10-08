const Form = () => {
  return (
    <form
      action="https://formsubmit.co/aoulallayabdelkarim@gmail.com"
      method="POST"
      className="bg-white p-8 text-sm shadow-lg rounded-lg"
    >
      <div className="mb-2">
        <label htmlFor="name" className="capitalize text-paragraph">
          <br />
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="bg-secondary p-3 rounded mt-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="capitalize text-paragraph">
          <br />
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="bg-secondary p-3 rounded mt-2 w-full"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="message" className="capitalize text-paragraph">
          <br />
          message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="bg-secondary p-3 rounded mt-2 w-full resize-none"
          rows={"8"}
          required
        />
      </div>
      <input type="hidden" name="_captcha" value="false"></input>
      <button
        type="submit"
        className="bg-accent w-full p-3 rounded text-background font-bold md:hover:-translate-y-1 duration-300
        sm:w-auto sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
