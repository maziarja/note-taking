"use client";

import Note from "./Note";

function Notes({ notes }) {
  if (!notes) return;
  return (
    <div>
      <div className="flex flex-col gap-[9px] lg:border-neutral-200">
        {notes.map((note) => (
          <div className={`border-b-1 border-neutral-200`} key={note.id}>
            <Note note={note} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
