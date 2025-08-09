import React, { useState, useEffect } from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductRating from './ProductRating';
import ProductOptions from './ProductOptions';
import QuantitySelector from './QuantitySelector';
import SimilarProducts from './SimilarProducts';

const ProductPage = ({ product, similarProducts }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
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
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && product.originalPrice > product.price) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div>
              <p className="text-sm text-blue-600 font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {calculateDiscount()}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">✓ {product.availability}</p>
            </div>

            {/* Product Options */}
            <ProductOptions
              colors={product.colors}
              sizes={product.sizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                max={10}
              />
              
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 cursor-pointer rounded-lg font-medium transition-all ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  ♡ Wishlist
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={key} className={`px-4 py-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
