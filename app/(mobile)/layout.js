import { redirect } from "next/navigation";
import Logo from "../_components/Logo";
import Navigation from "../_components/Navigation";
import { auth } from "../_lib/auth";
import React from "react";
import Responsive from "../_components/Responsive";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/auth/login");

  return (
    <div className="relative bg-neutral-100">
      <Responsive />
      <header className="px-4 py-3 sm:px-8 sm:py-6">
        <Logo />
      </header>
      <div className="bg-neutral-0 rounded-t-xl px-4 py-5 sm:px-8 sm:py-6">
        {children}
      </div>
      <div className="mt-8">
        <Navigation />
      </div>
    </div>
  );
}
