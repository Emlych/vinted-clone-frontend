import React from "react";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="products">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default Home;
