import person from "../../assets/Monsur.jpg";
import background from "../../assets/dots-bg-dark.svg";
import cvFile from "../../assets/Resume Of Abul Monsur.pdf";
const About = () => {
  const divStyle = {
    backgroundImage: `url(${background}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div style={divStyle} className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="w-40 ">
          <img
            src={person}
            alt=""
            className="rounded-full border border-solid"
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl mt-2">Abul Monsur Mohammad Kachru</h1>
          <h3 className="text-2xl mt-2">
            I am passionate about Frontend Development
          </h3>
          <p className="max-w-2xl mx-auto mt-2">
            I am a frontend web developer with a passion for building responsive
            and interactive web applications. My expertise lies in translating
            design concepts into functional, high-performance web interfaces.
            Also, I have a strong computer science background which gives me the
            confidence to learn deeply in computer science technology. I am now
            focusing on backend development and problem-solving skills.
          </p>
          <a
            href={cvFile}
            download="Abul_Monsur_Mohammad_Kachru_CV.pdf"
            className="btn mt-2 bg-emerald-400 px-4 py-2 rounded text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
