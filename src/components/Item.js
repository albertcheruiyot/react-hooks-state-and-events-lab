import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(function(prevInCart) {
      return !prevInCart;
    });
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
