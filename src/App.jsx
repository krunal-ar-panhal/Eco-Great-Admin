import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

export const backendurl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token"): "");

  useEffect(()=>{
    localStorage.setItem("token",token)
  },[token])

  return (
    <BrowserRouter>
      <div className="bg-gray-50 h-screen">
      <Toaster position="top-right"/>
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Navbar setToken={setToken} />
            <hr />
            <div className="flex w-full">
              <Sidebar />

              <div className="w-[65%] mx-auto ml-[max(5vw,25px) my-8 text-gray-600 text-base">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/order" element={<Order token={token} />} />
                </Routes>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
