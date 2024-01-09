import React from "react";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
  const array = [
    {
      name: "LinkedIN",
      href: "http://www.linkedin.com/in/mavinnara",
      Icon: <FaLinkedin size={30} />,
    },
    {
      name: "Github",
      href: "https://github.com/naninara",
      Icon: <FaGithub size={30} />,
    },
    {
      name: "Gmail",
      href: "mailto:mavinnara031@gmail.com",
      Icon: <CiMail size={30} />,
    },
    {
      name: "Resume",
      href: "./Resume.pdf",
      download: true,
      Icon: <BsFillPersonLinesFill size={30} />,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {array.map((ele, index) => {
          return (
            <li className="hidden lg:flex justify-between items-center w-40 h-14 ml-[-92px] bg-gray-400 hover:ml-0 duration-500 ">
              <a
                href={ele.href}
                className="flex justify-around items-center w-full text-white"
                download={ele.download}
                target="_blank"
                rel="noreferrer"
              >
                {ele.name} {ele.Icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
