import React from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-black w-full h-full bg-[url(./assets/nozzle.png)] bg-fixed bg-cover bg-center bg-no-repeat z-0">
      
      <div className=" relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-1 gap-10 items-center">
       
        <div className=" text-white space-y-3 lg:pl-20 pt-20">
          <h2 className="text-5xl font-light">Contact Us</h2>
          <p className="text-md font-light">The time to create is now</p>
        </div>

        <div className="mb-0 bg-white rounded-lg shadow-lg p-6 ml-2 sm:p-8 w-full max-w-2xl lg:ml-20">
          <form className="space-y-6" action="https://formsubmit.co/huzaifa@duck.com" method="POST" >
          <input type="hidden" name="_captcha" value="false"></input>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name *</label>
                <input type="text" name="First Name" required className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input type="text" name="Last Name" required className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" name="email" required className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input type="text" name="job-title" className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Leave us a message...</label>
              <textarea rows="4" name="message" className="mt-1 w-full border-b border-gray-300 outline-none focus:border-black bg-transparent"></textarea>
            </div>

            <div>
              <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    <Footer/>
    </>
  );
};

export default Contact;
