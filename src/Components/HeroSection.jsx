import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

function HeroSection() {
  const SocialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mavinnara",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/naninara",
    },
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/nmvmanikanta/",
    },
    {
      icon: <SiGeeksforgeeks />,
      link: "https://auth.geeksforgeeks.org/user/nmvmanikanta/",
    },
  ];
  return (
    <div
      className="overflow-x-hidden w-full h-auto flex flex-col-reverse md:flex-row"
      name="home"
    >
      <motion.div
        className="w-full flex items-center p-4 md:p-20 flex-col gap-6 md:w-1/2"
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h1 className=" text-[27px] md:text-[48px] font-sora">
            Hello i'm <span className="font-[800]">Mavin Nara</span>
          </h1>
          <h1 className=" text-[27px] md:text-[48px] font-sora">
            <span className="font-[800]">Full Stack</span> Developer
          </h1>
        </div>
        <div className="w-auto text-justify  md:px-0">
          <p>
            This is Mavin, graduate in Mechanical Engineering from Aditya
            Engineering College( 2024 ), with strong software programming and
            developing skills with <b>MERN Stack </b>and <b>Java Backend</b>{" "}
            with basic Data Structures
          </p>
        </div>
        <div className="flex gap-4 md:gap-[30px]">
          {SocialLinks.map((ele) => {
            return (
              <a
                href={ele.link}
                target={"_blank"}
                rel="noreferrer"
                className="hover:scale-110 duration-300"
              >
                <div className="group w-auto h-auto flex items-center justify-center   border-black border-2 p-[16px] hover:bg-black duration-300 cursor-pointer">
                  <span className="text-black group-hover:text-white">
                    {ele.icon}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="w-full flex items-center justify-center md:w-1/2"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://res.cloudinary.com/dggryzgok/image/upload/v1704258910/portifolio/etudhajilsnpad3bpwsy.png"
          alt="profile"
        />
      </motion.div>
    </div>
  );
}

export default HeroSection;
