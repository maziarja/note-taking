"use client";

import { useEffect } from "react";
import { useFont } from "../contexts/FontContext";
import { useIsDesktop } from "../contexts/useIsDesktop";
import { usePathname } from "next/navigation";
import SettingsPage from "./SettingsPage";

function ClientWrapper({ children, sourceCodePro, notoSerif, inter }) {
  const { font, setFont, setFontState } = useFont();

  useEffect(() => {
    const storedValue = window.localStorage.getItem("font");
    const font = storedValue ? JSON.parse(storedValue) : "san-serif";
    setFontState(font);
    setFont(font);
  }, [setFont, setFontState]);

  return (
    <div
      className={`${font === "monospace" && sourceCodePro.className} ${font === "sans-serif" && inter.className} ${font === "serif" && notoSerif.className}`}
    >
      {children}
    </div>
  );
}

export default ClientWrapper;
