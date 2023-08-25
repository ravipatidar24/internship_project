import React, { useState, useEffect } from "react";
import { myGifts } from "../../Services/APIs/UserAPI";
import { addToCart } from "../../Services/APIs/UserAPI";
import toast, { Toaster } from "react-hot-toast";

const cartAdd = async (id) => {
  const userMail = localStorage.getItem("userMail");
  const obj = {
    giftId: id,
    userEmail: userMail,
  };
  try {
    const res = await addToCart(obj);
    if (res.status === 200) {
      toast.success(res.data.message);
    } else {
      toast.error("Error While Accessing Cart!");
    }
  } catch (error) {
    toast.error(error);
  }
};

const GiftCard = ({ gift }) => {
  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300 dark:bg-gray-200">
      <img
        className="object-cover object-center h-56 w-full"
        src={gift.image}
        alt={gift.name}
      />{" "}
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg"> {gift.name} </h2>{" "}
        <p className="mt-2 text-gray-600"> {gift.description} </p>{" "}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold"> ₹{gift.price} </span>{" "}
          <button
            className="px-3 py-1 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 active:bg-indigo-800"
            onClick={() => cartAdd(gift._id)}
          >
            Add to Cart{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

const GiftShop = () => {
  const [gifts, setGifts] = useState([]);

  const getData = async () => {
    try {
      const res = await myGifts();
      setGifts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: 'url(/gray.jpg)',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      overflowY: "auto",
    });
  }, []);

  return (
    <>
      <div>
        <Toaster />
        <div className="text-center px-5">
          <h1
            className="bg-blue-200 mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl custom-heading"
            style={{
              fontFamily: "Constantia",
              animation: "animate__zoomIn 1s",
              // Add any other custom styles for the heading here
            }}
          >
            Discover the Perfect Gift For Every Special Moment 
          </h1>{" "}
        </div>{" "}
        <div className="py-12 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {" "}
            {gifts.map((gift, index) => (
              <GiftCard key={index} gift={gift} />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default GiftShop;
