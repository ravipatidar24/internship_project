import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleEmployeeLoginClick = () => {
    navigate("/admin-login");
  };

  const handleCustomerLoginClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundColor: 'white',
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
    <div className="text-center w-full border-3 border-black">
    <h2 class="text-6xl font-extrabold text-black " style={{fontFamily: 'Constantia'}}>GIFTLY</h2>
<p class=" text-4xl text-green-500 font-bold">Welcome!</p>
    </div>
    
      <div
        className="flex flex-col items-center justify-start"
        style={{
          width: "100vw", // Set width to viewport width
          height: "100vh", // Set height to viewport height
          overflow: "hidden", // Make the page unscrollable
        }}
      >
        <div className="flex flex-col md:flex-row items-center mt-16">
          <div
            className="card bg-gray-300 rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105 hover:text-black flex flex-col justify-center items-center hover:bg-gray-400 border-4 border-blue-400"
            onClick={handleEmployeeLoginClick}
          >
            <i className="fa-sharp mb-2 fa-solid fa-user-plus text-8xl icon">
              {" "}
            </i>{" "}
            <h2 className="text-lg font-bold -ml-10"> Admin </h2>{" "}
          </div>{" "}
          <div
            className="card bg-gray-300 rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105 hover:text-black flex flex-col justify-center items-center hover:bg-gray-400 border-4 border-blue-400"
            onClick={handleCustomerLoginClick}
          >
            <i className="fa-solid fa-user-large icon mb-2 text-8xl"> </i>{" "}
            <h2 className="text-lg font-bold"> User </h2>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <style>
        {" "}
        {`
          body {
            margin: 0;
            background-image: url(/pond.webp);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh;
            overflow: hidden;
          }

          .card:hover .icon {
            animation: rotate 2s infinite linear;
          }

          @keyframes rotate {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}{" "}
      </style>{" "}
    </>
  );
}

export default LoginPage;
