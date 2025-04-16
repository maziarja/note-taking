"use client";

import CreateNewNoteButton from "./CreateNewNoteButton";
import Notes from "./Notes";

function Main({ notes }) {
  return (
    <div>
      <div>
        <h2 className="text-preset-1 mb-4 text-neutral-950">All Notes</h2>
      </div>
      {notes.length > 0 ? (
        <div>
          <Notes notes={notes} />
        </div>
      ) : (
        <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-2">
          <p className="text-preset-5 text-neutral-950">
            You don&apos;t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        </div>
      )}

      <CreateNewNoteButton />
    </div>
  );
}

export default Main;
