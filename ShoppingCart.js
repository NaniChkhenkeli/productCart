import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../store/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', maxWidth: '350px', margin: '20px auto', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '22px', marginBottom: '20px', textAlign: 'center', color: '#444' }}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                <span style={{ display: 'block', color: '#888', marginTop: '5px' }}>${item.price}</span>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))} style={{ backgroundColor: '#ff6b6b', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={() => dispatch(clearCart())} style={{ backgroundColor: '#ffca28', color: 'black', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
