import CreateNewNoteButton from "@/app/_components/CreateNewNoteButton";
import InputSearch from "@/app/_components/InputSearch";
import { auth } from "@/app/_lib/auth";
import { getNotes } from "@/app/_lib/data-service";

export const metadata = {
  title: "Search",
};

async function page() {
  const session = await auth();
  const notes = await getNotes(session?.user?.id);
  return (
    <div className="flex flex-col gap-4">
      <p className="text-preset-1 text-neutral-950">Search</p>
      <InputSearch notes={notes} />
      <CreateNewNoteButton />
    </div>
  );
}

export default page;
