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
    <div className="container mx-auto my-10 p-5 rounded-lg shadow-md dark:text-black">
      <h2 className="text-4xl font-bold text-center mb-8 ">Skill Set</h2>
      <hr className="border-gray-300 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-100 p-6 rounded-lg dark:text-black"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
            <ul className="flex flex-wrap justify-center">
              {items.map((skill, index) => (
                <li key={index} className="text-lg m-4 text-center">
                  {typeof skill.icon === "string" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 text-blue-600 mx-auto"
                    />
                  ) : (
                    <skill.icon
                      size={48}
                      className="mb-2 text-blue-600 mx-auto"
                    />
                  )}
                  <p>{skill.name}</p>
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
