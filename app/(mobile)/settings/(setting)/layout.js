import Link from "next/link";

function Layout({ children }) {
  // CHANGE
  const darkMode = false;
  return (
    <div>
      <Link
        href="/settings"
        className="mb-3 flex cursor-pointer items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill={`var(--color-neutral-${!darkMode ? "600" : "300"})`}
            fillRule="evenodd"
            d="M15.75 20.414 7.336 12l8.414-8.414L17.164 5l-7 7 7 7-1.414 1.414Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-preset-5 text-neutral-600">Settings</p>
      </Link>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
