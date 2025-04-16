import Logo from "@/app/_components/Logo";
import SignupButton from "@/app/_components/SignupButton";
import SignupForm from "@/app/_components/SignupForm";
export const metadata = {
  title: "Sign Up",
};
function page() {
  return (
    <div className="bg-neutral-0 flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <Logo />
      <div className="space-y-2 text-center">
        <h2 className="text-preset-1 text-neutral-950">Create Your Account</h2>
        <p className="text-preset-5 text-neutral-600">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </div>
      <div className="w-full self-start">
        <SignupForm>
          <SignupButton />
        </SignupForm>
      </div>
    </div>
  );
}

export default page;
