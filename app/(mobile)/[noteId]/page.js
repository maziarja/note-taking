import NoteActions from "@/app/_components/NoteActions";
import NoteContent from "@/app/_components/NoteContent";
import NoteDetails from "@/app/_components/NoteDetails";
import NoteDetailsForMobile from "@/app/_components/NoteDetailsForMobile";
import NoteTags from "@/app/_components/NoteTags";
import NoteTitle from "@/app/_components/NoteTitle";
import { auth } from "@/app/_lib/auth";
import { formattedDate, getNoteById } from "@/app/_lib/data-service";

export const metadata = {
  title: "Note",
};

async function Page({ params }) {
  const session = await auth();
  const { noteId } = await params;
  const { content, isArchived, lastEdited, tags, title } = await getNoteById(
    noteId,
    session.user.id,
  );

  return (
    <div>
      <NoteActions noteId={noteId} isArchived={isArchived} />
      <NoteDetailsForMobile
        content={content}
        isArchived={isArchived}
        lastEdited={lastEdited}
        tags={tags}
        title={title}
      />
    </div>
  );
}

export default Page;
