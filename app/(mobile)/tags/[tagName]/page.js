import CreateNewNoteButton from "@/app/_components/CreateNewNoteButton";
import Notes from "@/app/_components/Notes";
import { auth } from "@/app/_lib/auth";
import { getNotesByTags } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Tags",
};

async function Page({ params }) {
  const session = await auth();
  const { tagName } = await params;
  const notes = await getNotesByTags(session.user.id, tagName);

  return (
    <div className="flex flex-col gap-4">
      <Link href="/tags">
        <button className="mr-auto flex cursor-pointer items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--color-neutral-600)"
              fillRule="evenodd"
              d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-preset-5 text-neutral-600">Go Back</p>
        </button>
      </Link>
      <h2 className="text-preset-1 text-neutral-600">
        Notes Tagged: <span className="text-neutral-950">{tagName}</span>
      </h2>
      <p className="text-preset-5 text-neutral-700">
        All notes with the{" "}
        <span className="text-neutral-950">&quot;{tagName}&quot;</span> tag are
        shown here.
      </p>
      <Notes notes={notes} />
      <CreateNewNoteButton />
    </div>
  );
}

export default Page;
