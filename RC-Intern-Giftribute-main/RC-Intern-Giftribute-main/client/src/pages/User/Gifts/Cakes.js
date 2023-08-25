import React, { useState, useEffect } from 'react';
import { myCakes } from '../../../Services/APIs/UserAPI';
import toast, { Toaster } from "react-hot-toast";


const CakeCard = ({ cake }) => {
  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      <img className="object-cover object-center h-56 w-full" src={cake.image} alt={cake.name} />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg">{cake.name}</h2>
        <p className="mt-2 text-gray-600">{cake.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold">₹ {cake.price}</span>
          <button className="px-3 py-1 bg-indigo-600 text-white font-semibold rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const CakeShop = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: 'url(/cakes.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      overflowY: 'auto',
    });
  }, []);

  const getData = async () => {
    try {
      const res = await myCakes();
      if (res.status !== 200) {
        toast.error('Error While Fetching Data!')
      } else {
        setCakes(res.data);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <Toaster/>  
      <div className="py-12 p-4" style={{ maxWidth: '70vw', margin: '0 auto', height: '100%' }}>
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-[#8b9ad9] rounded-lg p-1">
            &nbsp;Gifts that <mark className="px-2 text-red-400 bg-[#9be79b] rounded dark:bg-[#cbffc0]">Sweeten</mark> the Moments
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeShop;
