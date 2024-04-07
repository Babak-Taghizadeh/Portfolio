"use client";

import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center text-2xl font-extrabold">Projects:</h1>
      <motion.div
        className="h-[80px] w-[80px] rounded-full border-[12px] border-t-[12px] border-[#f3f3f3] border-t-[#3498db]"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
