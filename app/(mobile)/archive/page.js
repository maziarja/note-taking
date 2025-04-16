import { auth } from "@/app/_lib/auth";
import { getNoteByArchive } from "@/app/_lib/data-service";
import ArchiveContent from "./ArchiveContent";

export const metadata = {
  title: "Archive",
};
async function Page() {
  const session = await auth();
  const archivedNotes = await getNoteByArchive(session.user.id);
  return <ArchiveContent archivedNotes={archivedNotes} />;
}

export default Page;
