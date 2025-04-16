import CreateNoteContent from "./CreateNoteContent";

async function Page() {
  return (
    <div className="grid h-dvh border-r-1 border-neutral-200 px-6 py-5">
      <CreateNoteContent />
    </div>
  );
}

export default Page;
