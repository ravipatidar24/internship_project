import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [menuStates, setMenuStates] = useState({
    isGiftsMenuOpen: false,
    isFollowMenuOpen: false,
    isProfileMenuOpen: false,
    isCartMenuOpen: false,
    isAdminMenuOpen: false,
  });

  const location = useLocation();
  const [options, setOptions] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("admin")) {
      setOptions(false);
    } else {
      setOptions(true);
    }
  }, [location.pathname]);

  const profileArray = [
    { text: "My Profile", link: "/my-account" },
    { text: "Login/Register", link: "/login" },
    { text: "My Orders", link: "/my-orders" },
  ];

  const giftsArray = [
    { text: 'Flowers', link: '/flowers' },
    { text: 'Plants', link: '/plants' },
    { text: 'Cakes/Chocolates', link: '/cakes' },
   
  ];

  const followArray = [
    { text: "Instagram", link: "#" },
    { text: "Facebook", link: "#" },
    { text: "Twitter", link: "#" },
  ];

  const adminArray = [
    { text: "Login", link: "/admin-login" },
    { text: "Logout", link: "#" },
  ];

  const toggleMenu = (menu) => {
    setMenuStates((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [
          key,
          key === menu && !prevState[key],
        ])
      ),
    }));
  };

  return (
    <>
      <header className="bg-gray-900 py-4 shadow-md sticky top-0 z-40">
        <div className="mx-[1.5%] flex items-center justify-between">
          <div className="flex items-center">
            <a href='/home'>
            <img src="/giftly.png" alt="Logo" className="h-14 w-auto  mr-2" />

            </a>
            {/* <h1 className="text-3xl text-white font-extrabold -mb-[2%]">
              {" "}
              Giftly{" "}
  </h1>{" "}*/}
          </div>{" "}
          <div className="flex">
            {" "}
            {options && (
              <nav className="space-x-4 font-semibold">
                <a className="text-white hover:underline text-lg" href="/">
                  Home{" "}
                </a>{" "}
                <div className="relative inline-block">
                  <a
                    className={`text-white hover:underline text-lg cursor-pointer ${
                      menuStates.isGiftsMenuOpen ? "underline" : ""
                    }`}
                    href="#"
                    onClick={() => toggleMenu("isGiftsMenuOpen")}
                  >
                    Gifts{" "}
                  </a>{" "}
                  {menuStates.isGiftsMenuOpen && (
                    <div className="absolute z-50 top-8 left-0 bg-gray-800 py-2 px-4 rounded-lg text-white text-lg">
                      {" "}
                      {giftsArray.map((item, index) => (
                        <a
                          href={item.link}
                          className="block hover:scale-105 transform duration-200 ease-in-out"
                          key={index}
                        >
                          {" "}
                          {item.text}{" "}
                        </a>
                      ))}{" "}
                    </div>
                  )}{" "}
                </div>{" "}
                <div className="relative inline-block">
                  <a
                    className={`text-white hover:underline text-lg cursor-pointer ${
                      menuStates.isFollowMenuOpen ? "underline" : ""
                    }`}
                    href="#"
                    onClick={() => toggleMenu("isFollowMenuOpen")}
                  >
                    Follow{" "}
                  </a>{" "}
                  {menuStates.isFollowMenuOpen && (
                    <div className="absolute z-10 top-8 left-0 bg-gray-800 py-2 px-4 rounded-lg text-white text-lg">
                      {" "}
                      {followArray.map((item, index) => (
                        <a
                          href={item.link}
                          className="block hover:scale-105 transform duration-200 ease-in-out"
                          key={index}
                        >
                          {" "}
                          {item.text}{" "}
                        </a>
                      ))}{" "}
                    </div>
                  )}{" "}
                </div>{" "}
                <a
                  className="text-white hover:underline text-lg"
                  href="/user/contact-us"
                >
                  Contact US{" "}
                </a>{" "}
                <div className="relative inline-block">
                  <a
                    className={`text-white hover:underline text-lg cursor-pointer ${
                      menuStates.isProfileMenuOpen ? "underline" : ""
                    }`}
                    href="#"
                    title="Profile"
                    onClick={() => toggleMenu("isProfileMenuOpen")}
                  >
                    <i className="fa-solid fa-user-large"> </i>{" "}
                  </a>{" "}
                  {menuStates.isProfileMenuOpen && (
                    <div className="absolute z-10 top-8 right-0 bg-gray-800 py-3 px-4 rounded-lg text-white text-lg">
                      {" "}
                      {profileArray.map((item, index) => (
                        <a
                          href={item.link}
                          className="block hover:scale-105 transform duration-200 ease-in-out"
                          key={index}
                        >
                          {" "}
                          {item.text}{" "}
                        </a>
                      ))}{" "}
                    </div>
                  )}{" "}
                </div>{" "}
                <a
                  className="text-white text-2xl px-1"
                  href="/my-cart"
                  title="Cart"
                >
                  <i className="fa-solid fa-cart-shopping"> </i>{" "}
                </a>{" "}
              </nav>
            )}{" "}
            <nav className="space-x-4 font-semibold px-3 items-center">
              <div className="relative inline-block">
                <a
                  className={`text-white hover:underline text-lg cursor-pointer ${
                    menuStates.isGiftsMenuOpen ? "underline" : ""
                  }`}
                  href="#"
                  title="Admin Portal"
                  onClick={() => toggleMenu("isAdminMenuOpen")}
                >
                  <span
                    class="mdi mdi-account-supervisor-circle"
                    style={{ fontSize: "180%" }}
                  ></span>{" "}
                </a>{" "}
                {menuStates.isAdminMenuOpen && (
                  <div className="absolute z-10 top-8 right-0 bg-gray-800 py-2 px-4 rounded-lg text-white text-lg">
                    {" "}
                    {adminArray.map((item, index) => (
                      <a
                        href={item.link}
                        className="block hover:scale-105 transform duration-200 ease-in-out"
                        key={index}
                      >
                        {" "}
                        {item.text}{" "}
                      </a>
                    ))}{" "}
                  </div>
                )}{" "}
              </div>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
    </>
  );
};

export default Header;
