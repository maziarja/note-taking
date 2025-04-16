import Button from "@/app/_components/Button";
import Logo from "@/app/_components/Logo";
import { sendResetPasswordLinkAction } from "@/app/_lib/action";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Forgot Password",
};

async function handleSendResetPasswordLink(formData) {
  "use server";
  const result = await sendResetPasswordLinkAction(formData);
  if (result?.error) throw new Error(result.error);
  redirect("/auth/login");
}

function page() {
  return (
    <div className="bg-neutral-0 flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <Logo />
      <div className="text-center">
        <h2 className="text-preset-1 mb-2 text-neutral-950">
          Forgotten your password?
        </h2>
        <p className="text-preset-5 text-neutral-600">
          Enter your email below, and we&apos;ll send you a link to reset it.
        </p>
      </div>
      <form action={handleSendResetPasswordLink} className="grid w-full gap-4">
        <div className="grid self-start">
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
        </div>
        <Button className="">Send Reset Link</Button>
      </form>
    </div>
  );
}

export default page;
