import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/router";

export function CustomLink({ href, title, target, className = "" }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      target={target ? target : undefined}
      className={`${className} ${
        router.asPath === href ? "text-light_purple" : "text-black"
      } px-2 hover:text-light_purple`}
    >
      {title}
    </Link>
  );
}

export function CustomMobileLink({
  href,
  title,
  target,
  className = "",
  toggle,
}) {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      target={target ? target : undefined}
      className={`${className} ${
        router.asPath === href ? "text-light_purple" : "text-white"
      } py-4 uppercase hover:text-light_purple`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default function NavBar() {
  const [showShadow, setShowShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowShadow(scrollTop > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-9 flex items-center justify-between fixed bg-white z-[50] ${
        showShadow ? "shadow-[-21.213px_21.213px_30px_0px_#9e9e9e4d]" : ""
      }`}
    >
      {!isOpen && (
        <div className="hidden z-20 lg:flex">
          <button
            className="flex-col justify-center items-center right-5 absolute z-10"
            onClick={handleClick}
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      )}
      <div className="flex justify-between items-center lg:hidden">
        <nav className="absolute mr-32 right-0 font-medium text-xs uppercase">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />

          <CustomLink href="/portfolio" title="Portfolio" />

          <CustomLink
            href="media/Hani_Yousfi_Resume.pdf"
            title="Résumé"
            target="_blank"
            className="py-0.5 ml-3 text-light_purple border-1 border-solid border-light_purple rounded-full hover:bg-light_purple hover:text-white"
          />
        </nav>
      </div>

      {isOpen ? (
        <div
          ref={menuRef}
          className="w-64 h-full fixed right-0 top-0 pt-5 bg-black/[0.8] z-20 transition-all duration-400 ease"
        >
          <nav className="flex flex-col pt-8 pl-8 text-white font-medium text-xs items-start">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />

            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/portfolio"
              title="Portfolio"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="media/Hani_Yousfi_Resume.pdf"
              title="Résumé"
              target="_blank"
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null}
      <div className="absolute left-0">
        <Logo />
      </div>
    </header>
  );
}
