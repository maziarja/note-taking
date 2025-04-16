"use client";
import DesktopNotesMain from "@/app/_components/DesktopNotesMain";
import { useDesktop } from "@/app/contexts/DesktopContext";
import { useRouter } from "next/navigation";

function MainTagsContent({ notes, tagName }) {
  const { setShowCreateNote, setNav } = useDesktop();
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          setShowCreateNote(true);
          setNav("allNotes");
          router.push("/dashboard");
        }}
        className="text-preset-4 mb-3 cursor-pointer rounded-lg bg-blue-500 px-4 py-3 text-[#fff]"
      >
        + Create New Note
      </button>
      <p className="text-preset-5 text-neutral-700">
        All notes with the{" "}
        <span className="text-neutral-950">&quot;{tagName}&quot;</span> tag are
        shown here.
      </p>
      <DesktopNotesMain notes={notes} />
    </>
  );
}

export default MainTagsContent;
