import React from 'react';

const ProductOptions = ({ colors, sizes, selectedColor, selectedSize, onColorChange, onSizeChange }) => {
  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Color: <span className="text-gray-900">{selectedColor ? colors.find(c => c.code === selectedColor)?.name : 'Select a color'}</span>
          </h3>
          <div className="flex space-x-3">
            {colors.map((color) => (
              <button
                key={color.code}
                onClick={() => onColorChange(color.code)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === color.code
                    ? 'border-gray-900 ring-2 ring-gray-300'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              >
                {selectedColor === color.code && (
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {sizes && sizes.length > 1 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Size: <span className="text-gray-900">{selectedSize || 'Select a size'}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-4 py-2 text-sm font-medium border rounded-lg transition-all ${
                  selectedSize === size
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductOptions;
