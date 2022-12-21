import React from "react";
import lovecalculator from "../assets/projects/lovecalculator.png";
import upoint_query_builder from "../assets/projects/upoint-query-builder.png";
import knowmelee from "../assets/projects/knowme-lee.png";
import "../style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Lee-Love Calculator",
      description:
        "This website is an online version of the childhood game FLAMES, which we used to play to determine the relationship between two people.",
      image: lovecalculator,
      technologies: ["HTML", "CSS", "Java Script", "BootStarp"],
      benifites:
        "This is just a game I made to practice my web development abilities.",
    },
    {
      id: 2,
      name: "Upoint-SQL Querey Builder",
      description:
        "This is a Progressive Web App (PWA) that I created to help my team save time by automatically creating SQL queries.",
      image: upoint_query_builder,
      technologies: ["ReactJS", "SCSS", "Java Script", "BootStarp"],
      benifites:
        "This is a real-time project that clients are using. It allows our team to construct queries automatically in minutes rather than spending hours or days writing the same queries manually, and it also decreases the possibility of errors.",
    },
    {
      id: 3,
      name: "KnowMe - myPortfolio",
      description:
        "This is my own portfolio website, where I can demonstrate my personality, experience, and skill to recruiters or clients interested in hiring me.",
      image: knowmelee,
      technologies: ["HTML", "React JS", "Tailwind CSS"],
      benifites: "It also allows folks to see my web building talents.",
    },
  ];

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
            Check out some of my work right here. To view more click on the
            left/right navigation arrows appearing.It will scroll you to the
            next project. This scroll will be infinite so after last project it
            again shows first project as next one.
          </p>
          <p className="pt-2 font-Roboto">
            Click on "Live" button to visit the hosted website of the project,
            click on "Code" button to visit the GitHub repository of the
            project.
          </p>
          <p className="pt-2 font-Roboto">
            You can double click on the project card to flip and see the short
            description and benifites of the project. Double click again will
            flip it back.
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
