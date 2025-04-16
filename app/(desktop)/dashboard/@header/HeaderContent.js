"use client";
import DesktopInputSearch from "@/app/_components/DesktopInputSearch";
import { useDesktop } from "@/app/contexts/DesktopContext";
import SettingsIcon from "@/app/icons/SettingsIcon";
import { useRouter, useSearchParams } from "next/navigation";

function HeaderContent() {
  const {
    query,
    nav,
    setShowSettings,
    setNav,
    showSettings,
    setShowCreateNote,
  } = useDesktop();
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tagName");
  const router = useRouter();

  return (
    <div className="grid w-full grid-cols-2 items-center">
      {nav === "allNotes" && !query && (
        <p className="text-preset-1 text-neutral-950">All Notes</p>
      )}
      {nav === "archivedNotes" && !query && (
        <p className="text-preset-1 text-neutral-950">Archived Notes</p>
      )}
      {(nav === "allNotes" || nav === "archivedNotes") && query && (
        <p className="text-preset-1 text-neutral-600">
          Showing results for: <span className="text-neutral-950">{query}</span>
        </p>
      )}
      {nav === "tagNotes" && tagName && (
        <p className="text-preset-1 text-neutral-600">
          Notes Tagged: <span className="text-neutral-950">{tagName}</span>
        </p>
      )}
      {showSettings && (
        <p className="text-preset-1 text-neutral-950">Settings</p>
      )}
      <div className="ml-auto flex items-center gap-6">
        <DesktopInputSearch />
        <button
          onClick={() => {
            setShowSettings(true);
            setNav("");
            router.push("/dashboard");
            setShowCreateNote(false);
          }}
          className="cursor-pointer"
        >
          <SettingsIcon />
        </button>
      </div>
    </div>
  );
}

export default HeaderContent;
