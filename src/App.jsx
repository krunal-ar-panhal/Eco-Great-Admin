import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./pages/Login";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-gray-50 h-screen">
        {token === "" ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <hr />
            <div className="flex w-full">
              <Sidebar />

              <div className="w-[70%] mx-auto ml-[max(5vw,25px) my-8 text-gray-600 text-base">
                <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/order" element={<Order />} />
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
