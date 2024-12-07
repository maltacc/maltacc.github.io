import React from "react";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hi! I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Maggie,
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          a software engineering intern and 3rd year computer science student @
          UWaterloo.
        </p>
      </div>

      {/* <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div> */}
    </section>
  );
};

export default About;
