import React from "react";
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" relative container z-10 overflow-hidden bg-customDark text-white py-20 dark:bg-dark lg:py-[120px]" id="contact">
      <div className="container">
        <div className="-mx-4 w-full  flex flex-wrap lg:justify-between p-5">
          <div className="w-full px-4 ">
          <h2 className="mb-6 text-3xl font-bold uppercase text-dark dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Contact Me
              </h2>
            <div className="mb-12  flex w-full justify-between">

              {/* Phone Number */}
              <ContactMethod 
                icon={<FaPhoneVolume size={28} />} 
                title="Phone Number" 
                detail="(+212) 616421373" 
              />

              {/* Email Address */}
              <ContactMethod 
                icon={<FaEnvelope size={28} />} 
                title="Email Address" 
                detail="rachidheroumti0@gmail.com" 
              />

              {/* Fake Address */}
              <ContactMethod 
                icon={
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 3C13.4 3 11 5.1 11 8.5c0 4.7 5 10.5 5 10.5s5-5.8 5-10.5C21 5.1 18.6 3 16 3zm0 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
                  </svg>
                } 
                title="Location" 
                detail="Agadir, Morocco" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactMethod = ({ icon, title, detail }) => {
  return (
    <div className="mb-8 flex w-full max-w-[370px] bg-gray-800 p-4 rounded-lg">
      <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
        {icon}
      </div>
      <div className="w-full">
        <h4 className="mb-1 text-xl font-bold text-white">{title}</h4>
        <p className="text-base text-gray-400">{detail}</p>
      </div>
    </div>
  );
};

export default Contact;
