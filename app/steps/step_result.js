import React, { useState, useEffect } from "react";
import EggAnimation from "./../components/egg";
import { useForm } from "../hooks/use-form";

export  function StepResult() {
    const { parentsData, setParentsData } = useForm();
    const [response, setResponse] = useState(null);

  const [IsLoading, setIsLoading] = useState(true);
  const selectedModel = {
    name: "Default (GPT-3.5)",
    id: "gpt-3.5-turbo",
    available: true,
  };
 

  useEffect(() => {
   
const fetchData = async () => {
    try {
        console.log('hola');
      const response = await fetch(`/api/openai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [ { content: `tengo estos rasgos de parientes ${parentsData} 
          puedes darme las caracteristicas fisicas y predisposion a enfermedades para un futuro hijo con este formato en porcentajes los rasgos y las posibles enfermedades con una pequena explicacion y recomendaciones?
          
          es importantisimos que me arrojes solo el json nada de informacion adicional`, role: "user" }],
          model: selectedModel,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        
        setResponse(data.message);

      } else {
        console.error(response);
       
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };
  fetchData();
  }, [parentsData]);


  return (
    <div>
      <div className="flex flex-1 flex-col">
        {IsLoading == true ? (
          <div>
            loading{" "}
            <div>
              <a >
                {" sadsadsasda"}
                <EggAnimation />
              </a>
            </div>
          </div>
        ) : response}
      </div>
    </div>
  );
}
