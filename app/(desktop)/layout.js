import { redirect } from "next/navigation";
import { auth } from "../_lib/auth";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/auth/login");
  return children;
}
