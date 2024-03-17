
export const fetchData = async (
    parentsData,
    selectedModel,
    setResponse,
    setIsLoading
  ) => {
     
const prompt =`
juguemos a que eres un asistente de genetica y tengo estos rasgos de parientes ${parentsData.toString()} 
puedes darme las caracteristicas fisicas y predisposion a enfermedades para un futuro hijo con este formato en porcentajes los rasgos y las posibles enfermedades con una pequena explicacion y recomendaciones?
{
"futuro_hijo": {
    "rasgos": {
        "ojos": {
            "verdes": number,
            "marron": number
        },
        "altura": "{number}m",
            "piel": {
            "clara": number,
            "morena": number
        },
        "cabello": {
            "negro": number,
        },
    },
"predisposicion_enfermedades": {
    "diabetes": {
        "probabilidad": number,
        "explicacion": string,
        "recomendaciones": string
    },
}

es importantisimos que me arrojes solo el json nada de informacion adicional

`;

  
    let formatoCorrecto = false;
    while (!formatoCorrecto) {
      try {
        console.log("hola");
        const response = await fetch(`/api/openai`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                content: prompt,
                role: "user",
              },
            ],
            model: selectedModel,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          formatoCorrecto = validarFormatoResponse(data.message);
          if (formatoCorrecto) {
            setResponse(JSON.parse(data.message));
          }
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    setIsLoading(false);
  };
  

function validarFormatoResponse(responseString) {
    try {
      // Validar la estructura del objeto 'futuro_hijo'
        const response = JSON.parse(responseString);
        if (typeof response.futuro_hijo !== 'object') return false;
        if (typeof response.futuro_hijo.rasgos !== 'object') return false;  
      return true;
    } catch (error) {
      // Si hay algún error en la validación, asumir que el formato no es correcto
      return false;
    }
  }
  

  