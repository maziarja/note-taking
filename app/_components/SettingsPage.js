import Link from "next/link";
import { signOutAction } from "../_lib/action";

function SettingsPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
            />
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            className="text-preset-4 cursor-pointer text-neutral-950"
            href="/settings/colorTheme"
          >
            Color Theme
          </Link>
        </div>
        <div className="flex items-center gap-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-neutral-950"
              fillRule="evenodd"
              d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"
              clipRule="evenodd"
            />
            <path
              className="fill-neutral-950"
              fillRule="evenodd"
              d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            className="text-preset-4 cursor-pointer text-neutral-700"
            href="/settings/fontTheme"
          >
            Font Theme
          </Link>
        </div>
        <div className="flex items-center gap-2 border-b border-neutral-200 pt-2 pb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
            />
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
              clipRule="evenodd"
            />
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M11.862 14.203v2.22"
            />
          </svg>
          <Link
            className="text-preset-4 cursor-pointer text-neutral-700"
            href="/settings/changePassword"
          >
            Change Password
          </Link>
        </div>
        <div className="flex items-center gap-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
            />
          </svg>
          <button
            onClick={signOutAction}
            className="text-preset-4 cursor-pointer text-neutral-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
