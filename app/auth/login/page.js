import GoogleSigninButton from "@/app/_components/GoogleSigninButton";
import LoginForm from "@/app/_components/LoginForm";
import Logo from "@/app/_components/Logo";
import Link from "next/link";

export const metadata = {
  title: "Login",
};

function page() {
  return (
    <div className="bg-neutral-0 flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <Logo />
      <div className="space-y-2 text-center">
        <h2 className="text-preset-1 text-neutral-950">Welcome to Note</h2>
        <p className="text-preset-5 text-neutral-600">
          Please log in to continue
        </p>
      </div>
      <div className="w-full self-start">
        <LoginForm />
        <div className="mt-4 border-t border-neutral-200 text-center">
          <p className="text-preset-5 mt-6 text-neutral-600">Or log in with:</p>
          <GoogleSigninButton />
          <div className="mt-4 border-t border-neutral-200"></div>
        </div>
        <p className="text-preset-5 mt-4 text-center text-neutral-600">
          No account yet?{" "}
          <Link
            href="/auth/signup"
            className="cursor-pointer hover:text-blue-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
