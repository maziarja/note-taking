"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function Button({ children, onClick, formAction }) {
  const { pending } = useFormStatus();
  return (
    <button
      formAction={formAction}
      disabled={pending}
      onClick={onClick}
      className="text-preset-3 cursor-pointer rounded-lg bg-blue-500 py-3 text-[#fff] outline-0 focus:ring-1 focus:ring-neutral-950 focus:ring-offset-3"
    >
      {!pending ? children : <SpinnerMini />}
    </button>
  );
}

export default Button;
