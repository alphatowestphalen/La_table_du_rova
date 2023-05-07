import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./conseil.css";
import conseilImg from "../../assets/images/review1.png";
import Slider from "react-slick";
import bg from "../../assets/images/imageTabledurova/1.jpg";
import { Imgtabledurova } from "../../assets/fake-data/imgtabledurova";

const Conseil = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesTScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section>
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
              <h1>Quelque photo dans la table du rove</h1>

              <p className="descriptionZebubar">
                Voici quelques photos de la Table du Palais. Nous vous invitons à venir ici et nous sommes très heureux 
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
