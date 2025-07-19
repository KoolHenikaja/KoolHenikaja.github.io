// src/components/VantaBackground.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xffd700,
          backgroundColor: 0x0a0a0a,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 15.0,
          showDots: true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
