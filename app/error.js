"use client";
function Error({ reset, error }) {
  return (
    <div className="bg-neutral-0 m-auto flex w-full max-w-135 flex-col items-center gap-4 rounded-xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
      <p className="text-preset-2 text-neutral-950">Somthing went wrong</p>
      <p className="text-preset-2 text-neutral-950">{error.message}</p>
      <button onClick={reset}></button>
    </div>
  );
}

export default Error;
