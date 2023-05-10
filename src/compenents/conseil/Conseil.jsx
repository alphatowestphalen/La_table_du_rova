import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./conseil.css";
import conseilImg from "../../assets/images/review1.png";
import Slider from "react-slick";
import bg from "../../assets/images/imageTabledurova/1.jpg";
import { Imgtabledurova } from "../../assets/fake-data/imgtabledurova";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Conseil = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // durée de l'animation en millisecondes
      offset: 100, // décalage (en pixels) de l'élément avant l'animation
      easing: 'ease-in-out', // type de transition de l'animation
      delay: 200, // délai (en millisecondes) avant que l'animation ne démarre
    });
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesTScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section data-aos="zoom-in-up">
      <Container className="app__container">
        <Row className="gap-6">
          <Col lg="6">
            <Slider ml-5 {...settings}>
              {
                Imgtabledurova.map((items) => (
                  <img src={items.urlImage} className="w-100" />
                ))
              }
            </Slider>
          </Col>
          <Col lg="6" md="8">

            <div className="app__content">
              <h1>Quelques photos de La Table du Rova</h1>

              <p className="descriptionZebubar">
                Voici quelques photos de la Table du Rova. Nous vous y invitons à venir ici et vous serez chaleuresement accueillis.
              </p>
              {/* <div className="app__btns d-flex align-item-center gap-5 mt-4">
                <button className="btn__apple d-flex align-item-center gap-3">
                  <i class="ri-apple-line"></i>
                  <a href="https://www.facebook.com/zebubarambalavao">Decouvrire</a>
                </button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Conseil;
