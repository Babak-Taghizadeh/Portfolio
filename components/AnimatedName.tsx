"use client";

import { motion } from "framer-motion";

export const AnimatedName = () => {
  return (
    <motion.button
    initial={{ x: "-150%" }}
    animate={{ x: "0" }}
      className="text-2xl font-bold">
      {"<Babak />"}
    </motion.button>
  );
};
