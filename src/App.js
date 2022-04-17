import React from "react";
import NavBar from "./Nav";
import Carousel from "./PageCarousel";
import Featured from "./Featured";
import ProductCard from "./ProductCard";
import PicParrallax from "./PicParrallax";

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Featured />
      <ProductCard />
      <PicParrallax />
    </>
  );
};

export default App;
