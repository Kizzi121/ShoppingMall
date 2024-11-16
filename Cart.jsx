import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="cart-item-image">{item.image}</span>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: Rs {item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
