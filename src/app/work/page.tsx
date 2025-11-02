import React from "react";

const projects = [
  {
    title: "Fox’s Tail",
    desc: "2D platformer game built in Unity. Developed gameplay, enemy AI, and level design.",
    image: "/fox-tail.png",
    link: "https://prototype-studio.itch.io/foxs-tail-web",
  },
  {
    title: "Citizens Pay Digital Campaign",
    desc: "Spin wheel campaign built with React.js + NestJS. Includes admin dashboard with draggable prizes.",
    image: "/citizens-pay.jpg",
    link: "",
  },
  {
    title: "Telegram Chatbot",
    desc: "Chatbot built in NestJS with admin UI  and Chatbot builder in React + MUI.",
    image: "/bot.png",
    link: "",
  },
  {
    title: "Dugro Messenger Chatbot",
    desc: "Chatbot built in NestJS with admin UI in React + MUI.",
    image: "/dugro.png",
    link: "",
  },
];

const Work = () => {
  return (
    <section className="h-[79vh] overflow-y-auto text-white scrollbar-thin-accent px-4 md:px-0">
      <div className="container mx-auto py-10 space-y-16">
        <h2 className="text-4xl font-bold text-accent text-center mb-10">
          My Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 mb-2">{project.desc}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline hover:text-white transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
