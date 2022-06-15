import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ cartSize }) => {
  return (
    <nav>
      <h1>FakeStore</h1>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <button>Cart {cartSize}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
