"use client"
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import reactcalender from "./schedule.css"

const BusinessHoursAndAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const businessHours = "10:00 AM - 10:00 PM";


  return (
    <div className="mx-auto max-w-7xl w-full md:w-1280 bg-white p-8 rounded-lg shadow-lg m-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Business Hours */}
      <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
        <h1 className="text-xl font-serif mb-4 text-black">Business Hours</h1>
        <ul className="list-none m-0 p-0 mt-4">
          {days.map((day, index) => (
            <li key={index} className="text-black py-1 px-1 flex items-center font-semibold">
               <div className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-calendar"
                >
                  {/* Circle Gradient Background */}
                  <defs>
                    <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" style={{ stopColor: "#FFE6B3", stopOpacity: 1 }} /> {/* Light Color */}
                      <stop offset="100%" style={{ stopColor: "#FFE6B3", stopOpacity: 1 }} /> {/* Light Color */}
                    </radialGradient>
                  </defs>

                  {/* Group (g) element to group circle and icon */}
                  <g transform="translate(12 12)">
                    {/* Circle background without border */}
                    <circle cx="0" cy="0" r="11" fill="url(#circleGradient)" />

                    {/* SVG Content (Icon) */}
                    <rect x="-4" y="-4" width="8" height="8" rx="2" ry="2" fill="white" />
                    <line x1="-4" y1="-4" x2="-4" y2="-1" stroke="currentColor" />
                    <line x1="4" y1="-4" x2="4" y2="-1" stroke="currentColor" />
                    <line x1="-2" y1="-1" x2="2" y2="-1" stroke="currentColor" />
                  </g>
                </svg>
              </div>
              <div>
                <span className="block text-gray-600 mb-1">{day}</span>
                <span className="block">{businessHours}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Make an Appointment */}
      <div className="bg-white rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-xl font-serif mb-8 mt-6 text-black">Make an Appointment</h1>
        <form className="space-y-6">
          {/* Appointment form fields go here */}
          
          {/* Calendar in Make an Appointment section */}
          <div className="rounded-lg border-none text-center">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="react-calendar pb-6 bg-white text-black rounded-lg"
        
            />
          </div>
        </form>
        <div className="text-black flex flex-col items-center justify-center space-y-1 md:space-y-2">
        <h1 style={{ marginBottom: "0.25rem" }}>Hour</h1>
  <span style={{ fontSize: "0.8rem", backgroundColor: "#DDDDDD", padding: "0.2rem", borderRadius: "0.25rem" }}>
    10:00 AM - 10:15 PM
  </span>
  <button className="mt-2 md:mt-3" style={{
    background: 'linear-gradient(to right, #FFD699, #FFD699)',
    color: '#333',
    padding: '5px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }}>
    Book An Appointment
  </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursAndAppointment;
