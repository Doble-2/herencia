import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import React, { useRef } from "react";
import Lottie from "react-lottie-segments";
import animationData from "../img/eggAnimation.json";

export default function EggAnimation() {
  const animation = useRef(null);
  const [stateEgg, setStateEgg] = useState(1);
  //Initializing the first segment of the animation

  useEffect(() => {
    const timer = setTimeout(() => {
      //setStateEgg(2);
     // setTimeout(() => { setStateEgg(3)}, 1000);
    }, 2000); // Aquí puedes cambiar el tiempo de espera
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Lottie
        options={{
          loop: stateEgg==1 ? true : false,
          autoplay:  stateEgg ==1? true : false,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={250}
        ref={animation}
        width={250}
        playSegments={
          stateEgg ==1
            ? {
                segments: [0, 30],
                forceFlag: true,
              }
            :stateEgg ==2? {
                segments: [30, 70],
              }:{
                segments: [70, 80],
              }
        }
      />
    </div>
  );
}
