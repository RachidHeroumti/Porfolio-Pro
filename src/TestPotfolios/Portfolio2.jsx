import React from 'react'

function Portfolio2() {
  
  const projects = [
        {
            title: 'Portfolio Website',
            description: 'This is my personal portfolio website created with React and Tailwind CSS. It showcases my skills, projects, and contact information.',
        },
        {
            title: 'E-commerce App',
            description: 'I developed an e-commerce web application that allows users to browse and purchase products. It'
        },
        {
            title: 'Blog Platform',
            description: 'I created a blog platform where users can write and publish articles. It'
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <header className="bg-blue-500 text-white text-center py-5">
                <h1 className="text-3xl font-semibold">John Doe's Portfolio</h1>
                <p>Web Developer and Designer</p>
            </header>
            <div className="container mx-auto py-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                    <p>Hello! I'm John Doe, a passionate web developer and designer.
                         I love creating beautiful and functional websites. 
                         I have experience with various technologies and frameworks.</p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow-md mb-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
                    <p>If you're interested in working with me or have any questions,
                         feel free to reach out. You can contact me at john.doe@example.com.</p>
                </section>
            </div>
        </div>
    );
}

export default Portfolio2
