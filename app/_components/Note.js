"use client";
import Link from "next/link";
import { formattedDate } from "../_lib/data-service";
import Tag from "./Tag";
import { usePathname } from "next/navigation";

function Note({ note }) {
  const pathname = usePathname();
  const { title, tags, lastEdited, id } = note;
  return (
    <Link
      className="border-b-1 border-neutral-200 pb-1 last:border-b-0"
      href={`/${note.id}?from=${pathname}`}
    >
      <div className="flex cursor-pointer flex-col gap-3 p-2">
        <p className="text-preset-3 text-neutral-950">{title}</p>
        <div className="flex gap-1">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <p className="text-preset-6 text-neutral-700">
          {formattedDate(lastEdited, false)}
        </p>
      </div>
    </Link>
  );
}

export default Note;
