import React from "react";
import HeroImage from "../assets/heroImage2.png";
const About = () => {
  return (
    <section id="about" name="about" className="w-full h-auto p-4 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            <span>About </span> <span className="text-blue-400">Me</span>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="about-text col-span-3 font-Open_Sans">
            <p className="text-lg mt-3">
              <span className="text-2xl font-bold">I</span>am a dedicated web
              developer with experience in front-end web development
              technologies such as HTML, CSS, JS, and React. I created a few
              projects utilizing these technologies, which are listed on the
              projects page.
            </p>
            <br />
            <p className="text-lg">
              I am presently working as a senior project engineer in Wipro for
              the client Alight solutions as a Developer support. I analyze and
              update data in a database that is utilized for development
              purposes, and I migrate code files from SVN to Bitbucket (cloud
              service).
            </p>
            <br />
            <p className="text-lg ">
              Because of my passion for web development, I created a project for
              my team that generates SQL queries automatically in minutes rather
              than hours or days while doing it manually. This is not simply a
              white paper project, it is a real-time project that is being used
              by clients.
            </p>
          </div>
          <div className="about-video col-span-2">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-[350px]  drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
