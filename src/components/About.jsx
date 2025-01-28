import React from "react";
import HeroImage from "../assets/heroImage3.png";
const About = () => {
  
    const calculateExperience = (startDate) => {
      const start = new Date(startDate);
      const end = new Date();
      const years = end.getFullYear() - start.getFullYear();
      const months = end.getMonth() - start.getMonth();
      const days = end.getDate() - start.getDate();
      let totalExperience = years;
      if (months < 0 || (months === 0 && days < 0)) {
        totalExperience -= 1;
      }
      return totalExperience + (months >= 0 ? months / 12 : (12 + months) / 12);
    };
  
    const experienceYears = calculateExperience("2018-05-28").toFixed(1);
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
              <span className="text-2xl font-bold">I </span>am a seasoned web developer with {experienceYears } years of experience at Wipro, currently holding the position of Senior Project Engineer. Over the years, I have honed my skills in front-end development, specializing in ReactJS, JavaScript, HTML, and CSS frameworks.
            </p>

            <br />
            <p className="text-lg mt-3">
              My journey at Wipro has equipped me with extensive expertise in micro-frontend development, state management using Redux, and AI integration to boost productivity. I am now seeking a web developer role to further expand my technological prowess and contribute to innovative projects.
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
