"use client";

import { useTransition } from "react";
import Link from "next/link";
import { createNewNoteAction } from "../_lib/action";
import { redirect } from "next/navigation";

function CreateNote() {
  const [isPending, startTransition] = useTransition();

  function handleCreateNewNoteAction(formData) {
    startTransition(async () => {
      const result = await createNewNoteAction(formData);
      if (result) redirect("/");
    });
  }

  return (
    <div>
      <form action={handleCreateNewNoteAction}>
        <div className="mb-4 flex border-b border-neutral-200 pb-3">
          <Link href={"/"} className="mr-auto flex cursor-pointer items-center">
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
            <p className="text-preset-6 text-neutral-600">Go Back</p>
          </Link>

          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-preset-6 text-neutral-600">
              Cancel
            </Link>
            <button className="text-preset-6 text-blue-500">
              {!isPending ? "Save Note" : "Saving..."}
            </button>
          </div>
        </div>

        <textarea
          name="title"
          placeholder="Enter a title..."
          className="text-preset-2 field-sizing-content w-full resize-none text-neutral-950 outline-0 sm:text-[24px]"
          required
        />
        <div className="mb-3 flex flex-col gap-3 border-b border-neutral-200 py-4">
          <div className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_4fr]">
            <div className="flex gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="var(--color-neutral-700)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                  clipRule="evenodd"
                />
                <path
                  stroke="var(--color-neutral-700)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-preset-6 text-neutral-700 sm:text-[14px]">
                Tags
              </p>
            </div>
            <div className="flex gap-[2px]">
              <textarea
                required
                name="tags"
                className="text-preset-6 w-full resize-none text-neutral-700 outline-0 sm:text-[14px]"
                type="text"
                placeholder="Add tags seperated by commas or space (e.g. Work, Planning)"
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr] items-center sm:grid-cols-[1fr_4fr]">
            <div className="flex items-center gap-[6px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2505 3.75C7.69378 3.75 4.00049 7.44329 4.00049 12C4.00049 16.5558 7.69384 20.25 12.2505 20.25C16.8072 20.25 20.5005 16.5558 20.5005 12C20.5005 7.44329 16.8072 3.75 12.2505 3.75ZM2.50049 12C2.50049 6.61487 6.86536 2.25 12.2505 2.25C17.6356 2.25 22.0005 6.61487 22.0005 12C22.0005 17.3841 17.6357 21.75 12.2505 21.75C6.8653 21.75 2.50049 17.3841 2.50049 12Z"
                  fill="var(--color-neutral-700)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9224 7.82666C12.3366 7.82666 12.6724 8.16245 12.6724 8.57666V12.2493L15.4819 13.9283C15.8375 14.1408 15.9535 14.6013 15.741 14.9569C15.5285 15.3124 15.068 15.4284 14.7124 15.2159L11.5376 13.3186C11.3111 13.1832 11.1724 12.9388 11.1724 12.6748V8.57666C11.1724 8.16245 11.5082 7.82666 11.9224 7.82666Z"
                  fill="var(--color-neutral-700)"
                />
              </svg>
              <p className="text-preset-6 text-neutral-700 sm:text-[14px]">
                Last edited
              </p>
            </div>
            <input
              disabled
              className="text-preset-6 text-neutral-700 outline-0 sm:text-[14px]"
              type="text"
              placeholder="Not yet saved"
            />
          </div>
        </div>

        <textarea
          required
          name="content"
          className="text-preset-6 field-sizing-content h-[350px] w-full resize-none whitespace-pre-line text-neutral-700 outline-0 sm:text-[14px]"
          type="text"
          placeholder="Start typing your note here..."
        />
      </form>
    </div>
  );
}

export default CreateNote;
