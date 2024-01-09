import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./App.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
