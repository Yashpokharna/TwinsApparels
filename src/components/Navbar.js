"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  const navLinks = ["Home", "About", "Machinery", "Products", "Team"];

  useEffect(() => {
    setMounted(true);
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4 `}
    >
      <div className="container relative flex items-center justify-between px-5 mx-auto md:px-16">
        {/* Logo */}
        <Link href={"/"}>
          <h2 className="text-3xl font-medium">
            <span className="text-rose-600">Twins</span>Apparels.
          </h2>
        </Link>

        {/* Centered nav links */}
        <div className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 md:block left-1/2 top-1/2">
          <ul className="flex gap-5 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className="transition-colors duration-300 hover:text-rose-600"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme & Menu Button */}
        <div className="flex items-center gap-4">
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>

          {/* Hamburger */}
          <button
            aria-label="menu"
            className={`${theme === "dark" ? "text-white" : "text-black"} md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          toggleMenu ? "left-0" : "-left-full"
        } fixed top-0 z-50 w-80 h-screen transition-all duration-500 ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        } flex flex-col gap-5 py-24 px-10 shadow-2xl md:hidden`}
      >
        <button
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } absolute top-6 right-5`}
          onClick={() => setToggleMenu(false)}
        >
          <CloseOutlinedIcon />
        </button>

        {navLinks.map((link) => (
          <li key={link} className="list-none">
            <Link
              href={`#${link}`}
              className="transition-colors duration-300 hover:text-rose-600"
              onClick={() => setToggleMenu(false)}
            >
              {link}
            </Link>
          </li>
        ))}

        {/* Social Links */}
        <div className="absolute flex gap-3 mx-auto -translate-x-1/2 bottom-16 left-1/2">
          <Link
            href="https://www.facebook.com/profile.php?id=100017192357822&sk"
            target="_blank"
          >
            <FacebookOutlinedIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/naseem-khan-275275258/"}
          >
            <LinkedInIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </Link>
          <Link target="_blank" href={"https://github.com/NaseemKhan005/"}>
            <GitHubIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/naseem_khan005/"}
          >
            <InstagramIcon className="text-xl cursor-pointer hover:text-rose-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
