import React from "react";

const CardProduct = ({ item }) => {
  return (
    <div className="card">
      <div className="card__user">
        <div className="card__user--img">
          <img src={item.owner.account.avatar.url} alt="profile avatar" />
        </div>
        <div className="card__user--name">{item.owner.account.username}</div>
      </div>
      <div className="card__img">
        <img src={item.product_image.url} alt={item.product_description} />
      </div>
      <div className="card__details">
        <div className="card__price">{item.product_price} €</div>
        <div className="card__size">{item.product_details.taille}</div>
        {/* j:'arrive pas à afficher la taille */}
        <div className="card__brand">{item.product_details["MARQUE"]}</div>
      </div>
    </div>
  );
};

export default CardProduct;
