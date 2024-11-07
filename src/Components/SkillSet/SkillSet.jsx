import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaStripe,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { TiDatabase } from "react-icons/ti";
import { BiLogoNetlify } from "react-icons/bi";
import cIcon from "../../assets/c.png";
import nextAuth from "../../assets/Nextjs.png";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongoosedotws, SiRender, SiSocketdotio } from "react-icons/si";

const SkillSet = () => {
  const skills = {
    programmingLanguages: [
      { name: "C", icon: cIcon },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: FaCss3Alt },
      { name: "MongoDB", icon: TiDatabase },
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "Stripe", icon: FaStripe },
      { name: "NextAuth", icon: nextAuth },
      { name: "Mongoose", icon: SiMongoosedotws },
      { name: "SocketIO", icon: SiSocketdotio },
    ],
    toolsFrameworks: [
      { name: "Vercel", icon: IoLogoVercel },
      { name: "Netlify", icon: BiLogoNetlify },
      { name: "Render", icon: SiRender },
    ],
  };

  return (
    <div className="container mx-auto my-10 p-5 rounded-lg shadow-lg dark:text-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
        Skill Set
      </h2>
      <hr className="border-gray-300 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg shadow-lg dark:text-black transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
            <ul className="flex flex-wrap justify-center">
              {items.map((skill, index) => (
                <li
                  key={index}
                  className="text-lg m-4 text-center transition-all transform hover:scale-110 hover:shadow-xl"
                >
                  {typeof skill.icon === "string" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 mx-auto transition-all transform hover:scale-125"
                    />
                  ) : (
                    <skill.icon
                      size={48}
                      className="mb-2 text-blue-600 mx-auto transition-all transform hover:scale-125"
                    />
                  )}
                  <p className="font-semibold">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
