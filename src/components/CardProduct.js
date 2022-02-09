import React from "react";

const CardProduct = () => {
  return (
    <div className="card">
      <div className="card__user">
        <div className="card__user--img">Profile pic</div>
        <div className="card__user--name">User name</div>
      </div>
      <div className="card__img">IMAGE</div>
      <div className="card__price">Price</div>
      <div className="card__size">Size</div>
      <div className="card__brand">Brand</div>
    </div>
  );
};

export default CardProduct;
