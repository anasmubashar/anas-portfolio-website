import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" md:hidden">
      <button onClick={toggleMenu}>
        <img
          className="size-7 md:hidden"
          src="./material-symbols_menu.svg"
          alt=""
        />
      </button>

      <div
        className={`fixed z-10 top-0 right-0 w-full sm:w-1/2 h-full bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <img
          className="md:hidden size-12 object-contain bg-white rounded-full ml-auto mr-4 mt-4"
          src="./icons8-cancel.svg"
          alt=""
          onClick={toggleMenu}
        />
        <div className="p-4 flex flex-col items-center font-Sora font-Bold text-2xl mt-10">
          <a
            href="#About"
            className="block py-2 mb-3 hover:transform hover:scale-125 hover:transition-transform hover:ease-in-out duration-200"
          >
            Home
          </a>
          <a
            href="#Skills"
            className="block py-2 mb-3 hover:transform hover:scale-125 hover:transition-transform hover:ease-in-out duration-200"
          >
            About
          </a>
          <a
            href="#Project"
            className="block py-2 mb-3 hover:transform hover:scale-125 hover:transition-transform hover:ease-in-out duration-200"
          >
            Services
          </a>
          <a
            href="#Contacts"
            className="block py-2 mb-3 hover:transform hover:scale-125 hover:transition-transform hover:ease-in-out duration-200"
          >
            Contact
          </a>
          <button className="mt-4 w-24 h-8 bg-gray-400 rounded font-Sora text-black flex justify-center items-center font-semibold text-sm">
            <p className="text-black font-semibold text-sm mr-2 font-Sora">
              Resume
            </p>
            <a href="https://docs.google.com/document/d/1aquSH9ugcf59272ia3Q2GOFipysoPkS_CGLTanbHhOc/export?format=pdf">
              <img
                className="h-4 w-4 object-cover"
                src="./download (1).svg"
                alt=""
              />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

function Header() {
  return (
    <div className="flex mt-6 justify-around items-center">
      <img src="./Frame 40.svg" alt="Logo" />
      <div>
        <nav>
          <ul className="hidden md:flex lg:text-base text-sm font-semibold">
            <li className="mr-4 font-Sora">
              <button>
                <a href="#About">About Me</a>
              </button>
            </li>
            <li className="mr-4 font-Sora">
              <button>
                <a href="#Skills">Skills</a>
              </button>
            </li>
            <li className="mr-4 font-Sora">
              <button>
                <a href="#Project">Projects</a>
              </button>
            </li>
            <li className=" font-Sora">
              <button>
                <a href="#Contacts">Contact Me</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <a href="https://docs.google.com/document/d/1aquSH9ugcf59272ia3Q2GOFipysoPkS_CGLTanbHhOc/export?format=pdf">
        <button className="bg-black w-24 hidden md:flex h-8 justify-center items-center rounded">
          <p className="text-white font-semibold text-sm mr-2 font-Sora">
            Resume
          </p>
          <img className="h-4 w-4 object-cover" src="./download.svg" alt="" />
        </button>
      </a>

      {/* <img
        className="size-7 md:hidden"
        src="./material-symbols_menu.svg"
        alt=""
      /> */}
      <Navbar />
    </div>
  );
}

function Main() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-normal relative h-fit w-[90%] sm:w-[85%] mt-10 mx-auto mb-10 ">
      <div className="order-2 md:absolute h-full flex flex-col justify-center md:mt-0 mt-8">
        <p className="font-Sora lg:text-4xl text-2xl xs:text-[27px] sm:text-3xl text-start md:text-start sm:text-center">
          Hello I’m{" "}
          <span className="font-bold gradient-text">Anas Mubashar.</span>
        </p>
        <p className="font-Sora mt-2 text-2xl xs:text-[27px] sm:text-3xl text-start lg:text-4xl md:text-start sm:text-center">
          <span className=" font-bold">Frontend</span>
          <span className="gradient-stroke font-semibold">Developer</span>
        </p>
        <p className="font-Sora mt-2 text-2xl xs:text-[27px] sm:text-3xl text-start lg:text-4xl md:text-start sm:text-center">
          Based in <span className="font-bold gradient-text">Pakistan.</span>
        </p>
        <p className=" font-Sora mt-4 text-[#75717A] text-[13px] lg:text-base font-medium h-fill w-full md:w-[50%] text-start md:text-start sm:text-center ">
          I'm Anas, a frontend developer with a knack for crafting visually
          stunning and highly interactive websites. My passion lies in
          transforming complex problems into sleek, intuitive user experiences.
          I love exploring the latest web technologies and pushing the
          boundaries of what's possible in web development. Let's build
          something amazing together!
        </p>
        {/* <div className="flex">
            <div>
                <img className="h-8 w-8 object-cover" src="./" alt="" />
            </div>
        </div> */}
      </div>

      <img
        className="size-[90%] sm:size-[70%] md:size-[50%] lg:size-[40%] md:order-2 object-contain mx-auto md:mx-0 md:ml-auto "
        src="./Banner (3).svg"
        alt=""
      />
    </div>
  );
}

function Skills() {
  let chageImage = [
    "./icons8-html.svg",
    "./icons8-css3.svg",
    "./icons8-js.svg",
    "./icons8-react-js.svg",
    "./icons8-tailwind-css.svg",
    "./icons8-mysql-logo.svg",
    "./icons8-git.svg",
    "./icons8-firebase.svg",
  ];

  return (
    <div
      id="Skills"
      className="w-[80%] h-[30%] mx-auto mt-20 flex flex-col items-center"
    >
      <p className="font-Sora text-3xl">
        My <span className="font-bold">Skills</span>
      </p>
      <div className="w-full mt-8 grid gap-y-4  gap-0 md:gap-4 justify-items-center lg:grid-cols-5 lg:grid-rows-2 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-4">
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center ">
          <img
            className="object-cover size-[50%]"
            src="./icons8-html (1).svg"
            alt="html-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = "./icons8-html.svg";
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-html (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = "./icons8-html.svg";
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-html (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">Html</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[60%]"
            src="./icons8-css3 (1).svg"
            alt="css-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(1);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-css3 (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(1);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-css3 (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">CSS</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[50%]"
            src="./icons8-javascript.svg"
            alt="javascript-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(2);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-javascript.svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(2);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-javascript.svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">Javascript</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[50%]"
            src="./icons8-react-native.svg"
            alt="react-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(3);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-react-native.svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(3);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-react-native.svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">React.js</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[50%]"
            src="./icons8-tailwind-css (1).svg"
            alt="tailwind-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(4);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-tailwind-css (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(4);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-tailwind-css (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">Tailwind CSS</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[50%]"
            src="./icons8-mysql-logo (1).svg"
            alt="mysql-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(5);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-mysql-logo (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(5);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-mysql-logo (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">MySql</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[50%]"
            src="./icons8-git (1).svg"
            alt="git-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(6);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-git (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(6);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-git (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">Git</p>
        </div>
        <div className="w-28 h-28 border-black border flex flex-col justify-evenly items-center">
          <img
            className="object-cover size-[45%]"
            src="./icons8-firebase (1).svg"
            alt="firebase-image"
            onMouseEnter={(e) => {
              e.currentTarget.src = chageImage.at(7);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = "./icons8-firebase (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
            onTouchStart={(e) => {
              e.currentTarget.src = chageImage.at(7);
              e.currentTarget.style.transition = "all 0.5s ease-in-out";
              e.currentTarget.parentElement.style.background =
                "linear-gradient(90deg, #B01697 0%, #E01E4D 100%)";
              e.currentTarget.parentElement.style.color = "white";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.src = "./icons8-firebase (1).svg";
              e.currentTarget.parentElement.style.background = "white";
              e.currentTarget.parentElement.style.color = "black";
            }}
          />
          <p className="font-Sora text-sm font-bold">Firebase</p>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="w-full h-fit mt-16 bg-black flex flex-col items-center">
      <p className="font-Sora text-3xl text-white mt-8">
        My <span className="font-extrabold">Experience</span>
      </p>
      <div className="w-[90%] md:w-[80%] h-fit pb-2 border-[#71717A] border mt-6 px-4 rounded hover:bg-[#27272A]">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center pt-2">
          <div className="flex items-center">
            <img
              className="size-10 object-contain mr-3"
              src="./theheadstarter_logo.jpeg"
              alt=""
            />
            <p className="font-Sora text-lg font-semibold text-white ">
              Software Engineering Fellowship
            </p>
          </div>
          <div>
            <p className="font-Sora text-xs font-semibold text-[#D4D4D8] mb-4 md:mb-0">
              Jul 2024 - Present
            </p>
          </div>
        </div>
        <p className="text-[#D4D4D8] text-sm">
          I'm currently participating in a fellowship with Headstarter AI, where
          I will be building 5 AI projects in 5 weeks. For my final project, I
          aim to achieve one of the following goals: 1000 people on the
          waitlist, 1000 accounts created, or $1000 in revenue. In this
          fellowship, I will learn React.js, Next.js, MUI, Firebase, AI, vector
          databases, AWS EC2, and AWS Lambda. This experience is not only
          enhancing my technical expertise but also providing valuable skills in
          teamwork, collaboration, and project management.
        </p>
      </div>
      <div className="w-[90%] md:w-[80%] h-fit pb-2 border-[#71717A] border mt-6 px-4 mb-12 rounded hover:bg-[#27272A]">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center">
            <img
              className="size-14 object-contain mr-1"
              src="./thebytewise_logo.jpeg"
              alt=""
            />
            <p className="font-Sora text-lg font-semibold text-white ">
              React & Next.js Fellowship
            </p>
          </div>
          <div>
            <p className="font-Sora text-xs font-semibold text-[#D4D4D8] mb-4 md:mb-0">
              Jun 2024 - Present
            </p>
          </div>
        </div>
        <p className="text-[#D4D4D8] text-sm">
          During my fellowship at Bytewise Limited, I had the opportunity to
          deepen my knowledge and skills in web development. I learned HTML,
          CSS, JavaScript, React, Redux, Material-UI (MUI), and Next.js. This
          experience has been instrumental in enhancing my technical abilities
          and understanding of modern web technologies.
        </p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      id="About"
      className="w-[90%] sm:w-[85%] h-fit flex flex-col md:flex-row mb-8 mt-16 mx-auto"
    >
      <img
        className="size-[90%] sm:size-[60%] md:size-[50%]  md:mr-4 mx-auto"
        src="./Group 1000015845 (1).svg"
        alt=""
      />
      <div>
        <p className="font-Sora text-3xl mt-6 md:mt-0 mb-4 md:mb-0">
          About <span className="font-extrabold">Me</span>
        </p>
        <p className="font-Sora mt-2 text-[#75717A] lg:text-base text-[13px] md:text-responsive">
          I'm Anas, a frontend developer with a deep interest in modern web
          technologies. My skills include HTML, CSS, JavaScript, Tailwind CSS,
          React.js, API integrations, Firebase, and MySQL. I enjoy creating
          responsive and interactive user interfaces that provide seamless user
          experiences.
        </p>
        <p className="font-Sora mt-2 md:mt-1 text-[#75717A] lg:text-base text-[13px] md:text-responsive">
          I have worked on various projects, from building comprehensive
          management systems to developing user-friendly mobile applications.
          These experiences have allowed me to hone my skills and adapt to
          different technologies and frameworks, ensuring I can deliver
          high-quality solutions.
        </p>
        <p className="font-Sora mt-2 md:mt-1 text-[#75717A] lg:text-base text-[13px] md:text-responsive ">
          Currently, I'm expanding my knowledge by learning Next.js and backend
          technologies like Node.js and Express.js. I am passionate about
          continually improving my skills and staying updated with the latest
          industry trends to deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div
      id="Project"
      className="w-full h-fill bg-black flex flex-col items-center"
    >
      <p className="font-Sora text-3xl text-white mt-8">
        My <span className="font-extrabold">Projects</span>
      </p>
      <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col md:flex-row mt-10">
        <img
          className="w-full lg:w-[27%] md:w-[38%] object-scale-down h-56 rounded-md border-[#71717A] border mr-10 mb-6 md:mb-0"
          src="./Screenshot 2024-07-19 125154.jpg"
          alt=""
        />
        <div className="w-50% font-Sora flex flex-col justify-evenly text-white">
          <p className="font-extrabold text-3xl mb-3 md:mb-0">01</p>
          <p className="font-bold text-2xl mb-3 md:mb-0">
            Weather Forecast Application
          </p>
          <p className="text-[#71717A] font-light text-xs mb-3 md:mb-0">
            Developed an interactive and user-friendly weather application using
            React + Vite, Tailwind CSS, Unsplash API, and OpenWeatherMap API.
            With this app, you can search for any city and get real-time weather
            updates along with a beautiful image of the city.
          </p>
          <a href="https://react-weather-webapp1.netlify.app/" target="_blank">
            <button>
              <img
                className="object-cover size-4"
                src="./Read More.svg"
                alt=""
              />
            </button>
          </a>
        </div>
      </div>
      <div className="w-[90%] sm:w-[80%] mx-auto flex flex-col md:flex-row mt-10 mb-10">
        <img
          className="w-full md:w-[40%] object-cover h-56 rounded-md border-[#71717A] border mr-10 mb-6 md:mb-0"
          src="./wqzotbyfysz9pbfk9jus.jpg"
          alt=""
        />
        <div className="w-50% font-Sora flex flex-col justify-evenly text-white">
          <p className="font-extrabold text-3xl mb-3 md:mb-0">02</p>
          <p className="font-bold text-2xl mb-3 md:mb-0">
            Sunnyside Agency Landing Page
          </p>
          <p className="text-[#71717A] font-light text-xs mb-3 md:mb-0">
            Developed a responsive agency landing page using HTML and Tailwind
            CSS. Implemented modern design principles to create a visually
            appealing layout, ensuring optimal performance and user experience
            across various devices and screen sizes.
          </p>
          <a
            href="https://sunnyside-landingpage-byanas.netlify.app/#"
            target="_blank"
          >
            <button>
              <img
                className="object-cover size-4"
                src="./Read More.svg"
                alt=""
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function GetInTouch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oxwca5d", "template_fyzdhmw", form.current, {
        publicKey: "V7JUsY7JfX7b2ZpNV",
      })
      .then(
        () => {
          alert("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
          form.current.reset();
        }
      );
  };

  return (
    <div
      id="Contacts"
      className="w-[95%] md:w-[80%] h-fit mb-10 mx-auto mt-20 flex flex-col md:flex-row items-center md:items-start md:justify-between text-[#71717A] font-Sora text-sm font-light"
    >
      <div className="h-fit w-[95%] sm:w-[80%] md:w-[45%] mb-6 md:mb-0">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <input
            className="border-black border mb-6 h-10 rounded pl-3"
            type="text"
            placeholder="Your name"
            name="from_name"
            required
          />
          <input
            className="border-black border mb-6 h-10 rounded pl-3"
            type="email"
            placeholder="Email"
            name="from_email"
            required
          />
          <textarea
            className="border-black border mb-6 h-20 rounded pt-1 pl-3"
            name="message"
            id="message"
            placeholder="How can I help you?"
            required
          ></textarea>
          <div className="flex">
            <input
              className="text-white bg-black w-28 h-10 rounded text-sm font-semibold mr-4"
              type="submit"
              value="Get In Touch"
            />

            <div className="flex">
              <a
                href="mailto:anasmubashar812@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded border-black border mr-4 flex justify-center items-center"
                >
                  <img className="size-6 " src="./icons8-gmail.svg" alt="" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-mubashar-958435215/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded border-black border mr-4 flex justify-center items-center"
                >
                  <img className="size-6 " src="./icons8-linkedin.svg" alt="" />
                </button>
              </a>

              <a
                href="https://github.com/anasmubashar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded border-black border flex justify-center items-center"
                >
                  <img className="size-7 " src="./icons8-github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="md:ml-16 font-Sora text-3xl font-extrabold text-black flex flex-col w-[95%] sm:w-[80%] md:w-[60%]">
        <p className="mb-2 ">Let’s talk for</p>
        <p className="mb-4">Something special</p>
        <p className="text-[#71717A] text-sm mb-4">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p className="text-xl mb-4">Anasmubashar812@gmail.com</p>
        <p className="text-xl">+92 3127259255</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <GetInTouch />
    </>
  );
}

export default App;
