import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import {
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  dessertProducts,
} from "../../assets/fake-data/products";
import {
  fastFoodProducts1,
  riceMenuProducts1,
  pizzaProducts1,
  coffeeProducts1,
  dessertProducts1,
} from "../../assets/fake-data/product1";
import {
  coffeeProducts2,
  dessertProducts2,
} from "../../assets/fake-data/product2";

import "./cart.css";
import ProductCard from "../product-card/ProductCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarteVin = () => {
  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  const [filter1, setFilter1] = useState("RICE-MEN");
  const [product1, setProducts1] = useState(fastFoodProducts1);

  const [filter2, setFilter2] = useState("RICE-ME");
  const [product2, setProducts2] = useState(dessertProducts2);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }
    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }
    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }
  }, [filter]);

  useEffect(() => {
    if (filter1 === "RICH-MEN") {
      setProducts1(dessertProducts1);
    }
    if (filter1 === "ENTREE") {
      setProducts1(coffeeProducts1);
    }
    if (filter1 === "PIZZAT") {
      setProducts1(riceMenuProducts1);
    }
    if (filter1 === "DESSER") {
      setProducts1(pizzaProducts1);
    }
  }, [filter1]);
  useEffect(() => {
    AOS.init({
      duration: 800, // durée de l'animation en millisecondes
      offset: 100, // décalage (en pixels) de l'élément avant l'animation
      easing: 'ease-in-out', // type de transition de l'animation
      delay: 200, // délai (en millisecondes) avant que l'animation ne démarre
    });
  }, []);

  useEffect(() => {
    if (filter2 === "RICH-ME") {
      setProducts2(dessertProducts2);
    }
    if (filter2 === "ENTRE") {
      setProducts2(coffeeProducts2);
    }
  }, [filter2]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="menu__title">Nos cart des Vins</h2>
          </Col>
        </Row>
        <Row>
          <Col data-aos="zoom-in-right" lg="10" className="menu  mb-4">
            <h4 className="menu__title__childer_entre">
              Nos vins MALAGASY
            </h4>
            <div className="liste_entre">
              <ul>
                <li>CÔTE DE FIANARA:ROUGE,ROSÉ, BLANC OU GRIS 75CL : <b>25 000 Ar</b></li>
                <li>CLOS MALAZA: ROUGE,ROSÉ, BLANC OU GRIS 75CL : <b>25 000 Ar</b> </li>
                <li>CLOS MAROMBY: ROUGE ET ROSÉ 75 : <b>35 000 Ar</b></li>
                <li>MAROPARASY:ROUGE,ROSÉ, BLANC DOUX 75CL : <b>42 000Ar</b> </li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
             VIN AU VERRE OU EN PICHET
            </h4>
            <div className="liste_plat">
              <ul>
                <li>VIN LOCAL DE HAUTE MATSIATRA: ROUGE, ROSÉ, BLAC GRIS: 5 000 Ar(BALLON) et 15 000 Ar (PICHET 37CL)</li>
                <li>CÔTE DU RHONE-FRANCE: ROUGE : 10 000 Ar(BALLON) et 30 000 Ar (PICHET 37CL)</li>
                <li>VIN DU PAYS DE L'HÉRAULT-FRANCE: RODÉ 10 000 Ar(BALLON) et 30 000 Ar (PICHET 37CL)</li>
              </ul>
            </div>
          </Col>
        </Row>


      </Container>
    </section>
  );
};

export default CarteVin;
