import React from 'react';
import ProductRating from './ProductRating';

const SimilarProducts = ({ products }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <div className="mb-2">
                <ProductRating rating={product.rating} reviewCount={0} />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="mt-1">
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
