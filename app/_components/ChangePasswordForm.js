"use client";
import Image from "next/image";
import IconShowPassword from "@/public/images/icon-show-password.svg";
import IconHidePassword from "@/public/images/icon-hide-password.svg";
import { useState } from "react";
import { changePassword } from "../_lib/action";
import toast from "react-hot-toast";
import Toast from "./Toast";
import { useTheme } from "../contexts/ThemeContext";

function ChangePasswordForm() {
  const { darkMode } = useTheme();
  const [showPassWord1, setShowPassword1] = useState(false);
  const [showPassWord2, setShowPassword2] = useState(false);
  const [showPassWord3, setShowPassword3] = useState(false);

  async function handleChangePassword(formData) {
    const result = await changePassword(formData);
    if (result?.error)
      toast.error(<Toast title={result.error} />, {
        duration: 5000,
        style: {
          backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
        },
      });
    if (result?.success)
      toast.success(
        <Toast title={"Your password has been changed successfully."} />,
        {
          duration: 3000,
          style: {
            backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
          },
        },
      );
  }
  return (
    <form action={handleChangePassword} className="flex flex-col">
      <div className="relative mb-6 flex flex-col">
        <label
          htmlFor="oldPassword"
          className="text-preset-4 mb-[6px] text-neutral-950"
        >
          Old Password
        </label>
        <input
          name="oldPassword"
          id="oldPassword"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type={!showPassWord1 ? "password" : "text"}
        />
        <div onClick={() => setShowPassword1((s) => !s)}>
          <Image
            className="absolute right-3 bottom-3 cursor-pointer"
            width={20}
            height={20}
            src={!showPassWord1 ? IconShowPassword : IconHidePassword}
            alt="show password icon"
          />
        </div>
      </div>
      <div className="relative flex flex-col">
        <label
          htmlFor="newPassword"
          className="text-preset-4 mb-[6px] text-neutral-950"
        >
          New Password
        </label>
        <input
          name="newPassword"
          id="newPassword"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type={!showPassWord2 ? "password" : "text"}
        />
        <div onClick={() => setShowPassword2((s) => !s)}>
          <Image
            className="absolute right-3 bottom-3 cursor-pointer"
            width={20}
            height={20}
            src={!showPassWord2 ? IconShowPassword : IconHidePassword}
            alt="show password icon"
          />
        </div>
      </div>
      <div className="mt-[6px] mb-6 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="stroke-neutral-500"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
          />
        </svg>
        <p className="text-xs leading-[140%] font-normal text-neutral-600">
          At least 6 characters
        </p>
      </div>
      <div className="relative mb-5 flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="text-preset-4 mb-[6px] text-neutral-950"
        >
          Confirm New Password
        </label>
        <input
          name="confirmPassword"
          id="confirmPassword"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type={!showPassWord3 ? "password" : "text"}
        />

        <div onClick={() => setShowPassword3((s) => !s)}>
          <Image
            className="absolute right-3 bottom-3 cursor-pointer"
            width={20}
            height={20}
            src={!showPassWord3 ? IconShowPassword : IconHidePassword}
            alt="show password icon"
          />
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <button className="text-preset-4 rounded-lg bg-blue-500 px-4 py-3 text-[#fff]">
          Save Password
        </button>
      </div>
    </form>
  );
}

export default ChangePasswordForm;
