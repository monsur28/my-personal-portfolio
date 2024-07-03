import About from "./About/About";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import SkillSet from "./SkillSet/SkillSet";

const Home = () => {
  return (
    <div>
      <Navbar />
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
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
