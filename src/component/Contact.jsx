import React from "react";
import { FaPhoneVolume, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section 
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 text-white overflow-hidden" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Contact <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Me
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Let’s connect—whether it’s a project idea or just to say hi!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Phone Number */}
          <ContactMethod 
            icon={<FaPhoneVolume size={28} className="text-cyan-400" />} 
            title="Phone" 
            detail="(+212) 616-421-373" 
          />

          {/* Email Address */}
          <ContactMethod 
            icon={<FaEnvelope size={28} className="text-cyan-400" />} 
            title="Email" 
            detail="rachidheroumti0@gmail.com" 
          />

          {/* Location */}
          <ContactMethod 
            icon={<FaMapMarkerAlt size={28} className="text-cyan-400" />} 
            title="Location" 
            detail="Agadir, Morocco" 
          />
        </div>
      </div>
    </section>
  );
};

const ContactMethod = ({ icon, title, detail }) => {
  return (
    <div 
      className="group bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 
                 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-sm text-gray-300 mt-1">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;