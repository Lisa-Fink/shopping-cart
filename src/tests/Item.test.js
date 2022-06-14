import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../components/Item';
import UserEvent from '@testing-library/user-event';

describe('quantity input', () => {
  let mockProps = {
    item: {
      key: 2,
      name: 'Red T-Shirt',
      desc: 'A red t-shirt',
      img: 'images/shop/red-t-shirt.png',
    },
    cart: [],
  };
  function setCart(newCart) {
    mockProps.cart = newCart;
  }
  test('clear then typing a 2 changes input quantity to 2', () => {
    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const quant = screen.getByRole('textbox');

    UserEvent.clear(quant);
    UserEvent.type(quant, '2');

    expect(quant.value).toEqual('2');
  });
  test("typing a letter doesn't do anything", () => {
    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const quant = screen.getByRole('textbox');

    UserEvent.clear(quant);
    UserEvent.type(quant, 'L');

    expect(quant.value).toEqual('0');
  });
});

describe('add to cart', () => {
  test('adds a new item', () => {
    let mockProps = {
      item: {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
      },
      cart: [],
    };
    function setCart(newCart) {
      mockProps.cart = newCart;
    }

    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    //quantity= 1 is default
    const addBtn = screen.getByRole('button');

    UserEvent.click(addBtn);

    expect(mockProps.cart.length).toBe(1);
  });

  test('adds the entire item to the cart with default quantity', () => {
    let mockProps = {
      item: {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
      },
      cart: [],
    };
    function setCart(newCart) {
      mockProps.cart = newCart;
    }

    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    //quantity= 1 is by default
    const addBtn = screen.getByRole('button');

    UserEvent.click(addBtn);

    expect(mockProps.cart).toEqual([
      {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
        quantity: 1,
      },
    ]);
  });

  test('changing quantity by typing input 5 adds item with correct quantity', () => {
    let mockProps = {
      item: {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
      },
      cart: [],
    };
    function setCart(newCart) {
      mockProps.cart = newCart;
    }

    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const addBtn = screen.getByRole('button');
    const quant = screen.getByRole('textbox');
    quant.value = '';

    UserEvent.type(quant, '10');
    UserEvent.click(addBtn);

    expect(mockProps.cart).toEqual([
      {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
        quantity: 10,
      },
    ]);
  });

  test("clearing quantity to 0 doesn't add an item", () => {
    let mockProps = {
      item: {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
      },
      cart: [],
    };
    function setCart(newCart) {
      mockProps.cart = newCart;
    }

    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const addBtn = screen.getByRole('button');
    const quant = screen.getByRole('textbox');

    UserEvent.clear(quant);
    UserEvent.click(addBtn);

    expect(mockProps.cart).toEqual([]);
  });

  test('adding an item that is already in cart only adds quantity and not another item', () => {
    let mockProps = {
      item: {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
      },
      cart: [
        {
          key: 2,
          name: 'Red T-Shirt',
          desc: 'A red t-shirt',
          img: 'images/shop/red-t-shirt.png',
          quantity: 1,
        },
      ],
    };
    function setCart(newCart) {
      mockProps.cart = newCart;
    }

    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const addBtn = screen.getByRole('button');

    UserEvent.click(addBtn);

    expect(mockProps.cart).toEqual([
      {
        key: 2,
        name: 'Red T-Shirt',
        desc: 'A red t-shirt',
        img: 'images/shop/red-t-shirt.png',
        quantity: 2,
      },
    ]);
  });
});

describe('arrows change quantity correctly', () => {
  let mockProps = {
    item: {
      key: 2,
      name: 'Red T-Shirt',
      desc: 'A red t-shirt',
      img: 'images/shop/red-t-shirt.png',
    },
    cart: [],
  };
  function setCart(newCart) {
    mockProps.cart = newCart;
  }

  test('clicking up from default changes quantity to 2', () => {
    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );

    const upArrow = screen.getByText('▲');
    const quant = screen.getByRole('textbox');

    UserEvent.click(upArrow);

    expect(quant.value).toBe('2');
  });

  test('clicking down from 5 decrements to 4', () => {
    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const quant = screen.getByRole('textbox');
    const downArrow = screen.getByText('▼');
    const upArrow = screen.getByText('▲');

    UserEvent.click(upArrow);
    UserEvent.click(upArrow);
    UserEvent.click(upArrow);
    UserEvent.click(upArrow);
    UserEvent.click(downArrow);

    expect(quant.value).toBe('4');
  });

  test('clicking down from default of 1 does nothing', () => {
    render(
      <Item item={mockProps.item} cart={mockProps.cart} setCart={setCart} />
    );
    const quant = screen.getByRole('textbox');
    const addBtn = screen.getByRole('button');
    const downArrow = screen.getByText('▼');

    UserEvent.click(downArrow);
    UserEvent.click(addBtn);

    expect(quant.value).toBe('1');
  });
});
