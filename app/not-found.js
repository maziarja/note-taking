import Link from "next/link";

function NotFound() {
  return (
    <div className="bg-neutral-0 m-auto flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <p className="text-preset-2 text-neutral-950">
        This page could not be found
      </p>
      <Link
        className="text-base leading-[140%] font-normal text-neutral-600 underline underline-offset-2 hover:text-blue-500"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
