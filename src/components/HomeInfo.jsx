import { render } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons'

import React from "react";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box flex flex-col items-center">
      <p className="font-medium sm:text-xl text-center mb-4">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn mt-4">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
);
  
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span className="font-semibold">Maggie</span>,
      <br />A 3rd year CS student @ UWaterloo
    </h1>
  ),
  2: (<InfoBox text="Did X experience" link="/about" btnText="Learn more" />),
  3: (<InfoBox text="Did X experience" link="/about" btnText="Learn more" />),
  4: (<InfoBox text="Dix X and y sersiupoisdf?" link="/contact" btnText="Wanna chat?" />),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
