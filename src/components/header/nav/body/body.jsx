import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";

const Body = ({ links, selectedLink, setSelectedLink, setIsActive }) => {
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={{
            initial: {
              y: "100%",
              opacity: 0,
            },
            enter: (i) => ({
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: i[0],
              },
            }),
            exit: (i) => ({
              y: "100%",
              opacity: 0,
              transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: i[1],
              },
            }),
          }}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href, target } = link;

        return (
          <Link key={`l_${index}`} href={href} target={target}>
            <motion.p
              onClick={() => setIsActive(false)}
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={{
                initial: {
                  filter: "blur(0px)",
                  opacity: 1,
                },
                open: {
                  filter: "blur(4px)",
                  opacity: 0.6,
                  transition: { duration: 0.3 },
                },
                closed: {
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: { duration: 0.3 },
                },
              }}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
