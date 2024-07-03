import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Abul Monsur Mohammad Kachru</h2>
          <p className="text-gray-400">Frontend Developer</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/monsur28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/mdmonsur28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:monsur286512.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Abul Monsur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
