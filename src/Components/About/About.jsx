import { Typewriter } from "react-simple-typewriter";
import person from "../../assets/Monsur Logo.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10 lg:mt-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Text Section */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold mt-2">
            Abul Monsur Mohammad Kachru
          </h1>
          <div className="mt-2">
            <h3 className="text-xl lg:text-2xl">
              <span>
                <Typewriter
                  words={[
                    "I am passionate about web Development",
                    "I enjoy bringing ideas to life through code",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </div>
          <p className="mt-4 text-base lg:text-lg">
            I am a frontend web developer with a passion for building responsive
            and interactive web applications. My expertise lies in translating
            design concepts into functional, high-performance web interfaces.
            Also, I have a strong computer science background which gives me the
            confidence to learn deeply in computer science technology. I am now
            focusing on backend development and problem-solving skills.
          </p>
          <a
            href="https://drive.google.com/file/d/14oF0of_YtmmezXlxn_pVn_W_sM-lvaJ3/view?usp=sharing"
            download="Abul_Monsur_Mohammad_Kachru_CV.pdf"
            className="btn mt-4 px-4 py-2 rounded text-white bg-emerald-400 transition-transform duration-300 transform hover:scale-105"
            style={{
              boxShadow: "0 0 5px #ff4d4d, 0 0 10px #ff4d4d, 0 0 15px #ff4d4d",
              animation: "neonGlow 2s infinite alternate",
              borderRadius: "0.5rem",
            }}
          >
            Download CV
          </a>

          <style>{`
            @keyframes neonGlow {
              0%,
              100% {
                box-shadow: 0 0 5px #ff4d4d, 0 0 10px #ff4d4d, 0 0 15px #ff4d4d;
              }
              25% {
                box-shadow: 0 0 5px #4dff4d, 0 0 10px #4dff4d, 0 0 15px #4dff4d;
              }
              50% {
                box-shadow: 0 0 5px #4d4dff, 0 0 10px #4d4dff, 0 0 15px #4d4dff;
              }
              75% {
                box-shadow: 0 0 5px #ff4dff, 0 0 10px #ff4dff, 0 0 15px #ff4dff;
              }
            }
          `}</style>
        </div>

        {/* Image Section */}
        <div className="rounded-full shadow-lg shadow-pink-200/40">
          <img
            src={person}
            alt="Abul Monsur Mohammad Kachru"
            className="rounded-full w-56 h-56 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover border border-solid border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
