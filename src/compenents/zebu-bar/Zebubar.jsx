import React, { useEffect } from "react";
import "./zebubar.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { Zebubardata } from "../../assets/fake-data/zebubar";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Zebubar = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesTScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

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
    <section data-aos="zoom-in-down">
      <Container className="app__container">
        <Row className="gap-6">
          <Col lg="6">
            <Slider ml-5 {...settings}>
              {
                Zebubardata.map((items) => (
                  <img src={items.urlImg} className="w-100" />
                ))
              }
            </Slider>
            </Col>
          <Col lg="6" md="8">

            <div className="app__content">
              <p className="descriptionZebubar">
               Notre partenaire à Ambalavao :
               <br />
               Le Zébubar
               <br />
               Restaurant et chambres d'hôtes
               <br />
               Pour toute information contacter le
               <br />
               +261 34 50 165 45
              </p>
              <div className="app__btns d-flex align-item-center gap-5 mt-4">
                <button className="btn__apple d-flex align-item-center gap-3">
                  <a href="https://www.facebook.com/zebubarambalavao">Decouvrir</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Zebubar;
