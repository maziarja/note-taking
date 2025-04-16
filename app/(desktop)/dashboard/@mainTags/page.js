import { auth } from "@/app/_lib/auth";
import MainTagsContent from "./MainTagsContent";
import { getNotesByTags } from "@/app/_lib/data-service";

async function Page({ searchParams }) {
  const session = await auth();
  const { tagName } = await searchParams;
  const notes = await getNotesByTags(session.user.id, tagName);
  return (
    <div className="flex flex-col gap-1 py-5 pr-4 pl-8">
      <MainTagsContent notes={notes} tagName={tagName} />
    </div>
  );
}

export default Page;
