import React, { useState } from 'react';

const Login = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const submitHandler = async (e) => {
        email.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Panel</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
