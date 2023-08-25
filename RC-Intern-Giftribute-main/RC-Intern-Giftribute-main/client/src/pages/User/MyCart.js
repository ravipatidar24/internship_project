import React, { useState, useEffect } from "react";
import { getCartItems, cartRemove, buyItem } from "../../Services/APIs/UserAPI";
import toast, { Toaster } from "react-hot-toast";

import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const fetchCartItems = async () => {
    try {
      const email = localStorage.getItem("userMail");
      console.log(email);
      const response = await getCartItems(email);
      setCartItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: "url(/cart.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      overflowY: "auto",
    });
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const obj = {
        id: itemId,
      };
      const res = await cartRemove(obj);
      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error("Error While Deleting Item");
      }
      fetchCartItems(); // Fetch cart items again after removal
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Function to handle "Buy Now" click and set the selected product
  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setIsCheckoutOpen(true);
  };

  // Function to close the CheckoutPage and reset selectedProduct state
  const handleCloseCheckout = () => {
    setSelectedProduct(null);
    setIsCheckoutOpen(false);
  };

  // Function to handle the payment and reset selectedProduct state
  const handleProceedPayment = async(product, quantity) => {
    const totalPrice = product.price * quantity;
    console.log("Total Bill:", totalPrice);

    // Add your payment processing logic here
    // For example, you can show a success message using toast:
    const myGift = {
      prod: product,
      quan: quantity
    }
    const res = await buyItem(myGift)
     
    if(res.status === 200) {
      toast.success("Order Successfully Placed");
    } else {
      toast.error('Unable to Process!')
    }
    

    // After the payment is successful, you can clear the cart or perform other actions if needed.
    // For this example, we'll simply close the checkout page and reset selectedProduct state.
    handleCloseCheckout();
  };

  return (
    <>
      <Toaster />{" "}
      {isCheckoutOpen && selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-y-auto">
          <CheckoutPage
          product={selectedProduct}
          onClose={handleCloseCheckout}
          onProceedPayment={handleProceedPayment}
        />
        </div>
        
      )}{" "}
      <div className="container mx-auto p-4">
        <div className="text-center px-5 w-auto">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-red-500 rounded-lg p-1">
            Shopping{" "}
            <mark className="px-2 text-yellow-200 bg-blue-600 rounded dark:bg-blue-500">
              Cart{" "}
            </mark>{" "}
          </h1>{" "}
        </div>{" "}
        {cartItems === null ? (
          <h1 className="text-center p-3 mt-[10%] mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <i className="fa-solid fa-spinner fa-spin"> </i>{" "}
          </h1>
        ) : cartItems.length === 0 ? (
          <h1 className="text-center p-3 mt-[10%] mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Cart is Empty <i className="fa-solid fa-bag-shopping"> </i>{" "}
          </h1>
        ) : (
          <div className="flex flex-wrap justify-center items-center">
            {" "}
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              >
                <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
                  <img
                    className="object-cover object-center h-56 w-full p-1"
                    src={item.productId.image}
                    alt={item.productId.name}
                  />{" "}
                  <div className="p-4">
                    <h2 className="text-gray-900 font-semibold text-lg">
                      {" "}
                      {item.productId.name}{" "}
                    </h2>{" "}
                    <p className="mt-2 text-gray-600">
                      {" "}
                      {item.productId.description}{" "}
                    </p>{" "}
                    <div className="mt-3">
                      <div className="flex justify-between pb-2">
                        <span className="text-gray-900 font-bold">
                          {" "}
                          ₹ {item.productId.price}{" "}
                        </span>{" "}
                        {/* <div className="flex items-center">
                          <div className="flex-grow"> </div>{" "}
                          <span className="text-gray-700 font-semibold mr-3">
                            Quantity: {item.quantity}{" "}
                          </span>{" "}
                        </div>{" "} */}
                      </div>{" "}
                      <div className="flex">
                        <button
                          className="px-3 py-1 bg-red-600 text-white font-semibold rounded hover:bg-red-700 active:bg-red-800 mr-2"
                          onClick={() => handleRemoveFromCart(item._id)}
                        >
                          Remove from Cart{" "}
                        </button>{" "}
                        <button
                          className="px-3 py-1 bg-green-600 text-white font-semibold rounded hover:bg-green-700 active:bg-green-800"
                          onClick={() => handleBuyNowClick(item.productId)}
                        >
                          Buy Now{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
};

export default CartPage;
