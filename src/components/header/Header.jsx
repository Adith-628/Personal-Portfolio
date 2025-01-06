"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import styles from "./style.module.scss";
import Nav from "./nav";
import Cursor from "../cursor/cursor";

const Header = ({ loader }) => {
  const [isActive, setIsActive] = useState(false);
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };
  return (
    <motion.header
      className={styles.header}
      style={{
        backgroundColor: "transparent",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      <div className={styles.bar}>
        <Link href="/" className="flex items-center justify-center">
          <span className="text-lg font-semibold transition-transform hover:translate-x-1 hover:translate-y-1">
            adithyan
          </span>
        </Link>
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div className={styles.label}>
            <motion.p
              variants={{
                initial: {
                  opacity: 0,
                },
                open: {
                  opacity: 1,
                  transition: { duration: 0.35 },
                },
                closed: {
                  opacity: 0,
                  transition: { duration: 0.35 },
                },
              }}
              animate={!isActive ? "open" : "closed"}
              className="text-lg"
            >
              Menu
            </motion.p>
            <motion.p
              variants={{
                initial: {
                  opacity: 0,
                },
                open: {
                  opacity: 1,
                  transition: { duration: 0.35 },
                },
                closed: {
                  opacity: 0,
                  transition: { duration: 0.35 },
                },
              }}
              animate={isActive ? "open" : "closed"}
              className="text-lg"
            >
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <motion.div
        variants={{
          initial: {
            height: 0,
          },
          open: {
            height: "100dvh",
            transition,
          },
          closed: {
            height: 0,
            transition,
          },
        }}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
