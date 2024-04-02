import React from "react";
import Link from "next/link";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-black py-20 w-full h-auto">
      <div className="flex flex-wrap border-box px-28 text-text_color text-base font-light justify-between lg:px-12 md:px-2 sm:px-20 sm:grid sm:justify-start">
        <div className="mx-auto sm:mx-0 sm:pb-10">
          <h4 className="mb-6 text-white text-lg font-medium sm:mb-2">
            About This Page
          </h4>
          <p className="mt-0 mb-4 block">
            Inspired from{" "}
            <Link
              href="https://colorlib.com"
              target="_blank"
              className="underline underline-offset-2 decoration-1"
            >
              Colorlib
            </Link>
          </p>
          <p className="mt-0 mb-4">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="mx-auto sm:mx-0 sm:pb-10">
          <h4 className="mb-6 text-white text-lg font-medium sm:mb-2">Contact</h4>
          <div className="flex items-center content-center">
            <Link href="mailto:haniyousfi@gmail.com">
              <EmailIcon />
            </Link>
            <p className="m-auto ml-2">haniyousfi@gmail.com</p>
          </div>
        </div>
        <div className="mx-auto sm:mx-0 sm:pb-10">
          <h4 className="mb-6 text-white text-lg font-medium sm:mb-2">Follow Me On</h4>
          <div className="flex items-center content-center -mt-3">
            <Link
              href="https://www.linkedin.com/in/hani-yousfi/"
              target="_blank"
              className=""
            >
              <LinkedInIcon className="mr-3" />
            </Link>
            <Link
              href="https://github.com/maky-hnou"
              target="_blank"
              className=""
            >
              <GitHubIcon className="mx-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
