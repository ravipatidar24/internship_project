import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const MyOrders = () => {
  const handleCancelOrder = () => {
    // Handle cancel order logic
    console.log("Cancel order clicked");
  };

  const handleHelpButtonClick = () => {
    confirmAlert({
      title: "Need Help",
      message: "Call on +919009166579",
      buttons: [
        {
          label: "OK",
          onClick: () => {
            // Handle OK button click
            console.log("OK clicked");
          },
        },
      ],
    });
  };

  const product = {
    order_id: "1234", // Order ID
    name: "Sunflower",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd56dx7u2eV_mcG1C0CffY_VIfNqIuCYdKi0_0s8_U2CUwIljv7r-CewMnNe_1DRfIYzk&usqp=CAU",
    description: "Bright and cheery sunflower to brighten your day.",
    price: 7.99,
    expectedDeliveryDate: "June 30, 2023",
  };

  return (
    <div
      className="container mx-auto p-4"
      style={{
        backgroundColor: "white", // Set background color to white
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <h1 className="text-3xl font-bold mb-4"> My Orders </h1>{" "}
      <div className="border border-gray-300 rounded p-4 mb-4 flex items-center">
        <img
          src={product.image}
          className="h-24 w-24 object-cover rounded"
          alt=""
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold"> {product.name} </h2>{" "}
          <p className="text-gray-600 mb-2"> {product.description} </p>{" "}
          <p className="text-gray-700 font-semibold">
            {" "}
            Order ID: {product.order_id}{" "}
          </p>{" "}
          <p className="text-gray-700 font-semibold">
            {" "}
            Price: ₹{product.price}{" "}
          </p>{" "}
          <p className="text-gray-700 font-semibold">
            Expected Delivery Date: {product.expectedDeliveryDate}{" "}
          </p>{" "}
          <button
            onClick={handleHelpButtonClick}
            className="px-3 py-1 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 active:bg-blue-800"
          >
            Need Help{" "}
          </button>{" "}
          <button
            onClick={handleCancelOrder}
            className="px-3 py-1 bg-red-600 text-white font-semibold rounded hover:bg-red-700 active:bg-red-800"
          >
            Cancel Order{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MyOrders;
