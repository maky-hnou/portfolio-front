import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-20 box-border">
      <div className="max-w-[960px] w-full flex flex-wrap border-box mx-auto px-4 text-white text-base font-light">
        <div>
          <h4>About This page</h4>
          <p>
            Inspired from{" "}
            <Link
              href="https://colorlib.com"
              target="_blank"
              className="underline underline-offset-2 decoration-1"
            >
              Colorlib
            </Link>
          </p>
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div>Contact</div>
        <div>Follow Me</div>
      </div>
    </footer>
  );
}
