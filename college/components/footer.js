import React from "react";
import {blog} from "../dummdata"

const Footer = () => {
  return (
    <>
      <section className="bg-gray-900 py-[10%] ">
        <div className="container flex justify-between items-center px-[10%] mx-auto">
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-2">Newsletter - Stay tuned and get the latest updates</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="flex items-center ml-4">
            <input
              className="] px-4 py-2 rounded-l-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              type="text"
              placeholder="Enter email address"
            />
          <button className="px-4 w-[20px] h-[40px] py-2 rounded-r-lg bg-transparent hover:bg-blue-600 text-white">
  <i className="fas fa-paper-plane text-white w-[15px] h-[15px]"></i>
</button>

          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-12">
        <div className="container px-[10%] mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h1 className="text-2xl font-bold mb-2">ACADEMIA</h1>
              <span className="text-gray-500">ONLINE EDUCATION &amp; LEARNING</span>
              <p className="text-gray-600 mt-4">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <div className="flex mt-4">
                <i className="fab fa-facebook-f text-gray-500 hover:text-blue-500 mr-2 cursor-pointer"></i>
                <i className="fab fa-twitter text-gray-500 hover:text-blue-500 mr-2 cursor-pointer"></i>
                <i className="fab fa-instagram text-gray-500 hover:text-blue-500 cursor-pointer"></i>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 ml-[30px]">
              <h3 className="text-lg font-bold mb-2">Explore</h3>
              <ul className="text-gray-600">
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="text-gray-600">
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms &amp; Conditions</li>
                <li>Privacy</li>
                <li>Feedbacks</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <h3 className="text-lg font-bold mb-2">Recent Post</h3>
              {blog.slice(0, 3).map((val) => (
                <div className="flex items-center mb-4" key={val.id}>
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={val.cover} alt="" />
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-500">
                      <i className="far fa-calendar-alt"></i> {val.date}
                    </span>
                    <span className="text-gray-500 ml-2">
                      <i className="far fa-user"></i> {val.type}
                    </span>
                    <h4 className="text-gray-900 text-lg font-bold">{val.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-gray-600">
            <h3 className="text-lg font-bold mb-2">Have a Questions?</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> +2 392 3929 210
              </li>
              <li>
                <i className="fas fa-paper-plane"></i> info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 py-2 text-center text-gray-200">
        <p>
          &copy;2022 All rights reserved  <i className="fas fa-heart text-red-500"></i> 
        </p>
      </div>
    </>
  );
};

export default Footer;
