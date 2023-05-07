import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import testeIg from "../../assets/images/background.png";

import {sliderData } from "../../assets/fake-data/slider";
import "./slide.css";

const HeroSlider = () => {
  const [currentstate, setcurrentstate] = useState(0);
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (currentstate === 2) {
        setcurrentstate(0)
      } else {
        setcurrentstate(currentstate+1)  
      }
    },5000)
    return () =>clearTimeout(timer)
  },[currentstate])


  const bgImagestyle = {
    backgroundImage: `url(${sliderData[currentstate].urlImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesTScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <>
    <section className="bg" style={ bgImagestyle } >
    <div className="transparantBg"></div>
      <Container>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <div className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-100 ps-2">
                  <h2 className="mb-3">{item.title}</h2>
                  <h3>{item.desc}</h3>
                  <p>{item.descn}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
    </>
    
  );
};

export default HeroSlider;
