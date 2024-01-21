import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai"
import { BsLinkedin } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { MdOutlineEmail } from 'react-icons/md'
import ImgMain from "../image/img_main.png"
//import Footer from "../component/Footer"

function Portfolio1() {
  return (
    <div className=' bg-slate-900 p-4'>
      <div className=''>
        <div>
          <div className='w-full text-white text-xl flex justify-end items-center p-4 px-12 fixed top-0 right-0 bg-slate-950 z-50'>
            <a href='#home' className='px-2 mx-3  hover:text-gray-300'>Home</a>
            <a href='#project' className='px-2 mx-3  hover:text-gray-300'>Project</a>
            <a href='#contact' className='px-2 mx-3  hover:text-gray-300'>Contact</a>
            <a href='https://github.com/rachidcooder'><AiFillGithub size={20} className='mx-2 hidden md:flex' /></a>
          </div>
          <div className=' flex items-center  p-5 flex-col md:flex-row  md:justify-between py-12 ' id='home'>
            <div className='text-gray-50 p-5'>
              <h1 className='text-3xl text-gray-200 py-2  font-bold'>Hi ,I'am Rachid</h1>
              <h2 className='text-2xl py-2'>I'm Full Stack Developer</h2>
              <p className='text-gray-400'>
                - I'm a full-stack developer who turns your online dreams into reality.</p>
              <p className='text-gray-400'>
                - I design eye-catching websites and make them work like magic behind the scenes.</p>
              <p className='text-gray-400'>
                - From the pretty pictures to the hidden brains, I build smooth-running web experiences,
                one pixel at a time. Think of me as your all-in-one website builder.</p>
              <p className='text-gray-400 mb-8'>
                -  Your ideas spark, I code the fire. I bring your vision to life,
                building the structure and launching your web masterpiece into the world.</p>

              <a href='#project' className='px-4 py-2  border border-white rounded-lg my-3 border-spacing-2 text-gray-100'
              >View My Project</a>
            </div>
            <img className=' object-cover bg-transparent rounded-lg h-[600px] w-[500px]'
              src={ImgMain} alt='' />
          </div>
        </div>
        {/**My Skill */}
        <div className=' '>
          <h1 className='text-center text-3xl text-gray-100 p-4 font-bold'>My Skills</h1>
          <div>
            <h2 className='px-5 py-2 bg-slate-100 text-gray-800 rounded-lg md:rounded-lg  text-xl mx-5 m-2'
            ><span className='text-black font-bold'>Front-end : </span>I have a strong command of front-end technologies like
              <span className=' text-black font-medium'> Html, Css , React Js , NextJs ,Tailwind ,bootstrap </span></h2>
            <h2 className='px-5 py-2 bg-slate-100 text-gray-800 rounded-lg md:rounded-lg  text-xl mx-5 m-2 '
            ><span className='text-black font-bold'>Back-end : </span>
              I excel in creating robust APIs and managing databases using technologies like
              <span className=' text-black font-medium '> Node.js & ExpressJs and MongoDB  </span>
            </h2>
            <h2 className='px-5 py-2 bg-slate-100 text-gray-800 rounded-lg md:rounded-lg  text-xl mx-5 m-2 '
            ><span className='text-black font-bold'>Programing Languages : </span> JavaScript ,TypeScript , Java ,C ,C++
            </h2>
          </div>
        </div>

        {/**My Projects */}
        <div>
          <h1 id='project' className='text-3xl font-bold text-center text-white p-3'>My Project</h1>
        </div>
        <div className='grid gap-6 p-5 lg:grid-cols-4 md:grid-cols-2'>

          <a href='https://deliveryfood-xg3z.onrender.com/' target="_blank" className='' >
            <div className=' bg-slate-100 shadow-lg rounded-lg flex flex-col hover:scale-105 duration-300'>
              <img className='h-[200px] rounded-lg'
                src='data:image/png;base64,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' alt='' />
              <h1 className="text-3xl text-center py-2 font-bold text-gray-800">DeliveryFood</h1>
              <p className="p-3" >
                Client side of a deliveryfood website with react Js & Tailwind Css
              </p>
            </div>
          </a>

          <a href='https://dwm-tasks.onrender.com/' target="_blank" className='h-fit'>
            <div className=' bg-slate-100 shadow-lg rounded-lg flex flex-col hover:scale-105 duration-300'>
              <img className='h-[200px] rounded-lg'
                src='https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' />
              <h1 className="text-3xl text-center py-2 font-bold text-gray-800">Task Manger</h1>
              <p className="p-3" >
                A simple and efficient Todo List application built with React JS and NodeJs.
              </p>
            </div>
          </a>

          <a href='https://onlay-shop.onrender.com/' target="_blank" className=''>
            <div className=' bg-slate-100 shadow-lg rounded-lg flex flex-col hover:scale-105 duration-300'>
              <img className='h-[200px] rounded-lg'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLPy2WZD5ReCyn1h3YSS50kuhP0IZPpw9CA&usqp=CAU' alt='' />
              <h1 className="text-3xl text-center py-2 font-bold text-gray-800">Eco-Store</h1>
              <p className="p-3" >
                A powerful E-commerce store website built with the MERN stack
              </p>
            </div>
          </a>

          <a href='#' className='' target="_blank">
            <div className=' bg-slate-100 shadow-lg rounded-lg flex flex-col hover:scale-105 duration-300'>
              <img className='h-[200px] rounded-lg'
                src='data:image/png;base64,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' alt='' />
              <h1 className="text-3xl text-center py-2 font-bold text-gray-800">Chat App</h1>
              <p className="p-3" >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </a>



        </div>


        <div className='bg-white rounded-lg m-4 p-4'>
          <h1 className='p-2 text-center text-2xl font-bold'> Somme other Skills & Certifications </h1>
          <p className=' text-gray-900'><span className='text-xl font-bold'>Languages : </span>Arabic ,Frensh ,English </p>
          <p className=' text-gray-900'><span className='text-xl font-bold'>Dogree : </span>I have Computer Sciense dogree</p>
          <p className=' text-gray-900'><span className='text-xl font-bold'>git & github : </span>I have a strong command of Git and GitHub, facilitating efficient version control and collaborative development for projects. </p>
          <p className=' text-gray-900'><span className='text-xl font-bold'>Doker : </span>"I frequently utilize Docker to containerize some applications, ensuring consistent and reproducible environments for development and deployment.</p>
        </div>

        <h1 className='text-white font-bold text-center pt-5 text-3xl'>Contact Me </h1>
        <div className='flex justify-center items-center text-white p-5' id='contact'>
          <a href='' target="_blank"><AiFillFacebook size={30} className='mx-3 ' /></a>


          <a href=''> <BsLinkedin size={30} className='mx-3 ' /></a>
          <a href=''> <ImWhatsapp size={30} className='mx-3 ' /></a>
          <a href='mailto:cooderherou@gmail.com' target="_blank"
          > <MdOutlineEmail size={30} className='mx-3' /></a>
        </div>
      </div>
      <div className='border-t-2 border-gray-300 flex flex:col md:flex-row md:justify-between py-5 text-sm'>
        <div className='mb-4 text-white'>
          <a href='#' className='mx-2.5'>About</a>
          <a href='#' className='mx-2.5'>Privacy Policy</a>
          <a href='#' className='mx-2.5'>Terms of Services</a>
        </div>
        <p className='text-white'>© Copyright Reserved 2023</p>
      </div>
    </div>
  )

}

export default Portfolio1
