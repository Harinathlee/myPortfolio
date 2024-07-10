import React from "react";

//importing data of skills
import { techs } from "./profile_data";
const Skills = () => {
  
  return (
    <section
      id="skills"
      name="skills"
      className="w-full h-auto mt-4 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white font-Open_Sans">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500 text-orange-400 font-Roboto">
            <span>My </span> <span className="text-blue-400">Expertise</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mt-2">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
