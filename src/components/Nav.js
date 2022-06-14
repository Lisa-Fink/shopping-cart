import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const cart = props.cart;
  const cartSize = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
  return (
    <nav>
      <h1>FakeStore</h1>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <button>Cart {cartSize}</button>
      </div>
    </nav>
  );
};

export default Nav;
