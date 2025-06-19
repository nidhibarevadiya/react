import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function Them() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button
      onClick={darkModeHandler}
      className="text-4xl p-4 rounded-full transition-all duration-300"
    >
      {dark ? <IoSunny /> : <IoMoon />}
    </button>
  );
}

export default Them;

