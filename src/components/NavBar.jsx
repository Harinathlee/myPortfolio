import logo from "../assets/anonymity.png";
import React, { useState } from "react";
import { useEffect } from "react";
/*import {FaBars,FaTimes} from "react-icons/fa";*/
import { Link } from "react-scroll";

const NavBar = () => {
  // [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link_name: "Home",
      link_url: "home",
      active: true,
    },
    {
      id: 2,
      link_name: "About",
      link_url: "about",
      active: false,
    },
    {
      id: 3,
      link_name: "Experience",
      link_url: "experience",
      active: false,
    },
    {
      id: 4,
      link_name: "Skills",
      link_url: "skills",
      active: false,
    },
    {
      id: 5,
      link_name: "Projects",
      link_url: "projects",
      active: false,
    },
    {
      id: 6,
      link_name: "Education",
      link_url: "education",
      active: false,
    },
    {
      id: 7,
      link_name: "Contact",
      link_url: "contact",
      active: false,
    },
  ];
  const [scrollNav, setScroolNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroolNav(true);
    } else {
      setScroolNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  
  return (
    <div
      className="flex justify-between items-center w-full h-14 px-4 text-white bg-slate-900 fixed z-50"
      scrollNav={scrollNav}
    >
      <div>
        <a href="/" className="text-4xl font-signature m-2 font-bold">
          <span className="text-orange-400">Know</span>
          <span className="text-blue-400">Me</span>
          <img
            src={logo}
            alt="logo"
            className="icon inline-block w-[36px]"
          ></img>
        </a>
      </div>
      <ul className="hidden md:flex">
        {links.map((data) => {
          console.log(data.link_url);
          return (
            <li key={data.id} className="px-4 ">
              {/*} <a
                onClick={() => setNav(!nav)}
                href={data.link_url}
                smooth
                duration={500}
              >
                {data.link_name}
          </a>{*/}
              <Link
                activeClass="active"
                to={data.link_url}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
             
                className="cursor-pointer capitalize font-medium text-blue-400 hover:scale-105 duration-200 hover:underline hover:text-yellow-500 hover:font-bold active:bg-green-600 active:text-white active:font-bold"
              >
                {data.link_name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/*this is the same nav bar to show uda differently on mobile view
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ data}) => (
            <li
              key={data.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={data.link_url}
                smooth
                duration={500}
              >
                {data.link_name}
              </Link>
            </li>
          ))}
        </ul>
          )}*/}
    </div>
  );
};

export default NavBar;
