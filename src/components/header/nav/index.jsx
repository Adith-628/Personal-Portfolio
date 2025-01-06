import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Body from "./body/body";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };
const Index = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={{
        initial: {
          height: 0,
        },
        enter: {
          height: "auto",
          transition,
        },
        exit: {
          height: 0,
          transition,
        },
      }}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
          {/* <Footer /> */}
        </div>
        {/* <Image
          src={links[selectedLink.index].thumbnail}
          isActive={selectedLink.isActive}
        /> */}
      </div>
    </motion.div>
  );
};

export default Index;
