import React from 'react';
import Item from './Item';
import '../styles/Shop.css';

const Shop = (props) => {
  const items = [
    {
      key: 1,
      name: 'Orange T-Shirt',
      desc: 'An orange t-shirt',
      img: 'images/shop/orange-t-shirt.png',
    },
    {
      key: 2,
      name: 'Red T-Shirt',
      desc: 'A red t-shirt',
      img: 'images/shop/red-t-shirt.png',
    },
    {
      key: 3,
      name: 'Red Floral Dress',
      desc: 'A beautiful dress',
      img: 'images/shop/red-floral-dress.jpg',
    },
  ];
  return (
    <div id="shop-container">
      {items.map((item) => (
        <Item
          key={item.key}
          item={item}
          cart={props.cart}
          setCart={props.setCart}
        />
      ))}
    </div>
  );
};

export default Shop;
