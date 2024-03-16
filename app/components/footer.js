import React from "react";
import { MdEgg } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full text-white bg-ownOrange h-fitcontent">
      <div className=" ">
        <div className="px-10 vw100 lg:py-10 py-5  md:flex md:items-center md:justify-between">
          <span className="text-sm text-white  justify-center flex  sm:text-center">
            {" "}
            Desarrollado con Cero Presión.
          </span>

          <div className="flex mt-4 space-x-6 opacity-1 justify-center md:mt-0">
            <a
              href="https://github.com/Doble-2"
              target="blank"
              className="text-white"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://github.com/Doble-2"
              target="blank"
              className="text-white"
            >
              <IoLogoFigma />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
