import { getNoteById } from "@/app/_lib/data-service";
import ContentContent from "./ContentContent";
import { auth } from "@/app/_lib/auth";

async function Page({ searchParams }) {
  const session = await auth();
  const { noteId } = await searchParams;
  if (!noteId) return;
  const notes = await getNoteById(noteId, session.user.id);
  return (
    <div className="grid h-dvh border-r-1 border-neutral-200 px-6 py-5">
      <ContentContent notes={notes} />
    </div>
  );
}

export default Page;
