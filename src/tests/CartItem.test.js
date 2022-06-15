import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem';
import UserEvent from '@testing-library/user-event';

describe('update button', () => {
  let item = {};
  let cart = [];

  beforeEach(() => {
    item = {
      key: 2,
      name: 'Red T-Shirt',
      desc: 'A red t-shirt',
      img: 'images/shop/red-t-shirt.png',
      quantity: 2,
    };
    cart = [
      {
        key: 1,
        name: 'Orange T-Shirt',
        desc: 'An orange t-shirt',
        img: 'images/shop/orange-t-shirt.png',
        price: 19.99,
        quantity: 3,
      },
      {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
        price: 19.99,
        quantity: 2,
      },
      {
        key: 3,
        name: 'Red Floral Dress',
        desc: 'A beautiful dress',
        img: 'images/shop/red-floral-dress.jpg',
        price: 79.99,
        quantity: 1,
      },
    ];
  });

  const setCart = (newCart) => (cart = newCart);
  test('update changes item in cart from quant=2 to quant=5', () => {
    render(<CartItem item={item} cart={cart} setCart={setCart} />);
    const quant = screen.getByRole('textbox');
    const btns = screen.getAllByRole('button');

    UserEvent.clear(quant);
    UserEvent.type(quant, '5');
    UserEvent.click(btns[0]);

    expect(cart[1].quantity).toBe(5);
  });
  test('remove from cart removes item from the cart', () => {
    render(<CartItem item={item} cart={cart} setCart={setCart} />);
    const btns = screen.getAllByRole('button');
    UserEvent.click(btns[1]);

    expect(cart).toEqual([
      {
        key: 1,
        name: 'Orange T-Shirt',
        desc: 'An orange t-shirt',
        img: 'images/shop/orange-t-shirt.png',
        price: 19.99,
        quantity: 3,
      },
      {
        key: 3,
        name: 'Red Floral Dress',
        desc: 'A beautiful dress',
        img: 'images/shop/red-floral-dress.jpg',
        price: 79.99,
        quantity: 1,
      },
    ]);
  });

  test('update removed item with 0 quantity', () => {
    render(<CartItem item={item} cart={cart} setCart={setCart} />);
    const quant = screen.getByRole('textbox');
    const btns = screen.getAllByRole('button');

    UserEvent.clear(quant);
    UserEvent.click(btns[0]);

    expect(cart).toEqual([
      {
        key: 1,
        name: 'Orange T-Shirt',
        desc: 'An orange t-shirt',
        img: 'images/shop/orange-t-shirt.png',
        price: 19.99,
        quantity: 3,
      },
      {
        key: 3,
        name: 'Red Floral Dress',
        desc: 'A beautiful dress',
        img: 'images/shop/red-floral-dress.jpg',
        price: 79.99,
        quantity: 1,
      },
    ]);
  });
});
