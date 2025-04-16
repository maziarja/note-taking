"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import IconShowPassword from "@/public/images/icon-show-password.svg";
import IconHidePassword from "@/public/images/icon-hide-password.svg";
import IconInfo from "@/public/images/icon-info.svg";
import Button from "./Button";
import { updatePasswordAction } from "../_lib/action";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

function ResetPasswordForm() {
  const [showPassWord1, setShowPassword1] = useState(false);
  const [showPassWord2, setShowPassword2] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const token = hashParams.get("access_token");
      if (token) {
        setAccessToken(token);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    }
  }, []);

  async function handleUpdatePasswordAction(formData) {
    const result = await updatePasswordAction(formData);
    if (result?.error)
      toast.error(
        <p className="text-preset-4 text-neutral-[#232530]">{result.error}</p>,
        {
          position: "top-center",
          style: {
            margin: "20px",
          },
        },
      );
    if (result?.success) {
      toast.success(
        <p className="text-preset-4 text-neutral-[#232530]">
          Password is updated successfully
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
    <form action={handleUpdatePasswordAction}>
      <div className="relative flex flex-col">
        <label
          htmlFor="password"
          className="text-preset-4 mb-[6px] text-neutral-950"
        >
          New Password
        </label>
        <input
          name="password"
          id="password"
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
      <div className="mt-[6px] mb-4 flex items-center space-x-2">
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
      <div className="relative mb-4 flex flex-col">
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
          type={!showPassWord2 ? "password" : "text"}
        />
        {accessToken && (
          <input type="hidden" name="token" value={accessToken} />
        )}
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
      <div className="flex flex-col">
        <Button>Reset Password</Button>
      </div>
    </form>
  );
}

export default ResetPasswordForm;
