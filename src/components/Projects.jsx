import React, { useState } from "react";
import lovecalculator from "../assets/projects/lovecalculator.png";
import upoint_query_builder from "../assets/projects/upoint-query-builder.png";
import knowmelee from "../assets/projects/knowme-lee.png";
import "../style.css";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
//package for card flip effect
import ReactCardFlip from "react-card-flip";
const Projects = () => {
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
        "This is a Progressive Web App(PWA) which I developed to minimize my team's work by generating SQL queries automatically.",
      image: upoint_query_builder,
      technologies: ["ReactJS", "SCSS", "Java Script", "BootStarp"],
      benifites:
        "This is a real time porject which is being used by clients. It helps our team to generate queries automatically in minutes rather than spending hours/days to write same queries manually and also reduces the probability of making mistakes.",
    },
    {
      id: 3,
      name: "KnowMe - myPortfolio",
      description:
        "This is website is an online form of a childhood game FLAMES we used to play to find out the relationship between 2 persons.",
      image: knowmelee,
      technologies: ["HTML", "React JS", "SCSS", "Tailwind CSS"],
      benifites:
        "This is just a fun game which I developed to practise my web developement skills.",
    },
  ];

  const [flip, setFlip] = useState(false);
  const clickHappens = (id) => () => {
    setFlip((prevState) => ({
      clicked: prevState.clicked === id ? null : id, // <-- toggle back to null or to new id
    }));
  };
  return (
    <section
      id="projects"
      name="projects"
      className="w-full h-auto p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
          <span>My </span> <span className="text-blue-400">Projects</span>
            
          </p>
          <p className="pt-6 font-Roboto">
            Check out some of my work right here. Click on "Live" button to
            visit the hosted website of the project, click on "COde" button to
            visit the GitHub repository of the project.
          </p>
          <p className="pt-2 font-Roboto">
            You can double click on the project card to flip and see the short
            description and benifites of the project. Double click again will flip it back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {projects.map((project, index) => (
            <ReactCardFlip
              isFlipped={flip}
              flipDirection="horizontal"
              key={project.id}
            >
              <div
                className=" w-[20rem] overflow-hidden bg-slate-700 shadow-slate-800  rounded-lg h-96 hover:cursor-pointer"
                onDoubleClick={clickHappens(index)}
              >
                <img
                  src={project.image}
                  alt="projimg"
                  className="w-full border-1"
                />
                <div className="px-6 py-2">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                </div>

                <div className="px-6 pt-2 pb-2">
                  {project.technologies.map((tech) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="px-3">
                  <button className="bg-orange-500 text-white text-center font-bold py-1 px-4 rounded-full float-left hover:scale-110 shadow-lg shadow-gray-800">
                    <a href="https://lee-lovecalculator.netlify.app">
                      Live
                      <FaPlayCircle className="inline-block ml-1" />
                    </a>
                  </button>
                  <button className="bg-black text-white text-center font-bold py-1 px-4 rounded-full float-right hover:scale-110 shadow-lg shadow-gray-800">
                    <FaGithub className="inline-block mr-1" />
                    Code
                  </button>
                </div>
              </div>

              <div
                className=" w-[20rem] overflow-hidden bg-slate-800 shadow-slate-800  rounded-lg h-96 hover:cursor-pointer"
                onDoubleClick={() => setFlip(!flip)}
              >
                <div className="mt-4 p-4">
                  <p className="font-Open_Sans font-bold text-white">
                    {project.description}
                  </p>

                  <p className="pt-3 font-Open_Sans font-bold text-white">
                    {project.benifites}
                  </p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
