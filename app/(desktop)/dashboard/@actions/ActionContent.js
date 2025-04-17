"use client";

import Modal from "@/app/_components/Modal";
import Toast from "@/app/_components/Toast";
import { archiveNote, deleteNote, restoreNote } from "@/app/_lib/action";
import { useTheme } from "@/app/contexts/ThemeContext";
import ArchivedIcon from "@/app/icons/ArchivedIcon";
import DeleteIcon from "@/app/icons/DeleteIcon";
import RestoreIcon from "@/app/icons/RestoreIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function ActionContent({ note }) {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const cancelModal1 = () => setShowModal1(false);
  const cancelModal2 = () => setShowModal2(false);
  const { darkMode } = useTheme();
  const router = useRouter();

  async function handleArchiveNote() {
    const result = await archiveNote(note.id);
    if (result) setShowModal2(false);
    if (result)
      toast.success(
        <Toast onClick={() => toast.dismiss()} title={"Note archived."} />,
        {
          duration: 3000,
          style: {
            backgroundColor: darkMode ? "#191b25" : "#f5f7fa",
          },
        },
      );
  }

  async function handleDeleteNote() {
    const result = await deleteNote(note.id);
    router.push("/dashboard");
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

  async function handleRestoreNote() {
    const result = await restoreNote(note.id);
    if (result)
      toast.success(
        <Toast
          onClick={() => toast.dismiss()}
          title={"Note restored to active notes."}
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
      <div className="flex flex-col justify-center gap-3 py-5 pl-4">
        {note.isArchived ? (
          <button
            onClick={handleRestoreNote}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-1 border-neutral-300 px-4 py-3"
          >
            <RestoreIcon />
            <p className="text-preset-4 text-neutral-950">Restore Note</p>
          </button>
        ) : (
          <button
            onClick={() => setShowModal2(true)}
            className="flex cursor-pointer items-center gap-2 rounded-lg border-1 border-neutral-300 px-4 py-3"
          >
            <ArchivedIcon />
            <p className="text-preset-4 text-neutral-950">Archive Note</p>
          </button>
        )}
        <button
          onClick={() => setShowModal1(true)}
          className="flex cursor-pointer items-center gap-2 rounded-lg border-1 border-neutral-300 px-4 py-3"
        >
          <DeleteIcon />
          <p className="text-preset-4 text-neutral-950">Delete Note</p>
        </button>
      </div>
    </>
  );
}

export default ActionContent;
