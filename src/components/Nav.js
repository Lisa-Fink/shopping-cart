import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ cartSize }) => {
  return (
    <nav>
      <h1>FakeStore</h1>
      <div id="links">
        <Link to="shopping-cart/">Home</Link>
        <Link to="shopping-cart/shop">Shop</Link>
        <Link to="shopping-cart/cart">
          <button>Cart {cartSize}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
