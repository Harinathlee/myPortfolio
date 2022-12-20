import React, { useRef, useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import instagram from "../assets/instagram.png";
import stackoverflow from "../assets/stack-overflow.png";
import discord from "../assets/discord.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [mailStatus, setMailStatus] = useState("Send");
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
          e.target.reset();
          setMailStatus("Message Sent");
        },
        (error) => {
          setMailStatus("Message not Sent");
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
      link: "https://stackoverflow.com/users/18469310/harinathlee",
    },

    {
      id: 3,
      logo: discord,
      name: "discord",
      link: "https://discord.com/users/harinathlee#6335",
    },

    {
      id: 4,
      logo: instagram,
      name: "instagram",
      link: "https://www.instagram.com/harinath_lee/",
    },
  ];
  return (
    <section
      id="contact"
      name="contact"
      className="w-full h-auto mt-4 p-4 text-white font-Open_Sans"
    >
      <div className="max-w-screen-xl mt-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-2 mx-auto text-slate-50">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400 font-Roboto">
            <span>Contact </span> <span className="text-blue-400">Me</span>
          </p>
          <div className="flex flex-col justify-between space-y-4">
            <p className="py-6">
              To reach me by email, fill out the contact form with your contact
              information and a message. If you need to reach me in another way,
              my contact information and links are included below. Please
              contact me using any of the methods given below.
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
                <a href={data.link} key={data.id}>
                  <img
                    key={data.id}
                    src={data.logo}
                    alt={data.name}
                    className="w-7 inline-flex hover:scale-110 cursor-pointer"
                  ></img>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-2xl shadow-black px-8 py-2 mt-6 bg-blue-500 text-white  flex flex-col justify-between">
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
                  onClick={() => {
                    setMailStatus("Send");
                  }}
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
                  onClick={() => {
                    setMailStatus("Send");
                  }}
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
                  onClick={() => {
                    setMailStatus("Send");
                  }}
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
                  onClick={() => {
                    setMailStatus("Send");
                  }}
                ></textarea>
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="shadow-lg
                shadow-black
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
                hover:font-bold"
              >
                {mailStatus}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
