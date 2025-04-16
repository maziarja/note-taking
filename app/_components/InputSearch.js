"use client";

import { useState } from "react";
import Notes from "./Notes";
import Link from "next/link";
import { useIsDesktop } from "../contexts/useIsDesktop";

function InputSearch({ notes }) {
  const [query, setQuery] = useState("");

  const filterNotes = query
    ? notes.filter(
        (note) =>
          note.content.toLowerCase().includes(query.toLowerCase()) ||
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase()),
          ),
      )
    : [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-2 rounded-lg border-1 border-neutral-300 bg-neutral-50 px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="var(--color-neutral-500)"
            fillRule="evenodd"
            d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
            clipRule="evenodd"
          />
          <path
            fill="var(--color-neutral-500)"
            fillRule="evenodd"
            d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="text-preset-5 w-full text-neutral-950 outline-0"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search by title, content, or tags..."
        />
      </div>
      {query && (
        <p className="text-preset-5 text-neutral-700">
          All notes matching &quot;{query}&quot; are displayed below.
        </p>
      )}
      <Notes notes={filterNotes} />
      {filterNotes.length === 0 && query !== "" && (
        <div className="rounded-lg bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-700">
            No notes match your search. Try a different keyword or{" "}
            <Link className="underline" href="/createNote">
              create a new note.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default InputSearch;
