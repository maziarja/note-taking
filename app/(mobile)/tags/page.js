import CreateNewNoteButton from "@/app/_components/CreateNewNoteButton";
import TagContent from "./TagContent";

export const metadata = {
  title: "Tags",
};
async function page() {
  return (
    <div>
      <h2 className="text-preset-1 mb-4 text-neutral-950">Tags</h2>
      <TagContent />
      <CreateNewNoteButton />
    </div>
  );
}

export default page;
