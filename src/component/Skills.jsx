import React from 'react'
import { BiCodeBlock } from "react-icons/bi";
import { TbDatabaseStar } from "react-icons/tb";
import { FaDev } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";



function Skills() {
  return (
    <div className='w-5/6'>
       <div className=''>
          <h1 className='text-3xl font-semiblod text-center text-white p-5'>My <span className=' text-sky-500'>Skills</span></h1>
        </div>
        <div className='grid gap-10 p-5 lg:grid-cols-3 md:grid-cols-2   '>
          <div className=' shadow-lg rounded-lg flex flex-col  border  border-gray-500
              text-gray-300'>
            <div className='h-[150px] flex justify-center items-center'>
              <BiCodeBlock size={50} className=' text-white' />
            </div>
            <div className='h-full space-y-1 p-2'>
              <h1 className=' text-2xl text-center text-gray-100 font-semibold'>Client Side</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Html/Css</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Tailwind/Bootstrap</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Javascript/TypeScript</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> ReactJs</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>NextJs</h1>
            </div>
          </div>

          <div className=' shadow-lg rounded-lg flex flex-col  border  border-gray-500
              text-gray-300'>
            <div className='h-[150px] flex justify-center items-center'>
              <FaDev size={50} className=' text-white' />
            </div>
            <div className='h-full space-y-1 p-2'>
              <h1 className=' text-2xl text-center text-gray-100 font-semibold'>Server side </h1>
              <h1><span className='text-gray-400 px-2 pe-3' >{">>"}</span>NodeJs/Express Js</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>php</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>Spring Boot</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> NextJs</h1>
            </div>
          </div>

          <div className=' shadow-lg rounded-lg flex flex-col  border  border-gray-500
              text-gray-300'>
            <div className='h-[150px] flex justify-center items-center '>
              <TbDatabaseStar size={50} className=' text-white' />
            </div>
            <div className='h-full space-y-1 p-2'>
              <h1 className=' text-2xl text-center text-gray-100 font-semibold'>Data Base</h1>
              <h1><span className='text-gray-400 px-2 pe-3' >{">>"}</span> SQL/MySql</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>Oracle DB</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> MongoDB</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Firebase</h1>
            </div>
          </div>

          <div className=' shadow-lg rounded-lg flex flex-col border  border-gray-500
              text-gray-300'>
            <div className='h-[150px] flex justify-center items-center '>
              <TbDeviceMobileCode size={50} className=' text-white' />
            </div>
            <div className='h-full space-y-1 p-2'>
              <h1 className=' text-2xl text-center text-gray-100 font-semibold'>Mobile</h1>
              <h1><span className='text-gray-400 px-2 pe-3' >{">>"}</span> Android Studio</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>Kottlin</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> java</h1>
            </div>
          </div>

          <div className=' shadow-lg rounded-lg flex flex-col  border  border-gray-500
              text-gray-300'>
            <div className='h-[150px] flex justify-center items-center'>
              <BiCodeBlock size={50} className=' text-white' />
            </div>
            <div className='h-full space-y-1 p-2'>
              <h1 className=' text-2xl text-center text-gray-100 font-semibold'>Othe Tools </h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Git&Gthub</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span> Docker</h1>
              <h1><span className='text-gray-400 px-2 pe-3'>{">> "}</span>Figma</h1>
              <h1 className=' flex flex-col'> <span className='text-gray-400 px-2 pe-3'>{">> " }Current Learning About</span>
                <span className='px-5 sm:px-8 text-gray-400  '> CI/CD $ DevOpps</span>
              
              </h1>
            </div>
          </div>


        </div>

    </div>
  )
}

export default Skills
