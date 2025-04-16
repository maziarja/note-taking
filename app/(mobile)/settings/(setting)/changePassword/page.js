import ChangePasswordForm from "@/app/_components/ChangePasswordForm";

export const metadata = {
  title: "Change Password",
};
function page() {
  return (
    <div>
      <h2 className="text-preset-1 mb-5 text-neutral-950">Change Password</h2>
      <ChangePasswordForm />
    </div>
  );
}

export default page;
