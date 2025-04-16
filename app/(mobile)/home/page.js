import Responsive from "@/app/_components/Responsive";
import Main from "../../_components/Main";
import { auth } from "../../_lib/auth";
import { getNotes } from "../../_lib/data-service";

export const metadata = {
  title: "Home",
};

async function page() {
  const session = await auth();
  const notes = await getNotes(session?.user?.id);

  return <Main notes={notes} />;
}

export default page;
