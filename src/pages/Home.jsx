import React from "react";
import { Fragment } from "react";
import Header from "../compenents/header/Header";
import HeroSlider from "../compenents/hero-slider/HeroSlider";
import PopularMenu from "../compenents/popular-nenu/PopularMenu";
import ChoseUs from "../compenents/chose-us/ChoseUs";
import MenuPack from "../compenents/menu-pack/MenuPack";
import Conseil from "../compenents/conseil/Conseil";
import Zebubar from "../compenents/zebu-bar/Zebubar";
import Footer from "../compenents/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChoseUs />
      <MenuPack />
      <Conseil />
      <Zebubar />
      <Footer />
    </Fragment>
  );
};

export default Home;
