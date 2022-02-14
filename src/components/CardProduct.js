import React from "react";

const CardProduct = ({ item }) => {
  return (
    <div className="card">
      {console.log("item owner ===>", item.owner)}
      <div className="card__user">
        <div className="card__user--img">
          {item.owner.account ? (
            <img src={item.owner.account.avatar.url} alt="profile avatar" />
          ) : (
            ""
          )}
        </div>
        {item.owner.account ? (
          <div className="card__user--name">{item.owner.account.username}</div>
        ) : (
          ""
        )}
      </div>
      <div className="card__img">
        <img
          src={item.product_image.secure_url}
          alt={item.product_description}
        />
      </div>
      <div className="card__details">
        <div className="card__price">{item.product_price} €</div>
        {item.product_details.map((item, index) => {
          // const keys = Object.keys(item);
          return (
            <div className="infos--details--line" key={index}>
              {/* <span className="grey">{item[keys[0]]}</span> */}
              <span className="grey">{Object.values(item)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardProduct;
