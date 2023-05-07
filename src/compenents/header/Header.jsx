import React, { useRef, useEffect } from "react";
import "./header.css";
import Typewriter from "typewriter-effect/dist/core";
import { Container } from "reactstrap";
import { useState } from "react";
import HeroSlider from "../hero-slider/HeroSlider";
import PopularMenu from "../popular-nenu/PopularMenu";
import ChoseUs from "../chose-us/ChoseUs";
import MenuPack from "../menu-pack/MenuPack";
import Conseil from "../conseil/Conseil";
import Zebubar from "../zebu-bar/Zebubar";
import Footer from "../footer/Footer";

const Header = () => {
  const menuRef = useRef();
  const [navbar, setNav] = useState(false);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const headcolorchange = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["RESTAURANT", "LA TABLE DU ROVA"],
      autoStart: true,
      loop: true,
      interval: 1000,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", headcolorchange);
    return () => window.removeEventListener("scroll", headcolorchange);
  }, []);

  return (
    <>
      <header className={navbar ? "header active" : "header"}>
        <Container>
          <div className="navigation">
            <div className="logo d-flex align-items-center gap-2">
              <span className="mt-2">
                <i class="ri-restaurant-2-line"></i>
              </span>{" "}
              <h2 id="typewriter">LA TABLE DU ROVA</h2>
            </div>

            <div className="nav__menu " ref={menuRef}>
              <div className="nav__list__wrapper d-flex align-items-center gap-5">
                <ul className="nav__list">
                  <li className="nav__item">
                    <button>Accueil</button>
                  </li>
                  <li className="nav__item">
                    <button>Employes</button>
                  </li>
                  <li className="nav__item">
                    <button>Menu</button>
                  </li>
                  <li className="nav__item">
                    <button>Produits</button>
                  </li>
                  <li className="nav__item">
                    <button>Roux des gourmands</button>
                  </li>
                  <li className="nav__item">
                    <button>Contacts</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>

     
    </>
  );
};

export default Header;
