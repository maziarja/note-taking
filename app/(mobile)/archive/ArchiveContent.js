import CreateNewNoteButton from "@/app/_components/CreateNewNoteButton";
import Notes from "@/app/_components/Notes";
import Link from "next/link";

function ArchiveContent({ archivedNotes }) {
  return (
    <div>
      <h2 className="text-preset-1 mb-2 text-neutral-950">Archived Notes</h2>
      <p className="text-preset-5 mb-4 text-neutral-700">
        All your archived notes are stored here. You can restore or delete them
        anytime.
      </p>
      {archivedNotes.length > 0 ? (
        <Notes notes={archivedNotes} />
      ) : (
        <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-950">
            No notes have been archived yet. Move notes here for safekeeping, or
            <Link className="underline" href="/createNote">
              {" "}
              create a new note.
            </Link>
          </p>
        </div>
      )}
      <CreateNewNoteButton />
    </div>
  );
}

export default ArchiveContent;
