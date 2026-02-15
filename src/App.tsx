import Hero from "./sections/hero/Hero";
import Navbar from "./components/Navbar";
import ApplicationContextProvider from "./contexts/ApplicationContext";

function App() {
  return (
    <main>
      <ApplicationContextProvider>
        <Navbar />
        <Hero />
      </ApplicationContextProvider>
    </main>
  );
}

export default App;
