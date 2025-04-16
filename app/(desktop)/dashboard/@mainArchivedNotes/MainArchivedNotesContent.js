"use client";
import DesktopNotesMain from "@/app/_components/DesktopNotesMain";
import { useDesktop } from "@/app/contexts/DesktopContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MainArchivedNotesContent({ archivedNotes }) {
  const { query, setShowCreateNote } = useDesktop();
  const router = useRouter();

  const archivedFilterNotes = query
    ? archivedNotes.filter(
        (note) =>
          note.content.toLowerCase().includes(query.toLowerCase()) ||
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase()),
          ),
      )
    : archivedNotes;
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
      {!query && (
        <p className="text-preset-5 mb-4 text-neutral-700">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>
      )}
      {archivedNotes.length > 0 ? (
        <DesktopNotesMain notes={archivedFilterNotes} />
      ) : (
        <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-950">
            No notes have been archived yet. Move notes here for safekeeping, or{" "}
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
      {archivedFilterNotes.length === 0 && query && (
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
    </>
  );
}

export default MainArchivedNotesContent;
