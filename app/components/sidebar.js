
import { MdLogout } from "react-icons/md";
import * as Accordion from "@radix-ui/react-accordion";
//import { ChevronDownIcon } from "@radix-ui/react-icons";
import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";

const Sidebar = () => {
  const [parientes, setParientes] = useState({});

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
    });
  };

  
  return (
    <div className="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
      <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
        <Accordion.Root className="AccordionRoot" type="single" collapsible>
          {parents.map((parent) => (
            <Accordion.Item
              className="AccordionItem"
              value={parent.code}
              key={parent.code}
            >
              <AccordionTrigger>{parent.name}</AccordionTrigger>
              <AccordionContent onRemove={onRemove} onSelect={onSelect} parent={parent} parientes={parientes}>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </nav>
      <button onClick={console.log(parientes)}></button>
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
  ({ children, className, onRemove, onSelect,parent,parientes, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
        <div className="mb-3">Enfermedades</div>
        <Multiselect
          options={enfermedades}
          isObject={false}
          selectedValues={parent.code in parientes ? parientes[parent.code].enfermedades : []}
        
          onSelect={(selectedList, selectedItem) =>
            onSelect(selectedList, selectedItem, parent.code)
          }
          onRemove={(selectedList, removedItem) =>
            onRemove(selectedList, removedItem, parent.code)
          }
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
export default Sidebar;
