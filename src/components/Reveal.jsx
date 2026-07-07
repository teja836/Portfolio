import React from "react";
import { motion as Motion } from "framer-motion";

const directions = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
};

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const offset = directions[direction] || directions.up;

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
};

export default Reveal;
