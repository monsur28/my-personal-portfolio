import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/Abul Monsur.png";
import darkLogo from "../../assets/Abul Monsur(White).png"; // Import dark mode logo

const Navbar = () => {
  // State to manage theme (light or dark)
  const [theme, setTheme] = useState("light");

  // Effect to set theme on mount
  useEffect(() => {
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Navigation links
  const navlinks = (
    <>
      <li>
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="Experience" smooth={true} duration={500}>
          Experience
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="education" smooth={true} duration={500}>
          Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar flex justify-between">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <div className="w-28">
          <img src={theme === "light" ? logo : darkLogo} alt="Abul Monsur" />
        </div>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <button onClick={toggleTheme} className="btn text-black btn-outline">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Navbar;
