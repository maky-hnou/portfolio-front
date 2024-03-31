import React from "react";
import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-black py-20 box-border">
      <div className="w-full flex flex-wrap border-box mx-auto px-4 text-text_color text-base font-light">
        <div className="mx-auto">
          <h4 className="mb-6 text-white text-lg font-medium">
            About This Page
          </h4>
          <p className="mt-0 mb-4 border-box block">
            Inspired from{" "}
            <Link
              href="https://colorlib.com"
              target="_blank"
              className="underline underline-offset-2 decoration-1"
            >
              Colorlib
            </Link>
          </p>
          <p className="mt-0 mb-4 border-box block">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="mx-auto">
          <h4 className="mb-6 text-white text-lg font-medium">Contact</h4>
          <div className="flex items-center content-center">
            <Link href="mailto:haniyousfi@gmail.com">
              <EmailIcon />
            </Link>
            <p className="m-auto ml-2">haniyousfi@gmail.com</p>
          </div>
        </div>
        <div className="mx-auto">
          <h4 className="mb-6 text-white text-lg font-medium">Follow Me On</h4>
          <div className="flex items-center content-center -mt-3">
            <Link
              href="https://www.linkedin.com/in/hani-yousfi/"
              target="_blank"
              className="mx-auto"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/maky-hnou"
              target="_blank"
              className="mx-auto"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
