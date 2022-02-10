import React from "react";

const CardProduct = ({ item }) => {
  return (
    <div className="card">
      {console.log("item ===>", item)}
      <div className="card__user">
        <div className="card__user--img">
          <img src={item.user.account.avatar.url} alt="profile avatar" />
        </div>
        <div className="card__user--name">{item.owner.account.username}</div>
      </div>
      <div className="card__img">
        <img src={item.product_image.url} alt={item.product_description} />
      </div>
      <div className="card__details">
        <div className="card__price">{item.product_price} €</div>
        {item.product_details.map((item, index) => {
          return (
            <div className="infos--details--line">
              <span className="grey">{Object.keys(item)}</span>
              <span className="darkgrey">{Object.values(item)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardProduct;
