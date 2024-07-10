//import of logos that is used in social logos
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import instagram from "../assets/instagram.png";
import stackoverflow from "../assets/stack-overflow.png";
import discord from "../assets/discord.png";

//imports of images linked to projects
import lovecalculator from "../assets/projects/lovecalculator.png";
import upoint_query_builder from "../assets/projects/upoint-query-builder.png";
import knowmelee from "../assets/projects/knowme-lee.png";
import creativecreatures from "../assets/projects/CreativeCreatures.png";

//importing university logos for education details
import bits from "../assets/bits.png";
import svu from "../assets/svu.png";

//importing logos of techs used in skilss details 
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
//importing logo of company to add in experience data
import wipro from "../assets/wipro.png";

//import images to use in hobbies section
import writing from "../assets/writing.png";
import learning from "../assets/learning.png";
import cooking from "../assets/cooking.png";
import cycling from "../assets/cycling.png";
import videoediting from "../assets/videoediting.png";
import travelling from "../assets/travelling.png";

//Data of links that is shown in Nav Bar
export const links = [
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
      link_name: "expertise",
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
      link_name: "Academics",
      link_url: "education",
      active: false,
    },
    {
      id: 7,
      link_name: "Testimonials",
      link_url: "testimonials",
      active: false,
    },
    
    {
      id: 8,
      link_name: "Hobbies",
      link_url: "hobbies",
      active: false,
    },
    {
      id: 9,
      link_name: "Contact",
      link_url: "contact",
      active: false,
    },
  ];

  //data of my professional experince 
  export const experienceData = [
    {
      id: 1,
      company: "Wipro Technologies, Chennai , India.",
      job_title: "Project Engineer",
      job_description: "Java Developer",
      year: "May 2018 - Present",
      logo: wipro,
      responsibilities: [
        "I am currently working as a senior project engineer in wipro for the client Alight solutions as a Developer support.",
        "I analyze and update data in a database that is utilised for development purposes.",
        "Mostly we use own client tools(Upoint) for updating data.When we get huge data it takes too long to update in tooling so we use SQL queries to update it.",
        "On extra I used to help other teams in migrating code files from SVN to Bitbucket (cloud service).",
        "I developed a React Progressive Web App(PWA) using HTML, CSS, JS & ReactJS for my team, which creates SQL queries automatically in minutes rather than hours or days when done manually.",
       "This tool enabled our team to produce queries 90% quicker and update data nearly 100% error-free."
      ],
      achivements: [
        "Because of my passion for web development, I created a project for my team that generates SQL queries automatically in minutes rather than hours or days while doing it manually.",
      ],
    },
    
  ];

  //data of skills that i have

  export const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-[#e34c26]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-[#264de4]",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-[#61DBFB]",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-[#563d7c]",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  // Details of personal project that I have worked on
  export  const projects = [
    
    {
      id: 1,
      name: "Upoint-SQL Querey Builder",
      description:
        "This is a Progressive Web App (PWA) that I created to help my team save time by automatically creating SQL queries.",
      image: upoint_query_builder,
      technologies: ["ReactJS", "SCSS", "Java Script", "BootStarp"],
      benifites:
        "This is a real-time project that clients are using. It allows our team to construct queries automatically in minutes rather than spending hours or days writing the same queries manually, and it also decreases the possibility of errors.",
        link: "https://upoint-query-builder.netlify.app/",
        code :"https://github.com/Harinathlee/upoint-query-builder"
    },
    {
      id: 2,
      name: "KnowMe - myPortfolio",
      description:
        "This is my own portfolio website, where I can demonstrate my personality, experience, and skill to recruiters or clients interested in hiring me.",
      image: knowmelee,
      technologies: ["HTML", "React JS", "Tailwind CSS"],
      benifites: "It also allows folks to see my web building talents.",
      link: "/",
      code: "https://github.com/Harinathlee/myPortfolio"
    },
    {
      id: 3,
      name: "Creative Creatures",
      description:
        "This is my business website called CreativeCreatures where I provide services like digital wedding invitation videos and E-cards.",
      image: creativecreatures,
      technologies: ["HTML", "React JS", "Tailwind CSS","Ripple UI"],
      benifites:
        "It also allows folks to know about my business and let people see my sample works and let them to contact me through the social media accouts listed in site.",
        link: "https://creative-creatures.netlify.app/",
        code: "https://github.com/Harinathlee/CreativeCreatures"
    },
    {
      id: 4,
      name: "Lee-Love Calculator",
      description:
        "This website is an online version of the childhood game FLAMES, which we used to play to determine the relationship between two people.",
      image: lovecalculator,
      technologies: ["HTML", "CSS", "Java Script", "BootStarp"],
      benifites:
        "This is just a game I made to practice my web development abilities.",
      link: "https://lee-lovecalculator.netlify.app/",
      code: "https://github.com/Harinathlee/lee-Love-Calculator"
    },
  ];

  //education details

  export const educationData = [
    {
      id: 1,
      institute: "Birla Institute of Technology and Science ,Pilani,India.",
      course: "Master of Technology",
      branch: "Software Engineering",
      year: "2019 - 2022",
      score: "7.2",
      logo: bits,
    },
    {
      id: 2,
      institute: "Sri Venkateshwara University, Tirupati,India.",
      course: "Bachelore of Science",
      branch: "Computer Science",
      year: "2015 - 2018",
      score: "8.6",
      logo: svu,
    },
  ];

  // Data of contact details

  export const contacts = [
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

  //Data of social logos
  export const sociallogos = [
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


  // data of hobbies 
  
  export const hobbies = [
    {
      id: 1,
      src: writing,
      title: "writing",
    },
    {
      id: 2,
      src: cooking,
      title: "cooking",
    },
    {
      id: 3,
      src: videoediting,
      title: "video editing",
    },
    {
      id: 4,
      src: cycling,
      title: "cycling",
    },
    {
      id: 5,
      src: learning,
      title: "learning languages",
    },
    {
      id: 6,
      src: travelling,
      title: "travelling",
    },
  ];