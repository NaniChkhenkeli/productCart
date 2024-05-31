import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const ProductCard = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <div style={{ width: '220px', border: '1px solid #ccc', borderRadius: '8px', padding: '15px', margin: '10px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{name}</h3>
      <p style={{ color: '#555' }}>${price}</p>
      <button onClick={handleAddToCart} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 15px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
