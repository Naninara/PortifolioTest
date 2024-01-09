import React from "react";

function Footer() {
  return (
    <div className="w-full flex items-center justify-between bg-black text-white flex-col md:flex-row p-[1%]">
      <div>
        <h1 className="font-sora font-[700] cursor-pointer hover:scale-110 duration-300 md:ml-4">
          Mavin Nara
        </h1>
      </div>
      <div className="md:mr-4 ">Made with ❤️</div>
    </div>
  );
}

export default Footer;
