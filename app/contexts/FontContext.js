"use client";
const { createContext, useState, useContext } = require("react");

const FontContext = createContext();

function FontProvider({ children }) {
  const [fontState, setFontState] = useState("Sans-serif");
  const [font, setFont] = useState("");
  return (
    <FontContext.Provider
      value={{
        font,
        setFont,
        fontState,
        setFontState,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

function useFont() {
  const context = useContext(FontContext);
  if (context === undefined)
    throw new Error("Font context was used outside of font provider");
  return context;
}

export { useFont, FontProvider };
