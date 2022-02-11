import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" />
      <div className="hero__container">
        <p>Prêts à faire du tri dans vos placards ?</p>
        <button className="primary">Vends maintenant</button>
      </div>
    </div>
  );
};

export default Hero;
