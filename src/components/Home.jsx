import React from "react";
import HeroImage from "../assets/heroImage.png";
import Namasthey from "../assets/namaste.png";

//import { BsFillFileArrowDownFill } from "react-icons/bs";
import Resume from "../assets/docs/Harinath's Resume.pdf";
import download from "../assets/download.gif";

const Home = () => {
  return (
    <section
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b bg-slate-900"
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
            <div>This is Harinath</div>
          </h2>
          <h3 className="text-gray-400">Web Developer</h3>
          <p className="text-gray-300 py-4 max-w-md">
            I am a desperate developer who is looking for an opportunity to
            achieve big goals in my career and improve my expertise
            time-to-time.
          </p>

          <div className="w-auto">
            <a
              href={Resume}
              download={true}
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-700 cursor-pointe hover:from-green-700 hover:to-green-400 font-bold hover:scale-105 duration-200 text-lg"
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
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
