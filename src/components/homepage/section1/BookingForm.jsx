import React from 'react';
import { SiMoneygram } from "react-icons/si";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { MdTouchApp } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";

const SubmitForm = () => {

  return (
    <div className="max-w-md mx-auto p-8 rounded-md shadow-md form-container bg-y1 bg-opacity-30">
      <div className='flex flex-col'>
        <h2 className="text-2xl font-semibold text-y4 uppercase ">Stay Connected</h2>
        <h2 className="text-2xl font-semibold text-y4 uppercase">&</h2>
        <h2 className="text-2xl font-semibold text-y4 mb-6 uppercase">Explore Our Services</h2>
      </div>
      <div className='flex flex-col justify-start gap-3 my-5'>
        <div className='flex justify-start'>
          <SiMoneygram className="text-xl sm:text-3xl text-y4" />
          <h1 className='pl-2'>End-to-End RCM Solution</h1>
        </div>
        <div className='flex justify-start'>
          <IoDocumentAttachOutline className="text-xl sm:text-3xl text-y4" />
          <h1 className='pl-2'>Credentialing</h1>
        </div>
        <div className='flex justify-start'>
          <MdOutlinePeople className="text-xl sm:text-3xl text-y4" />
          <h1 className='pl-2'>Consulting</h1>
        </div>
        <div className='flex justify-start'>
          <MdTouchApp className="text-xl sm:text-3xl text-y4" />
          <h1 className='pl-2'>Technology Selection and Deployment</h1>
        </div>
        <div className='flex justify-start'>
          <FaUsersGear className="text-xl sm:text-3xl text-y4" />
          <h1 className='pl-2'>IT Managed Services</h1>
        </div>
      </div>
      <form className="flex flex-col space-y-4">
        <label className="text-xl font-bold text-y4" htmlFor="email">Subscribe to our newsletter</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border bg-u3 bg-opacity-30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-y4 placeholder:text-y24"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-wit4 bg-y2 rounded-md bg-opacity-50 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-y5"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
