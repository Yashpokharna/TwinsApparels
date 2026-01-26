"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbar = useRef();

  const navLinks = ["Home", "About", "Products", "Machinery", "Operations", "Team", "Contact "];

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  return (
    <div
      ref={navbar}
      className="fixed top-0 left-0 z-50 w-full py-4 text-black bg-white"
    >
      <div className="container flex items-center justify-between px-5 mx-auto md:px-16">
        {/* Logo */}
        <div className="-mt-3">
        <Link href="/">
          <Image
            src="/name2.jpeg"        // put your logo inside /public
            alt="Twins Apparels"
            width={180}            // adjust as needed
            height={90}
            priority
          />
        </Link>
        </div>

        {/* Right-aligned nav links */}
        <div className="items-center hidden gap-10 md:flex">
          <ul className="flex gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link} className="relative group">
                <a
                  href={`#${link}`}
                  className="transition-colors duration-300 hover:text-rose-600"
                >
                  {link}
                </a>
                {/* Underline hover effect */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          aria-label="menu"
          className="text-black md:hidden"
          onClick={() => setToggleMenu(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${toggleMenu ? "left-0" : "-left-full"
          } fixed top-0 z-50 w-80 h-screen transition-all duration-500 bg-white text-black flex flex-col gap-5 py-24 px-10 shadow-2xl md:hidden`}
      >
        <button
          className="absolute text-black top-6 right-5"
          onClick={() => setToggleMenu(false)}
        >
          <CloseOutlinedIcon />
        </button>

        {navLinks.map((link) => (
          <li key={link} className="list-none">
            <a
              href={`#${link}`}
              className="transition-colors duration-300 hover:text-rose-600"
              onClick={() => setToggleMenu(false)}
            >
              {link}
            </a>
          </li>
        ))}

        {/* Social Links — only in mobile menu */}
        <div className="absolute flex gap-3 mx-auto -translate-x-1/2 bottom-16 left-1/2">
          <a
            href="https://www.facebook.com/profile.php?id=100017192357822&sk"
            target="_blank"
          >
            <FacebookOutlinedIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </a>
          <a
            target="_blank"
            href=""
          >
            <LinkedInIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </a>
          <a target="_blank" href="">
            <GitHubIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </a>
          <a target="_blank" href="">
            <InstagramIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
