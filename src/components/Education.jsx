import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbSchool } from "react-icons/tb";
import bits from "../assets/bits.png";
import svu from "../assets/svu.png";
function Education() {
  const educationData = [
    {
      id: 1,
      institute: "Birla Institute of Technology and Science ,Pilani,India.",
      course: "Master of Technology",
      branch: "Software Engieering",
      year: "2019 - 2022",
      score: "7.2",
      logo : bits
    },
    {
      id: 2,
      institute: "Sri Venkateshwara University, Tirupati,India.",
      course: "Bachelore of Science",
      branch: "Computer Science",
      year: "2015 - 2018",
      score: "8.6",
      logo : svu
    },
  ];
  return (
    <section id="education" name="education" className="education container text-cyan-50 h-auto mt-60">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
           My Academics
          </p>
          </div>
      <VerticalTimeline lineColor="#6D67E4">
        {educationData.map(({ id, institute, course, branch, year, score , logo}) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={year}
            iconStyle={{ background: "#6D67E4", color: "#fff" }}
            icon={<TbSchool />}
            key={id}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-[#6D67E4]">
              {course}
            </h3>

            <h4 className="vertical-timeline-element-subtitle text-gray-600">
              {branch}
            </h4>
            <div className="float-left pr-4 pt-2">
              <img src={logo} alt="bits" className="w-10 mx-auto mt-3" />
            </div>
            <div>
              <p className="vertical-timeline-element-subtitle text-slate-900">
                {institute}
              </p>
            </div>
            <div>
              <p className="vertical-timeline-element-subtitle text-indigo-500">
                CGPA: {score}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    </section>
  );
}
export default Education;
