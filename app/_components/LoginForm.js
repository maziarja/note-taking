"use client";
import Link from "next/link";
import Button from "./Button";
import IconShowPassword from "@/public/images/icon-show-password.svg";
import IconHidePassword from "@/public/images/icon-hide-password.svg";
import IconInfo from "@/public/images/icon-info.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import { loginWithEmailPasswordAction } from "../_lib/action";
import toast from "react-hot-toast";

function LoginForm() {
  const [showPassWord, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  async function handleLoginWithEmailPasswordAction(formData) {
    const result = await loginWithEmailPasswordAction(formData);
    if (result?.error) {
      toast.error(
        <p className="text-preset-4 text-neutral-[#232530]">{result.error}</p>,
        {
          position: "top-center",
          style: {
            margin: "20px",
          },
        },
      );
      setError(true);
    }
  }

  useEffect(
    function () {
      if (error) {
        const removeError = () => setError(false);
        const timeout = () =>
          setTimeout(function () {
            removeError();
          }, 5000);

        timeout();
        return () => clearTimeout(timeout);
      }
    },
    [error],
  );

  return (
    <form action={handleLoginWithEmailPasswordAction} className="grid gap-4">
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
          required
        />
        {error && (
          <div className="mt-[6px] flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fb3748"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
              />
            </svg>
            <p className="text-xs leading-[140%] font-normal text-red-500">
              Please enter a valid email address.
            </p>
          </div>
        )}
      </div>
      <div className="relative flex flex-col">
        <div className="flex">
          <label
            htmlFor="password"
            className="text-preset-4 mb-[6px] text-neutral-950"
          >
            Password
          </label>
          <Link
            tabIndex={-1}
            className="ml-auto text-xs leading-[140%] font-normal text-neutral-600 underline underline-offset-2 hover:text-blue-500"
            href="/auth/forgot"
          >
            Forgot
          </Link>
        </div>

        <input
          required
          name="password"
          id="password"
          className="text-preset-5 cursor-pointer rounded-lg border border-neutral-300 px-4 py-3 text-neutral-500 outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
          type={!showPassWord ? "password" : "text"}
        />
        <div onClick={() => setShowPassword((s) => !s)}>
          <Image
            className="absolute right-3 bottom-3 cursor-pointer"
            width={20}
            height={20}
            src={!showPassWord ? IconShowPassword : IconHidePassword}
            alt="show password icon"
          />
        </div>
      </div>
      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
