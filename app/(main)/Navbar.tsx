"use client";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Beef } from "lucide-react";

export default function Navbar() {
  const handleLogoClick = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("cardId");
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
    window.dispatchEvent(new Event("urlchange"));
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-foreground/10 border-b px-4 py-2">
      <div onClick={handleLogoClick}>
        <Beef className="cursor-pointer dark:invert" />
      </div>
      <ThemeToggle />
    </nav>
  );
}
