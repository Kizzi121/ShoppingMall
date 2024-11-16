import React from 'react';

const Invoice = ({ name, cart }) => {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="invoice">
      <h2>🧾 Invoice</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Items:</strong></p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Rs {item.price}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> Rs {totalPrice}</p>
    </div>
  );
};

export default Invoice;
