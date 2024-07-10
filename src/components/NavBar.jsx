import logo from "../assets/anonymity.png";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { links } from "./profile_data";

const NavBar = () => {

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
          return (
            <li key={data.id}>
              <p className="px-2 inline-flex">|</p>
              <Link
                activeClass="active"
                to={data.link_url}
                spy={true}
                smooth="true"
                offset={-50}
                duration={500}
                className="cursor-pointer capitalize text-orange-400  duration-200 hover:underline hover:text-blue-400 font-bold active:bg-green-600 active:text-white active:font-bold"
              >
                {data.link_name} 
              </Link>
            </li>
          );
        })}
      </ul>

      
    </div>
  );
};

export default NavBar;
