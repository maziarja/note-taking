"use client";

import DesktopNotesMain from "@/app/_components/DesktopNotesMain";
import { useDesktop } from "@/app/contexts/DesktopContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MainNotesContent({ notes }) {
  const { query, setShowCreateNote } = useDesktop();
  const router = useRouter();

  const filterNotes = query
    ? notes.filter(
        (note) =>
          note.content.toLowerCase().includes(query.toLowerCase()) ||
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase()),
          ),
      )
    : notes;
  return (
    <>
      <button
        onClick={() => {
          setShowCreateNote(true);
          router.push("/dashboard");
        }}
        className="text-preset-4 mb-3 cursor-pointer rounded-lg bg-blue-500 px-4 py-3 text-[#fff]"
      >
        + Create New Note
      </button>
      <DesktopNotesMain notes={filterNotes} />
      {filterNotes.length === 0 && query && (
        <div className="rounded-lg bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-700">
            No notes match your search. Try a different keyword or{" "}
            <button
              onClick={() => setShowCreateNote(true)}
              className="underline"
            >
              {" "}
              create a new note.
            </button>
          </p>
        </div>
      )}
      {filterNotes.length === 0 && !query && (
        <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-950">
            You don&apos;t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        </div>
      )}
    </>
  );
}

export default MainNotesContent;
