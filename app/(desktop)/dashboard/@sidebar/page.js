import Logo from "@/app/_components/Logo";
import { auth } from "@/app/_lib/auth";
import { getTags } from "@/app/_lib/data-service";
import ArchivedIcon from "@/app/icons/ArchivedIcon";
import HomeIcon from "@/app/icons/HomeIcon";
import RightArrow from "@/app/icons/RightArrow";
import TagIcon from "@/app/icons/TagIcon";
import SidebarContent from "./SidebarContent";

async function page() {
  const session = await auth();
  const tags = await getTags(session.user.id);
  const uniqueTags = [...new Set(tags.map((tag) => tag.tags).flat())];

  return (
    <div className="space-y-1 px-4 py-3">
      <Logo />
      <SidebarContent uniqueTags={uniqueTags} />
    </div>
  );
}

export default page;
