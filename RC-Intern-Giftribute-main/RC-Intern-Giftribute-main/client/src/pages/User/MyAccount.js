import React, { useState, useEffect } from "react";
import { myProfile } from "../../Services/APIs/UserAPI";

// const styles = {
//   backgroundImage: "url(/profile.jpeg)",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   height: "100vh",
//   mainToolbar: {
//     margin: "0 auto",
//     maxWidth: "1605px",
//     width: "100%",
//     position: "relative",
//     padding: "5px 35px",
//     height: "79px",
//     backgroundColor: "#7d8035",
//   },
// };


export default function MyProfile() {
  const [userData, setUserData] = useState({
    userAddress: "",
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
  });

  const [email, setEmail] = useState("");

  useEffect(() => {
    const userMail = localStorage.getItem("userMail");
    if (userMail) {
      setEmail(userMail);
    }
  }, []);
  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: 'url(/form1.avif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      overflowY: 'auto'
     
      
    });
  }, []);

  const getUserData = async () => {
    var response = await myProfile(email);
    console.log(response.data);

    if (response.data) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        userName: response.data.userName || prevUserData.userName,
        userAddress: response.data.userAddress || prevUserData.userAddress,
        userPhoneNumber:
          response.data.userPhoneNumber || prevUserData.userPhoneNumber,
        userEmail: response.data.userEmail || prevUserData.userEmail,
      }));
    }
  };

  useEffect(() => {
    getUserData();
  }, [email]);

  return (
    <div  >
    <div className="py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 border-2 bg-blue-100 mx-8 md:mx-0 shadow rounded-3xl sm:p-10 border-blue-600">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-16 w-16 border-black border bg-purple-400 rounded-full flex flex-shrink-0 justify-center items-center text-2xl font-mono text-black">
                <i class="fa-solid fa-user-large"></i>
              </div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">{userData.userName}</h2>
                <a href="/my-orders" className=" text-sm text-gray-500 hover:underline"> My Orders</a>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center space-x-2">
                <i class="fa-solid fa-envelope"></i>
                  <span className="font-medium">Email: </span>
                  <span>{userData.userEmail}</span>
                </div>
                <div className="flex items-center space-x-2">
                <i class="fa-solid fa-phone"></i>
                  <span className="font-medium">Phone: </span>
                  <span>{userData.userPhoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2">
                <i class="fa-solid fa-address-card"></i>
                  <span className="font-medium">Address:</span>
                  <span>{userData.userAddress}</span>
                </div>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <button className="w-full bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-purple-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
