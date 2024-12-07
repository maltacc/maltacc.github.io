import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import Cta from '../components/Cta';

const Experience = () => {
  return (
    <section className="max-container">
      <div className="py-16">
        <h1 className="head-text">Experience</h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            a software engineering intern and 3rd year computer science student
            @ UWaterloo.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    ></img>
                  </div>
                }
                contentStyle ={{
                    borderBottom: '8px', 
                    borderStyle: 'solid', 
                    borderBottomColor: experience.iconBg, 
                    boxShadow: 'none'
                }}
                iconStyle = {{ background: experience.iconBg }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-small"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};

export default Experience;
