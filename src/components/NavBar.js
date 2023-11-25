import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";

export default function NavBar() {
  return (
    <header className="w-full py-8 flex items-center justify-between">
      <nav className="absolute right-0 font-medium text-xs uppercase">
        <Link href="/" className="px-2">Home</Link>
        <Link href="/about" className="px-2">About</Link>
        <Link href="/portfolio" className="px-2">Portfolio</Link>
      </nav>
      <div className="absolute left-0">
        <Logo />
      </div>
    </header>
  );
}
