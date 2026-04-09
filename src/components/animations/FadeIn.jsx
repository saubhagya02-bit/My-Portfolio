import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0, direction = "up" }) => {

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const { x, y } = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, x: x || 0, y: y || 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;