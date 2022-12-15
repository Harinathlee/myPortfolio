import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

  import {MdWorkOutline} from "react-icons/md";
  import wipro from "../assets/wipro.png";
const Experience = () => {
  const educationData = [
    {
      id: 1,
      company: "Wipro Technologies, Chennai , India.",
      job_title: "Project Engineer",
      job_description: "Software Engieering",
      year: "May 2018 - Present",
      logo : wipro
    },
    
  ];
  return (
    <section id="experience" name="experience"  className="w-full h-screen bg-slate-900 p-4 text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
       My Experience
      </p>
      </div>
  <VerticalTimeline lineColor="#6D67E4">
    {educationData.map(({ id, company, job_title, job_description, year , logo}) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={year}
        iconStyle={{ background: "#6D67E4", color: "#fff" }}
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold text-[#6D67E4]">
          {job_title}
        </h3>

        <h4 className="vertical-timeline-element-subtitle text-gray-600">
          {job_description}
        </h4>
        <div className="float-left pr-4 pt-2">
          <img src={logo} alt="bits" className="w-10 mx-auto" />
        </div>
        <div>
          <p className="vertical-timeline-element-subtitle text-slate-900">
            {company}
          </p>
        </div>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</div>
</section>
  );
};

export default Experience;
