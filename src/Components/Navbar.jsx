import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  const array = [
    { id: 1, link: "home" },
    { id: 2, link: "Skills" },
    { id: 3, link: "Portifolio" },
    { id: 4, link: "Projects" },
  ];
  return (
    <div className="flex  justify-between items-center h-20 w-full sticky top-0 bg-black text-white px-16">
      <div className="font-signature text-4xl m-4 z-20">Mavin</div>
      <ul className="hidden md:flex gap-20">
        {array.map((ele) => {
          return (
            <li
              key={ele.id}
              className="capitalize cursor-pointer hover:scale-125 duration-200"
            >
              {ele.link}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer z-10 md:hidden sm:block"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-black gap-10">
          {array.map((ele) => {
            return (
              <li
                key={ele.id}
                className="capitalize hover:scale-125 duration-200"
              >
                {ele.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
