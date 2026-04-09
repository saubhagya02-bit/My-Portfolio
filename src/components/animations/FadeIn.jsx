const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  let translateClass = "";

  switch (direction) {
    case "up":
      translateClass = "translate-y-10";
      break;
    case "down":
      translateClass = "-translate-y-10";
      break;
    case "left":
      translateClass = "translate-x-10";
      break;
    case "right":
      translateClass = "-translate-x-10";
      break;
    default:
      translateClass = "translate-y-10";
  }

  return (
    <div
      className={`opacity-0 ${translateClass} animate-fadeIn`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;