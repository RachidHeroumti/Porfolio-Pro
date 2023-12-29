import React from 'react'
import { AiFillInstagram ,AiFillGithub ,AiFillFacebook ,AiFillAndroid} from "react-icons/ai"
import {GoCodeReview} from 'react-icons/go'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { MdOutlineEmail} from 'react-icons/md'
import Footer from "../component/Footer"
function Porfolio3() {

  return (
    <div className='w-full p-4 bg-gray-100'>
      <div className='p-4'>
        <h1 className='text-3xl font-semibold text-gray-900 pb-5'>Portfolio</h1>
        <div className='flex justify-between pe-5'>
        <a href='#home' className='text-center py-1 px-5 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200'>Home</a>
        <a href='#about' className='text-center py-1 px-5 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200'>About</a>
        <a href='#project' className='text-center py-1 px-5 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200'>Project</a> 
        <a href='#contact' className='text-center py-1 px-5 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200'>Contact</a> 
        </div>
        <div className='flex justify-between items-center w-full py-10' id='home'>
          <div>
            <h1 className='text-4xl text-gray-900 font-bold py-1 '>Hey there !</h1>
             <h2 className='text-2xl text-gray-900 font-bold py-1'>I'm Marky Mark.</h2>
             <p className='text-gray-500'>example@gmail.com</p>
             <h3 className='pt-4 text-xl text-gray-950 font-semibold'>Founder</h3>
             <div className='py-2'>
              <p className='border-s-2 border-gray-600 px-3 text-gray-800'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Iste voluptate fugit ratione! Illo officiis placeat odit dolore
                fugiat non rerum totam asperiores ex ratione? Officia rerum omnis
                repudiandae nisi earum!
              </p>
             </div>
             <div className='py-5 pe-5 '>
              <a href='' className='py-2 rounded-md bg-gray-200 px-2 flex items-center text-gray-800 my-1'> 
               <BsLinkedin size={25} className='mx-2' />
                Linkedin</a>
                <a href='' className='py-2 rounded-md bg-gray-200 px-2 flex items-center text-gray-800 my-1'> 
               <BsFacebook size={25} className='mx-2' />
                Facebook</a>
                <a href='' className='py-2 rounded-md bg-gray-200 px-2 flex items-center text-gray-800 my-1'> 
               <AiFillGithub size={25} className='mx-2' />
                Github</a>
             </div>
          </div>
          <img  className=' rounded-full w-[400px] h-[400px]'
            src='https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
        </div>
        <div className='border border-t-0 border-gray-400'></div>
        <div className='py-5'>
          <h1 className='text-2xl  py-5' id='project'>Project</h1>
          <div className='grid md:grid-cols-4 gap-6'>

            <div className='rounded-lg shadow-lg border hover:scale-105 duration-300'>
              <img  className='rounded-lg h-[250px] w-full'
               src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
               <h2 className='text-xl px-2 p-1 '>project name</h2>
               <p className='text-gray-600 p-1 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit tatibus cumque maxime.</p>
               <h4 className='px-2 p-1'>Reached 2023</h4>
            </div>

            <div className='rounded-lg shadow-lg border hover:scale-105 duration-300'>
              <img  className='rounded-lg h-[250px] w-full'
               src='https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
               <h2 className='text-xl px-2 p-1 '>project name</h2>
               <p className='text-gray-600 p-1 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit tatibus cumque maxime.</p>
               <h4 className='px-2 p-1'>Reached 2023</h4>
            </div>

             <div className='rounded-lg shadow-lg border hover:scale-105 duration-300'>
              <img  className='rounded-lg h-[250px] w-full'
               src='https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
               <h2 className='text-xl px-2 p-1 '>project name</h2>
               <p className='text-gray-600 p-1 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit tatibus cumque maxime.</p>
               <h4 className='px-2 p-1'>Reached 2023</h4>
            </div>

            <div className='rounded-lg shadow-lg border hover:scale-105 duration-300'>
              <img  className='rounded-lg h-[250px] w-full'
               src='https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=300' alt=''/>
               <h2 className='text-xl px-2 p-1 '>project name</h2>
               <p className='text-gray-600 p-1 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit tatibus cumque maxime.</p>
               <h4 className='px-2 p-1'>Reached 2023</h4>
            </div>

          </div>
          <div className='p-4 text-xl'>
            <h1 className='text-2xl text-gray-900 py-5 font-semibold'>Skill & certifications</h1>
            <ul className='p-1'>
              <li className="py-2 "> I'm proficient in Adobe Creative Suite, including Photoshop, Illustrator, InDesign, and XD, for creating outstanding designs.</li>
              <li className='py-2'> I specialize in creating designs that prioritize the user experience, ensuring that every element is intuitive and user-friendly.</li>
              <li className='py-2'>My video editing skills are focused on storytelling, using visuals to convey narratives effectively and emotionally.</li>
            </ul>
          </div>
          <div>
            <h1 className='text-3xl py-2' id='about'>About Me</h1>
              <p className='text-xl'>
    Hello! I'm "Your Name", a "Your Profession" with a passion for "Your Key Interests or Specialization". I believe that "Your Belief or Philosophy" and strive to "Your Goal or Mission".

With "Number" years of experience in the "Your Industry", I've had the privilege of working with a diverse range of clients and projects. My approach to "Your Work" is characterized by "Your Approach or Style", and I take great pride in delivering "Your Unique Selling Point".

My skills include "Your Key Skills", which I've honed through hands-on experience and continuous learning. I am "Any Additional Attributes, e.g., Detail-Oriented, Creative, Analytical" and enjoy "What You Enjoy in Your Work".

In my free time, I love "Your Hobbies or Interests Outside of Work". These activities help me "How Your Hobbies Benefit You or Your Work", and I find inspiration in "What Inspires You".

I am always open to "Your Preferred Method of Communication", so feel free to "How People Can Get in Touch with You". Whether you have a project in mind or just want to connect, I'd love to hear from you!

Let's "What You Hope to Achieve or Do Together" and "Your Offer or Value Proposition". I look forward to "How You Envision the Future".

Thank you for stopping by, and I hope we can "Your Desired Outcome from the Interaction"!
              </p>
          </div>
   <h1 className=' font-bold text-center pt-5 text-3xl'>Contact Me </h1>
    <div className='flex justify-center items-center  p-5' id='contact'>
     <a href=''><AiFillFacebook size={30} className='mx-3 '/></a> 
     <a href=''> <AiFillInstagram size={30} className='mx-3 '/></a> 
     <a href='https://github.com/rachidcooder'> <AiFillGithub size={30} className='mx-3'/></a> 
     <a href=''> <BsLinkedin size={30} className='mx-3 '/></a> 
     <a href=''> <ImWhatsapp size={30} className='mx-3 '/></a>
     <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'> <MdOutlineEmail size={30} className='mx-3'/></a>
    </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Porfolio3
