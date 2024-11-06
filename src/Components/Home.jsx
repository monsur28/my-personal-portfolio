import About from "./About/About";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
// import Footer from "./Footer/Footer";
// import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import SkillSet from "./SkillSet/SkillSet";
import background from "../assets/pattern.png";
// import LinkedinPost from "./LinkedingPost/LinkedinPost";

const divStyle = {
  backgroundImage: `url(${background}) `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
};
// const overlay = {
//   opacity: "0.5",
// };

const Home = () => {
  return (
    <div>
      <div style={divStyle}>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <SkillSet />
        </section>
        <section id="Experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        {/* <section id="LinkednPost" className="section">
          <LinkedinPost />
        </section> */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
