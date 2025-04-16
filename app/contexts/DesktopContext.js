"use client";
const { createContext, useState, useContext } = require("react");

const DesktopContext = createContext();

function DesktopProvider({ children }) {
  const [nav, setNav] = useState("allNotes");
  const [query, setQuery] = useState("");
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settingState, setSettingState] = useState("colorTheme");
  return (
    <DesktopContext.Provider
      value={{
        nav,
        setNav,
        query,
        setQuery,
        showCreateNote,
        setShowCreateNote,
        setShowSettings,
        showSettings,
        settingState,
        setSettingState,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

function useDesktop() {
  const context = useContext(DesktopContext);
  if (context === undefined)
    throw new Error("Desktop context was used outside of Desktop provider");
  return context;
}

export { useDesktop, DesktopProvider };
