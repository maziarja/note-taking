import FontChangeButton from "./FontChangeButton";
import MonoSpace from "./MonoSpace";
import SansSerif from "./SansSerif";
import Serif from "./Serif";

function FontThemeContent() {
  return (
    <div className="flex flex-col">
      <h2 className="text-preset-1 mb-2 text-neutral-950">Font Theme</h2>
      <p className="text-preset-5 mb-5 text-neutral-700">
        Choose your font theme:
      </p>
      <div className="mb-5 flex flex-col gap-4">
        <SansSerif />
        <Serif />
        <MonoSpace />
      </div>
      <FontChangeButton />
    </div>
  );
}

export default FontThemeContent;
