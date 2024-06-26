import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/3">{overview}</p>
      <div>
        <button className=" text-black bg-white p-2 px-6 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-50">
          <FaPlay className="inline-block mr-2" />
          Play
        </button>
        <button className="mx-2 text-white bg-gray-500 p-2 px-6 text-lg bg-opacity-50 rounded-lg">
          <FiInfo className="inline-block mr-2" size={22} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
