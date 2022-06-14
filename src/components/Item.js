import React from 'react';
import { useState } from 'react';
import '../styles/Item.css';

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    if (quantity) {
      if (!props.cart.filter((item) => item.key === props.item.key).length) {
        props.item.quantity = quantity;
        props.setCart([...props.cart, props.item]);
      } else {
        const newCart = props.cart.map((item) => {
          if (item.key === props.item.key) {
            item.quantity += quantity;
          }
          return item;
        });
        props.setCart(newCart);
      }
    }
  };

  return (
    <div className="item-card">
      <div className="img-container">
        <img src={props.item.img} alt="shop item" />
      </div>
      <div className="item-name">{props.item.name}</div>
      <div className="item-desc">{props.item.desc}</div>
      <div className="quantity">
        <span>Quantity</span>
        <input
          className="quantity-inpt"
          type="text"
          value={quantity}
          onChange={(e) =>
            e.target.value.match(/\d+/) | (e.target.value === '')
              ? setQuantity(Number(e.target.value))
              : quantity
          }
        />
        <div className="arrows">
          <span
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            &#9650;
          </span>
          <span
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            &#9660;
          </span>
        </div>
      </div>
      <button className="add" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
