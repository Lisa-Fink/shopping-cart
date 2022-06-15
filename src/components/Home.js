import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from './images/home-img.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home-container">
      <div id="left">
        <p>Voted Best Online Retailer</p>
        <h2>
          Your best source for <span>FASHION</span>
        </h2>
        <Link to="./shop">
          <button id="shop">Shop Now</button>
        </Link>
      </div>
      <div>
        <img className="home-img" src={homeImg} alt="home-img" />
      </div>
    </div>
  );
};

export default Home;
