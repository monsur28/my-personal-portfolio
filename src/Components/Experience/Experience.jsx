import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance SEO Consultant",
      company: "Fiverr",
      duration: "2019 - Present",
      responsibilities: [
        "Optimized client websites for search engines.",
        "Conducted keyword research and implemented SEO strategies.",
        "Analyzed website performance and provided recommendations for improvement.",
        "Analyzed Broken links around the worldwide based on client Niche",
      ],
      link: "https://www.fiverr.com/abulmonsur28",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Experience
        </h2>
        <hr className="border-gray-300 my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-gray-600">{experience.duration}</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-xl font-medium mb-2">Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
