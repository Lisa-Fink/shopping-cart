import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
