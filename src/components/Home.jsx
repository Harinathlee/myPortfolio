import React from "react";

import Namasthey from "../assets/namaste.png";
import webdev from "../assets/web-dev.gif";
//import { BsFillFileArrowDownFill } from "react-icons/bs";
import Resume from "../assets/docs/Harinath's Resume.pdf";
import download from "../assets/download.gif";
import "../style.css";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <section
      id="home"
      name="home"
      className="h-screen w-full"
    >
      <div
        name="quote"
        className="w-full justify-center text-center text-lg p-2 py-[5rem] h-32"
      >
        <p className="text-gray-200 italic font-bold">
          "I am not the best today, But I am better than yesterday."
        </p>
        <span className="font-signature text-2xl text-green-500 text-right font-semibold">
          -harinathlee
        </span>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto md:flex-row m-0">
        <div className="flex flex-col justify-center h-full font-Abril_Fatface">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Namasthey
            <img
              src={Namasthey}
              alt="namasthey"
              className="inline h-12 w-12 hover:w-15 hover:h-15"
            />
            <div>
              This is <span className="underline">Harinath</span>
            </div>
          </h2>

          <h3 className="text-gray-300 font-Cassandra font-semibold text-lg">
            <Typewriter
              options={{
                strings: ["Web Developer", "Video Editor"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h3>
          <p className="text-gray-300 pt-4 max-w-md">
            I am a developer who loves and enjoys coding. Others might think I'm coding,
            but I'm actually performing music on the piano. <span>&#128521;</span>
          </p>
          <p className="text-gray-300 py-2  max-w-md">
            To know more about my expertise scroll down or click on any section
            on top of the page.
          </p>
          <div className="w-auto">
            <a
              href={Resume}
              download={true}
              smooth={true}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-700 cursor-pointe hover:from-green-700 hover:to-green-400 font-bold hover:scale-105 duration-200 text-lg shadow-lg shadow-black"
            >
              <span>
                <img
                  src={download}
                  alt="download"
                  className="w-9 ml-1 text-white"
                />
              </span>
              Download Resume
            </a>
          </div>
        </div>

        <div>
          <img
            src={webdev}
            alt="my profile"
            className="rounded-2xl mx-auto w-[400px] ml-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
