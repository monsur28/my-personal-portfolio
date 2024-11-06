import { FaGraduationCap } from "react-icons/fa";

const EducationSection = () => {
  const educations = [
    {
      institution: "Chittagong Polytechnic Institute",
      degree: "Diploma in Civil Engineering",
      year: "2019",
    },
    {
      institution: "University of Creative Technology Chittagong",
      degree: "BSc in Computer Science and Engineering",
      year: "Currently in 6th Semester",
    },
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        <hr className="border-gray-300 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center"
            >
              <div className="flex-shrink-0 mr-4">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{education.degree}</h3>
                <p className="text-gray-600 mb-2">{education.institution}</p>
                <p className="text-gray-600">{`Graduated: ${education.year}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
