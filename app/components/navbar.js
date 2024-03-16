"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MdEgg } from "react-icons/md";
export default function Navbar() {
  const [ShowNavbar, ShowSetNavbar] = useState(false);
  return (
    <nav className="w-full nav shadow">
      <div className={` px-4 mx-auto lg:max-w-7xl items-center justify-center flex `/*md:items-center md:flex md:px-8*/}>
        <div>
          <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <Link href={"/"} as={"/"} className="flex items-center">
             <MdEgg className="text-white text-xl mr-3"/>
              <h2 className="text-xl text-white font-bold">
               Born.ai
              </h2>
            </Link>
            {/*<div className="md:hidden">
              <button
                className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => ShowSetNavbar(!ShowNavbar)}
              >
                {ShowNavbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>/*/}
          </div>
        </div>
        {/*<div
          className={`flex-1 justify-self-center pb-1 mt-4 md:block md:pb-0 md:mt-0 ${
            ShowNavbar ? "block" : "hidden"
          }`}
        >
          <ul className="menu-nav items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white">
              <Link href="/">Inicio</Link>
            </li>
            <li className="text-white">
              <Link href="/#howwork">Como funciona?</Link>
            </li>
            <li className="text-white">
              <Link href="/#team">Equipo Herencia</Link>
            </li>
          
          </ul>
        </div>*/}
      </div>
    </nav>
  );
}
