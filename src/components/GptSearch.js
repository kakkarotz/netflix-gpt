import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND} alt="background_image" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
