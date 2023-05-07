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
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5">
              <div className="slider__content w-50">
                <h2 className="mb-4">
                  Quelque photo dans nos restaurant table du rova
                </h2>
                <Slider {...settings}>
                  {
                    Imgtabledurova.map((items) => (
                        <img src={items.urlImage} className="w-100" />
                    ))
                  }
                </Slider>
              </div>
              <div className="slider__img w-50">
                <img src={conseilImg} alt="" className="w-100"></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Conseil;
