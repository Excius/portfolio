import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { portfolioData } from "./data/portfolioData";

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating from projects page
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure page is rendered
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Layout>
        <section id="about">
          <Hero />
        </section>
        <section id="education">
          <Timeline title="Education" items={portfolioData.education} />
        </section>
        <section id="experience">
          <Timeline title="Experience" items={portfolioData.experience} />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </div>
  );
}

export default MainPage;
