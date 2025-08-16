import AboutMe from "../components/AboutMe";
import CustomScreen from "../components/CustomScreen";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <CustomScreen>
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </CustomScreen>
    </>
  );
}
