import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);
  const particlesOptions = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          area: 1500, // changed to "area" to match tsparticles config
        },
      },
      links: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 1,
        },
      },
    },
    detectRetina: true,
  };
  return init ? (
    <Particles id="tsparticles" options={particlesOptions} />
  ) : null;
}

export default Particle;
