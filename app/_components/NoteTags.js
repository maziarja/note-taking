"use client";
import { useEffect } from "react";
import { useNote } from "../contexts/NoteContext";

function NoteTags({ tags }) {
  const { newTag, setNewTag } = useNote();

  useEffect(
    function () {
      setNewTag(tags);
    },
    [setNewTag, tags],
  );

  return (
    <input
      className="text-preset-6 w-full text-neutral-700 outline-0 sm:text-[14px]"
      type="text"
      value={typeof newTag === "object" ? newTag.join(", ") : newTag}
      onChange={(e) => setNewTag(e.target.value)}
    />
  );
}

export default NoteTags;
