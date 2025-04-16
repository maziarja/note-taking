import { useTheme } from "../contexts/ThemeContext";

function Modal({ icon, title, children, onClick, cancelModal }) {
  const { darkMode } = useTheme();
  return (
    <div
      className={`absolute inset-0 z-1000 flex min-h-dvh items-center justify-center ${!darkMode ? "bg-neutral-950/50" : "bg-neutral-0/50"} p-4`}
    >
      <div
        className={`${!darkMode ? "bg-neutral-0" : "bg-neutral-200"} flex max-w-[440px] flex-col rounded-xl border-1 border-neutral-200`}
      >
        <div className="flex gap-3 border-b border-neutral-200 p-5">
          <div
            className={`self-start rounded-lg ${!darkMode ? "bg-neutral-100" : "bg-neutral-300"} p-2`}
          >
            {icon}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-preset-3 text-neutral-950">{title}</p>
            <p className="text-preset-5 text-neutral-700">{children}</p>
          </div>
        </div>
        <div className="ml-auto flex gap-4 px-5 py-4">
          <button
            onClick={cancelModal}
            className={`text-preset-4 rounded-lg ${!darkMode ? "bg-neutral-100" : "bg-neutral-300"} px-4 py-3 text-neutral-600`}
          >
            Cancel
          </button>
          <button
            onClick={onClick}
            className={`text-preset-4 rounded-lg text-[#fff] ${title.startsWith("Delete") ? "bg-red-500" : "bg-blue-500"} px-4 py-3`}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
