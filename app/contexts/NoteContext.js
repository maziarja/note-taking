"use client";
import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newTag, setNewTag] = useState([]);
  return (
    <NoteContext.Provider
      value={{
        newTitle,
        setNewTitle,
        newContent,
        setNewContent,
        newTag,
        setNewTag,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

function useNote() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("Note context was used outside of note provider");
  return context;
}

export { NoteProvider, useNote };
