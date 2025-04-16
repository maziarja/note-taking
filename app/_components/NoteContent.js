"use client";
import { useEffect } from "react";
import { useNote } from "../contexts/NoteContext";

function NoteContent({ content }) {
  const { newContent, setNewContent } = useNote();

  useEffect(
    function () {
      setNewContent(content);
    },
    [content, setNewContent],
  );

  return (
    <textarea
      className="text-preset-6 field-sizing-content h-[350px] w-full resize-none pt-3 whitespace-pre-line text-neutral-800 outline-0 sm:text-[14px] lg:h-[600px]"
      value={newContent.replace(/\\n/g, "\n")}
      onChange={(e) => setNewContent(e.target.value)}
    />
  );
}

export default NoteContent;
