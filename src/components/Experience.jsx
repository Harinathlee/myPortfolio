import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";

//importing experience details
import { experienceData } from "./profile_data";
const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="experience"
      name="experience"
      className="w-full h-auto p-4 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            <span>My </span> <span className="text-blue-400">Experience</span>
          </p>
          <p className="pt-6 text-lg font-Open_Sans">
            My experiences are listed in chronological order below.
          </p>
        </div>
        {/* verti*/}
        <VerticalTimeline lineColor="#6D67E4">
          {experienceData.map(
            ({
              id,
              company,
              job_title,
              job_description,
              year,
              logo,
              responsibilities,
              achivements,
            }) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date={year}
                iconStyle={{ background: "#6D67E4", color: "#fff" }}
                icon={<MdWorkOutline />}
                key={id}
              >
                <div
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                  className="hover:cursor-pointer"
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

                  {showMore ? (
                    <div>
                      <div className="mt-2 pl-4">
                        <h4 className="vertical-timeline-element-subtitle text-[#6D67E4] font-semibold underline">
                          Role & Responsibilities:
                        </h4>
                        <ul>
                          {responsibilities.map((data, index) => (
                            <li key={index} className="list-disc text-black">
                              {data}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-2 pl-4">
                        <h4 className="vertical-timeline-element-subtitle text-[#6D67E4] font-semibold underline">
                          Achivements:
                        </h4>
                        <ul>
                          {achivements.map((data, index) => (
                            <li key={index} className="list-disc text-black">
                              {data}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="vertical-timeline-element-subtitle text-gray-600">
                        Click to know more
                      </p>
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
