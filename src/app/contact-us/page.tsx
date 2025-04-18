'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="max-w-[1440px] mb-8 border-b mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-16 md:pb-24 md:pt-18">
      <div className="flex flex-col md:flex-row">
        {/* First column - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4 md:p-0 flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[430px]">
            <Image
              src="/Basemap image.png" // Replace with your image path
              alt="Contact Us"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
        
        {/* Second column - Contact Form */}
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 font-['Libre_Baskerville']">
            <span className="text-[#B18A43]">Contact</span>{" "}
            <span className="text-[#B18A43] italic">Us</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Trangely"
                  className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@rrs.com"
                  className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleTextAreaChange}
                placeholder="how may help you ?"
                rows={4}
                className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43] resize-none"
                required
              />
            </div>
            
            <div className="mt-2">
              <button
                type="submit"
                className="px-6 py-2 border border-[#B18A43] text-[#B18A43] md:rounded-full hover:bg-[#B18A43] hover:text-white transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}