import React, { useState } from 'react';
import {CustCare} from '../../Services/APIs/UserAPI';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim(); 
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: trimmedValue,
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    //console.log(formData);
    // add logic for submitting form data
    const response = await CustCare(formData);
    console.log(response.data);
    if (response.status === 201 ) {
      
      toast.error("Error While Checking Email Existence!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if(response.status === 202){
     
      toast.error("Invalid Email Address!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else {

      
      toast.success("Email Sent Successfully!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        style: {
          background: "#4BB543",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      });
      
    }

    setIsLoading(false);

  };

  return (
  <>  
    <Toaster position="top-right"
  reverseOrder={false}/>
      <div className="flex flex-row w-full">
        <div className="w-1/2 pr-6">
          <div className="w-full">
            <img src={process.env.PUBLIC_URL + '/support.avif'} 
                alt="" 
                className="w-full"
                style = {{zIndex: '-1'}} />
          </div>
        </div>
        <div className="w-1/2 ">
        <form onSubmit={handleSubmit} className="flex flex-col items-center h-screen" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/form1.avif)`,
        backgroundSize: 'cover',
        zIndex: '-1'
        
      }}>
     <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-[5%]">Contact US</h1>
      <div className="w-1/2">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 mx-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2 mx-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2 mx-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter subject"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2 mx-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your message"
          rows="4"
          required
        />
      </div>
      <div className="mt-4">
      <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    ${isLoading ? "cursor-wait disabled opacity-50" : ""}`}disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>

      </div>
    </form>
    
  </div>
</div>


  </>
  );
};

export default ContactForm;
