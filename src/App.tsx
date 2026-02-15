import Hero from "./sections/hero/Hero";
import Navbar from "./components/Navbar";
import ApplicationContextProvider from "./contexts/ApplicationContext";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <main>
      <ApplicationContextProvider>
        <NavMenu/>
        <Navbar />
        <Hero />
      </ApplicationContextProvider>
    </main>
  );
}

export default App;
