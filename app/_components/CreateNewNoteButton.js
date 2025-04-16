import Link from "next/link";

function CreateNewNoteButton() {
  return (
    <div className="fixed right-4 bottom-18 cursor-pointer rounded-full bg-blue-500 p-2 sm:bottom-23 sm:p-4">
      <Link href={"/createNote"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5Z"
          />
        </svg>
      </Link>
    </div>
  );
}

export default CreateNewNoteButton;
