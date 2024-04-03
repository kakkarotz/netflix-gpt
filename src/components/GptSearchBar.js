import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageContants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-3 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 p-2 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
