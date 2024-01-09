import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-[80px] py-[20px] items-center sticky top-0 z-50 bg-white">
        <div>
          <h1 className=" font-sora font-[700] cursor-pointer hover:scale-110 duration-300">
            Mavin
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-[32px] font-sora font-[700] text-[15px] ">
            <Link
              to="home"
              smooth
              offset={-100}
              className="cursor-pointer hover:scale-110 duration-300"
            >
              Home
            </Link>
            <Link
              to="skills"
              offset={-100}
              className="cursor-pointer hover:scale-110 duration-300"
              smooth
            >
              Skills
            </Link>
            <Link
              to="projects"
              className="cursor-pointer hover:scale-110 duration-300"
              smooth
              offset={-100}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="cursor-pointer hover:scale-110 duration-300"
              smooth
              offset={-100}
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="hidden md:block">
          <a href="./Resume.pdf" target="_blank" download={true}>
            <button className="h-[56px] px-[20px] py-[16px] bg-black flex items-center justify-center text-white font-sora gap-[8px] rounded-md font-[600]">
              <span>Resume</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="block md:hidden">
          <svg
            onClick={() => {
              setOpen(!open);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <rect width="36" height="36" fill="white" />
            <path
              d="M4.5 27V24H31.5V27H4.5ZM4.5 19.5V16.5H31.5V19.5H4.5ZM4.5 12V9H31.5V12H4.5Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {open && (
        <motion.div
          className="flex items-center justify-center h-[100vh] z-20 fixed top-0 bg-white  w-full"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.ul
            className="flex flex-col gap-[32px] font-sora font-[700] text-[15px] items-center"
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.65 }}
          >
            <Link
              smooth
              to="home"
              className="cursor-pointer hover:scale-110 duration-300"
              offset={-100}
              onClick={() => {
                setOpen(!open);
              }}
            >
              Home
            </Link>
            <Link
              smooth
              to="skills"
              offset={-100}
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </Link>
            <Link
              smooth
              to="projects"
              offset={-100}
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </Link>
            <Link
              smooth
              to="contact"
              offset={-100}
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Contact
            </Link>
            <li className="cursor-pointer hover:scale-110 duration-300">
              <a href="./Resume.pdf" target="_blank" download={true}>
                <button className="h-[56px] px-[20px] py-[16px] bg-black flex items-center justify-center text-white font-sora gap-[8px] rounded-md font-[600]">
                  <span>Resume</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
