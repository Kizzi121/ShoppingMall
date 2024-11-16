import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Invoice from './Invoice';

const App = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [showInvoice, setShowInvoice] = useState(false);

  const products = [
    { id: 1, name: 'Sunglasses', price: 1500, image: '🕶️' },
    { id: 2, name: 'Watch', price: 2500, image: '⌚' },
    { id: 3, name: 'Perfume', price: 1200, image: '🌸' },
    { id: 4, name: 'Shoes', price: 3000, image: '👟' },
  ];

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleGenerateInvoice = () => {
    if (name.trim() === '') {
      alert('Please enter your name to generate the invoice.');
      return;
    }
    setShowInvoice(true);
  };

  return (
    <div className="app">
      <h1>🛍️ Shopping Mall</h1>
      <div className="container">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      <div className="invoice-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        <button onClick={handleGenerateInvoice} className="invoice-button">
          Generate Invoice
        </button>
      </div>
      {showInvoice && <Invoice name={name} cart={cart} />}
    </div>
  );
};

export default App;
