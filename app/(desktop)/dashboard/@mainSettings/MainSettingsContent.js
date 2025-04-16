"use client";
import { signOutAction } from "@/app/_lib/action";
import { useDesktop } from "@/app/contexts/DesktopContext";
import FontIcon from "@/app/icons/FontIcon";
import LockIcon from "@/app/icons/LockIcon";
import LogoutIcon from "@/app/icons/LogoutIcon";
import RightArrow from "@/app/icons/RightArrow";
import SunIcon from "@/app/icons/SunIcon";

function MainSettingsContent() {
  const { settingState, setSettingState, setShowSettings, setNav } =
    useDesktop();
  return (
    <div>
      <div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSettingState("colorTheme")}
            className={`flex cursor-pointer items-center gap-2 rounded-md ${settingState === "colorTheme" && "bg-neutral-100"} p-2`}
          >
            <SunIcon />
            <p className="text-preset-4 cursor-pointer text-neutral-950">
              Color Theme
            </p>
            {settingState === "colorTheme" && <RightArrow />}
          </button>
          <button
            onClick={() => setSettingState("fontTheme")}
            className={`flex cursor-pointer items-center gap-2 rounded-md ${settingState === "fontTheme" && "bg-neutral-100"} p-2`}
          >
            <FontIcon />
            <p className="text-preset-4 cursor-pointer text-neutral-700">
              Font Theme
            </p>
            {settingState === "fontTheme" && <RightArrow />}
          </button>
          <button
            onClick={() => setSettingState("changePassword")}
            className={`flex cursor-pointer items-center gap-2 rounded-md ${settingState === "changePassword" && "bg-neutral-100"} p-2`}
          >
            <LockIcon />
            <p className="text-preset-4 cursor-pointer text-neutral-700">
              Change Password
            </p>
            {settingState === "changePassword" && <RightArrow />}
          </button>
          <button
            onClick={() => {
              signOutAction();
              setShowSettings(false);
              setNav("allNotes");
            }}
            className={`flex cursor-pointer items-center gap-2 rounded-md p-2`}
          >
            <LogoutIcon />
            <p className="text-preset-4 cursor-pointer text-neutral-700">
              Logout
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSettingsContent;
