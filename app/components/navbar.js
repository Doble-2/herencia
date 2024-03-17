"use client";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEgg } from "react-icons/md";
export default function Navbar() {
  const [ShowNavbar, ShowSetNavbar] = useState(false);
  return (
    <div className="px-5 w-full absolute">
      <nav class="bg-[#F8F5EA] rounded-[20px] shadow-md mt-2  ">
        <div class=" flex justify-between">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Image width={20} height={20} class="w-fit h-12	" src={"Recurso2.svg"} alt="logo" />
          </a>
          <div class="max-w-screen-xl w-fit flex flex-wrap items-center justify-between p-4">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="shadow-2xl inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#F9B233] rounded-3xl	 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => ShowSetNavbar(!ShowNavbar)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5 text-[#D9D9D9]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-lg	 ">
                <li>
                  <a
                    href="#"
                    class="block mr-4 ml-4  text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block mr-4 ml-4 text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Conocenos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block mr-4 ml-4  text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Encuesta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block mr-4 ml-4 text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Enlaces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center  pb-1 mt-4 md:hidden md:pb-0 md:mt-0 ${
            ShowNavbar ? "block" : "hidden"
          }`}
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-lg	 ">
            <li>
              <a
                href="#"
                class="block mr-4 ml-4  text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block mr-4 ml-4 text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Conocenos
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block mr-4 ml-4  text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Encuesta
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block mr-4 ml-4 text-[#F9B233] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#C79030] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Enlaces
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
