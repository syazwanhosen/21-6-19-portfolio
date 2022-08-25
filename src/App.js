import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import ProjectInMind from "./components/ProjectInMind";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Collaboration from "./components/Collaboration";
import Wish from "./components/Wish";

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Collaboration />
        <Wish />
        <Qualification />
        <Services />
        <ProjectInMind />
        <ContactMe />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
