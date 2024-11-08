import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import madcamp from "../../assets/medcamp.png";
import volunteer from "../../assets/volunteer.png";
import art from "../../assets/art.png";
import BookNest from "../../assets/BookNest.jpg";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandSocketIo } from "react-icons/tb";
import { FaDatabase, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

SwiperCore.use([Autoplay]);

// Project Data Array
const projects = [
  {
    name: "BookNest || Book E-commerce",
    description:
      "Welcome to BookNest, an e-commerce website designed specifically for book lovers. This project leverages modern web development technologies to deliver a seamless shopping experience, featuring user-friendly design and essential functionalities for managing a book store.",
    features: [
      "Easily add books to your cart.",
      "Secure Payment Options (Cash on Delivery, Stripe, SSLCOMMERZ)",
      "User Authentication with NextAuth",
      "Real-Time Communication with Socket.IO",
    ],
    technologies: [
      <SiNextdotjs key="nextjs" size={24} />,
      <RiTailwindCssFill key="tailwind" size={24} />,
      <TbBrandSocketIo key="socketio" size={24} />,
      <FaDatabase key="database" size={24} />,
    ],
    liveLink: "https://booknest-self.vercel.app/",
    githubClientLink: "https://github.com/azaaaaaaaaad/booknest",
    githubServerLink: "https://github.com/monsur28/BookNest-SocketIO-Server",
    image: BookNest,
  },
  {
    name: "Medical Camp || Camp Management",
    description:
      "This project aims to provide a platform for organizing and managing medical camps, facilitating healthcare services, and promoting community health awareness.",
    features: [
      "Camp Management",
      "Participant & Organizer Registration",
      "Database Management",
    ],
    technologies: [
      <FaHtml5 key="html5" size={24} />,
      <FaCss3Alt key="css3" size={24} />,
      <FaReact key="react" size={24} />,
      <IoLogoFirebase key="firebase" size={24} />,
      <FaDatabase key="database" size={24} />,
    ],
    liveLink: "https://medcamp-525a3.web.app/",
    githubClientLink: "https://github.com/monsur28/medical-camp-client",
    githubServerLink: "https://github.com/monsur28/medical-camp-server",
    image: madcamp,
  },
  {
    name: "Volunteer Management",
    description:
      "The Volunteer Management Website is designed to streamline the process of organizing and managing volunteer activities.",
    features: [
      "Activity Management",
      "Volunteer & Organizer Registration",
      "Database Management",
    ],
    technologies: [
      <FaHtml5 key="html5" size={24} />,
      <FaCss3Alt key="css3" size={24} />,
      <FaReact key="react" size={24} />,
      <FaDatabase key="database" size={24} />,
    ],
    liveLink: "https://b9a11-volunteer-manageme-a83e2.web.app/",
    githubClientLink: "https://github.com/monsur28/volunteer-management-client",
    githubServerLink: "https://github.com/monsur28/volunteer-management-server",
    image: volunteer,
  },
  {
    name: "Creative Art and Craft Agency Website",
    description:
      "Creative Art and Craft agency is a refined online platform dedicated to showcasing exquisite artisanal creations, offering a meticulously curated selection of high-end art and craft pieces.",
    features: [
      "Single Page Application",
      "Protected Routes",
      "Secure Authentication",
    ],
    technologies: [
      <FaHtml5 key="html5" size={24} />,
      <FaCss3Alt key="css3" size={24} />,
      <FaReact key="react" size={24} />,
      <IoLogoFirebase key="firebase" size={24} />,
    ],
    liveLink: "https://b9a9-art-craft-store.web.app/",
    githubClientLink: "https://github.com/monsur28/art-craft--store-client",
    githubServerLink: "https://github.com/monsur28/art-craft--store-server",
    image: art,
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-16 px-5">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <hr className="border-gray-300 my-6" />

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out relative flex flex-col min-h-full">
              <div className="h-48 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 text-sm flex-grow">
                  {expandedIndex === index
                    ? project.description
                    : project.description.slice(0, 150) + "..."}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-600 text-sm mt-2"
                >
                  {expandedIndex === index ? "See Less" : "See More"}
                </button>
                <div className="mt-4 flex-grow">
                  <div className="flex space-x-4 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="text-gray-600">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubClientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-800"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
