"use client";
import { useDesktop } from "@/app/contexts/DesktopContext";
import ArchivedIcon from "@/app/icons/ArchivedIcon";
import HomeIcon from "@/app/icons/HomeIcon";
import RightArrow from "@/app/icons/RightArrow";
import TagIcon from "@/app/icons/TagIcon";
import { useRouter, useSearchParams } from "next/navigation";

function SidebarContent({ uniqueTags }) {
  const { nav, setNav, setShowCreateNote, setShowSettings, setSettingState } =
    useDesktop();
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tagName");

  const router = useRouter();
  return (
    <>
      <div>
        <div className={`mb-2 border-b border-neutral-200 pb-2`}>
          <button
            onClick={() => {
              setNav("allNotes");
              setShowCreateNote(false);
              setShowSettings(false);
              setSettingState("");
              router.push("/dashboard");
            }}
            className={`bg-neutral-0 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[10px] ${nav === "allNotes" && "bg-neutral-100"}`}
          >
            <HomeIcon />
            <p className="text-preset-4 text-neutral-700">All Notes</p>
            {nav === "allNotes" && <RightArrow />}
          </button>
          <button
            onClick={() => {
              setNav("archivedNotes");
              router.push("/dashboard");
              setShowCreateNote(false);
              setShowSettings(false);
              setSettingState("");
            }}
            className={`bg-neutral-0 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[10px] ${nav === "archivedNotes" && "bg-neutral-100"}`}
          >
            <ArchivedIcon />
            <p className="text-preset-4 text-neutral-700">Archived Notes</p>
            {nav === "archivedNotes" && <RightArrow />}
          </button>
        </div>
      </div>
      <p className="text-preset-4 mb-2 text-neutral-500">Tags</p>

      {uniqueTags.map((tag) => {
        return (
          <div
            onClick={() => {
              setNav("tagNotes");
              router.push(`/dashboard?tagName=${tag}`);
              setShowCreateNote(false);
              setShowSettings(false);
              setSettingState("");
            }}
            key={tag}
            className={`bg-neutral-0 flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-[10px] ${tagName === tag && "bg-neutral-100"}`}
          >
            <TagIcon tag={tag} tagName={tagName} />
            <p className="text-preset-4 text-neutral-700">{tag}</p>
            {tagName === tag && <RightArrow />}
          </div>
        );
      })}
    </>
  );
}

export default SidebarContent;
