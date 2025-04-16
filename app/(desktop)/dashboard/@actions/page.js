import { getNoteById } from "@/app/_lib/data-service";
import ActionContent from "./ActionContent";
import { auth } from "@/app/_lib/auth";

async function Page({ searchParams }) {
  const session = await auth();
  const { noteId } = await searchParams;
  if (!noteId) return;
  const note = await getNoteById(noteId, session.user.id);
  return (
    <div className="bg-neutral-0 mr-8">
      <ActionContent note={note} />
    </div>
  );
}

export default Page;
