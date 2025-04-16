"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Responsive() {
  const router = useRouter();
  useEffect(() => {
    if (window.innerWidth > 1100) {
      router.push("/dashboard");
    } else {
      router.push("/home");
    }
  }, [router]);

  return null;
}

export default Responsive;
