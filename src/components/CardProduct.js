import React from "react";

const CardProduct = ({ item }) => {
  return (
    <div className="card">
      <div className="card__user">
        <div className="card__user--img">
          <img src={item.owner.account.avatar.url} alt="" />
        </div>
        <div className="card__user--name">{item.owner.account.username}</div>
      </div>
      <div className="card__img">IMAGE</div>
      <div className="card__price">Price</div>
      <div className="card__size">Size</div>
      <div className="card__brand">Brand</div>
    </div>
  );
};

export default CardProduct;
