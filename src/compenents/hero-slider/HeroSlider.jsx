import React, { useState } from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import { sliderData } from "../../assets/fake-data/slider";
import "./slide.css";

const HeroSlider = () => {
  const [currentstate, setcurrentstate] = useState(0);

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
        <Slider className="back" {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 ps-2">
                  <h2 className="mb-3">{item.title}</h2>
                  <p>{item.desc}</p>
                  <p>{item.descn}</p>
                </div>
                <div className="slider__img w-50">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
