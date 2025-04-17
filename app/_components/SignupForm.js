"use client";

import { useState } from "react";
import IconShowPassword from "@/public/images/icon-show-password.svg";
import IconHidePassword from "@/public/images/icon-hide-password.svg";
import IconGoogle from "@/public/images/icon-google.svg";
import IconInfo from "@/public/images/icon-info.svg";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { signupAction } from "../_lib/action";
import { redirect } from "next/navigation";

function SignupForm({ children }) {
  const [showPassWord, setShowPassword] = useState(false);

  async function handleSignupAction(formData) {
    const result = await signupAction(formData);
    if (result.error)
      toast.error(
        <p className="text-preset-4 text-neutral-[#232530]">{result.error}</p>,
        {
          position: "top-center",
          style: {
            margin: "20px",
          },
        },
      );
    if (result.success) {
      toast.success(
        <p className="text-preset-4 text-neutral-[#232530]">
          Account has been created
        </p>,
        {
          position: "top-center",
          style: {
            margin: "20px",
          },
        },
      );

      redirect("/auth/login");
    }
  }
  return (
    <form action={handleSignupAction} className="grid gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-preset-4 mb-[6px] text-neutral-950"
        >
          Email Address
        </label>
        <input
          name="email"
          id="email"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type="email"
          placeholder="email@example.com"
        />
      </div>
      <div className="relative flex flex-col">
        <div className="flex">
          <label
            htmlFor="password"
            className="text-preset-4 mb-[6px] text-neutral-950"
          >
            Password
          </label>
        </div>

        <input
          name="password"
          id="password"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type={!showPassWord ? "password" : "text"}
        />
        <div onClick={() => setShowPassword((s) => !s)}>
          <Image
            className="absolute right-3 bottom-8.5 cursor-pointer"
            width={20}
            height={20}
            src={!showPassWord ? IconShowPassword : IconHidePassword}
            alt="show password icon"
          />
        </div>
        <div className="mt-[6px] flex items-center space-x-2">
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
      </div>

      {children}
      <div className="border-t border-neutral-200 text-center">
        <p className="text-preset-5 mt-6 text-neutral-600">Or log in with:</p>
        <button className="mx-auto mt-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border border-neutral-300 pt-4 pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              className="fill-neutral-950"
              fillRule="evenodd"
              d="M20.838 14.718a8.932 8.932 0 0 0 .086-2.857.558.558 0 0 0-.557-.473h-7.805a.562.562 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.572.572 0 0 0 .73-.06l1.703-1.733a.559.559 0 0 0-.046-.832 8.897 8.897 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694-.167 5.108 3.927 9.302 8.995 9.302 4.383 0 8.037-3.14 8.838-7.29Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-base font-medium tracking-[0.5px] text-neutral-950">
            Google
          </p>
        </button>
        <div className="mt-4 border-t border-neutral-200"></div>
      </div>
      <p className="text-preset-5 text-center text-neutral-600">
        Already have an account?
        <Link href="/auth/login" className="cursor-pointer hover:text-blue-500">
          {" "}
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
