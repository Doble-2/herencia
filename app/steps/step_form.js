"use client";
import React, { useState, useEffect } from "react";
import { MdLogout } from "react-icons/md";
import * as Accordion from "@radix-ui/react-accordion";
//import { ChevronDownIcon } from "@radix-ui/react-icons";
import Multiselect from "multiselect-react-dropdown";
import { useFormStep } from "../hooks/use-form-step";
import Image from "next/image";
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
  "Diabetes" /*1 padre con diabetes 40%< Ambos padres con diabetes 70%
  La diabetes eleva su azúcar en la sangre a un nivel más alto de lo normal.
   Después de muchos años, mucha azúcar en la sangre puede causar problemas en su cuerpo.
    Puede dañar sus ojos, riñones, nervios, piel, corazón y vasos sanguíneos.
    Tratamiento
    1. Bajar el exceso de peso
    2. ⁠Haz más actividad física
    3. ⁠Consume alimentos vegetales saludables.
    4. Consume grasas saludables
    5. ⁠Omite las dietas relámpago y toma decisiones más saludables*/,
  "Hipertensión" /* Es probable que si alguno de tus padres sufria hipertension se tiene riesgo de sufrir hipertencion
  pero se puede reducir posibilidades de reducirlas si: Reducir el consumo de la sal.
  Mantener una alimentación sana, rica en frutas y verduras.
  Mantener un peso saludable (evitar el sobrepeso y la obesidad).
  Mantener una buena hidratación.
  Practicar actividad física regularmente.
  No fumar.
  Evitar consumir bebidas alcohólicas en exceso.
  Dormir de 6 a 8 horas diarias.
  Consumir regularmente la medicación si está indicado.*/,
  ,
  "Fibrosis quística" /* Es una enfermedad que provoca la acumulación de moco pegajoso en los pulmones, el tubo digestivo 
  y otras areas del cuerpo.Es uno de las enfermedade mas comunes en niños y adultos jovenes. Es una enfermedad que 
  potencialmente puede ser peligrosa.
  Los síntomas mas notables son: Esterelidad (en hombres), Inflamacion repetitiva del páncreas (pancrattis) ,
  sintomas respiratorios, dedos malformados
  Tratamientos: Antibioticos,medicamentos inhalados, vacunas antigripal, Actividades y ejercicios para mejorar
  la respiración y una dieta especial y rica en proteínas*/,
  "Enfermedades de Huntington" /* a enfermedad de Huntington es una enfermedad hereditaria que provoca el desgaste de algunas células nerviosas del cerebro.
   Las personas nacen con el gen defectuoso pero los síntomas no aparecen hasta después de los 30 o 40 años. 
   Los síntomas iniciales de esta enfermedad pueden incluir movimientos descontrolados, torpeza y problemas de equilibrio. 
   Más adelante, puede impedir caminar, hablar y tragar. Conjunto de enfermedades genéticas que ocasionan debilidad y pérdida progresiva de la masa muscular.
  Las distrofias musculares son degeneraciones de los músculos ocasionadas por genes anormales (mutaciones). La mayoría de las veces aparecen en la niñez. */,
  ,
  "Hipercolesterolemia familiar" /* La hipercolesterolemia familiar es un trastorno que se transmite de padres a hijos.
   Esta enfermedad provoca que el nivel de colesterol LDL (malo) sea muy alto.
   La afección empieza al nacer y puede causar ataques cardíacos a temprana edad.
   Es provocada por el cromosoma 19.
   El defecto hace que el cuerpo sea incapaz de eliminar la lipoproteína de baja densidad (colesterol LDL o malo) de la sangre.
   Esto provoca un nivel alto de colesterol LDL en la sangre. 
   Esto lo hace más propenso a presentar estrechamiento de las arterias a raíz de ateroesclerosis a temprana edad.
    La afección se hereda típicamente de forma autosómica dominante.
   Esto significa que solo se necesita recibir un gen anormal de uno de los padres para heredar la enfermedad.
   En casos excepcionales, un niño puede heredar el gen de ambos padres. 
   Cuando esto ocurre, el incremento en el nivel de colesterol es mucho más grave. 
   El riesgo de cardiopatía y ataques cardíacos es alto incluso en la niñez.
   Tratamiento
   El primer paso es cambiar lo que come. 
   La mayoría de las veces, recomendaría que usted pruebe esto durante varios meses antes de recetarle medicamentos. 
   Los cambios en la dieta incluyen la reducción en la cantidad de grasa que come,
    de manera que sea menos del 30% de las calorías totales. Si usted tiene sobrepeso, bajar de peso es una gran ayuda.

  Estas son algunas formas de reducir la grasa saturada de la dieta:

  Coma menos carne de res, pollo, cerdo y cordero
  Reemplace los productos lácteos ricos en grasa con productos bajos en grasa
  Elimine las grasas trans
  En otros casos por tomar medicamentos*/,
];

