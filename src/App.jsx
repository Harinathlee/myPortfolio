//import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Testinomials from "./components/Testinomials";


export default function App() {
  return (
    <>
      {window.screen.width > 1024 ? (
        <div className="bg-slate-900">
          <NavBar />
          <SocialLinks />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Testinomials />
          <Hobbies />
          <Contact />
        </div>
      ) : (
        <div className="justify-center text-center absolute top-[40%] m-10 text-red-600">
          This website is not suppported in mobile screen, for better experince
          visit in desktop mode.
        </div>
      )}
    </>
  );
}
