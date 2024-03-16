'use client'
import Image from "next/image";
import EggAnimation from "./components/egg";
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const props = useSpring({ opacity: 1 });

  return <div>
      <animated.div style={props}>
        <a > <EggAnimation/></a>
   
    </animated.div>
  </div>;
}

