import { motion } from "framer-motion";

const Header = () => {
  const animateFrom = { scale: 0, opacity: 0 };
  const animateTo = { scale: 1.1, opacity: 1 };

  return (
    <motion.div
      initial={animateFrom}
      animate={animateTo}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <h1>Your Daily Affirmation </h1>
    </motion.div>
  );
};

export default Header;
