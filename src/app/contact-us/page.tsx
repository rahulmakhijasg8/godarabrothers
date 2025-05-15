'use client';

import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  interface FormSubmissionData {
  [key: string]: string | number | boolean | File[] | { [fieldId: string]: File[] } | undefined;
  files?: {
    [fieldId: string]: File[];
  };
}

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Auto-resize the textarea
    adjustTextAreaHeight();
  };

  // Function to adjust textarea height based on content
  const adjustTextAreaHeight = () => {
    const textArea = messageRef.current;
    if (textArea) {
      // Reset height to calculate correct scrollHeight
      textArea.style.height = 'auto';
      // Set new height based on content
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  // Adjust height on component mount and when message content changes
  useEffect(() => {
    adjustTextAreaHeight();
  }, [formData.message]);

  const submitToGoogleSheets = async (formData: FormSubmissionData) => {
  // Your Google Apps Script Web App URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzmmIj3yCFvYJ_MJG5ZpjlycmCvJV-z34zErJxmcWSRdJoY7-KDxF6jrHAZZx2Req5y/exec';

  try {
        // Using 'no-cors' mode as a last resort
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Add this line
    });
    console.log(response)
    return true;
  } catch (error) {
    console.error(error)
    return false;
  }
};

  // Add the missing handleSubmit function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add timestamp to the form data
    const formDataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Submit to Google Sheets
    const success = await submitToGoogleSheets(formDataWithTimestamp);

    if (success) {
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mb-6 md:mb-8 border-b border-[#CFC3B8] md:border-[#603812] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px] py-16 md:pb-24 md:pt-18">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row">
          {/* First column - iframe (replacing Image) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4 md:p-0 flex items-center justify-center">
            <div className="relative w-full h-[400px] md:h-[430px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.848694365125!2d55.07919995!3d24.9651667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d9082ca1bd5%3A0x5b2b8f41ba57a008!2sJAFZA%20ONE!5e0!3m2!1sen!2sus!4v1714025887123!5m2!1sen!2sus"
                title="JAFZA ONE Location"
                className="w-full h-full rounded-md"
                style={{ border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Second column - Contact Form */}
          <div className="w-full md:w-1/2 px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 bg-clip-text text-transparent" style={{
              backgroundImage: "linear-gradient(127deg, #B18A43 0%, #C8A563 19.71%, #D7B676 31.73%, #C39F5A 44.71%, #A88037 56.25%, #C49E4A 71.15%, #FCDE81 79.81%, #DAB04B 90.38%, #C5952F 100%)"
            }}>
              <span className="font-['Libre_Baskerville'] font-[700]">Contact</span>{" "}
              <span className="font-['Libre_Baskerville'] font-[400] italic">Us</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="flex flex-col">
                  <label className="text-sm font-['Roboto'] font-[400] text-[#603812] mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Trangely"
                    className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-['Roboto'] font-[400] text-[#603812] mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@rrs.com"
                    className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-['Roboto'] font-[400] text-[#603812] mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43]"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-['Roboto'] font-[400] text-[#603812] mb-1">Message</label>
                <textarea
                  ref={messageRef}
                  name="message"
                  value={formData.message}
                  onChange={handleTextAreaChange}
                  placeholder="how may we help you ?"
                  rows={1}
                  className="p-2 border-b border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B18A43] resize-none overflow-hidden min-h-[40px]"
                  required
                  disabled={isSubmitting}
                  style={{ height: 'auto' }}
                />
              </div>
              
              <div className="mt-2 flex items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 border border-[#B18A43] text-[#B18A43] md:rounded-full hover:bg-[#B18A43] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                
                {submitStatus === 'success' && (
                  <span className="ml-4 text-green-600 text-sm">
                    Thank you! Your message has been sent successfully.
                  </span>
                )}
                
                {submitStatus === 'error' && (
                  <span className="ml-4 text-red-600 text-sm">
                    There was an error submitting your message. Please try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}