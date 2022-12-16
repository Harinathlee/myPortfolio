import React, { useRef, useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import instagram from "../assets/instagram.png";
import stackoverflow from "../assets/stack-overflow.png";
import discord from "../assets/discord.png";
import naukri from "../assets/naukri.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [mailStatus, setMailStatus] = useState("message not sent");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "outlook_mail",
        "outlook_template",
        form.current,
        "RnYWQfOD57-pswRRM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setMailStatus("message sent");
          console.log(mailStatus);
        },
        (error) => {
          console.log(error.text);
          setMailStatus("message not sent");
          console.log(mailStatus);
        }
      );

  };
  const contacts = [
    {
      id: 1,
      value: "+91-9963371677",
      logo: whatsapp,
    },
    {
      id: 2,
      value: "harinathlee2598@outlook.com",
      logo: email,
    },
    {
      id: 3,
      value: "Chittoor, Andhra Pradesh, India.",
      logo: location,
    },
  ];
  const sociallogos = [
    {
      id: 1,
      logo: stackoverflow,
      name: "stackoverflow",
    },
    {
      id: 2,
      logo: naukri,
      name: "naukri",
    },

    {
      id: 3,
      logo: discord,
      name: "discord",
    },

    {
      id: 4,
      logo: instagram,
      name: "instagram",
    },
  ];
  return (
    <section
      id="contact"
      name="contact"
      className="w-full min-h-screen bg-slate-900 p-4 text-white font-Open_Sans"
    >
      <div className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-2 mx-auto text-slate-50">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            Contact Me
          </p>
          <div className="flex flex-col justify-between space-y-4">
            <p className="py-6">
              To get in touch with me through email submit the contact form with
              correct details and your concern message. If you want to contact
              me through some other way the contact details and links are listed
              below. Feel free to conatct in any form listed below.
            </p>
            {contacts.map((data) => (
              <div className="space-y-10" key={data.id}>
                <img
                  src={data.logo}
                  alt="whatsapp"
                  className="w-6 inline-flex"
                ></img>
                <span className="px-4">{data.value}</span>
              </div>
            ))}
            <div className="mt-4 space-x-5 p-4">
              {sociallogos.map((data) => (
                <img
                  key={data.id}
                  src={data.logo}
                  alt={data.name}
                  className="w-7 inline-flex hover:scale-110 cursor-pointer"
                ></img>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-lg shadow-blue-400 px-8 py-2 mt-6 bg-blue-500 text-white  flex flex-col justify-between">
          <form className="mt-6" ref={form} onSubmit={sendEmail}>
            <div className="mb-2">
              <label>
                <span
                  className="text-slate-900 font-bold
                "
                >
                  Your name:
                </span>
                <input
                  type="text"
                  name="user_name"
                  className="
                  text-black
            w-full
            block px-8 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="John cooks"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span
                  className="text-slate-900 font-bold
                "
                >
                  Email address:
                </span>
                <input
                  name="user_email"
                  type="email"
                  className="
                  text-black
            block
            w-full
            mt-2 px-8 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="john.cooks@example.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span
                  className="text-slate-900 font-bold
                "
                >
                  Subject:
                </span>
                <input
                  type="text"
                  name="subject"
                  className="
                  text-black
            w-full
            block px-8 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Hire you"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span
                  className="text-slate-900 font-bold
                "
                >
                  Message:
                </span>
                <textarea
                  name="message"
                  className="
                  text-black
            block
            w-full
            mt-2 px-8 py-4
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="5"
                  placeholder="Type your message here........"
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            hover:scale-105
            hover:font-bold
          "
              >
                Contact Me
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
