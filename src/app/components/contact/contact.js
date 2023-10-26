"use client"
import React from "react";
import Image from 'next/image';
import Profile from "../../../../public/images/abstract.jpg";
import  EmailIcon from "../../../../public/images/email.png";
import PlaceIcon  from "../../../../public/images/place.png";
import  WorkIcon from "../../../../public/images/work.png";
import  ContactPhoneIcon from "../../../../public/images/contactPhone.png";

const Contact = () => {
  const iconStyle = {
    width: "100px", // Adjust the width to your desired size
    height: "100px", // Adjust the height to your desired size
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${Profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  };

  return (
    <>
      <div className="flex flex-wrap pt-10 mt-5 justify-center items-stretch">
        {/* Mobile Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              {/* <ContactPhoneIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" /> */}
                <Image
              src={ContactPhoneIcon} 
              alt="Galley Images" 
              height={305}
              width={350}
              className="w-12 h-12 object-cover rounded-lg" 
              onError={(e) => {
                e.target.src = '/images/error.png'; // Path to your error/fallback image
              }}
            />
            </div>
            <div className="mt-2 text-center flex-grow font-serif">
              <p className="text-lg font-bold text-black">Mobile</p>
              <p className="text-gray-700 mt-1 capitalize">+91 90000-80000</p>
            </div>
          </a>
        </div>

        {/* Email Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tim.jennings@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              {/* <EmailIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" /> */}
              <Image
              src={EmailIcon} 
              alt="Galley Images" 
              height={305}
              width={350}
              className="w-350 h-305 object-cover rounded-lg" 
              onError={(e) => {
                e.target.src = '/images/error.png'; // Path to your error/fallback image
              }}
            />
            </div>
            <div className="mt-2 text-center flex-grow font-serif">
              <p className="text-lg font-bold text-black">Email ID</p>
              <p className="text-gray-700 mt-1">tim.jennings@example.com</p>
            </div>
          </a>
        </div>

        {/* Business Segment Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              {/* <WorkIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" /> */}
              <Image
              src={WorkIcon} 
              alt="Galley Images" 
              height={305}
              width={350}
              className="w-350 h-305 object-cover rounded-lg" 
              onError={(e) => {
                e.target.src = '/images/error.png'; // Path to your error/fallback image
              }}
            />
            </div>
            <div className="mt-2 text-center flex-grow font-serif">
              <p className="text-lg font-bold text-black">Business Segment</p>
              <p className="text-gray-700 mt-1">Make Up</p>
            </div>
          </a>
        </div>

        {/* Location Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
          href="https://en.wikipedia.org/wiki/Santa_Anna_Township,_DeWitt_County,_Illinois"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              {/* <PlaceIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" /> */}
              <Image
              src={PlaceIcon} 
              alt="Galley Images" 
              height={305}
              width={350}
              className="w-350 h-305 object-cover rounded-lg" 
              onError={(e) => {
                e.target.src = '/images/error.png'; // Path to your error/fallback image
              }}
            />
            </div>
            <div className="mt-2 text-center flex-grow font-serif ">
              <p className="text-lg font-bold text-black">Location</p>
              <p className="text-gray-700 mt-1">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
