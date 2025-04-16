"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { formattedDate } from "../_lib/data-service";
import Tag from "./Tag";
import { useDesktop } from "../contexts/DesktopContext";

function DesktopNotesMain({ notes }) {
  const { setShowCreateNote } = useDesktop();
  const router = useRouter();
  const searchParams = useSearchParams();
  const noteId = searchParams.get("noteId");
  const tagName = searchParams.get("tagName");

  return (
    <>
      {notes.map((note) => (
        <div
          onClick={() => {
            router.push(
              `/dashboard?${tagName !== null ? `tagName=${tagName}&noteId=${note.id}` : `noteId=${note.id}`}`,
            );
            setShowCreateNote(false);
          }}
          key={note.id}
          className={`rounded-md border-b-1 border-neutral-100 p-2 last:border-b-0 ${+noteId === note.id && "bg-neutral-100"} `}
        >
          <div className={`flex cursor-pointer flex-col gap-3 p-2`}>
            <p className="text-preset-3 text-neutral-950">{note.title}</p>
            <div className="flex gap-1">
              {note.tags?.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <p className="text-preset-6 text-neutral-700">
              {formattedDate(note.lastEdited, false)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default DesktopNotesMain;
