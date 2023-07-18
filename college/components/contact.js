import { useState } from "react";
import Image from "next/image";
import img from "../public/images/back.jpg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="relative">
      <div className="w-70vw mx-auto">
        <Image
          className="w-screen h-[800px] rounded-3xl"
          src={img}
          alt="About Us"
        />
      </div>
      <div className="absolute h-[1000px] top-0  items-center w-[50%] ml-[25%] mr-[25%]">
        <form className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-[700px] pt-[100px] mt-[50px] bg-opacity-80 w-full  p-5 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Contact Us
          </h2>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
