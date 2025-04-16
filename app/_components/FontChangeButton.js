"use client";

import { useFont } from "../contexts/FontContext";

function FontChangeButton() {
  const { fontState, setFont, setFontState } = useFont();
  function handleClick() {
    setFont(fontState);
    setFontState(fontState);
    if (typeof window === "undefined") return;
    window.localStorage.setItem("font", JSON.stringify(fontState));
  }
  return (
    <button
      onClick={handleClick}
      className="text-preset-4 ml-auto cursor-pointer rounded-lg bg-blue-500 px-4 py-3 text-[#fff]"
    >
      Apply Changes
    </button>
  );
}

export default FontChangeButton;
