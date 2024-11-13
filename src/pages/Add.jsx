import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Add = ({token}) => {
  const [image2, setImage2] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const submitHandler = async (e) => {
    try {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name",name )
        formData.append("description",description )
        formData.append("price",price )
        formData.append("category",category )
        formData.append("subCategory",subCategory )
        formData.append("bestseller",bestseller )
        formData.append("sizes",JSON.stringify(sizes) )

        image1 && formData.append("image1",image1)
        image2 && formData.append("image2",image2)
        image3 && formData.append("image3",image3)
        image4 && formData.append("image4",image4)

        const response = await axios.post("/api/product/add",formData,{
            headers:{token}
        })
        if (response.data.success) {
            toast.success(response.data.message)
            setName('')
            setDescription("")
            setPrice("")
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
        }else{
            toast.error(response.data,message)
        }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  return (
    <form onSubmit={submitHandler} className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-md">
      <div>
        <p className="font-semibold mb-2">Upload Image</p>
        <div className="flex space-x-4">
          {[image1, image2, image3, image4].map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`} className="cursor-pointer">
              <img
                src={image ? URL.createObjectURL(image) : './upload_area.png'}
                alt="upload"
                className="w-20 h-20 object-cover border border-gray-300 rounded-lg"
              />
              <input
                onChange={(e) => {
                  if (index === 0) setImage1(e.target.files[0]);
                  if (index === 1) setImage2(e.target.files[0]);
                  if (index === 2) setImage3(e.target.files[0]);
                  if (index === 3) setImage4(e.target.files[0]);
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <p className="font-semibold mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Content here"
          required
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div>
        <p className="font-semibold mb-2">Product Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div>
        <p className="font-semibold mb-2">Sub Category</p>
        <select
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      <div>
        <p className="font-semibold mb-2">Product Price</p>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="100"
          className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <p className="font-semibold mb-2">Product Size</p>
        <div className="flex space-x-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`cursor-pointer px-4 py-2 rounded-lg border ${
                sizes.includes(size) ? "bg-pink-100 border-pink-400" : "bg-gray-200 border-gray-300"
              }`}
            >
              <p>{size}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="h-4 w-4 text-blue-600"
        />
        <label htmlFor="bestseller" className="font-semibold">Add To Bestseller</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        ADD
      </button>
    </form>
  );
};

export default Add;



