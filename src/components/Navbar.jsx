import React from "react";

function Navbar() {
  return (
    <>
      <nav className='bg-white sticky top-0 w-full z-50 shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center'>
              <span className='text-lg font-bold text-gray-900'>
                Ecommerce Store
              </span>
            </div>
            <div className='flex items-center space-x-4'>
              <a
                href='#'
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                Home
              </a>
              <a
                href='#'
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                About
              </a>
              <a
                href='#'
                className='text-sm font-medium text-gray-700 hover:text-gray-900'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
