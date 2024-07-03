import { Link as ScrollLink } from "react-scroll";
import logo from "/src/assets/logo.png";

const Navbar = () => {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <div className="w-44">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
