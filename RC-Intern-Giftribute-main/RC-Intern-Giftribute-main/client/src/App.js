import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useLocation } from "react-router-dom";

import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import MyAccount from "./pages/User/MyAccount";
import MyOrders from "./pages/User/MyOrders";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminHome from "./pages/Admin/AdminHome";
import AdminFlower from "./pages/Admin/AdminFlower";
import AdminPlant from "./pages/Admin/AdminPlant";
import AdminCakes from "./pages/Admin/AdminCakes";
import LandingPage from "./pages/LandingPage";
import MyCart from "./pages/User/MyCart";
import ContactUS from "./pages/User/ContactUs";
import Flowers from "./pages/User/Gifts/Flowers";
import Plants from "./pages/User/Gifts/Plants";
import Cakes from "./pages/User/Gifts/Cakes";
import Navbar from "./Component/Navbar";
import SearchBar from "./Component/Search";
import SplitButton from "./Component/SplitButton";

function App() {
  const location = useLocation();
  const [buttons, showButtons] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("admin") && !location.pathname.match("admin-login")) {
      showButtons(true);
    } else {
      showButtons(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <div className="w-1/3 p-2"> {buttons && <SplitButton />}</div>
        <div className="w-1/3 p-1">
          <SearchBar />
        </div>{" "}
      </div>{" "}
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/my-account" element={<MyAccount />} />{" "}
        <Route path="/my-orders" element={<MyOrders />} />{" "}
        <Route path="/admin-login" element={<AdminLogin />} />{" "}
        <Route path="/admin-home" element={<AdminHome />} />{" "}
        <Route path="/admin-flower" element={<AdminFlower />} />{" "}
        <Route path="/admin-plant" element={<AdminPlant />} />{" "}
        <Route path="/admin-cakes" element={<AdminCakes />} />{" "}
        <Route path="/my-cart" element={<MyCart />} />{" "}
        <Route path="/user/contact-us" element={<ContactUS />} />{" "}
        <Route path="/flowers" element={<Flowers />} />{" "}
        <Route path="/plants" element={<Plants />} />{" "}
        <Route path="/cakes" element={<Cakes />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
