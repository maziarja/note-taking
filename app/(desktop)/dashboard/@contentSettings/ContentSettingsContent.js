"use client";
import ColorThemeContent from "@/app/(mobile)/settings/(setting)/colorTheme/content";
import ChangePasswordForm from "@/app/_components/ChangePasswordForm";
import FontThemeContent from "@/app/_components/FontThemeContent";
import { useDesktop } from "@/app/contexts/DesktopContext";

function ContentSettingsContent() {
  const { settingState } = useDesktop();

  return (
    <div>
      {settingState === "colorTheme" && <ColorThemeContent />}
      {settingState === "fontTheme" && <FontThemeContent />}
      {settingState === "changePassword" && <ChangePasswordForm />}
    </div>
  );
}

export default ContentSettingsContent;
