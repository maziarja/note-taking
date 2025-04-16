export default function Layout({ children }) {
  return (
    <div className="grid min-h-dvh place-items-center bg-neutral-100 px-4">
      {children}
    </div>
  );
}
