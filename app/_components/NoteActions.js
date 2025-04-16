"use client";

import { useNote } from "../contexts/NoteContext";
import {
  archiveNote,
  deleteNote,
  restoreNote,
  updateNoteAction,
} from "../_lib/action";
import { useState, useTransition } from "react";
import { formattedDate, formattedTags } from "../_lib/data-service";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "./Modal";
import toast from "react-hot-toast";
import Toast from "./Toast";
import { useTheme } from "../contexts/ThemeContext";

function NoteActions({ noteId, isArchived }) {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const cancelModal1 = () => setShowModal1(false);
  const cancelModal2 = () => setShowModal2(false);
  const searchParams = useSearchParams();
  const prevPage = searchParams.get("from");
  const router = useRouter();
  const { newTitle, newContent, newTag } = useNote();
  const [isPending, startTransition] = useTransition();
  const { darkMode } = useTheme();

  function handleSaveNote() {
    const tags = formattedTags(newTag);
    const newNote = {
      title: newTitle,
      content: newContent,
      tags,
      lastEdited: formattedDate(new Date()),
    };
    startTransition(async () => {
      const result = await updateNoteAction(newNote, noteId);
      if (result)
        toast.success(
          <Toast
            onClick={() => toast.dismiss()}
            title={"Note saved successfully!"}
          />,
          {
            duration: 3000,
            style: {
              backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
            },
          },
        );
    });
  }

  async function handleDeleteNote() {
    const result = await deleteNote(noteId);
    router.push(prevPage);
    if (result) {
      setShowModal1(false);
      toast.success(
        <Toast
          onClick={() => toast.dismiss()}
          title={"Note permanently deleted."}
        />,
        {
          duration: 3000,
          style: {
            backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
          },
        },
      );
    }
  }

  async function handleArchiveNote() {
    const result = await archiveNote(noteId);
    if (result) setShowModal2(false);
    if (result)
      toast.success(
        <Toast
          onClick={() => toast.dismiss()}
          title={"Note archived."}
          link={"/archive"}
          linkDescription={"Archived Notes"}
        />,
        {
          duration: 3000,
          style: {
            backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
          },
        },
      );
  }

  async function handleRestoreNote() {
    const result = await restoreNote(noteId);
    if (result)
      toast.success(
        <Toast
          onClick={() => toast.dismiss()}
          title={"Note restored to active notes."}
          link={"/"}
          linkDescription={"All Notes"}
        />,
        {
          duration: 3000,
          style: {
            backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
          },
        },
      );
  }

  return (
    <>
      {showModal1 && (
        <Modal
          cancelModal={cancelModal1}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
              viewBox="0 0 24 25"
            >
              <path
                className="stroke-neutral-950"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
              />
            </svg>
          }
          title={"Delete Note"}
          onClick={handleDeleteNote}
        >
          Are you sure you want to permanently delete this note? This action
          cannot be undone.
        </Modal>
      )}

      {showModal2 && (
        <Modal
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="stroke-neutral-950"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
              />
              <path
                className="stroke-neutral-950"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
              />
            </svg>
          }
          cancelModal={cancelModal2}
          title={"Archive Note"}
          onClick={handleArchiveNote}
        >
          Are you sure you want to archive this note? You can find it in the
          Archived Notes section and restore it anytime
        </Modal>
      )}
      <div className="mb-4 flex border-b border-neutral-200 pb-3">
        <button
          onClick={() => router.push(prevPage)}
          className="mr-auto flex cursor-pointer items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-neutral-600"
              fillRule="evenodd"
              d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-preset-5 text-neutral-600">Go Back</p>
        </button>
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => setShowModal1(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 25"
            >
              <path
                className="stroke-neutral-600"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
              />
            </svg>
          </button>
          {!isArchived ? (
            <button onClick={() => setShowModal2(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="stroke-neutral-600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                />
                <path
                  className="stroke-neutral-600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                />
              </svg>
            </button>
          ) : (
            <button onClick={handleRestoreNote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-neutral-600"
                  fillRule="evenodd"
                  d="M3.708 7.404a.75.75 0 0 1 .983.398l1.316 3.114L9.1 9.608a.75.75 0 0 1 .584 1.382L5.9 12.59a.75.75 0 0 1-.983-.4L3.309 8.387a.75.75 0 0 1 .4-.982Z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-neutral-600"
                  fillRule="evenodd"
                  d="M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622a7.838 7.838 0 0 1 7.835 7.835 7.833 7.833 0 0 1-7.835 7.835 7.843 7.843 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.343 6.343 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.339 6.339 0 0 0-6.335-6.335Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <button
            onClick={() => router.push(prevPage)}
            className="text-preset-5 text-neutral-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveNote}
            className="text-preset-5 text-blue-500"
          >
            {!isPending ? "Save Note" : "Saving..."}
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteActions;
