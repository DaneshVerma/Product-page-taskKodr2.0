import React, { useState, useEffect } from 'react';
import ProductImageGallery from './ProductImageGallery';

import SimilarProducts from './SimilarProducts';
import ProductInfo from './ProductInfo';
import Navbar from './Navbar';

const ProductPage = ({ product, similarProducts }) => {

  const [isSticky, setIsSticky] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Handle sticky product info on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

 

  return (
    <div className="min-h-screen bg-gray-50">

{/* navbar */}

      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product Info */}
          <ProductInfo addedToCart={addedToCart} handleAddToCart={handleAddToCart} product={product} />
        </div>

        {/* Similar Products */}
        <SimilarProducts products={similarProducts} />
      </div>

      {/* Sticky Product Info (Mobile/Tablet) */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              <p className="text-sm text-gray-600">{product.title}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {addedToCart ? '✓ Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
