import React from "react";
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

//importing project details from data file

import { projects } from "./profile_data";

const Projects = () => {
 

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
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-auto"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
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
