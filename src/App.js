import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const cartSize = cart.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0);
  return (
    <BrowserRouter>
      <Nav cartSize={cartSize} />
      <Routes>
        <Route path="shopping-cart/" element={<Home />} />
        <Route
          path="shopping-cart/shop"
          element={<Shop cart={cart} setCart={setCart} />}
        />
        <Route
          path="shopping-cart/cart"
          element={<Cart cart={cart} setCart={setCart} cartSize={cartSize} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
