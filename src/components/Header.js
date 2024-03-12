import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("DONE");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-10 py-6 bg-gradient-to-b from from-black w-full flex justify-between">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <div className="flex gap-2">
        <img src={user?.photoURL} alt="user" className="w-12" />
        <button
          className="bg-red-500 rounded-lg text-sm text-white font-bold px-2"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
