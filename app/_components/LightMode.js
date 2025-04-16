"use client";
import { useTheme } from "../contexts/ThemeContext";

function LightMode() {
  const { colorState, setColorState, darkMode } = useTheme();

  return (
    <div
      onClick={() => setColorState("light")}
      className={`${colorState === "light" ? "bg-neutral-100" : "bg-neutral-0"} flex cursor-pointer items-center gap-4 rounded-xl border border-neutral-200 p-4`}
    >
      <div className="bg-neutral-0 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
          />
          <path
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-[6px]">
        <p className="text-preset-4 text-neutral-950">Light Mode</p>
        <p className="text-preset-6 text-neutral-700">
          Pick a clean and classic light theme
        </p>
      </div>
      <div
        className={`ml-auto h-4 w-4 rounded-full ${colorState === "light" ? "border-4" : "border-2"} ${colorState === "light" ? "border-blue-500" : "border-neutral-300"}`}
      ></div>
    </div>
  );
}

export default LightMode;
