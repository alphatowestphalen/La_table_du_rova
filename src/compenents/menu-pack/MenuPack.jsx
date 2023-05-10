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
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <h2 className="menu__title">Nos Grandes Tablées</h2>
            <h6 className="menu__title__childer">
              A partir de 6 personnes et uniquement sur réservation
            </h6>
            <h6 className="menu__title__childer">
              Le choix de menu doit être déteriminé au plus tard 24h00 à
              l'avance
            </h6>
          </Col>
        </Row>
        <Row>
          <Col data-aos="zoom-in-right" lg="5" className="menu text-left mb-4">
            <h3 className="menu__title">La Tablée degustation malagasy : 45000 Ar</h3>
            <h4 className="menu__title__childer">
              Cocktail de bienvenue : avec ou sans alcool
            </h4>
            <h4 className="menu__title__childer_entre">
              Entrée au choix
            </h4>
            <div className="liste_entre">
              <ul>
                <li>Assiette de sambos ou de nems maison sur lit de verdure.</li>
                <li>Salade de crudités variées, œufs mayonnaises.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Plat au choix
            </h4>
            <div className="liste_plat">
              <ul>
                <li>Hen’omby ritra.</li>
                <li>Ravitoto sy henakisoa.</li>
                <li>Carri de poulet.</li>
                <li>Akohosôsy sy petipoa.</li>
                <li>Rougail de saucisses.</li>
                <li>Gambas flambées au rhum.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Accompagnement
            </h4>
            <div className="liste_Accompagnement">
              <ul>
                <li> riz blanc et rougail de tomates.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Dessert au choix
            </h4>
            <div className="liste_Accompagnement">
              <ul>
                <li> Coupe glacée de la reine Ranavalona.</li>
                <li> Riz au lait de coco.</li>
                <li> Gâteau de riz à la vanille.</li>
                <li> Koba ravina de la table du Rova.</li>
                <li> Salade de fruits de saison.</li>
              </ul>
            </div>
          </Col>

          {/* bistronomique */}
          <Col data-aos="zoom-in-right" lg="5" className="menu text-left mb-4">
            <h3 className="menu__title">La Tablée bistronomique  : 70.000 Ar</h3>
            <h4 className="menu__title__childer">
              Cocktail de bienvenue : <p>avec ou sans alcool et Croquants au fromage de Fianarantsoa.</p>
            </h4>
            <h4 className="menu__title__childer_entre">
              Entrée au choix
            </h4>
            <div className="liste_entre">
              <ul>
                <li>Crémeux de potiron aux écrevisses.</li>
                <li>Bouchée de courgettes, sauce curry.</li>
                <li>Salade composée selon l’humeur du Chef.</li>
                <li>Quiche aux légumes de saison gratinés sur son lit de verdure.</li>
                <li>Salade de crudités variées, œufs mayonnaises.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Plat au choix
            </h4>
            <div className="liste_plat">
              <ul>
                <li>Tournedos sauce marchand de vin.</li>
                <li>Emincés de volaille en sauce safranée, citron et vin moelleux.</li>
                <li>Filet mignon de porc au miel et zests d’orange</li>
                <li>Carbonnade à la bière.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Accompagnement
            </h4>
            <div className="liste_Accompagnement">
              <ul>
                <li> Gratin dauphinois ou gratin de potirons et de pommes de terre.</li>
                <li> Ratatouille niçoise ou légumes sautés de saison.</li>
              </ul>
            </div>
            <h4 className="menu__title__childer_entre">
              Dessert au choix
            </h4>
            <div className="liste_Accompagnement">
              <ul>
                <li> Moelleux au chocolat de Madagascar nappée de crème vanille de Madagascar.</li>
                <li> Crumble aux fruits de saison.</li>
                <li> Panna cotta aux fruits du marché.</li>
                <li> Farandole de mignardises (+10.000 ar).</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Col lg="12" className="degistationGobale">
            <div className="degustation">
              <h4 className="menu__title">
                La tablée dégustation malagasy : 45.000 Ar
              </h4>
              <h6 className="menu__title__childer">
                La tablée dégustation malagasy : 45.000 Ar
              </h6>
            </div>
            <div className="degustation">
              <h4 className="menu__title">
              La tablée bistronomique : 70.000 Ar
              </h4>
              <h6 className="menu__title">
              Cocktail de bienvenue : avec ou sans alcool et Croquants au fromage de Fianarantsoa
              </h6>
            </div>
          </Col> */}
        {/* {products.map((item) => (
            <Col
              lg="3"

              key={item.id}
              className="d-flex align-item-center mb-4"
            >
              {" "}
              <ProductCard item={item} />
            </Col>
          ))} */}

        {/* <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">La tablée bistronomique : 70.000 Ar</h3>
            <h6 className="menu__title">
              Cocktail de bienvenue : avec ou sans alcool et Croquants au
              fromage de Fianarantsoa
            </h6>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${filter1 === "RICH-MEN" ? "active__btn" : ""
                }`}
              onClick={() => setFilter1("RICH-MEN")}
            >
              Entrée au choix
            </button>
            <button
              className={`filter-btn ${filter1 === "ENTREE" ? "active__btn" : ""
                }`}
              onClick={() => setFilter1("ENTREE")}
            >
              Plat au choix
            </button>
            <button
              className={`filter-btn ${filter1 === "PIZZAT" ? "active__btn" : ""
                }`}
              onClick={() => setFilter1("PIZZAT")}
            >
              Accompagnement
            </button>
            <button
              className={`filter-btn ${filter1 === "DESSER" ? "active__btn" : ""
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
              className={`filter-btn ${filter2 === "RICH-ME" ? "active__btn" : ""
                }`}
              onClick={() => setFilter2("RICH-ME")}
            >
              Nos Vins Malagasy
            </button>
            <button
              className={`filter-btn ${filter2 === "ENTRE" ? "active__btn" : ""
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
          ))} */}

      </Container>
    </section>
  );
};

export default MenuPack;
