import React, { useState } from "react";
import lovecalculator from "../assets/projects/lovecalculator.png";
import upoint_query_builder from "../assets/projects/upoint-query-builder.png";
import knowmelee from "../assets/projects/knowme-lee.png";
import "../style.css";

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
    setFlip(prevState => ({
      clicked: prevState.clicked === id ? null : id, // <-- toggle back to null or to new id
    }));
  }
  return (
    <section
      id="projects"
      name="projects"
      className=" text-white md:h-screen h-auto container mt-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            My Projects
          </p>
          <p className="py-6 font-Roboto">
            Check out some of my work right here. Hover on the each project to
            read short description of it and view the hosted Live site and the
            source code in GitHub.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0">
          {projects.map((project,index) => (
            <ReactCardFlip
              isFlipped={flip}
              flipDirection="horizontal"
              key={project.id}
            >
              <div
                className=" max-w-sm overflow-hidden shadow-md  shadow-blue-400  rounded-lg h-96 hover:cursor-pointer"
                onClick={clickHappens(index)}
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
              </div>

              <div
                className=" max-w-sm overflow-hidden shadow-md  shadow-blue-400  rounded-lg h-96 hover:cursor-pointer"
                onClick={() => setFlip(!flip)}
              >
                <div className="py-4">
                  <button className="bg-slate-900 text-white text-center font-bold py-2 px-4 rounded-full float-right">
                    Code
                  </button>
                  <button className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded-full float-left">
                    <a href="https://lee-lovecalculator.netlify.app">Live</a>
                  </button>
                </div>
                <div className="mt-10">
                  <div className="p-2">
                    <p className="font-Open_Sans font-bold text-white">
                      {project.description}
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="font-Open_Sans font-bold text-white">
                      {project.benifites}
                    </p>
                  </div>
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
