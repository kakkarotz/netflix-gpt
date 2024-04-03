import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supportedLanguages } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-50 px-10 py-6 bg-gradient-to-b from from-black w-full flex justify-between border-red-700">
      <img className="w-40" src={LOGO} alt="logo" />
      <div className="flex gap-2">
        {showGptSearch && (
          <select
            className="px-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {showGptSearch ? "HomePage" : "GPT Search"}
        </button>
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
