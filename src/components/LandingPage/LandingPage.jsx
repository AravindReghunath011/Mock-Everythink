import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import Projects from "../projects/Projects";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const [height, setHeight] = useState(0);
  const [projectStyles, setProjectStyles] = useState({});

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };
    setHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.7]);
  const y3 = useTransform(scrollYProgress, [0, 1], [height / 2, 0]);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { bgcolor, textcolor } = entry.target.dataset;
          if (entry.isIntersecting) {
            controls.start({ backgroundColor: bgcolor, color: textcolor });
            setProjectStyles({ color: textcolor });
          } else {
            controls.start({ backgroundColor: "transparent", color: "#000000" });
            setProjectStyles({ backgroundColor: "transparent", color: "#000000" });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    const sectionElements = document.querySelectorAll("[data-bgcolor]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [controls]);

  return (
    <motion.div animate={controls}>
      <motion.div ref={container} className="container">
        <img className="img1" src="./Asset 96ethink_char.svg" alt="" />
        <motion.img style={{ y: y1 }} className="img5" src="./Asset 83ethink_char.svg" alt="" />
        <motion.img style={{ y: y1 }} className="img3" src="./Asset 93ethink_char.svg" alt="" />
        <motion.img style={{ y: y2 }} className="img4" src="./Asset 81ethink_char.svg" alt="" />
        <motion.img style={{ y: y3 }} className="img2" src="./image.png" alt="" />
        <p>
          We specialize in digital solutions, branding, product design, and
          custom merchandise. Discover more <span>about us</span>, checkout{" "}
          <span>our project</span> or <span>contact us </span> <br />
          today!
        </p>
      </motion.div>
      <Projects styles={projectStyles} />
    </motion.div>
  );
};

export default LandingPage;
