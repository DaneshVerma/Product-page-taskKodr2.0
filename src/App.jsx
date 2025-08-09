import React from 'react';
import ProductPage from './components/ProductPage';
import productData from './data/productData.json';

const App = () => {
  return (
    <div className="App select-none">
      <ProductPage 
        product={productData.product} 
        similarProducts={productData.similarProducts} 
      />
    </div>
  );
};

export default App;