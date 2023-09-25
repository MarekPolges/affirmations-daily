import { motion } from "framer-motion";

export default function Affirmation(props) {
  const animateFrom = { scale: 0, opacity: 0 };
  const animateTo = { scale: 0.9, opacity: 0.8 };
  const exit = { scale: 0.9, opacity: 1 };

  return (
    <div className="affirmation-card">
      <motion.p
        initial={animateFrom}
        animate={animateTo}
        transition={{ ease: "easeOut", duration: 2 }}
        exit={exit}
        delay={3}
      >
        {props.body}
      </motion.p>
    </div>
  );
}
