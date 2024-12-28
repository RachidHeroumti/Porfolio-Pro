import React, { useState } from 'react';

function AllProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="sm:w-5/6 flex justify-center flex-col sm:p-10 space-y-8" id="project">
      <div className="p-3">
        <h1 className="text-4xl font-bold text-center text-white p-3">
          My <span className="text-sky-500">Projects</span>
        </h1>
      </div>
      <div className="grid gap-10 sm:grid-cols-3">
        {/* Eco Store */}
        <ProjectCard
          title="Atlas"
          description="I developed Theme Atlas for Storeino using Vue.js , featuring search and filter, product pages, a shopping cart, and blogs. It supports multi-language and multi-currency for global usability.  "
          imageUrl="https://storeino-files.b-cdn.net/themes/atlas.png"
          demoLink="https://atlas-theme.storeino.com/"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Atlas'}
        />
          <ProjectCard
          title="Prestige"
          description="I developed Theme Prestige for Storeino using Vue.js , featuring search and filter, product pages, a shopping cart, and blogs. It supports multi-language and multi-currency for global usability."
          imageUrl="https://storeno.b-cdn.net/stores/11-2024/1731335307001.png"
          demoLink="https://prestige-theme.storeino.com/"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Prestige'}
        />
        <ProjectCard
          title="Eco-Store"
          description="A powerful e-commerce store website built with React.js, Node.js, Express.js, and MongoDB. It features real-time inventory updates and a seamless shopping experience."
          imageUrl="https://refillgoodness.com/cdn/shop/files/Curbside_2_0892fc30-595c-485a-86e4-a87e8b5c30bd_1600x.png?v=1637630374"
          demoLink="https://onlay-shop.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Full-stack-Ecomerce-store"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Eco-Store'}
        />

        
        {/* Book Shop */}
        <ProjectCard
          title="Book Shop"
          description="BookShop is an online store offering a wide range of genres, built using Next.js, Tailwind CSS, and other modern technologies."
          imageUrl="https://images.pexels.com/photos/4318455/pexels-photo-4318455.jpeg?auto=compress&cs=tinysrgb&w=600"
          demoLink="https://books-shop-tau.vercel.app/books"
          repoLink="https://github.com/RachidHeroumti/Books"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Book Shop'}
        />
        
        {/* Cabinet Medical */}
        <ProjectCard
          title="Cabinet Medical Website"
          description="Developed with React.js, Tailwind CSS, Node.js, and MongoDB, this medical website provides an efficient and professional platform."
          imageUrl="https://images.pexels.com/photos/8376239/pexels-photo-8376239.jpeg?auto=compress&cs=tinysrgb&w=600"
          demoLink="https://cabinet-medical-pfe.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Cabinet-Medical-PFE-"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Cabinet Medical Website'}
        />
        
        {/* Delivery Food */}
        <ProjectCard
          title="DeliveryFood"
          description="The client-side of this food delivery platform was built with React.js and Tailwind CSS, providing a user-friendly interface for online food orders."
          imageUrl="https://images.pexels.com/photos/4392036/pexels-photo-4392036.jpeg?auto=compress&cs=tinysrgb&w=300"
          demoLink="https://deliveryfood-xg3z.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Delivary-food-client"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'DeliveryFood'}
        />
        
        {/* Chat App */}
        <ProjectCard
          title="Chat App"
          description="A real-time chat application built with React.js and Socket.io. It features live messaging, user authentication, and multiple chat rooms for users."
          imageUrl="./chat_icon.png"
          demoLink="https://chatapp-lfc6.onrender.com"
          repoLink="https://github.com/RachidHeroumti/ChatApp-client"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === 'Chat App'}
        />
      </div>
    </div>
  );
}

const ProjectCard = ({ title, description, imageUrl, demoLink, repoLink, setHoveredProject, isHovered }) => (
  <div
    className="rounded-lg flex flex-col items-center bg-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
    onMouseEnter={() => setHoveredProject(title)}
    onMouseLeave={() => setHoveredProject(null)}
  >
    {/* Image Container */}
    <div className="relative w-full">
      <img
        className="h-[250px] w-full rounded-t-lg xl:h-[300px] object-cover shadow-md transition-transform transform hover:scale-105"
        src={imageUrl}
        alt={`${title}-image`}
      />

      {/* Hover Overlay with Links */}
      {isHovered && (
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-75 rounded-t-lg">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl font-semibold px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl font-semibold px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Repo
          </a>
        </div>
      )}
    </div>

    {/* Project Details */}
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">{title}</h1>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  </div>
);


export default AllProjects;
