import React, { useState, useEffect } from 'react';
import Quantity from './Quantity';
import '../styles/CartItem.css';

const CartItem = ({ item, cart, setCart }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const removeFromCart = () => {
    setCart(cart.filter((filterItem) => filterItem.key !== item.key));
  };

  useEffect(() => {
    if (item.quantity === 0) {
      removeFromCart();
    }
  });

  const updateCart = () => {
    if (quantity !== item.quantity) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.key === item.key) {
            const newItem = { ...cartItem };
            newItem.quantity = quantity;
            return newItem;
          } else {
            return cartItem;
          }
        })
      );
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={item.img} alt="cart item" />
      </div>
      <div className="cart-name">{item.name}</div>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      <button onClick={updateCart}>update</button>
      <button onClick={removeFromCart}>remove</button>
      <div className="cart-price">{item.price}</div>
    </div>
  );
};

export default CartItem;
