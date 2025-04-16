"use client";
import { useDesktop } from "../contexts/DesktopContext";
import SearchIcon from "../icons/SearchIcon";

function DesktopInputSearch() {
  const { query, setQuery } = useDesktop();
  return (
    <div className="flex w-[300px] flex-col gap-4">
      <div className="flex w-full gap-2 rounded-lg border-1 border-neutral-300 bg-neutral-50 px-4 py-3">
        <SearchIcon />
        <input
          className="text-preset-5 w-full text-neutral-950 outline-0"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Search by title, content, or tags..."
        />
      </div>
    </div>
  );
}

export default DesktopInputSearch;
