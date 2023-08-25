import React, { useState, useEffect } from "react";
import { myPlants } from "../../Services/APIs/UserAPI";
import toast, { Toaster } from "react-hot-toast";

const PlantCard = ({ plant }) => {
  const handleRemove = () => {
    // Handle the removal of the product here
    console.log("Removing product:", plant.name);
  };

  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      <img
        className="object-cover object-center h-56 w-full"
        src={plant.image}
        alt={plant.name}
      />{" "}
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg"> {plant.name} </h2>{" "}
        <p className="mt-2 text-gray-600"> {plant.description} </p>{" "}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold"> ₹{plant.price} </span>{" "}
          <button
            className="px-3 py-1 bg-red-600 text-white font-semibold rounded"
            onClick={handleRemove}
          >
            Remove Product{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

const PlantShop = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: "url(/plants.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      overflowY: "auto",
    });
  }, []);

  const getData = async () => {
    try {
      const res = await myPlants();
      if (res.status !== 200) {
        toast.error("Error While Fetching Data!");
      } else {
        setPlants(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddPlant = () => {
    // Handle adding a new plant here
    console.log("Adding a new plant...");
  };

  return (
    <div>
      <Toaster />
      <div
        className="py-12 p-4 flex flex-col items-center"
        style={{
          maxWidth: "70vw",
          margin: "0 auto",
          height: "100%",
        }}
      >
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-green-700 rounded-lg p-1">
            &nbsp; Share the Gift of{" "}
            <mark className="px-2 text-yellow-200 bg-orange-600 rounded dark:bg-orange-500">
              Green{" "}
            </mark>{" "}
            Goodness{" "}
          </h1>{" "}
        </div>{" "}
        <div className="mt-4">
          <button
            className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 active:bg-red-800"
            onClick={handleAddPlant}
          >
            Add new Plant{" "}
          </button>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {" "}
          {plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default PlantShop;
