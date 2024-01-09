import React from "react";
import img from "../Assets/21A95A0340(1).jpg";
import { FaAngleRight } from "react-icons/fa";
function HeroSection() {
  return (
    <div className="h-screen w-full bg-black text-white">
      <div className=" max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full  py-10 px-5 md:flex-row ">
        <div className="flex flex-col justify-center  h-full gap-4 mt-4 ">
          <h1 className="text-4xl sm:text-7xl font-bold ">
            I'M A Full Stack Developer
          </h1>
          <p className=" text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet. Qui galisum aperiam est sint fugiat eos
            eius delectus aut nisi galisum! Vel dolorem dolores et nisi animi
            est laudantium perspiciatis ab optio nisi sed nostrum eligendi sit
          </p>
          <div>
            <button className="group flex cursor-pointer p-3 justify-center items-center text-white w-fit gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500">
              Portifolio
              <span className="group-hover:rotate-90 duration-300">
                <FaAngleRight />
              </span>
            </button>
          </div>
        </div>
        <img
          src={img}
          height="300"
          width={300}
          alt={"profile img"}
          className="rounded-2xl mt-2"
        />
      </div>
    </div>
  );
}

export default HeroSection;
