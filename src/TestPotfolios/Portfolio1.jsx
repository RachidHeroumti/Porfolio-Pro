import React from "react";

import Hero from "../component/Hero";
import AllProjects from "../component/AllProjects";
import NavBar from "../component/NavBar";
import Skills from "../component/Skills";
import Services from "../component/Services";
import AboutMe from "../component/AboutMe";
import OtherSkill from "../component/OtherSkill";
import Contact from "../component/Contact";

function Portfolio1() {
  return (
    <div className=" bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 p-2 font-poppins font-normal text-[15px]">
      <div className=" flex flex-col justify-center w-full  items-center">
        <div className="">
          <NavBar />
          <Hero />
        </div>

        <Skills />
        <AllProjects />
        <Services />
        <Contact />
        <AboutMe />
      </div>

      <div className=" border-t-2 border-gray-300 flex flex:col md:flex-row md:justify-between py-5 text-sm">
        <div className="mb-4 text-white">
          <a href="#" className="mx-2.5">
            About
          </a>
          <a href="#" className="mx-2.5">
            Privacy Policy
          </a>
          <a href="#" className="mx-2.5">
            Terms of Services
          </a>
        </div>
        <p className="text-white">© Copyright Reserved 2023</p>
      </div>
    </div>
  );
}

export default Portfolio1;
