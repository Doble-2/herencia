'use client'
import React,{useState} from "react";
import { MdLogout } from "react-icons/md";
import * as Accordion from "@radix-ui/react-accordion";
//import { ChevronDownIcon } from "@radix-ui/react-icons";
import Multiselect from "multiselect-react-dropdown";
import { useFormStep } from "../hooks/use-form-step";

const parents = [
    {
      name: "Abuelo Paterno",
      code: "abuelo_paterno",
    },
    {
      name: "Abuela Paterna",
      code: "abuela_paterna",
    },
    {
      name: "Abuelo Materno",
      code: "abuelo_materno",
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
    
  const { handleNextStep, handlePreviousStep } = useFormStep()

  /*var [parientes, setParientes] = useState({});

  const onSelect = (selectedList, selectedItem, parentCode) => {
    setParientes({
      ...parientes,
      [parentCode]: {
        ...parientes[parentCode],
        enfermedades: selectedList,
      },
    });
    console.log(parientes);
  };

  const onRemove = (selectedList, removedItem, parentCode) => {
    setParientes({
      ...parientes,
      [parentCode]: {
        ...parientes[parentCode],
        enfermedades: selectedList,
      },
    });*
  };*/

  
  return (
    <div className="scrollbar-trigger flex h-full w-full bg-ownCreme border-white/20">
      <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {parents.map((parent) => (
            <Accordion.Item
              className="AccordionItem"
              value={parent.code}
              key={parent.code}
            >
              <AccordionTrigger>{parent.name}</AccordionTrigger>
              <AccordionContent parent={parent} >
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </nav>
      <button onClick={handlePreviousStep}>prev</button>
    <button onClick={handleNextStep}>sig</button>
    </div>
  );

  


};


const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header>
        <Accordion.Trigger
          className="flex py-2 px-3 w-full items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 cursor-pointer text-sm"
          {...props}
          ref={forwardedRef}
        >
          {children}
          <MdLogout className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );
  AccordionTrigger.displayName = "AccordionTrigger";
  
  const AccordionContent = React.forwardRef(
    ({ children, className,parent, ...props }, forwardedRef) => (
      <Accordion.Content {...props} ref={forwardedRef}>
        <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
          <div className="mb-3">Enfermedades</div>
          <Multiselect
            options={enfermedades}
            isObject={false}
            //selectedValues={parent.code in parientes ? parientes[parent.code].enfermedades : []}
          
           /* onSelect={(selectedList, selectedItem) =>
              onSelect(selectedList, selectedItem, parent.code)
            }
            onRemove={(selectedList, removedItem) =>
              onRemove(selectedList, removedItem, parent.code)
            }*/
          />
        </div>
  
        <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
          <div className="mb-3">Rasgos</div>
          {rasgos.map((rasgo) => (
            <div key={rasgo.name} className=" mb-5  px-3 items-center gap-3 rounded-md flex text-sm">
              <div className="mb-3">{rasgo.name}</div>
              <select>
                {rasgo.values.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </Accordion.Content>
    )
  );
  AccordionContent.displayName = "AccordionContent";