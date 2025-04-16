"use client";

import { useEffect } from "react";
import { useNote } from "../contexts/NoteContext";

function NoteTitle({ title }) {
  const { newTitle, setNewTitle } = useNote();
  useEffect(
    function () {
      setNewTitle(title);
    },
    [setNewTitle, title],
  );
  return (
    <textarea
      className="text-preset-2 field-sizing-content w-full resize-none text-neutral-950 outline-0 sm:text-[24px]"
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
    />
  );
}

export default NoteTitle;
