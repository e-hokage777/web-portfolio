import Hero from "./sections/hero/Hero";
import Navbar from "./components/Navbar";
import ApplicationContextProvider from "./contexts/ApplicationContext";
import NavMenu from "./components/NavMenu";
import ProjectsSection from "./sections/projects/Projects";
import ArtGallery from "./sections/art-gallery/ArtGallery";
import WorkExperienceSection from "./sections/work-experience/WorkExperience";
import Connect from "./sections/connect/Connect";

function App() {
  return (
    <main>
      <ApplicationContextProvider>
        <NavMenu/>
        <Navbar />
        <Hero />
        <ProjectsSection/>
        <WorkExperienceSection/>
        <ArtGallery/>
        <Connect/>
      </ApplicationContextProvider>
    </main>
  );
}

export default App;
