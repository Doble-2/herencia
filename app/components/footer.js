import React from "react";
import { MdEgg } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full bg-ownCreme  bg-[#D9D9D9] flex flex-row md:items-center justify-center	items-center	">
      <div class="basis-1/4">01</div>
      <div class="basis-1/2 px-10 vw100 lg:py-10 py-5  md:flex"> 
          <span className="text-lg  font-bold justify-center flex  sm:text-center">
            {" "}
            Desarrollado con Cero Presión.
          </span>
      </div>
      <div class="basis-1/4"><div className="flex mt-4 space-x-6 opacity-1 justify-center md:mt-0">
            <a
              href="https://github.com/Doble-2"
              target="blank"
              className=""
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://github.com/Doble-2"
              target="blank"
              className=""
            >
              <IoLogoFigma />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
    </div>
  );
}
