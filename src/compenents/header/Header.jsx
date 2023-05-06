import React, { useRef, useEffect } from "react";
import "./header.css";
import Typewriter from "typewriter-effect/dist/core";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Accuel",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Membres",
    url: "#",
  },
  {
    display: "A Propos",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: ["RESTAURANT", "LA TABLE DU ROVA"],
      autoStart: true,
      loop: true,
      interval: 1000,
    });
  }, []);
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1" id="typewriter">
              <span>
                <i class="ri-restaurant-2-line"></i>
              </span>{" "}
              LA TABLE DU ROVA
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
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
  );
};

export default Header;
