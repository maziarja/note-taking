import Link from "next/link";

function Toast({ onClick, title, link, linkDescription }) {
  return (
    <div className="flex items-center justify-between gap-10 rounded-lg bg-neutral-50 py-1">
      <p className="text-preset-6 text-neutral-950">{title}</p>
      <div className="flex items-center gap-2">
        {link && (
          <Link
            href={link}
            className="text-preset-6 w-full text-neutral-950 underline underline-offset-2"
          >
            {linkDescription}
          </Link>
        )}
        <button className="cursor-pointer" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="var(--color-neutral-400)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m6 6 12 12M18 6 6 18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
