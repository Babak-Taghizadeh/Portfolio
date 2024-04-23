"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Contact } from "./Contact";
import Link from "next/link";

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const variants = {
    open: {
      x: 0,
      transition: {
        type: "tween",
      },
    },
    closed: { x: "100%" },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <motion.button
        className="rounded-full bg-secondary p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleMenu}
      >
        {isOpen ? <IoClose size={30} /> : <MdMenu size={30} />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className="fixed right-0 top-20 z-10 flex h-[calc(100vh-5rem)] w-36 flex-col justify-between rounded bg-neutral pb-32"
          >
            <ul className="mt-5 flex flex-col items-center gap-5">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#skills">Skills</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              {/* <li>Contact</li> */}
            </ul>
            <Contact />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DrawerMenu;
