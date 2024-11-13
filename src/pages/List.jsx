import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { currency } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get("/api/product/list");
      console.log(response);
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async ( id ) => {
    try {
      const response = await axios.delete(
        "/api/product/remove",{
          data : { id },
           headers: { token } }
        
       
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">All Product List</h1>

      {/* List Table Title */}
      <div className="grid grid-cols-5 gap-6 mb-4 text-lg font-medium text-gray-700">
        <div className="text-center">
          <b>Image</b>
        </div>
        <div className="text-center">
          <b>Name</b>
        </div>
        <div className="text-center">
          <b>Category</b>
        </div>
        <div className="text-center">
          <b>Price</b>
        </div>
        <div className="text-center">
          <b>Action</b>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-6 items-center border-b py-4"
          >
            <div className="flex justify-center">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
            <div className="text-center text-gray-800">{item.name}</div>
            <div className="text-center text-gray-600">{item.category}</div>
            <div className="text-center text-gray-900">
              {currency}
              {item.price}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => removeProduct(item._id)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
