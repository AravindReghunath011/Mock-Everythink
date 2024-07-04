import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./horizontal.css";

const cards = [
  { id: 2, content: "./al.jpg" },
  { id: 3, content: "./zebra.jpg" },
  { id: 4, content: "./nada.jpg" },
];

const Card = ({ card }) => (
  <div className="card">
    <div>
      <img src={card.content} alt="" />
    </div>
  </div>
);

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="carousel">
        <motion.div style={{ x  }} className="cards-container">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
          <div className="card">
            <div>
              <p>The new Black Arrow website is designed to be user-friendly and
              informative, with a focus on showcasing their projects and
              services. The website is also fully responsive, so it can be
              viewed on any device.</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src="al.jpg" alt="" />
            </div>
          </div>
          <div className="card">
            <div>
              <img src="zebra.jpg" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
