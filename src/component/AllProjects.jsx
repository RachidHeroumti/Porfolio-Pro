import React, { useState } from "react";
import dashboardPicture from "../image/dashboard2.png";
import cosaPic from "../image/cosaluxePic.png";
function AllProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center py-20 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800 mt-10"
      id="projects"
    >
      {/* Header Section */}
      <div className="relative mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          My{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Projects
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Explore my handcrafted creations—where innovation meets seamless
          functionality.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto px-6">
        <ProjectCard
          title="Atlas"
          description="A stunning Vue.js-powered theme for Storeino, delivering lightning-fast search, dynamic filters, immersive product pages, and a sleek cart—crafted for global reach with multi-language and currency support."
          imageUrl="https://storeino-files.b-cdn.net/themes/atlas.png"
          demoLink="https://atlas-theme.storeino.com/"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Atlas"}
        />

        {/* Dashboard */}
        <ProjectCard
          title="Dashboard Admin"
          description="A powerful admin dashboard built with React.js and Tailwind CSS, integrated with an Express.js and MongoDB backend. Features include real-time data visualization, user management, and responsive design for seamless business operations."
          imageUrl={dashboardPicture}
          demoLink="https://ecommerce-dashboard-fawn-six.vercel.app"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Dashboard Admin"}
          isnew={true}
        />
        {/* CosaLuxe */}
        <ProjectCard
          title="Website for cosaluxe "
          description="A dynamic and robust website designed for the CosaLuxe brand to showcase and sell their products, featuring multilingual support and an elegant, user-friendly design."
          imageUrl={cosaPic}
          demoLink="https://www.cosaluxe.ma"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "cosaluxe"}
          isnew={true}
        />
        {/* Prestige */}
        <ProjectCard
          title="Prestige"
          description="An elegant Vue.js theme for Storeino, blending intuitive search, refined filters, and captivating product displays with a smooth cart experience—designed for worldwide appeal with multi-language and currency features."
          imageUrl="https://storeno.b-cdn.net/stores/11-2024/1731335307001.png"
          demoLink="https://prestige-theme.storeino.com/"
          repoLink="https://github.com/RachidHeroumti"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Prestige"}
        />
        {/* Cabinet Medical */}
        <ProjectCard
          title="Cabinet Medical"
          description="A cutting-edge medical platform crafted with React.js, Tailwind CSS, Node.js, and MongoDB—streamlining patient care with a clean, professional interface and robust backend."
          imageUrl="https://images.pexels.com/photos/8376239/pexels-photo-8376239.jpeg?auto=compress&cs=tinysrgb&w=600"
          demoLink="https://cabinet-medical-pfe.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Cabinet-Medical-PFE-"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Cabinet Medical Website"}
        />

        {/* Eco-Store */}
        <ProjectCard
          title="Eco-Store"
          description="A robust e-commerce powerhouse built with React.js, Node.js, Express.js, and MongoDB—offering real-time inventory sync and a buttery-smooth shopping journey from browse to checkout."
          imageUrl="https://refillgoodness.com/cdn/shop/files/Curbside_2_0892fc30-595c-485a-86e4-a87e8b5c30bd_1600x.png?v=1637630374"
          demoLink="https://onlay-shop.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Full-stack-Ecomerce-store"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Eco-Store"}
        />

        {/* Book Shop */}
        <ProjectCard
          title="Book Shop"
          description="A sleek online bookstore powered by Next.js and Tailwind CSS, showcasing a vast genre collection with effortless navigation and a modern, responsive design that book lovers adore."
          imageUrl="https://images.pexels.com/photos/4318455/pexels-photo-4318455.jpeg?auto=compress&cs=tinysrgb&w=600"
          demoLink="https://books-shop-tau.vercel.app/books"
          repoLink="https://github.com/RachidHeroumti/Books"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Book Shop"}
        />

        {/* Delivery Food */}
        <ProjectCard
          title="DeliveryFood"
          description="A vibrant React.js and Tailwind CSS food delivery frontend, engineered for speed and simplicity—making online ordering a delight with its intuitive design."
          imageUrl="https://images.pexels.com/photos/4392036/pexels-photo-4392036.jpeg?auto=compress&cs=tinysrgb&w=300"
          demoLink="https://deliveryfood-xg3z.onrender.com/"
          repoLink="https://github.com/RachidHeroumti/Delivary-food-client"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "DeliveryFood"}
        />

        {/* Chat App */}
        <ProjectCard
          title="Chat App"
          description="A dynamic real-time chat experience built with React.js and Socket.io—featuring instant messaging, secure authentication, and multi-room functionality for effortless communication."
          imageUrl="./chat_icon.png"
          demoLink="https://chatapp-lfc6.onrender.com"
          repoLink="https://github.com/RachidHeroumti/ChatApp-client"
          setHoveredProject={setHoveredProject}
          isHovered={hoveredProject === "Chat App"}
        />
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  demoLink,
  repoLink,
  setHoveredProject,
  isHovered,
  isnew = false,
}) => (
  <div
    className="group relative rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 
               transform transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
    onMouseEnter={() => setHoveredProject(title)}
    onMouseLeave={() => setHoveredProject(null)}
  >
    {/* Image Section */}
    <div className="relative h-72 overflow-hidden">
      <img
        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
        src={imageUrl}
        alt={`${title}-preview`}
        loading="lazy"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      {/* Floating Tag */}
      {isnew && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/50 rounded-full backdrop-blur-sm">
          Featured
        </span>
      )}
    </div>

    {/* Content Section */}
    <div className="p-6 relative z-10">
      <h1 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
        {title}
      </h1>
      <p
        className="text-gray-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 
                   transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
      >
        {description}
      </p>

      {/* Buttons */}
      <div
        className="flex gap-4 justify-center items-center opacity-0 group-hover:opacity-100 
                     transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100"
      >
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium
                    hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <span>Explore</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-cyan-400/50 text-cyan-400 rounded-full font-medium
                    hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105"
        >
          Source
        </a>
      </div>
    </div>

    {/* Animated Border Effect */}
    <div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                   opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 blur-2xl"
    />
  </div>
);

export default AllProjects;
