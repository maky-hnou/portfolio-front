import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <h2>H.Yousfi</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
}
