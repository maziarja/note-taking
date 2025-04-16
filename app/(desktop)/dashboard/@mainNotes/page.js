import { auth } from "@/app/_lib/auth";
import { getNotes } from "@/app/_lib/data-service";
import MainNotesContent from "./MainNotesContent";

async function Page() {
  const session = await auth();
  const notes = await getNotes(session?.user?.id);

  return (
    <div className="flex flex-col gap-1 py-5 pr-4 pl-8">
      <MainNotesContent notes={notes} />
    </div>
  );
}

export default Page;
