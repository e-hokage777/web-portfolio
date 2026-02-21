import Hero from "./sections/hero/Hero";
import Navbar from "./components/Navbar";
import ApplicationContextProvider from "./contexts/ApplicationContext";
import NavMenu from "./components/NavMenu";
import ProjectsSection from "./sections/projects/Projects";

function App() {
  return (
    <main>
      <ApplicationContextProvider>
        <NavMenu/>
        <Navbar />
        <Hero />
        <ProjectsSection/>
      </ApplicationContextProvider>
    </main>
  );
}

export default App;
