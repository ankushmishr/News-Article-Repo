import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container max-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About US</h2>
          <p className="text-gray-400 text-sm">
            We are commited to deliver the best service and information. Our
            mission is to enrich lives through expectational digital
            experiencese
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About US</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to={"/"} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to={"/news"} className="hover:text-white">
                NewsArticles
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact us */}
        <div>
        <h2 className="text-lg font-semibold mb-4">Contact US</h2>
            <p className="text-gray-400 text-sm">123 Kanpur Uttar Pradesh India</p>
            <p className="text-gray-400 text-sm">Email:mishra.ankush2001@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone:+91-6392058759</p>
        </div>
      </div>
      {/* Socical Media and Links */}
      <div className="mt-4 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>Follow us on:</p>
        <div className="flex-justify-center space-x-4 mt-3">
            <a href="#" className="hover:text-white">
                FaceBook
            </a>
            <a href="#" className="hover:text-white">
                Twitter
            </a>
            <a href="#" className="hover:text-white">
                LinkedIn
            </a>
            <a href="#" className="hover:text-white">
                Instagram
            </a>
        </div>
           <p className="mt-4">&copy;{new Date().getFullYear()} Morninggg NewsProvider .All rights are Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
