import React, { useState } from 'react';

function AllProjects() {
  const [isPassOnBook, setIsPassOnBook] = useState(false);
  const [isPassOnEcoStore, setIsPassOnEcoStore] = useState(false);
  const [isPassOnChatApp, setIsPassOnChatApp] = useState(false);
  const [isPassOnDeliveryFood, setIsPassOnDeliveryFood] = useState(false);
  const [isPassOnTaskManager, setIsPassOnTaskManager] = useState(false);

  return (
    <div className='sm:w-5/6 flex justify-center flex-col sm:p-10 space-y-1 sm:space-y-5' id='project'>
      <div className='p-3'>
        <h1  className='text-3xl font-bold text-center text-white p-3'>My <span className=' text-sky-500 font-semibold'>Projects</span></h1>
      </div>
      <div className='grid gap-6 grid-col-1 sm:grid-cols-2'>


      <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnEcoStore(false)}
              onMouseOver={() => setIsPassOnEcoStore(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='https://refillgoodness.com/cdn/shop/files/Curbside_2_0892fc30-595c-485a-86e4-a87e8b5c30bd_1600x.png?v=1637630374' alt='eco-store-image' />
              {isPassOnEcoStore &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://onlay-shop.onrender.com/' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/EcoStore' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-green-500">Eco-Store</h1>
              <p className="p-3 text-gray-400 text-center">
                A powerful e-commerce store website built with React.js, Node.js, Express.js, and MongoDB. This platform features a sleek user interface and efficient back-end processing, providing users with a seamless shopping experience. With advanced product management, real-time inventory updates, and comprehensive customer support, it ensures a robust and scalable solution for online retail.
              </p>
            </div>
          </div>
        </div>

        <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnBook(false)}
              onMouseOver={() => setIsPassOnBook(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='https://images.pexels.com/photos/4318455/pexels-photo-4318455.jpeg?auto=compress&cs=tinysrgb&w=600' alt='book-image' />
              {isPassOnBook &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://books-shop-tau.vercel.app/books' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/Books' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-orange-600">Book Shop</h1>
              <p className="p-3 text-gray-400 text-center">
                BookShop is an online store where you can find the best books, offering a wide range of genres to cater to every reader's taste.
                It was built using technologies such as Next.js, Tailwind CSS, TypeScript, Node.js, Express.js, and MySQL, with PayPal integration for secure payments.
              </p>
            </div>
          </div>
        </div>

  {/* Cabinet medical */}
      <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnTaskManager(false)}
              onMouseOver={() => setIsPassOnTaskManager(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='https://images.pexels.com/photos/8376239/pexels-photo-8376239.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
              {isPassOnTaskManager &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://cabinet-medical-pfe.onrender.com/' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/Cabinet-Medical-PFE-' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-blue-600">Cabinet Medical Website</h1>
              <p className="p-3 text-gray-400 text-center">
              Developed with React.js and tailwindCss for the frontend and Node.js, Express.js for the
                 backend, using MongoDB for database management. Worked in a team to
                      enhance frontend and backend skills and contributed significantly.
              </p>
            </div>
          </div>
        </div>
        
       
        <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnChatApp(false)}
              onMouseOver={() => setIsPassOnChatApp(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='./chat_icon.png' alt='chat-app-image' />
              {isPassOnChatApp &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://chatapp-lfc6.onrender.com' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/Chat-App' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-red-800">Chat App</h1>
              <p className="p-3 text-gray-400 text-center">
                A real-time chat application built with React.js and Node.js, enabling users to communicate instantly with friends and family. This app features a responsive design, secure authentication, and efficient message handling, making it a reliable and user-friendly communication tool.
              </p>
            </div>
          </div>
        </div>

        <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnDeliveryFood(false)}
              onMouseOver={() => setIsPassOnDeliveryFood(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='https://images.pexels.com/photos/4392036/pexels-photo-4392036.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' />
              {isPassOnDeliveryFood &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://deliveryfood-xg3z.onrender.com/' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/Delivary-food-client' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-orange-600">DeliveryFood</h1>
              <p className="p-3 text-gray-400 text-center">
                The client-side of our delivery food website is crafted using React.js and Tailwind CSS.
                Enjoy a user-friendly interface with responsive design, intuitive navigation,
                and seamless integration for ordering your favorite meals online.
              </p>
            </div>
          </div>
        </div>

        <div className='sm:p-10'>
          <div className='rounded-lg flex flex-col md:p-10 justify-center items-center'>
            <div
              className='relative'
              onMouseOut={() => setIsPassOnTaskManager(false)}
              onMouseOver={() => setIsPassOnTaskManager(true)}
            >
              <img className='h-[250px] w-[250px] rounded-full'
                src='https://images.pexels.com/photos/5717454/pexels-photo-5717454.jpeg?auto=compress&cs=tinysrgb&w=300' alt='' />
              {isPassOnTaskManager &&
                <div className='absolute top-0 w-full h-full rounded-full items-center justify-center flex flex-col space-y-1 bg-white/40'>
                  <a href='https://work-list-omega.vercel.app/' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Demo</a>
                  <a href='https://github.com/RachidHeroumti/DWM-Tasks' target="_blank" className='text-gray-700 text-2xl font-bold sm:px-5 p-1 hover:bg-gray-300'>Repo</a>
                </div>}
            </div>
            <div>
              <h1 className="text-3xl text-center py-2 font-bold text-red-900">Task Manager</h1>
              <p className="p-3 text-gray-400 text-center">
                Discover a simple and efficient Todo List application, developed with Next.js and Firebase.
                Enjoy streamlined task management with real-time updates,
                intuitive user interface, and seamless integration for enhanced productivity.
              </p>
            </div>
          </div>
        </div>
  

      </div>
    </div>
  );
}

export default AllProjects;
