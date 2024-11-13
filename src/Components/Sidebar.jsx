import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-gray-200 flex flex-col items-center py-10 fixed">
      <div className="space-y-6 w-full px-4">
        <NavLink
          to="/add"
          className="flex items-center space-x-3 py-3 px-4 rounded-md hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <img src="./add_icon.png" alt="Add icon" className="w-6 h-6" />
          <p className="text-sm font-medium">ADD ITEMS</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center space-x-3 py-3 px-4 rounded-md hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <img src="./list_icon.png" alt="List icon" className="w-6 h-6" />
          <p className="text-sm font-medium">LIST ITEMS</p>
        </NavLink>
        <NavLink
          to="/order"
          className="flex items-center space-x-3 py-3 px-4 rounded-md hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <img src="./order_icon.png" alt="Order icon" className="w-6 h-6" />
          <p className="text-sm font-medium">ORDERS</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
