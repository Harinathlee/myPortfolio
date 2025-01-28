import React from "react";
import Namasthey from "../assets/namaste.png";
import webdev from "../assets/web-dev.gif";
import download from "../assets/download.gif";
import "../style.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  // Your Google Drive link for resume file
  const googleDriveLink = "https://drive.google.com/uc?export=download&id=1DPvduoTIphqPkFdLfJmQZ1UbF6ii4eCf";

  return (
    <section id="home" name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto md:flex-row pt-14">
        <div className="flex flex-col justify-center h-full font-Abril_Fatface">
          <img
            src={Namasthey}
            alt="namasthey"
            className="inline h-14 w-14 hover:w-15 hover:h-15"
          />
          <h4 className="text-xl font-bold text-white inline-block">Namasthey!</h4>

          <div>
            <h2 className="text-4xl font-bold text-white">
              This is <span className="underline font-signature">Harinath</span>
            </h2>
          </div>

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
          <p className="text-gray-200 pt-4 max-w-md">
            I am a developer who loves and enjoys coding. Others might think I'm
            coding, but I'm actually performing music on the piano.
            <span>&#128521;</span>
          </p>
          <p className="text-gray-200 py-2  max-w-md">
            To know more about my areas of expertise, scroll down or click on
            any of the sections at the top of the page.
          </p>
          <div className="w-auto">
            <a
              href={googleDriveLink}
              download
              smooth="true"
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
      <div
        name="quote"
        className="w-full justify-center text-center text-lg h-auto"
      >
        <figure className="mx-auto max-w-screen-md text-center">
          <svg
            aria-hidden="true"
            className="mx-auto mb-3 w-10 h-10 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-lg italic font-medium text-white">
              "I am not the best today, But I am better than yesterday."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center mt-2 space-x-3 ">
            <div className="flex items-center divide-x-2 divide-gray-500 font-Roboto">
              <cite className="pr-3 font-medium text-orange-400">
                harinathlee
              </cite>
              <cite className="pl-3 text-sm text-sky-300">Myself</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
