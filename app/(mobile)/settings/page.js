import SettingsPage from "@/app/_components/SettingsPage";

export const metadata = {
  title: "Settings",
};

async function page() {
  return (
    <>
      <h2 className="text-preset-1 mb-4 text-neutral-950">Settings</h2>
      <SettingsPage />
    </>
  );
}

export default page;
