import React, { useState } from "react";

const CheckoutPage = ({ product, onProceedPayment, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const totalPrice = product.price * quantity;

  const handlePlaceOrder = () => {
    if (mobileNumber.trim() === "" || deliveryAddress.trim() === "") {
      alert("Please fill in all the fields before proceeding.");
      return;
    }

    setShowForm(false);
    setShowWarning(true);
  };

  const handleConfirmOrder = () => {
    setShowWarning(false);
    setShowConfirmation(true);
    // Proceed with order placement (e.g., API call to place the order)
    onProceedPayment(product, quantity);
  };

  const handleGoBack = () => {
    if (showWarning) {
      setShowWarning(false);
      setShowForm(true);
    } else if (showConfirmation) {
      setShowConfirmation(false);
      setShowForm(true);
    } else {
      onClose(); // Call the onClose function to navigate back to the previous page
    }
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto mt-16 mb-8 rounded-md shadow-lg">
      {" "}
      {showForm && (
        <>
          <div className="flex flex-col mb-8">
            <label htmlFor="mobileNumber" className="text-lg font-bold mb-2">
              Mobile Number:
            </label>{" "}
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="border rounded-md px-4 py-2"
            />
          </div>{" "}
          <div className="flex flex-col mb-8">
            <label htmlFor="deliveryAddress" className="text-lg font-bold mb-2">
              Delivery Address:
            </label>{" "}
            <textarea
              id="deliveryAddress"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Enter your delivery address"
              className="border rounded-md px-4 py-2 h-28"
              rows="4"
            />
          </div>{" "}
          <div className="flex justify-between">
            <button
              onClick={handleGoBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            >
              Go Back{" "}
            </button>{" "}
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Proceed to Payment{" "}
            </button>{" "}
          </div>{" "}
        </>
      )}{" "}
      {showWarning && (
        <div className="bg-yellow-200 rounded-lg p-8 mb-8">
          <p className="text-lg font-bold mb-4"> Warning: Cash on Delivery </p>{" "}
          <p>
            Your order will be processed as Cash on Delivery.Click "Confirm" to
            proceed.{" "}
          </p>{" "}
          <div className="flex justify-between mt-4">
            <button
              onClick={handleConfirmOrder}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Confirm{" "}
            </button>{" "}
            <button
              onClick={handleGoBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            >
              Go Back{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
      {showConfirmation && (
        <div className="bg-green-200 rounded-lg p-8 mb-8">
          <p className="text-lg font-bold mb-4">
            Congratulations!Your Order is Placed{" "}
          </p>{" "}
          <button
            onClick={handleGoBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Go Back{" "}
          </button>{" "}
        </div>
      )}{" "}
      {!showForm && !showWarning && !showConfirmation && (
        <div className="bg-purple-600 rounded-lg p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold"> Checkout </h1>{" "}
          <p className="text-lg">
            Please review your order before proceeding to payment.{" "}
          </p>{" "}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold"> {product.name} </h2>{" "}
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <p className="mb-4"> {product.description} </p>{" "}
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>{" "}
            <input
              type="number"
              id="quantity"
              value={quantity}
              min={1}
              max={10} // Set the maximum quantity as per your requirement
              onChange={handleQuantityChange}
              className="border rounded-md px-2 py-1 w-16"
            />
          </div>{" "}
          <p className="font-bold text-xl mb-4">
            Total: ₹{totalPrice.toFixed(2)}{" "}
          </p>{" "}
          <button
            onClick={handlePlaceOrder}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Place Order{" "}
          </button>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default CheckoutPage;
