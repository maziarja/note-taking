"use client";
import { useDesktop } from "@/app/contexts/DesktopContext";
import Responsive from "../../_components/Responsive";

function Layout({
  children,
  sidebar,
  header,
  content,
  actions,
  mainNotes,
  mainArchivedNotes,
  mainTags,
  createNote,
  mainSettings,
  contentSettings,
}) {
  const { nav, showCreateNote, showSettings, settingState } = useDesktop();
  return (
    <div className="bg-neutral-0 grid grid-cols-[1fr_1fr_2fr_1fr]">
      <Responsive />
      <div className="row-span-2 border-r-1 border-neutral-200"> {sidebar}</div>
      <div className="col-start-2 h-dvh overflow-y-scroll">
        {nav === "allNotes" && mainNotes}
        {nav === "archivedNotes" && mainArchivedNotes}
        {nav === "tagNotes" && mainTags}
        {showSettings && mainSettings}
      </div>
      <div className="border-l-1 border-neutral-200">
        {!showCreateNote && content}
        {showCreateNote && createNote}
        {!showCreateNote && showSettings && settingState && contentSettings}
      </div>
      <div className="col-span-3 col-start-2 row-start-1"> {header}</div>
      <div> {actions}</div>
    </div>
  );
}

export default Layout;
