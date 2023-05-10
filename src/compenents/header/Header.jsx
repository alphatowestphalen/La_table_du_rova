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
import { Link } from "react-router-dom";
import CarteVin from "../carteVin/cart";

const Header = () => {
  const [navbar, setNav] = useState(false)
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();
  const menuRef = useRef();

  const srollmidina = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    
  };

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
    <section>
      <header className={navbar ? "header active" : "header"}>
        <Container>
          <div className="navigation">
            <div className="logo d-flex align-items-center gap-3">
              <span className="mt-2">
                <i class="ri-restaurant-2-line"></i>
              </span>{" "}
              <h2 id="typewriter">LA TABLE DU ROVA</h2>
            </div>

            <div className="nav__menu " ref={menuRef}>
              <div className="nav__list__wrapper d-flex align-items-center gap-5">
                <ul className="nav__list">
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section1)}>
                      Acceuil
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section2)}>
                      Notre équipe
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section3)}>
                      Menu
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section6)}>
                      Cart Vin
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section4)}>
                      Photo
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section5)}>
                      Nos Grandes Tablées
                    </button>
                  </li>
                  <li className="nav__item">
                    <button onClick={() => srollmidina(section7)}>
                      Contacts
                    </button>
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

      <div ref={section1}>
        <HeroSlider />
      </div>
      <div className="sec1" ref={section2}>
        <PopularMenu />
      </div>
      <div ref={section3}>
        <ChoseUs />
      </div>
      <div ref={section4}>
        <Conseil />

      </div>
      <div ref={section5}>
        <MenuPack />
      </div>
      <div ref={section6}>
        <CarteVin />
      </div>
      <div ref={section7}>
        <Zebubar />
      </div>
      <div ref={section8}>
        <Footer />
      </div>





    </section>
  );
};

export default Header;
