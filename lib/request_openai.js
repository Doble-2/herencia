
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

debes tomar en cuenta que  "Diabetes" /*1 padre con diabetes 40%< Ambos padres con diabetes 70%
La diabetes eleva su azúcar en la sangre a un nivel más alto de lo normal.
 Después de muchos años, mucha azúcar en la sangre puede causar problemas en su cuerpo.
  Puede dañar sus ojos, riñones, nervios, piel, corazón y vasos sanguíneos.
  Tratamiento
  1. Bajar el exceso de peso
  2. ⁠Haz más actividad física
  3. ⁠Consume alimentos vegetales saludables.
  4. Consume grasas saludables
  5. ⁠Omite las dietas relámpago y toma decisiones más saludables*/,
"Hipertensión",/* Es probable que si alguno de tus padres sufria hipertension se tiene riesgo de sufrir hipertencion
pero se puede reducir posibilidades de reducirlas si: Reducir el consumo de la sal.
Mantener una alimentación sana, rica en frutas y verduras.
Mantener un peso saludable (evitar el sobrepeso y la obesidad).
Mantener una buena hidratación.
Practicar actividad física regularmente.
No fumar.
Evitar consumir bebidas alcohólicas en exceso.
Dormir de 6 a 8 horas diarias.
Consumir regularmente la medicación si está indicado.*/,
"Fibrosis quística" /* Es una enfermedad que provoca la acumulación de moco pegajoso en los pulmones, el tubo digestivo 
y otras areas del cuerpo.Es uno de las enfermedade mas comunes en niños y adultos jovenes. Es una enfermedad que 
potencialmente puede ser peligrosa.
Los síntomas mas notables son: Esterelidad (en hombres), Inflamacion repetitiva del páncreas (pancrattis) ,
sintomas respiratorios, dedos malformados
Tratamientos: Antibioticos,medicamentos inhalados, vacunas antigripal, Actividades y ejercicios para mejorar
la respiración y una dieta especial y rica en proteínas*/ 
,
"Enfermedades de Huntington"/* a enfermedad de Huntington es una enfermedad hereditaria que provoca el desgaste de algunas células nerviosas del cerebro.
 Las personas nacen con el gen defectuoso pero los síntomas no aparecen hasta después de los 30 o 40 años. 
 Los síntomas iniciales de esta enfermedad pueden incluir movimientos descontrolados, torpeza y problemas de equilibrio. 
 Más adelante, puede impedir caminar, hablar y tragar. Conjunto de enfermedades genéticas que ocasionan debilidad y pérdida progresiva de la masa muscular.
Las distrofias musculares son degeneraciones de los músculos ocasionadas por genes anormales (mutaciones). La mayoría de las veces aparecen en la niñez. */ ,
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
En otros casos por tomar medicamentos*/

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
  

  