import React, { useState } from "react";
import { FaPlayCircle, FaGithub } from "react-icons/fa";
//package for card flip effect
import ReactCardFlip from "react-card-flip";
const ProjectCard = (props) => {
  const [flip, setFlip] = useState(false);
  const clickHappens = (id) => () => {
    setFlip((prevState) => ({
      clicked: prevState.clicked === id ? null : id, // <-- toggle back to null or to new id
    }));
  };
  const project = props.project;
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div
        className="ml-20 mr-10 w-[20rem] overflow-hidden bg-slate-700 shadow-slate-800  rounded-lg h-96 hover:cursor-pointer"
        onDoubleClick={clickHappens(project.id)}
      >
        <img src={project.image} alt="projimg" className="w-full border-1" />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">{project.name}</div>
        </div>

        <div className="px-6 pt-2 pb-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
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
  );
};

export default ProjectCard;
