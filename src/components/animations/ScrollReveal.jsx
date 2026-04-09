import useScrollReveal from "../../hooks/useScrollReveal";

const ScrollReveal = ({ children }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;