import React, { useState } from "react";
import lovecalculator from "../assets/projects/lovecalculator.png";
import upoint_query_builder from "../assets/projects/upoint-query-builder.png";
import knowmelee from "../assets/projects/knowme-lee.png";
import "../style.css";
const Projects = () => {
  const [hovered, setHovered] = useState(false);
  function onMouseEnterHandler() {
    setHovered(true);
  }

  function onMouseLeaveHandler() {
    setHovered(false);
  }
  const projects = [
    {
      id: 1,
      name: "Lee-Love Calculator",
      description:
        "This is website is an online form of a childhood game FLAMES we used to play to find out the relationship between 2 persons.",
      image: lovecalculator,
      technologies: ["HTML", "CSS", "Java Script", "BootStarp"],
      benifites:
        "This is just a fun game which I developed to practise my web developement skills.",
    },
    {
      id: 2,
      name: "Upoint-SQL Querey Builder",
      description:
        "This is website is an online form of a childhood game FLAMES we used to play to find out the relationship between 2 persons.",
      image: upoint_query_builder,
      technologies: ["ReactJS", "CSS", "Java Script", "BootStarp"],
      benifites:
        "This is just a fun game which I developed to practise my web developement skills.",
    },
    {
      id: 3,
      name: "KnowMe - myPortfolio",
      description:
        "This is website is an online form of a childhood game FLAMES we used to play to find out the relationship between 2 persons.",
      image: knowmelee,
      technologies: ["HTML", "CSS", "Java Script", "BootStarp"],
      benifites:
        "This is just a fun game which I developed to practise my web developement skills.",
    },
  ];

  return (
    <section
      id="projects"
      name="projects"
      className=" text-white md:h-screen h-auto container mt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            My Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {projects.map((project) => (
            <a
              class="relative block w-full bg-gradient-to-tr group h-52"
              href="#d"
            >
              <div
                class=" max-w-sm overflow-hidden shadow-sm bg-gradient-to-tr from-blue-500   to-indigo-600 shadow-indigo-400  rounded-lg h-96"
                key={project.id}
                onMouseOver={onMouseEnterHandler}
                onMouseOut={onMouseLeaveHandler}
              >
                {hovered ? (
                  <div class="p-4 transition-all transform translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 duration-1000">
                  
                      <div className="py-4">
                        <button className="bg-slate-900 text-white text-center font-bold py-2 px-4 rounded-full float-right">
                          Code
                        </button>
                        <button className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded-full float-left">
                          <a href="https://lee-lovecalculator.netlify.app">
                            Live
                          </a>{" "}
                        </button>
                      </div>
                      <div class="mt-10">
                        <div class="p-2">
                          <p class="font-Open_Sans font-bold text-white">
                            {project.description}
                          </p>
                        </div>
                        <div class="p-2">
                          <p class="font-Open_Sans font-bold text-white">
                            {project.benifites}
                          </p>
                        </div>
                      </div>
                    </div>
                  
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt="projimg"
                      srcset=""
                      className="w-full"
                    />
                    <div class="px-6 py-2">
                      <div class="font-bold text-xl mb-2">{project.name}</div>
                    </div>

                    <div class="px-6 pt-2 pb-2">
                      {project.technologies.map((tech) => (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
