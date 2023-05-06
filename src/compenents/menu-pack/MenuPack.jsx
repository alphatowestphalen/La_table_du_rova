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

import "./menu-pack.css";
import ProductCard from "../product-card/ProductCard";

const MenuPack = () => {
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
            <h2 className="menu__title">Nos Grandes Tables</h2>
            <h6 className="menu__title">
              A partir de 6 personnes et uniquement sur réservation
            </h6>
            <h6 className="menu__title">
              Le choix de menu doit être déteriminé au plus tard 24h00 à
              l'avance
            </h6>
            <br></br>
            <h3 className="menu__title">
              La tablée dégustation malagasy : 45.000 Ar
            </h3>
            <h6 className="menu__title">
              Cocktail de bienvenue : avec ou sans alcool
            </h6>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "FAST-FOOD" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("FAST-FOOD")}
            >
              Entrée au choix
            </button>
            <button
              className={`filter-btn ${
                filter === "RICE-MENU" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("RICE-MENU")}
            >
              Plat au choix
            </button>
            <button
              className={`filter-btn ${
                filter === "PIZZA" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("PIZZA")}
            >
              Accompagnement
            </button>
            <button
              className={`filter-btn ${
                filter === "DESSERT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter("DESSERT")}
            >
              Dessert au choix
            </button>
          </Col>
          {products.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="d-flex align-item-center mb-4"
            >
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}

          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">La tablée bistronomique : 70.000 Ar</h3>
            <h6 className="menu__title">
              Cocktail de bienvenue : avec ou sans alcool et Croquants au
              fromage de Fianarantsoa
            </h6>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter1 === "RICH-MEN" ? "active__btn" : ""
              }`}
              onClick={() => setFilter1("RICH-MEN")}
            >
              Entrée au choix
            </button>
            <button
              className={`filter-btn ${
                filter1 === "ENTREE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter1("ENTREE")}
            >
              Plat au choix
            </button>
            <button
              className={`filter-btn ${
                filter1 === "PIZZAT" ? "active__btn" : ""
              }`}
              onClick={() => setFilter1("PIZZAT")}
            >
              Accompagnement
            </button>
            <button
              className={`filter-btn ${
                filter1 === "DESSER" ? "active__btn" : ""
              }`}
              onClick={() => setFilter1("DESSER")}
            >
              Dessert au choix
            </button>
          </Col>
          {product1.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}

          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Carte des Vins</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter2 === "RICH-ME" ? "active__btn" : ""
              }`}
              onClick={() => setFilter2("RICH-ME")}
            >
              Nos Vins Malagasy
            </button>
            <button
              className={`filter-btn ${
                filter2 === "ENTRE" ? "active__btn" : ""
              }`}
              onClick={() => setFilter2("ENTRE")}
            >
              Vin au verre ou en pichet
            </button>
          </Col>
          {product2.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {" "}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
