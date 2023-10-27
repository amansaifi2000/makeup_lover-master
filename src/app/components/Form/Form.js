import React from "react";

const Form = () => {
  return (
    <div className="w-1280 h-250 bg-white rounded-lg mt-12 mx-16 my-12 shadow-lg mb-8 font-serif">
      <div className="p-8">
        <form className="space-y-6">
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="fullName" className="text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="py-2 px-4 border border-gray-300 w-full text-gray-800 focus:outline-none rounded"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2 mb-4">
                  <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-2 px-4 border border-gray-300 w-full text-gray-800 focus:outline-none rounded"
                    required
                  />
                </div>
                <div className="w-1/2 px-2 mb-4">
                  <label htmlFor="mobile" className="text-sm text-gray-600 mb-1">
                    Mobile (0123456789)
                  </label>
                  <input
                    type="tel"
                    pattern="^[0-9]{10}$"
                    id="mobile"
                    name="mobile"
                    className="py-2 px-4 border border-gray-300 w-full text-gray-800 focus:outline-none rounded"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-sm text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="py-2 px-4 border border-gray-300 w-full text-gray-800 focus:outline-none rounded"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-56 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
