import Form from "./Form";
import Title from "./Title";

const Contact = () => {
  return (
    <section className="py-12" id="contact">
      <div className="container">
        <Title title="contact me" number={"03."} />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
