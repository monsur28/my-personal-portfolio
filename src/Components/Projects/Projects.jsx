/* eslint-disable react/jsx-key */
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FaReact, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import madcamp from "../../assets/medcamp.png";
import volunteer from "../../assets/volunteer.png";
import art from "../../assets/art.png";

const projects = [
  {
    name: "Medical Camp Website",
    description:
      "This project aims to provide a platform for organizing and managing medical camps, facilitating healthcare services, and promoting community health awareness.",
    features: [
      "Camp Management",
      "Participant & Organizer Registration",
      "Database Management",
    ],
    technologies: [
      <FaHtml5 size={24} />,
      <FaCss3Alt size={24} />,
      <FaReact size={24} />,
      <IoLogoFirebase size={24} />,
      <FaDatabase size={24} />,
    ],
    liveLink: "https://medcamp-525a3.web.app/",
    githubClientLink: "https://github.com/monsur28/medical-camp-client",
    githubServerLink: "https://github.com/monsur28/medical-camp-server",
    image: madcamp,
  },
  {
    name: "Volunteer Management Website",
    description:
      "The Volunteer Management Website is designed to streamline the process of organizing and managing volunteer activities.",
    features: [
      "Activity Management",
      "Volunteer & Organizer Registration",
      "Database Management",
    ],
    technologies: [
      <FaHtml5 size={24} />,
      <FaCss3Alt size={24} />,
      <FaReact size={24} />,
      <FaDatabase size={24} />,
    ],
    liveLink: "https://b9a11-volunteer-manageme-a83e2.web.app/",
    githubClientLink: "https://github.com/monsur28/volunteer-management-client",
    githubServerLink: "https://github.com/monsur28/volunteer-management-server",
    image: volunteer,
  },
  {
    name: "Creative Art and Craft Agency Website",
    description:
      "Creative Art and Craft agency is a refined online platform dedicated to showcasing exquisite artisanal creations, offering a meticulously curated selection of high-end art and craft pieces. ",
    features: [
      "Single Page Application",
      "Protected Routes",
      "Secure Authentication",
    ],
    technologies: [
      <FaHtml5 size={24} />,
      <FaCss3Alt size={24} />,
      <FaReact size={24} />,
      <IoLogoFirebase size={24} />,
    ],
    liveLink: "https://b9a9-art-craft-store.web.app/",
    githubClientLink: "https://github.com/monsur28/art-craft--store-client",
    githubServerLink: "https://github.com/monsur28/art-craft--store-server",
    image: art,
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto my-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <hr className="border-gray-300 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <h4 className="text-xl font-medium mb-2">Core Features</h4>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h4 className="text-xl font-medium mb-2">Technologies Used</h4>
              <div className="flex items-center mb-6">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="mr-4">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                <div>
                  <a
                    href={project.githubClientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 mr-4"
                  >
                    <FaGithub className="mr-2" />
                    Client Code
                  </a>
                  <a
                    href={project.githubServerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800"
                  >
                    <FaGithub className="mr-2" />
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
