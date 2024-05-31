import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import ProductCard from './components/ProductCard';
import sampleImage from './sampleImage.jpg';

const App = () => {
  const itemsForSale = [
    { id: 1, name: 'Item 1', price: 10, imageUrl: sampleImage },
    { id: 2, name: 'Item 2', price: 20, imageUrl: sampleImage },
    { id: 3, name: 'Item 3', price: 30, imageUrl: sampleImage },
  ];

  return (
    <div style={{ padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 2, marginRight: '40px' }}>
          <h1 style={{ fontSize: '34px', marginBottom: '25px', textAlign: 'center', color: '#444' }}>Product List</h1>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {itemsForSale.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default App;
