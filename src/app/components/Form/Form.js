import React from "react";

const Form = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="bg-white rounded-lg shadow-lg mb-8 font-serif">
        <div className="p-4 md:p-8">
          <form className="space-y-6">
            <div className="mb-6">
              <label htmlFor="fullName" className="text-sm text-gray-600 mb-1 block">
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
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="email" className="text-sm text-gray-600 mb-1 block">
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
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="mobile" className="text-sm text-gray-600 mb-1 block">
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
            <div className="mb-6">
              <label htmlFor="message" className="text-sm text-gray-600 mb-1 block">
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
  className="w-full md:w-auto h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 px-8"
>
  Submit
</button>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
