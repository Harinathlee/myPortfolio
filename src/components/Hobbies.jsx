import React from "react";
//this marquee feture makes our element continuesly move from a direction to another direction
import Marquee from "react-fast-marquee";

//import hobbies
import { hobbies } from "./profile_data";
const Hobbies = () => {

  return (
    <section
      id="hobbies"
      name="hobbies"
      className="w-full h-auto mt-4 p-4 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white font-Open_Sans">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500 text-orange-400 font-Roboto">
            <span>My </span> <span className="text-blue-400">Interests</span>
          </p>
          <p className="mt-4 py-4">
            Below are some of my other interests/hobbies that I enjoy doing.
          </p>
        </div>
        <div className="mt-5 w-full">
          <Marquee speed={30} pauseOnHover={true}>
            {hobbies.map((hobby) => (
              <div
                key={hobby.id}
                className="flex items-center justify-center flex-col w-44 h-44 overflow-hidden bg-slate-700 shadow-black rounded-lg hover:cursor-pointer m-5 hover:scale-110"
              >
                <img src={hobby.src} alt={hobby.title} className="w-16" />
                <br />
                <h2 className="capitalize font-bold ">{hobby.title}</h2>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
