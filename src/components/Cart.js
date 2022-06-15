import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = ({ cart, setCart, cartSize }) => {
  const subtotal = cart
    .reduce((prev, current) => {
      return prev + current.quantity * current.price;
    }, 0)
    .toFixed(2);
  const itemsInCart = cart.map((item) => {
    return (
      <CartItem key={item.key} item={item} cart={cart} setCart={setCart} />
    );
  });
  const subDiv = (
    <div id="total">
      Subtotal ({cartSize} items) ${subtotal}
    </div>
  );

  const empty = <div id="empty-cart">Your cart is empty</div>;
  return (
    <div id="cart">
      <h2>My Cart</h2>
      <div>{cart.length ? itemsInCart : empty}</div>
      <div>{cart.length ? subDiv : null}</div>
    </div>
  );
};

export default Cart;
