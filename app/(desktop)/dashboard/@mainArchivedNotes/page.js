import { auth } from "@/app/_lib/auth";
import MainArchivedNotesContent from "./MainArchivedNotesContent";
import { getNoteByArchive } from "@/app/_lib/data-service";

async function Page() {
  const session = await auth();
  const archivedNotes = await getNoteByArchive(session.user.id);
  return (
    <div className="flex flex-col gap-1 py-5 pr-4 pl-8">
      <MainArchivedNotesContent archivedNotes={archivedNotes} />
    </div>
  );
}

export default Page;
