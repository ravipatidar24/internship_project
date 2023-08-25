import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/admin-home");
      }, 2500);
    } else {
      toast.error("Invalid email or password");
    }
  };

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: "url(/login1.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      overflowY: "auto",
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="flex flex-col h-screen pt-20">
        {" "}
        {/* Add pt-50 to shift the form 50 pixels down */}{" "}
        <div className="w-full max-w-sm p-6 ml-[10%] bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
            ADMIN LOGIN{" "}
          </h1>{" "}
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email{" "}
              </label>{" "}
              <input
                type="email"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password{" "}
              </label>{" "}
              <input
                type="password"
                className="block w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
            </div>{" "}
            <div className="mt-6">
              <button className="w-full px-6 py-3 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
