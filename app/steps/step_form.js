"use client";
import React, { useState, useEffect } from "react";
import { MdLogout } from "react-icons/md";
import * as Accordion from "@radix-ui/react-accordion";
//import { ChevronDownIcon } from "@radix-ui/react-icons";
import Multiselect from "multiselect-react-dropdown";
import { useFormStep } from "../hooks/use-form-step";
import { useForm } from "../hooks/use-form";
const parents = [
  {
    name: "Abuelo Paterno",
    code: "abuelo_paterno",
  },
  {
    name: "Abuelo Materno",
    code: "abuelo_materno",
  },
  {
    name: "Abuela Paterna",
    code: "abuela_paterna",
  },

  {
    name: "Abuela Materna",
    code: "abuela_materna",
  },
  {
    name: "Padre",
    code: "padre",
  },
  {
    name: "Madre",
    code: "madre",
  },
];

const enfermedades = [
  "Diabetes",
  "Hipertensión",
  "Cáncer",
  "Enfermedades del corazón",
  "Enfermedades pulmonares",
  "Enfermedades renales",
  "Enfermedades hepáticas",
];

const rasgos = [
  { name: "Color de ojos", values: ["Zafiro", "Esmeralda", "Avellana"] },

  { name: "Cabello", values: ["Lacio", "Ondulado", "Rizado"] },
];

export function StepForm() {
  const { handleNextStep, handlePreviousStep } = useFormStep();
  const { parentsData, setParentsData } = useForm();

  const onSelect = (selectedList, parentCode) => {
    console.log(parentsData);
    setParentsData({
      ...parentsData,
      [parentCode]: {
        ...parentsData[parentCode],
        enfermedades: selectedList,
      },
    });
  };

  const onRemove = (selectedList, parentCode) => {
    setParentsData({
      ...parentsData,
      [parentCode]: {
        ...parentsData[parentCode],
        enfermedades: selectedList,
      },
    });
  };
  const handleRasgoChange = (event, rasgoName, parentCode) => {
    setParentsData({
      ...parentsData,
      [parentCode]: {
        ...parentsData[parentCode],
        rasgos: {
          ...parentsData[parentCode].rasgos,
          [rasgoName]: event.target.value,
        },
      },
    });
  };
  return (
    <>
      <div className="w-screen">
        <div className="flex flex-row items-center justify-center">
          <div class="basis-1/2 relative md:flex items-center justify-center hidden">
            <div className=" ">
              <img
                src={"PATITO.svg"}
                alt="Two snowmen"
                width="130"
                height="90"
              />
            </div>
          </div>
          <div class="md:basis-1/2">
            <div className="scrollbar-trigger flex h-full w-full text-white">
              <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
                <Accordion.Root
                  className="AccordionRoot"
                  type="single"
                  collapsible
                >
                  <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-1">
                    {parents.map((parent, index) => (
                      <div
                        className={
                          index % 2 === 0
                            ? "my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 w-1/2 xl:my-1 xl:px-1 xl:w-1/2"
                            : "my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 w-1/2 xl:my-1 xl:px-1 xl:w-1/2"
                        }
                      >
                        <Accordion.Item
                          className=""
                          value={parent.code}
                          key={parent.code}
                        >
                          <AccordionTrigger>{parent.name}</AccordionTrigger>
                          <AccordionContent
                            handleRemove={onRemove}
                            handleSelect={onSelect}
                            parentCode={parent.code}
                            handleRasgo={handleRasgoChange}
                          ></AccordionContent>
                        </Accordion.Item>
                      </div>
                    ))}
                  </div>
                </Accordion.Root>
              </nav>
            </div>
          </div>
        </div>
        <button onClick={handlePreviousStep}>prev</button>
        <button onClick={handleNextStep}>sig</button>
      </div>
    </>
  );
}
const EggArrow = React.forwardRef(({ active }, ref = { forwardedRef }) => (
  <div className="w-4 h-4">
    <img
      className={active ? "transform rotate-180" : "transform rotate-0"}
      src={"ICONO FLECHA.svg"}
      alt="Two snowmen"
      width="10"
      height="10"
    />
  </div>
));
EggArrow.displayName = "eggArrow";

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className="flex font-bold	 py-2 px-3 w-full items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 cursor-pointer text-sm"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <EggArrow active={false} />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  (
    {
      children,
      className,
      handleSelect,
      parentCode,
      handleRemove,
      handleRasgo,
      ...props
    },
    forwardedRef
  ) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
        <div className="mb-3">Enfermedades</div>
        <Multiselect
          options={enfermedades}
          isObject={false}
          onRemove={(selectedList) => handleRemove(selectedList, parentCode)}
          onSelect={(selectedList) => handleSelect(selectedList, parentCode)}
        />
      </div>

      <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
        <div className="mb-3">Rasgos</div>
        {rasgos.map((rasgo) => (
          <div
            key={rasgo.name}
            className=" mb-5  px-3 items-center gap-3 rounded-md flex text-sm"
          >
            <div className="mb-3">{rasgo.name}</div>
            <select
              onChange={(event) => handleRasgo(event, rasgo.name, parentCode)}
            >
              {rasgo.values.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
        <div className="mb-3">Altura</div>
        <input type="number" min={1.2} max={3.0}></input>
      </div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
