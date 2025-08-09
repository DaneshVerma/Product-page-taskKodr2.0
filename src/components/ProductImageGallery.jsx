import React, { useState } from 'react';

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Product"
          className={`w-full h-96 object-cover  cursor-zoom-in transition-transform duration-300 ${
            isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
        
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 cursor-grab rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
