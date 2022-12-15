import React from "react";

const About = () => {
  return (
    <section id="about" name="about" className="w-full h-screen bg-slate-900 p-4 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            About Me
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="about-text col-span-3 font-Open_Sans">
          <p className="text-lg mt-3">
              <span className="text-2xl font-bold">I</span> am a dedicated web developer with experience in front-end web
              development technologies such as HTML, CSS, JS, and React. I
              created a few projects utilising these technologies, which are
              listed on the projects page. In order to become a full stack web
              developer, I am also learning backend technologies such as NodeJS.
            </p>

            <br />

            <p className="text-lg">
              I am presently working as a senior project engineer in wipro for
              the client Alight solutions as a Developer support. I analyse and
              update data in a database that is utilised for development
              purposes, and I transferred code files from SVN to Bitbucket
              (cloud service).
            </p>
            <br />
            <p className="text-lg ">
              Because of my passion in web development, I created a project for
              my team that generates SQL queries automatically in minutes rather
              than hours or days while doing it manually. This is not simply a
              white paper project, it is a real-time project that is being used
              by clients.
            </p>
          </div>
          <div className="about-video col-span-2">
            <iframe
              className="w-full aspect-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qkgSziQyP3A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
