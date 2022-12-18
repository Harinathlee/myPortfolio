//import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Testinomials from "./components/Testinomials";


export default function App() {
  return (
    <div className="bg-slate-900">
      {/*} <BrowserRouter>
        <NavBar />  
        <SocialLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route index element={<Portfolio />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
  </BrowserRouter>{*/}
      <NavBar />
      <SocialLinks />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Testinomials />
      <Contact />
    </div>
  );
}
