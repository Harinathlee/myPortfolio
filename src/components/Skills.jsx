import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-[#e34c26]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-[#264de4]",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-[#61DBFB]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-[#563d7c]",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

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
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
