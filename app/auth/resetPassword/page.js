import Logo from "@/app/_components/Logo";
import ResetPasswordForm from "@/app/_components/ResetPasswordForm";
export const metadata = {
  title: "Reset Password",
};
function page() {
  return (
    <div className="bg-neutral-0 flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-3.5 py-10 sm:px-8 sm:py-12 lg:px-12">
      <Logo />
      <div className="text-center">
        <h2 className="text-preset-1 mb-2 text-neutral-950">
          Reset Your Password
        </h2>
        <p className="text-preset-5 text-neutral-600">
          Choose a new password to secure your account.
        </p>
      </div>
      <div className="w-full">
        <ResetPasswordForm />
      </div>
    </div>
  );
}

export default page;
