import React from 'react';

const QuantitySelector = ({ quantity, onQuantityChange, max = 10 }) => {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= max) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-700">Quantity:</span>
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min="1"
          max={max}
          className="w-16 px-3 py-2 text-center border-l border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleIncrement}
          disabled={quantity >= max}
          className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          +
        </button>
      </div>
      <span className="text-xs text-gray-500">Max: {max}</span>
    </div>
  );
};

export default QuantitySelector;
