import React from "react";
import { MdEgg } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full bg-ownCreme bg-[#D9D9D9] flex flex-row md:items-center justify-center	items-center flex-nowrap	">
      <div class="basis-1/2">
          <Image width={40} height={40} class="w-max h-14 ml-6" src={"Recurso2.svg"} alt="logo"/>
      </div>
      <div class="basis-1/2 px-10 vw100 lg:py-10 py-5  md:flex text-center"> 
          <span className="text-base font-bold sm:text-center text-center">
            {" "}
            Desarrollado con Cero Presión
          </span>
      </div>
      <div class="basis-1/4"><div className="flex mt-6 space-x-6 opacity-1 justify-center md:mt-0">
            <a
              href="https://github.com/Doble-2/herencia"
              target="blank"
              className="text-2xl	"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.figma.com/file/566oMBac0hxjfqRrEy6yEF/codicon?type=design&node-id=0%3A1&mode=design&t=KUBLPeULZ0qrmSQU-1"
              target="blank"
              className="text-2xl	"
            >
              <IoLogoFigma />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
    </div>
  );
}
