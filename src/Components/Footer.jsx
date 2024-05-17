import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 bg-[#0f172b] text-white">
      <div className="container py-6">
        <h1 className="text-lg font-bold text-center lg:text-2xl my-5">
          Join our community and stay updated <br /> on the latest travel tips
          and deals.
        </h1>
        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="emailSub"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
            placeholder="Email Address"
          />
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#FEA116] rounded-lg hover:bg-[#FEA116] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>
        <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-start">
            <a className="text-xl font-bold text-[#FEA116] uppercase">
              Go Beyond
            </a>
            <div className="flex mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-white hover:text-blue-500"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-white hover:text-blue-500"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-white hover:text-blue-500"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
          <div className="flex mt-4 md:m-0 ">
            <div className="-mx-4 text-white">
              <a
                href="#"
                className="px-4 text-sm uppercase font-bold transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                About
              </a>
              <a
                href="#"
                className="px-4 text-sm uppercase font-bold transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Destinations
              </a>
              <a
                href="#"
                className="px-4 text-sm uppercase font-bold transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
