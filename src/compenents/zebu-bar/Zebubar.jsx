import React from "react";
import "./zebubar.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { Zebubardata } from "../../assets/fake-data/zebubar";

const Zebubar = () => {
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
                Zebubardata.map((items) => (
                  <img src={items.urlImg} className="w-100" />
                ))
              }
            </Slider>
            </Col>
          <Col lg="6" md="8">

            <div className="app__content">
              <h2>Decouvrire aussi Zebubar Ambalavao</h2>
              <h1 className="mb-4">
                Hotel et Restaurant
              </h1>
              <p className="descriptionZebubar">
               Cette hotel est situé Ambalavao, si vous avez besoin d'inforamtion Cliquer sur contracter ou appele ce numero
               <br /> 
               +261 34 50 165 45
              </p>
              <div className="app__btns d-flex align-item-center gap-5 mt-4">
                <button className="btn__apple d-flex align-item-center gap-3">
                  <i class="ri-apple-line"></i>
                  <a href="https://www.facebook.com/zebubarambalavao">Decouvrire</a>
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
