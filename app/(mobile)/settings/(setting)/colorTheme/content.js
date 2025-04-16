import DarkMode from "@/app/_components/DarkMode";
import LightMode from "@/app/_components/LightMode";
import SystemMode from "@/app/_components/SystemMode";
import ThemeChangeButton from "@/app/_components/ThemeChangeButton";
function ColorThemeContent() {
  return (
    <div className="flex flex-col">
      <h2 className="text-preset-1 mb-2 text-neutral-950">Color theme</h2>
      <p className="text-preset-5 mb-5 text-neutral-700">
        Choose your color theme:
      </p>
      <div className="mb-5 flex flex-col gap-4">
        <LightMode />
        <DarkMode />
        <SystemMode />
      </div>
      <ThemeChangeButton />
    </div>
  );
}

export default ColorThemeContent;
