import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./conseil.css";
import conseilImg from "../../assets/images/review1.png";
import Slider from "react-slick";

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
                  des employers talentueux, a l'ecoute et competant
                </h2>
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi hic nihil voluptas modi corporis? Neque
                        accusantium a, quas eos nam aliquid, inventore labore
                        doloremque voluptatem blanditiis deleniti culpa error
                        odio."
                      </p>
                      <h6>Michel Princy</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi hic nihil voluptas modi corporis? Neque
                        accusantium a, quas eos nam aliquid, inventore labore
                        doloremque voluptatem blanditiis deleniti culpa error
                        odio.
                      </p>
                      <h6>Michel Princy</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <p className="review__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi hic nihil voluptas modi corporis? Neque
                        accusantium a, quas eos nam aliquid, inventore labore
                        doloremque voluptatem blanditiis deleniti culpa error
                        odio.
                      </p>
                      <h6>Michel Princy</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
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
