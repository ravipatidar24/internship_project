// import React, { useState } from 'react';
// import { RegisterAPI } from '../../Services/APIs/UserAPI';
// import toast, { Toaster } from 'react-hot-toast';

// export default function UserSignup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const obj = {
//       userName: name,
//       userEmail: email,
//       userPassword: password,
//       userAddress: address,
//       userPhoneNumber: phoneNumber,
//     };

//     console.log(obj)

//     const res = await RegisterAPI(obj);

//     if (res.status !== 200) {
//       toast.error(res.data.error);
//     } else {
//       toast.success(res.data.message);
//     }

//     console.log(res.data);
//   };

//   const styles = {
//     backgroundImage: 'url(/orange.avif)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     height: '100vh',
//   };

//   return (
//     <div style={styles}>
//       <Toaster />
//       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-gray-200 rounded-md shadow-xl shadow-blue-600/40 ring-2 ring-blue-600 lg:max-w-xl">
//           <h1 className="text-3xl font-semibold text-center text-blue-700">SIGN UP</h1>
//           <form className="mt-6" onSubmit={handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="address" className="block text-sm font-semibold text-gray-800">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 value={address}
//                 onChange={handleAddressChange}
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-800">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 className="block w-full px-4 py-2 mt-2 text-gray-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//               />
//             </div>
//             <div className="mt-6">
//               <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <p className="mt-8 text-xs font-light text-center text-gray-700">
//             Already have an account?{' '}
//             <a href="/login" className="font-medium text-blue-600 hover:underline">
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { RegisterAPI } from "../../Services/APIs/UserAPI";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      userName: name,
      userEmail: email,
      userPassword: password,
      userAddress: address,
      userPhoneNumber: phoneNumber,
    };

    console.log(obj);

    const res = await RegisterAPI(obj);

    if (res.status !== 200) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }

    console.log(res.data);
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
      <div className="flex flex-col min-h-screen pb-4">
        <div className="w-full p-6 ml-[10%] bg-gray-300 rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-blue-700">
            {" "}
            SIGN UP{" "}
          </h1>{" "}
          <form className="p-3" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name{" "}
              </label>{" "}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={name}
                onChange={handleNameChange}
              />{" "}
            </div>{" "}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email{" "}
              </label>{" "}
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={handleEmailChange}
              />{" "}
            </div>{" "}
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password{" "}
              </label>{" "}
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={handlePasswordChange}
              />{" "}
            </div>{" "}
            <div className="mb-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-800"
              >
                Address{" "}
              </label>{" "}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={address}
                onChange={handleAddressChange}
              />{" "}
            </div>{" "}
            <div className="mb-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number{" "}
              </label>{" "}
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />{" "}
            </div>{" "}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Sign Up{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Already have an account ?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Log in
            </a>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
