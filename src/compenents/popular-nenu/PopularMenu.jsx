import React from "react";

import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Employer = () => {
  const slideToTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger:{
          trigger: elem,
          start: "top center",
          end: "bottom center"
        }
      }
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 800, // durée de l'animation en millisecondes
      offset: 100, // décalage (en pixels) de l'élément avant l'animation
      easing: 'ease-in-out', // type de transition de l'animation
      delay: 200, // délai (en millisecondes) avant que l'animation ne démarre
    });
  }, []);

  return (
    <section data-aos="zoom-in-down" className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center mt-5">
            <h2>Notre équipe</h2>
          </Col>

          {popularMenuFood.map((item) => (
            <Col
              id="box1"
              lg="3"
              md="4"
              sm="6"
              xs="6"
              className="mb-4"
              key={item.id}
            >
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Employer;
