import React from "react";
import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-black p-20 box-border">
      <div className="max-w-[960px] w-full flex flex-wrap border-box mx-auto px-4 text-white text-base font-light">
        <div className="mx-auto">
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
        <div className="mx-auto">
          <h4>Contact</h4>
          <div className="flex items-center content-center">
            <Link href="mailto:haniyousfi@gmail.com">
              <EmailIcon />
            </Link>
            <p className="m-auto ml-2">haniyousfi@gmail.com</p>
          </div>
        </div>
        <div className="mx-auto">
          <h4>Follow Me On</h4>
          <div className="flex items-center content-center">
            <LinkedInIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
