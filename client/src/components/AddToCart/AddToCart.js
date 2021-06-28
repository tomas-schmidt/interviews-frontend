import React, { useContext, useCallback, useState } from "react";
import "./styles.scss";
import Cart from 'assets/img/cart@2x.png';
import ItemsContext from "../../context/items-context";
import axios from "axios";

export const AddToCart = (item, accessToken) => {
  const items = useContext(ItemsContext);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = useCallback(async () => {
    var id = item.id;
    var body = { id: id, accessToken };

    axios.post("http://localhost:8080/add-to-cart", body)
      .then(() => {
        setIsAdded(true);
      })
      .catch((err) => {
        console.log(err);
      }
    );
  }, null);

  const getTotalPrice = () => {
    const price = 0;

    items.forEach(item => {
      price += item.price;
    });

    return price;
  };

  return (
    <div onClick={addToCart} className="add-to-cart-wrapper">
      <div>
        <img
          className="cart"
          src={Cart}
        />
        <span className="title">Agregar {item.name} al carrito</span>
        <p className="description">Llevas {items.length() + (isAdded ? 1 : 0)} items en tu carrito</p>
        <div>
          <span className="total">Total: ${getTotalPrice() + (isAdded ? item.price : 0)}</span>
        </div>
      </div>
    </div>
  );
};
