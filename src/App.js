import React from "react";
import NavBar from "./Nav";
import Carousel from "./PageCarousel";
import Featured from "./Featured";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Featured />
      <ProductCard />
    </>
  );
};

export default App;