const rasgos = [
  { name: "Color de ojos", values: ["Zafiro", "Esmeralda", "Avellana"] },

  { name: "Cabello", values: ["Lacio", "Ondulado", "Rizado"] },

  { name: "Color de piel", values: ["Blanca", "Trigueña", "Morena", "Negra"] },
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

  const handleHeightChange = (height, parentCode) => {
    setParentsData({
      ...parentsData,
      [parentCode]: {
        ...parentsData[parentCode],
        rasgos: {
          ...parentsData[parentCode].rasgos,
          Altura: height,
        },
      },
    });
  };
  return (
    <>
      <div className="w-screen p-5">
        <div className="flex flex-row items-center justify-center">
          <div class="basis-1/2 relative md:flex items-center justify-center hidden">
            <div className=" ">
              <Image
                src={"PATITO.svg"}
                alt="Two snowmen"
                width="130"
                height="90"
              />
            </div>
          </div>
          <div class="md:basis-2/3">
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
                        key={parent.code}
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
                            handleHeightChange={handleHeightChange}
                            parentsData={parentsData}
                          ></AccordionContent>
                        </Accordion.Item>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                  <button
                    onClick={handleNextStep}
                    class="bg-ownOrange mx-5 font-bold py-2 px-4 rounded"
                  >
                    Completar formulario
                  </button>
               
                  </div>
                </Accordion.Root>
              </nav>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
const EggArrow = React.forwardRef(({ active }, ref = { forwardedRef }) => (
  <div className="w-4 h-4">
    <Image
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
         style=  {{fontSize: 'large'}}
        className= "flex  font-bold	text-center  py-2 px-3 w-full items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 cursor-pointer text-sm"
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
      handleHeightChange,
      parentsData,
      ...props
    },
    forwardedRef
  ) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="bg-ownCreme max-h-64	rounded-lg p-1 overflow-auto">
        <div className=" mb-5 flex-col md:flex-row px-3 items-center gap-3 rounded-md  text-sm ">
          <div className="mb-3">Enfermedades</div>
          <Multiselect
            className={
              "bg-ownCreme  bg-[#D9D9D9] peer block min-h-[auto] w-full rounded border-0   leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            }
            selectedValues={parentsData[parentCode].enfermedades}
            options={enfermedades}
            isObject={false}
            onRemove={(selectedList) => handleRemove(selectedList, parentCode)}
            onSelect={(selectedList) => handleSelect(selectedList, parentCode)}
          />
        </div>

        <div className=" mb-5  px-3 items-center gap-3 rounded-md  text-sm">
          <div className="mb-3">Caracteristicas</div>
          {rasgos.map((rasgo) => (
            <div
              key={rasgo.name}
              className=" mb-5 flex-col md:flex-row px-3 items-center gap-3 rounded-md flex text-sm"
            >
              <div className="mb-3 ">{rasgo.name}</div>
              <select
                value={
                  parentsData[parentCode].rasgos[rasgo.name] != null
                    ? parentsData[parentCode].rasgos[rasgo.name]
                    : ""
                }
                className={
                  "bg-ownCreme  bg-[#D9D9D9] peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                }
                onChange={(event) => handleRasgo(event, rasgo.name, parentCode)}
              >
                <option hidden value="">
                  Seleccione un {rasgo.name}
                </option>
                {rasgo.values.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <div className=" mb-5  px-3 items-center flex gap-3 rounded-md flex-col md:flex-row text-sm">
            <div className="mb-3">Altura</div>
            <input
              value={
                parentsData[parentCode].rasgos.Altura != null
                  ? parentsData[parentCode].rasgos.Altura
                  : ""
              }
              type="number"
              className="bg-ownCreme  bg-[#D9D9D9] peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              min={1.2}
              max={3.0}
              onChange={(event) =>
                handleHeightChange(event.target.value, parentCode)
              }
            ></input>
          </div>
        </div>
      </div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
