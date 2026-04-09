import useScrollReveal from "../../hooks/useScrollReveal";

const About = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2>About Me</h2>
    </section>
  );
};

export default About;