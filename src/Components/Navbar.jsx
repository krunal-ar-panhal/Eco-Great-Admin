import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-200 px-8 py-4 flex justify-between items-center shadow-md">
      <img src="./logo.png" alt="logo" className="w-32" />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
