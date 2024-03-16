import React from "react";

import { MdLogout } from "react-icons/md";
import * as Accordion from "@radix-ui/react-accordion";
//import { ChevronDownIcon } from "@radix-ui/react-icons";
import Multiselect from "multiselect-react-dropdown";

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

const rasgos = {
  "Color de ojos": ["Azul", "Verde", " Café", "Negro"],

  Cabello: ["Lacio", "Ondulado", "Rizado"],
};

const Sidebar = () => {
  return (
    <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
      <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {parents.map((parent) => (
            <Accordion.Item className="AccordionItem" value={parent.code} key={parent.code}>
              <AccordionTrigger>{parent.name}</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </nav>
    </div>
  );
};
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <MdLogout className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200cursor-pointer text-sm">
        <Multiselect
          options={enfermedades} // Options to display in the dropdown
          isObject={false}
      
         // onSelect={this.onSelect} // Function will trigger on select event
         // onRemove={this.onRemove} // Function will trigger on remove event
         // Property name to display in the dropdown options
        />
      </div>
    </Accordion.Content>
  )
);
/*onSelect(selectedList, selectedItem) {
  print(selectedItem);
};

onRemove(selectedList, removedItem) {
  print(removedItem);
};*/
export default Sidebar;
